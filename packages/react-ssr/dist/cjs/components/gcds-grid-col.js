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
var gcds_grid_col_exports = {};
__export(gcds_grid_col_exports, {
  GcdsGridCol: () => GcdsGridCol2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_grid_col_exports);
var import_stencil = require("../lib/stencil");
const gcdsGridColCss = "@layer reset, default, tablet, desktop;@layer reset{:host{display:block}:host .gcds-grid-col{box-sizing:border-box;display:block;margin:0;padding:0}}@layer default{:host{grid-column:span var(--gcds-grid-columns-default-base) /span var(--gcds-grid-columns-default-base)}:host .gcds-grid-col{height:100%;width:100%}}@layer tablet{@media screen and (width >= 48em){:host{grid-column:span var(--gcds-grid-col-tablet,var(--gcds-grid-columns-default-tablet)) /span var(---gcds-grid-col-tablet,var(--gcds-grid-columns-default-tablet))}}}@layer desktop{@media screen and (width >= 64em){:host{grid-column:span var(--gcds-grid-col-desktop,var(--gcds-grid-columns-default-desktop)) /span var(--gcds-grid-col-desktop,var(--gcds-grid-columns-default-desktop))}}}";
const GcdsGridColStyle0 = gcdsGridColCss;
const GcdsGridCol$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsGridCol extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.tag = "div";
    this.tablet = 6;
    this.desktop = void 0;
  }
  validateTablet(newValue) {
    const values = [1, 2, 3, 4, 5, 6];
    if (!values.includes(newValue)) {
      this.tablet = 6;
    }
  }
  validateDesktop(newValue) {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    if (this.desktop && !values.includes(newValue)) {
      this.desktop = 12;
    }
  }
  componentWillLoad() {
    this.validateTablet(this.tablet);
    this.validateDesktop(this.desktop);
  }
  render() {
    const { desktop, tablet, tag } = this;
    const Tag = tag;
    function handleColSize() {
      const colSize = {};
      if (tablet) {
        colSize["--gcds-grid-col-tablet"] = tablet;
      }
      if (desktop) {
        colSize["--gcds-grid-col-desktop"] = desktop;
      } else if (tablet) {
        colSize["--gcds-grid-col-desktop"] = tablet * 2;
      }
      return colSize;
    }
    return (0, import_stencil.h)(import_stencil.Host, { style: handleColSize() }, (0, import_stencil.h)(Tag, { class: "gcds-grid-col" }, (0, import_stencil.h)("slot", null)));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "tablet": ["validateTablet"],
      "desktop": ["validateDesktop"]
    };
  }
  static get style() {
    return GcdsGridColStyle0;
  }
}, [1, "gcds-grid-col", {
  "tag": [1],
  "tablet": [1026],
  "desktop": [1026]
}, void 0, {
  "tablet": ["validateTablet"],
  "desktop": ["validateDesktop"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-grid-col"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-grid-col":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsGridCol$1);
        }
        break;
    }
  });
}
const GcdsGridCol2 = GcdsGridCol$1;
const defineCustomElement = defineCustomElement$1;
