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
var gcds_grid2_exports = {};
__export(gcds_grid2_exports, {
  G: () => GcdsGrid,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_grid2_exports);
var import_stencil = require("../lib/stencil");
var import_gcds_container2 = require("./gcds-container2.js");
const gcdsGridCss = "@layer reset, default, display, align, justify, place, equalHeight, tablet, desktop;@layer reset{:host{display:block}:host .gcds-grid{box-sizing:border-box;margin:0;padding:0}}@layer default{:host .gcds-grid{gap:var(--gcds-grid-gap);grid-template-columns:var(--gcds-grid-columns,1fr)}}@layer display{:host .gcds-grid.display-grid-with-cols{display:grid;grid-template-columns:1fr}:host .gcds-grid.display-grid{display:grid}:host .gcds-grid.display-inline-grid{display:inline-grid}}@layer align{:host .gcds-grid.align-content-center{align-content:center}:host .gcds-grid.align-content-end{align-content:end}:host .gcds-grid.align-content-space-around{align-content:space-around}:host .gcds-grid.align-content-space-between{align-content:space-between}:host .gcds-grid.align-content-space-evenly{align-content:space-evenly}:host .gcds-grid.align-content-start{align-content:start}:host .gcds-grid.align-content-stretch{align-content:stretch}:host .gcds-grid.align-items-baseline{align-items:baseline}:host .gcds-grid.align-items-center{align-items:center}:host .gcds-grid.align-items-end{align-items:end}:host .gcds-grid.align-items-start{align-items:start}:host .gcds-grid.align-items-stretch{align-items:stretch}}@layer justify{:host .gcds-grid.justify-content-center{justify-content:center}:host .gcds-grid.justify-content-end{justify-content:end}:host .gcds-grid.justify-content-space-around{justify-content:space-around}:host .gcds-grid.justify-content-space-between{justify-content:space-between}:host .gcds-grid.justify-content-space-evenly{justify-content:space-evenly}:host .gcds-grid.justify-content-start{justify-content:start}:host .gcds-grid.justify-content-stretch{justify-content:stretch}:host .gcds-grid.justify-items-center{justify-items:center}:host .gcds-grid.justify-items-end{justify-items:end}:host .gcds-grid.justify-items-start{justify-items:start}:host .gcds-grid.justify-items-stretch{justify-items:stretch}}@layer place{:host .gcds-grid.place-content-center{place-content:center}:host .gcds-grid.place-content-end{place-content:end}:host .gcds-grid.place-content-space-around{place-content:space-around}:host .gcds-grid.place-content-space-between{place-content:space-between}:host .gcds-grid.place-content-space-evenly{place-content:space-evenly}:host .gcds-grid.place-content-start{place-content:start}:host .gcds-grid.place-content-stretch{place-content:stretch}:host .gcds-grid.place-items-center{place-items:center}:host .gcds-grid.place-items-end{place-items:end}:host .gcds-grid.place-items-start{place-items:start}:host .gcds-grid.place-items-stretch{place-items:stretch}}@layer equalHeight{:host .gcds-grid.equal-row-height{align-items:stretch;grid-auto-rows:1fr}}@layer tablet{@media screen and (width >= 48em){:host .gcds-grid{grid-template-columns:var(\n        --gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr)\n      )}:host .gcds-grid.display-grid-with-cols{grid-template-columns:repeat(var(--gcds-grid-columns-default-tablet),minmax(0,1fr))}}}@layer desktop{@media screen and (width >= 64em){:host .gcds-grid{grid-template-columns:var(\n        --gcds-grid-columns-desktop,var(--gcds-grid-columns-tablet,var(--gcds-grid-columns,1fr))\n      )}:host .gcds-grid.display-grid-with-cols{grid-template-columns:repeat(var(--gcds-grid-columns-default-desktop),minmax(0,1fr))}}}";
const GcdsGridStyle0 = gcdsGridCss;
const GcdsGrid = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsGrid2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.columns = void 0;
    this.columnsTablet = void 0;
    this.columnsDesktop = void 0;
    this.container = void 0;
    this.centered = false;
    this.display = "grid";
    this.equalRowHeight = false;
    this.tag = "div";
    this.alignContent = void 0;
    this.justifyContent = void 0;
    this.placeContent = void 0;
    this.alignItems = void 0;
    this.justifyItems = void 0;
    this.placeItems = void 0;
  }
  validateTag(newValue) {
    const values = [
      "article",
      "aside",
      "div",
      "dl",
      "main",
      "nav",
      "ol",
      "section",
      "ul"
    ];
    if (!values.includes(newValue)) {
      this.tag = "div";
    }
  }
  componentWillLoad() {
    this.validateTag(this.tag);
  }
  render() {
    const { alignContent, alignItems, columns, columnsDesktop, columnsTablet, container, centered, display, equalRowHeight, justifyContent, justifyItems, placeContent, placeItems, tag } = this;
    const Tag = tag;
    const classNames = `
      gcds-grid
      ${alignContent ? `align-content-${alignContent}` : ""}
      ${alignItems ? `align-items-${alignItems}` : ""}
      ${(columns || columnsTablet || columnsDesktop) === void 0 ? `display-grid-with-cols` : `display-${display}`}
      ${equalRowHeight ? "equal-row-height" : ""}
      ${justifyContent ? `justify-content-${justifyContent}` : ""}
      ${justifyItems ? `justify-items-${justifyItems}` : ""}
      ${placeContent ? `place-content-${placeContent}` : ""}
      ${placeItems ? `place-items-${placeItems}` : ""}
    `;
    function handleColumns() {
      const responsiveColumns = {};
      if (columns) {
        responsiveColumns["--gcds-grid-columns"] = columns;
      }
      if (columnsTablet) {
        responsiveColumns["--gcds-grid-columns-tablet"] = columnsTablet;
      }
      if (columnsDesktop) {
        responsiveColumns["--gcds-grid-columns-desktop"] = columnsDesktop;
      }
      return responsiveColumns;
    }
    return (0, import_stencil.h)(import_stencil.Host, null, container ? (0, import_stencil.h)("gcds-container", { size: container, centered }, (0, import_stencil.h)(Tag, { class: classNames, style: handleColumns() }, (0, import_stencil.h)("slot", null))) : (0, import_stencil.h)(Tag, { class: classNames, style: handleColumns() }, (0, import_stencil.h)("slot", null)));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "tag": ["validateTag"]
    };
  }
  static get style() {
    return GcdsGridStyle0;
  }
}, [1, "gcds-grid", {
  "columns": [1],
  "columnsTablet": [1, "columns-tablet"],
  "columnsDesktop": [1, "columns-desktop"],
  "container": [1],
  "centered": [4],
  "display": [1],
  "equalRowHeight": [4, "equal-row-height"],
  "tag": [1025],
  "alignContent": [1, "align-content"],
  "justifyContent": [1, "justify-content"],
  "placeContent": [1, "place-content"],
  "alignItems": [1, "align-items"],
  "justifyItems": [1, "justify-items"],
  "placeItems": [1, "place-items"]
}, void 0, {
  "tag": ["validateTag"]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-grid", "gcds-container"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-grid":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsGrid);
        }
        break;
      case "gcds-container":
        if (!customElements.get(tagName)) {
          (0, import_gcds_container2.d)();
        }
        break;
    }
  });
}
