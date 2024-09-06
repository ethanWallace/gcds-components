import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-card.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-card')) {
  defineCustomElement();
}

const customEvents = ['gcdsFocus', 'gcdsBlur', 'gcdsClick'];
const GcdsCard = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-card", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-card', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-card', { ...nativeProps, ref }, children);
});

export { GcdsCard };
