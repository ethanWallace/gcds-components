import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-radio-group.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-radio-group')) {
  defineCustomElement();
}

const customEvents = ['gcdsChange', 'gcdsFocus', 'gcdsBlur'];
const GcdsRadioGroup = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-radio-group", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-radio-group', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-radio-group', { ...nativeProps, ref }, children);
});

export { GcdsRadioGroup };
