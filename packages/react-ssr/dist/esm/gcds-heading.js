import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-heading.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-heading')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsHeading = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-heading", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-heading', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-heading', { ...nativeProps, ref }, children);
});

export { GcdsHeading };
