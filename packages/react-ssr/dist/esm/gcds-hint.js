import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-hint.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-hint')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsHint = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-hint", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-hint', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-hint', { ...nativeProps, ref }, children);
});

export { GcdsHint };
