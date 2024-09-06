import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-side-nav.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-side-nav')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsSideNav = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-side-nav", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-side-nav', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-side-nav', { ...nativeProps, ref }, children);
});

export { GcdsSideNav };
