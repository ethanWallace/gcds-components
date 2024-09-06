import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-file-uploader.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-file-uploader')) {
  defineCustomElement();
}

const customEvents = ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsRemoveFile', 'gcdsError', 'gcdsValid'];
const GcdsFileUploader = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-file-uploader", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-file-uploader', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-file-uploader', { ...nativeProps, ref }, children);
});

export { GcdsFileUploader };
