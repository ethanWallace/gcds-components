import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-nav-group.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-nav-group')) {
  defineCustomElement();
}

const customEvents = ['gcdsClick', 'gcdsFocus', 'gcdsBlur'];
const GcdsNavGroup = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-nav-group", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-nav-group', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-nav-group', { ...nativeProps, ref }, children);
});

export { GcdsNavGroup };
