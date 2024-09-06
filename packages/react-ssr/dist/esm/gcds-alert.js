import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-alert.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-alert')) {
  defineCustomElement();
}

const customEvents = ['gcdsDismiss'];
const GcdsAlert = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-alert", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-alert', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-alert', { ...nativeProps, ref }, children);
});

export { GcdsAlert };
