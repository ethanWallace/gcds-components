import React, { useImperativeHandle, useRef } from 'react';
import { defineCustomElement } from './components/gcds-topic-menu.js';
import { omitEventCallbacks, useEventListeners, gcdsAttributeGenerator } from './lib/utils.js';
import { toNativeProps } from './lib/native-props';

if(typeof customElements !== 'undefined' && !customElements.get('gcds-topic-menu')) {
  defineCustomElement();
}

const customEvents = [];
const GcdsTopicMenu = React.forwardRef(({ children = [], ...props }, ref) => {
  let nativeProps = toNativeProps(omitEventCallbacks(customEvents, props));

  nativeProps = gcdsAttributeGenerator("gcds-topic-menu", nativeProps);

  if (typeof window !== 'undefined') {
    const innerRef = useRef();
    useImperativeHandle(ref, () => innerRef.current);
    useEventListeners(innerRef, customEvents, props);
    return React.createElement('gcds-topic-menu', { ...nativeProps, ref: innerRef }, children);
  }

  return React.createElement('gcds-topic-menu', { ...nativeProps, ref }, children);
});

export { GcdsTopicMenu };
