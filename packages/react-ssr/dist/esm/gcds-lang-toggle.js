import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-lang-toggle.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-lang-toggle')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsLangToggle = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-lang-toggle", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-lang-toggle', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-lang-toggle', { ...nativeProps, ref }, children);
});

export { GcdsLangToggle };
