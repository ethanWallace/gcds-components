import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-container.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-container')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsContainer = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-container", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-container', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-container', { ...nativeProps, ref }, children);
});

export { GcdsContainer };
