import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-textarea.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-textarea')) {
  defineCustomElement();
}

const customEvents = ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsError', 'gcdsValid'];
const GcdsTextarea = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-textarea", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-textarea', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-textarea', { ...nativeProps, ref }, children);
});

export { GcdsTextarea };
