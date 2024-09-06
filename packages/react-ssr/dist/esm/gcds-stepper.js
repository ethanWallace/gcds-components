import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-stepper.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-stepper')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsStepper = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-stepper", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-stepper', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-stepper', { ...nativeProps, ref }, children);
});

export { GcdsStepper };
