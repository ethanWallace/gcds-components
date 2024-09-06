import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-details.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-details')) {
  defineCustomElement();
}

const customEvents = ['gcdsFocus', 'gcdsBlur', 'gcdsClick'];
const GcdsDetails = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-details", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-details', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-details', { ...nativeProps, ref }, children);
});

export { GcdsDetails };
