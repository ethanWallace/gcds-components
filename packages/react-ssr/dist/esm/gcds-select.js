import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-select.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-select')) {
  defineCustomElement();
}

const customEvents = ['gcdsChange', 'gcdsInput', 'gcdsFocus', 'gcdsBlur', 'gcdsError', 'gcdsValid'];
const GcdsSelect = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-select", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-select', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-select', { ...nativeProps, ref }, children);
});

export { GcdsSelect };
