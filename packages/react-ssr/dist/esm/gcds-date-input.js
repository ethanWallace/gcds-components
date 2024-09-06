import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-date-input.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-date-input')) {
  defineCustomElement();
}

const customEvents = ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid'];
const GcdsDateInput = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-date-input", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-date-input', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-date-input', { ...nativeProps, ref }, children);
});

export { GcdsDateInput };
