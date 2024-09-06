import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-fieldset.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-fieldset')) {
  defineCustomElement();
}

const customEvents = ['gcdsGroupError', 'gcdsGroupErrorClear', 'gcdsError', 'gcdsValid'];
const GcdsFieldset = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-fieldset", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-fieldset', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-fieldset', { ...nativeProps, ref }, children);
});

export { GcdsFieldset };
