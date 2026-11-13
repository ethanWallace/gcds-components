// customElementInterop.js
// Shared JS interop helper used by generated Blazor component wrappers
// to bridge custom element events back into .NET via JSInvokable methods.

window.customElementInterop = {
  _listeners: new WeakMap(),

  bindEvents(element, dotNetRef, eventNames) {
    const handlers = {};

    for (const eventName of eventNames) {
      const handler = (evt) => {
        const detail = evt.detail ?? null;
        const methodName = 'Handle' + eventName
          .split('-')
          .map((s) => s[0].toUpperCase() + s.slice(1))
          .join('');

        dotNetRef.invokeMethodAsync(methodName, {
          type: evt.type,
          detail,
        });
      };

      element.addEventListener(eventName, handler);
      handlers[eventName] = handler;
    }

    this._listeners.set(element, handlers);
  },

  unbindEvents(element) {
    const handlers = this._listeners.get(element);
    if (!handlers) return;

    for (const [eventName, handler] of Object.entries(handlers)) {
      element.removeEventListener(eventName, handler);
    }

    this._listeners.delete(element);
  },

  invokeMethod(element, methodName, args) {
    return element[methodName](...(args ?? []));
  },

  syncProperty(element, propertyName, value) {
    if (element[propertyName] !== value) element[propertyName] = value;
  },
};
