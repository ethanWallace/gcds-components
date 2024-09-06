import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-header.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-header')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsHeader = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-header", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-header', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-header', { ...nativeProps, ref }, children);
});

export { GcdsHeader };
