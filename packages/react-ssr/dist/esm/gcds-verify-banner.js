import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-verify-banner.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-verify-banner')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsVerifyBanner = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-verify-banner", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-verify-banner', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-verify-banner', { ...nativeProps, ref }, children);
});

export { GcdsVerifyBanner };
