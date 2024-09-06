import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-nav-link.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-nav-link')) {
  defineCustomElement();
}

const customEvents = ['gcdsClick', 'gcdsFocus', 'gcdsBlur'];
const GcdsNavLink = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-nav-link", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-nav-link', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-nav-link', { ...nativeProps, ref }, children);
});

export { GcdsNavLink };
