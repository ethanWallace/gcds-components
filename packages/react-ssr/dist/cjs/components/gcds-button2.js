var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var gcds_button2_exports = {};
__export(gcds_button2_exports, {
  G: () => GcdsButton,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_button2_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
const I18N = {
  en: {
    label: "Opens in a new tab."
  },
  fr: {
    label: "S'ouvre dans un nouvel onglet."
  }
};
const gcdsButtonCss = "@layer reset, default, roles, size, disabled, hover, focus, active, mobile;@layer reset{:host{display:inline-block}:host .gcds-button{box-sizing:border-box;cursor:pointer;text-decoration:none}:host slot{display:initial}}@layer default{:host .gcds-button{display:inline-block;font:var(--gcds-button-font);text-align:center;width:var(--gcds-button-width);text-wrap:balance;border:var(--gcds-button-border-width) solid transparent;border-radius:var(--gcds-button-border-radius);padding:var(--gcds-button-padding);transition:all .15s ease-in-out}}@layer roles{:host .gcds-button.button--role-danger{background-color:var(--gcds-button-danger-default-background);color:var(--gcds-button-danger-default-text)}:host .gcds-button.button--role-primary{background-color:var(--gcds-button-primary-default-background);color:var(--gcds-button-primary-default-text)}:host .gcds-button.button--role-secondary{background-color:var(--gcds-button-secondary-default-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-secondary-default-text)}}@layer size{:host .gcds-button.button--small{font:var(--gcds-button-small-font);padding:var(--gcds-button-small-padding)}}@layer disabled{:host .gcds-button[aria-disabled=true]{background-color:var(--gcds-button-shared-disabled-background);border:var(--gcds-button-border-width) solid;color:var(--gcds-button-shared-disabled-text);cursor:not-allowed;pointer-events:none}}@layer hover{@media (hover:hover){:host .gcds-button:hover.button--role-danger{background-color:var(--gcds-button-danger-hover-background)}:host .gcds-button:hover.button--role-primary{background-color:var(--gcds-button-primary-hover-background)}:host .gcds-button:hover.button--role-secondary{background-color:var(--gcds-button-secondary-hover-background)}}}@layer focus{:host .gcds-button:focus{background-color:var(--gcds-button-shared-focus-background);border-color:var(--gcds-button-shared-focus-background);box-shadow:var(--gcds-button-shared-focus-box-shadow);color:var(--gcds-button-shared-focus-text);outline:var(--gcds-button-shared-focus-outline-width) solid var(--gcds-button-shared-focus-background);outline-offset:var(--gcds-button-border-width)}}@layer active{:host .gcds-button:active{background-color:var(--gcds-button-shared-active-background);border-color:var(--gcds-button-shared-active-background)}}@layer mobile{@media screen and (max-width:30rem){:host{display:block}:host .gcds-button{margin:var(--gcds-button-mobile-margin);width:var(--gcds-button-mobile-width)}}}";
const GcdsButtonStyle0 = gcdsButtonCss;
const GcdsButton = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsButton2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsClick = (0, import_stencil.createEvent)(this, "gcdsClick", 7);
    this.gcdsFocus = (0, import_stencil.createEvent)(this, "gcdsFocus", 7);
    this.gcdsBlur = (0, import_stencil.createEvent)(this, "gcdsBlur", 7);
    this.handleClick = (e) => {
      const event = (0, import_utils.e)(e, this.gcdsClick);
      if (event) {
        if (!this.disabled && this.type != "button" && this.type != "link") {
          const form = this.el.closest("form");
          if (form) {
            e.preventDefault();
            const formButton = document.createElement("button");
            formButton.type = this.type;
            if (this.name) {
              formButton.name = this.name;
            }
            formButton.style.display = "none";
            form.appendChild(formButton);
            formButton.click();
            formButton.remove();
          }
        }
        this.inheritedAttributes = (0, import_utils.i)(this.el, this.shadowElement);
      }
    };
    this.type = "button";
    this.buttonRole = "primary";
    this.size = "regular";
    this.buttonId = void 0;
    this.name = void 0;
    this.disabled = void 0;
    this.href = void 0;
    this.rel = void 0;
    this.target = void 0;
    this.download = void 0;
    this.inheritedAttributes = {};
    this.lang = void 0;
  }
  validateType(newValue) {
    const values = ["submit", "reset", "button", "link"];
    if (!values.includes(newValue)) {
      this.type = "button";
    }
  }
  validateButtonRole(newValue) {
    const values = ["primary", "secondary", "danger"];
    if (!values.includes(newValue)) {
      this.buttonRole = "primary";
    }
  }
  validateSize(newValue) {
    const values = ["regular", "small"];
    if (!values.includes(newValue)) {
      this.size = "regular";
    }
  }
  /*
   * Observe lang attribute change
   */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, import_utils.o);
  }
  componentWillLoad() {
    this.validateType(this.type);
    this.validateButtonRole(this.buttonRole);
    this.validateSize(this.size);
    this.inheritedAttributes = (0, import_utils.i)(this.el, this.shadowElement);
    this.lang = (0, import_utils.a)(this.el);
    this.updateLang();
  }
  render() {
    const { type, buttonRole, size, buttonId, disabled, lang, name, href, rel, target, download, inheritedAttributes } = this;
    const Tag = type != "link" ? "button" : "a";
    const attrs = Tag === "button" ? {
      type,
      ariaDisabled: disabled,
      name
    } : {
      href,
      rel,
      target,
      download
    };
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)(Tag, Object.assign({}, attrs, { id: buttonId, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (e) => this.handleClick(e), class: `gcds-button button--role-${buttonRole} button--${size}`, ref: (element) => this.shadowElement = element }, inheritedAttributes, { part: "button" }), (0, import_stencil.h)("slot", null), type === "link" && target === "_blank" ? (0, import_stencil.h)("gcds-icon", { name: "external-link", label: I18N[lang].label, "margin-left": "200" }) : null));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "type": ["validateType"],
      "buttonRole": ["validateButtonRole"],
      "size": ["validateSize"]
    };
  }
  static get style() {
    return GcdsButtonStyle0;
  }
}, [17, "gcds-button", {
  "type": [1025],
  "buttonRole": [1025, "button-role"],
  "size": [1025],
  "buttonId": [1, "button-id"],
  "name": [1],
  "disabled": [4],
  "href": [1],
  "rel": [1],
  "target": [1],
  "download": [1],
  "inheritedAttributes": [32],
  "lang": [32]
}, void 0, {
  "type": ["validateType"],
  "buttonRole": ["validateButtonRole"],
  "size": ["validateSize"]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-button", "gcds-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-button":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsButton);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(tagName)) {
          (0, import_gcds_icon2.d)();
        }
        break;
    }
  });
}
