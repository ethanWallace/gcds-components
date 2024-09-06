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
var gcds_details_exports = {};
__export(gcds_details_exports, {
  GcdsDetails: () => GcdsDetails2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_details_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
const gcdsDetailsCss = '@layer reset, default, hover, focus;@layer reset{:host{display:block}:host .details__summary{background-color:transparent;border-color:transparent;cursor:pointer;display:block}:host .details__panel slot{display:initial}:host .details__panel ::slotted(:first-child){margin-block-start:0}:host .details__panel ::slotted(:last-child){margin-block-end:0}:host .details__panel ::slotted(ol),:host .details__panel ::slotted(ul){padding:0}}@layer default{:host .gcds-details .details__summary{color:var(--gcds-details-default-text);font:var(--gcds-details-font);padding:var(--gcds-details-summary-padding);position:relative;text-align:left;text-decoration-color:currentColor;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:var(\n        --gcds-details-default-decoration-thickness\n      );text-underline-offset:.2em;transition:background-color .15s ease-in-out,color .15s ease-in-out}:host .gcds-details .details__summary:before{border-block-end:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-block-start:var(--gcds-details-summary-arrow-border-top-bottom) solid transparent;border-inline-start:var(--gcds-details-summary-arrow-border-left) solid currentColor;content:"";height:0;left:var(--gcds-details-summary-arrow-left);position:absolute;top:var(--gcds-details-summary-arrow-top);transition:transform .15s ease-in-out;width:0}:host .gcds-details .details__summary[aria-expanded=false]+.details__panel{display:none}:host .gcds-details .details__summary[aria-expanded=true]:before{transform:rotate(90deg)}:host .gcds-details .details__panel{border-inline-start:var(--gcds-details-panel-border-width) solid var(--gcds-details-panel-border-color);margin:var(--gcds-details-panel-margin);padding:var(--gcds-details-panel-padding)}:host .gcds-details .details__panel ::slotted(*){font:var(--gcds-details-font)}:host .gcds-details .details__panel ::slotted(:not(:last-child)){margin:0 0 var(--gcds-details-panel-slotted-margin)!important}:host .gcds-details .details__panel ::slotted(ol),:host .gcds-details .details__panel ::slotted(ul){margin-inline-start:var(\n          --gcds-details-panel-slotted-margin\n        )!important}:host .gcds-details .details__panel ::slotted(small){font:var(--gcds-details-font-small)}}@layer hover{@media (hover:hover){:host .gcds-details .details__summary:hover:not(:focus){color:var(--gcds-details-hover-text);text-decoration-thickness:var(--gcds-details-hover-decoration-thickness);text-underline-offset:.2em}:host .gcds-details .details__summary:hover:not(:focus):before{color:var(--gcds-details-hover-text)}}}@layer focus{:host .gcds-details .details__summary:focus{background-color:var(--gcds-details-focus-background);border-radius:var(--gcds-details-focus-border-radius);box-shadow:var(--gcds-details-focus-box-shadow);color:var(--gcds-details-focus-text);outline:var(--gcds-details-focus-outline);outline-offset:var(--gcds-details-focus-outline-offset);text-decoration:none}}';
const GcdsDetailsStyle0 = gcdsDetailsCss;
const GcdsDetails$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsDetails extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = (0, import_stencil.createEvent)(this, "gcdsFocus", 7);
    this.gcdsBlur = (0, import_stencil.createEvent)(this, "gcdsBlur", 7);
    this.gcdsClick = (0, import_stencil.createEvent)(this, "gcdsClick", 7);
    this.detailsTitle = void 0;
    this.open = false;
  }
  /**
   * Methods
   */
  /*
   * Toggle details open or closed
   */
  async toggle() {
    this.open = !this.open;
  }
  render() {
    const { detailsTitle, open } = this;
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("div", { class: "gcds-details" }, (0, import_stencil.h)("button", { "aria-expanded": open.toString(), "aria-controls": "details__panel", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (e) => {
      const event = (0, import_utils.e)(e, this.gcdsClick);
      if (event) {
        this.toggle();
      }
    }, class: "details__summary", id: "details__summary" }, detailsTitle), (0, import_stencil.h)("div", { id: "details__panel", class: "details__panel", "aria-labelledby": "details__summary" }, (0, import_stencil.h)("slot", null))));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsDetailsStyle0;
  }
}, [1, "gcds-details", {
  "detailsTitle": [1, "details-title"],
  "open": [1540],
  "toggle": [64]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-details"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-details":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsDetails$1);
        }
        break;
    }
  });
}
const GcdsDetails2 = GcdsDetails$1;
const defineCustomElement = defineCustomElement$1;
