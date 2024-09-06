import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-date-modified.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-date-modified')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsDateModified = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-date-modified", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-date-modified', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-date-modified', { ...nativeProps, ref }, children);
});

export { GcdsDateModified };
