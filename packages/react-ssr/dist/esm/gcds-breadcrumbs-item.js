import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-breadcrumbs-item.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-breadcrumbs-item')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsBreadcrumbsItem = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-breadcrumbs-item", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-breadcrumbs-item', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-breadcrumbs-item', { ...nativeProps, ref }, children);
});

export { GcdsBreadcrumbsItem };
