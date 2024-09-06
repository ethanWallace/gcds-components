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
var gcds_error_message2_exports = {};
__export(gcds_error_message2_exports, {
  G: () => GcdsErrorMessage,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_error_message2_exports);
var import_stencil = require("../lib/stencil");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_text2 = require("./gcds-text2.js");
const gcdsErrorMessageCss = "@layer reset, default;@layer reset{:host{display:inline-block}:host slot{display:initial}}@layer default{:host .error-message gcds-icon,:host .error-message::part(text){color:var(--gcds-error-message-text-color)}}";
const GcdsErrorMessageStyle0 = gcdsErrorMessageCss;
const GcdsErrorMessage = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsErrorMessage2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.messageId = void 0;
  }
  render() {
    const { messageId } = this;
    return (0, import_stencil.h)(import_stencil.Host, { id: `error-message-${messageId}`, class: "gcds-error-message-wrapper" }, (0, import_stencil.h)("gcds-text", { class: "error-message", role: "alert", "margin-bottom": "300" }, (0, import_stencil.h)("gcds-icon", { name: "triangle-exclamation", "margin-right": "100" }), (0, import_stencil.h)("strong", null, (0, import_stencil.h)("slot", null))));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsErrorMessageStyle0;
  }
}, [1, "gcds-error-message", {
  "messageId": [1, "message-id"]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-error-message", "gcds-icon", "gcds-text"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-error-message":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsErrorMessage);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(tagName)) {
          (0, import_gcds_icon2.d)();
        }
        break;
      case "gcds-text":
        if (!customElements.get(tagName)) {
          (0, import_gcds_text2.d)();
        }
        break;
    }
  });
}
