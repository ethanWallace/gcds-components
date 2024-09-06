import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-footer.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-footer')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsFooter = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-footer", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-footer', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-footer', { ...nativeProps, ref }, children);
});

export { GcdsFooter };
