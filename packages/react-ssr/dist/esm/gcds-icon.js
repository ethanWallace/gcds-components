import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-icon.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-icon')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsIcon = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-icon", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-icon', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-icon', { ...nativeProps, ref }, children);
});

export { GcdsIcon };
