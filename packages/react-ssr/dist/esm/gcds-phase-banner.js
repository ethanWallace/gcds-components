import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-phase-banner.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-phase-banner')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsPhaseBanner = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-phase-banner", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-phase-banner', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-phase-banner', { ...nativeProps, ref }, children);
});

export { GcdsPhaseBanner };
