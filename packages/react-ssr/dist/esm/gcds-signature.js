import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-signature.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-signature')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsSignature = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-signature", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-signature', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-signature', { ...nativeProps, ref }, children);
});

export { GcdsSignature };
