import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-top-nav.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-top-nav')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsTopNav = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-top-nav", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-top-nav', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-top-nav', { ...nativeProps, ref }, children);
});

export { GcdsTopNav };
