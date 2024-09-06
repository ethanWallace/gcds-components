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
var gcds_hint2_exports = {};
__export(gcds_hint2_exports, {
  G: () => GcdsHint,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_hint2_exports);
var import_stencil = require("../lib/stencil");
var import_gcds_text2 = require("./gcds-text2.js");
const gcdsHintCss = "@layer reset, default;@layer reset{:host{display:block}:host slot{display:initial}}@layer default{:host .gcds-hint,:host gcds-text::part(text){color:inherit}:host .gcds-hint{margin:var(--gcds-hint-margin)}}";
const GcdsHintStyle0 = gcdsHintCss;
const GcdsHint = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsHint2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.hintId = void 0;
  }
  render() {
    const { hintId } = this;
    return (0, import_stencil.h)(import_stencil.Host, { id: `hint-${hintId}` }, (0, import_stencil.h)("gcds-text", { class: "gcds-hint", "margin-bottom": "0", part: "hint" }, (0, import_stencil.h)("slot", null)));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsHintStyle0;
  }
}, [1, "gcds-hint", {
  "hintId": [1, "hint-id"]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-hint", "gcds-text"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-hint":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsHint);
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
