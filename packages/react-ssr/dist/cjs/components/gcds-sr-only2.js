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
var gcds_sr_only2_exports = {};
__export(gcds_sr_only2_exports, {
  G: () => GcdsSrOnly,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_sr_only2_exports);
var import_stencil = require("../lib/stencil");
const gcdsSrOnlyCss = "@layer reset, default;@layer reset{:host slot{display:initial}}@layer default{:host{display:inline-block;height:0;margin:0;overflow:hidden;width:0}}";
const GcdsSrOnlyStyle0 = gcdsSrOnlyCss;
const GcdsSrOnly = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsSrOnly2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.tag = "p";
  }
  validateTag(newValue) {
    const values = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
    if (!values.includes(newValue)) {
      this.tag = "p";
    }
  }
  componentWillLoad() {
    this.validateTag(this.tag);
  }
  render() {
    const Tag = this.tag;
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)(Tag, null, (0, import_stencil.h)("slot", null)));
  }
  static get watchers() {
    return {
      "tag": ["validateTag"]
    };
  }
  static get style() {
    return GcdsSrOnlyStyle0;
  }
}, [1, "gcds-sr-only", {
  "tag": [1025]
}, void 0, {
  "tag": ["validateTag"]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-sr-only"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-sr-only":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsSrOnly);
        }
        break;
    }
  });
}
