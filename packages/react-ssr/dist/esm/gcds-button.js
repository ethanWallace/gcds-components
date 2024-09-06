import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-button.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-button')) {
  defineCustomElement();
}

const customEvents = ['gcdsClick', 'gcdsFocus', 'gcdsBlur'];
const GcdsButton = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-button", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-button', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-button', { ...nativeProps, ref }, children);
});

export { GcdsButton };
