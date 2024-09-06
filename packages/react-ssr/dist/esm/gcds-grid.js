import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-grid.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-grid')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsGrid = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-grid", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-grid', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-grid', { ...nativeProps, ref }, children);
});

export { GcdsGrid };
