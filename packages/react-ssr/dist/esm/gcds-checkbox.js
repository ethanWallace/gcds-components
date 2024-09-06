import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-checkbox.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-checkbox')) {
  defineCustomElement();
}

const customEvents = ['gcdsClick', 'gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsError', 'gcdsValid'];
const GcdsCheckbox = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-checkbox", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-checkbox', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-checkbox', { ...nativeProps, ref }, children);
});

export { GcdsCheckbox };
