import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-label.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-label')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsLabel = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-label", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-label', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-label', { ...nativeProps, ref }, children);
});

export { GcdsLabel };
