import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-search.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-search')) {
  defineCustomElement();
}

const customEvents = ['gcdsInput', 'gcdsChange', 'gcdsFocus', 'gcdsBlur', 'gcdsSubmit'];
const GcdsSearch = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-search", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-search', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-search', { ...nativeProps, ref }, children);
});

export { GcdsSearch };
