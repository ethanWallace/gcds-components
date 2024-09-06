import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-text.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-text')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsText = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-text", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-text', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-text', { ...nativeProps, ref }, children);
});

export { GcdsText };
