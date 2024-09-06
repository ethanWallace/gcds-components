import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-breadcrumbs.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-breadcrumbs')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsBreadcrumbs = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-breadcrumbs", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-breadcrumbs', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-breadcrumbs', { ...nativeProps, ref }, children);
});

export { GcdsBreadcrumbs };
