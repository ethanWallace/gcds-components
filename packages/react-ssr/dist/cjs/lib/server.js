var import_linkedom = require("linkedom");
(() => {
  if (typeof window !== "undefined") {
    return;
  }
  const { document, customElements, Event, CustomEvent, DocumentFragment, DOMParser, HTMLElement: LinkedomHTMLElement, HTMLTemplateElement, MutationObserver } = (0, import_linkedom.parseHTML)("...");
  class HTMLElement extends LinkedomHTMLElement {
    static get observedAttributes() {
      return HTMLElement._observedAttributes;
    }
    static set observedAttributes(value) {
      HTMLElement._observedAttributes = value;
    }
  }
  HTMLElement._observedAttributes = [];
  class Storage {
    key() {
    }
    getItem() {
    }
    setItem() {
    }
    removeItem() {
    }
    clear() {
    }
  }
  const localStorage = new Storage();
  class ResizeObserver {
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  }
  class CSSStyleDeclaration {
    getPropertyPriority() {
    }
    getPropertyValue() {
    }
    item() {
    }
    removeProperty() {
    }
    setProperty() {
    }
  }
  Object.assign(globalThis, {
    document,
    customElements,
    Event,
    CustomEvent,
    DocumentFragment,
    DOMParser,
    HTMLElement,
    HTMLTemplateElement,
    MutationObserver,
    localStorage,
    ResizeObserver,
    CSSStyleDeclaration,
    getComputedStyle: function getComputedStyle() {
      return new CSSStyleDeclaration();
    },
    cancelAnimationFrame: function cancelAnimationFrame() {
    },
    addEventListener: function addEventListener() {
    },
    removeEventListener: function removeEventListener() {
    },
    requestAnimationFrame: function requestAnimationFrame(callback) {
      callback();
    }
  });
})();
