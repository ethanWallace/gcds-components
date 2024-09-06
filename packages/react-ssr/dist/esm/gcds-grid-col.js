import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-grid-col.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-grid-col')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsGridCol = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-grid-col", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-grid-col', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-grid-col', { ...nativeProps, ref }, children);
});

export { GcdsGridCol };
