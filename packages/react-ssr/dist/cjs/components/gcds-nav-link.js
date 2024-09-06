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
var gcds_nav_link_exports = {};
__export(gcds_nav_link_exports, {
  GcdsNavLink: () => GcdsNavLink2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_nav_link_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
const gcdsNavLinkCss = "@layer reset, default, variants, hover, active, focus;@layer reset{:host .gcds-nav-link{box-sizing:border-box}:host .gcds-nav-link slot{display:initial}}@layer default{:host .gcds-nav-link{border-inline:var(--gcds-nav-link-border-width) solid transparent;color:var(--gcds-nav-link-default-text);display:flex;font:var(---gcds-nav-link-font);margin-block-end:var(--gcds-nav-link-margin);padding:var(--gcds-nav-link-padding);text-decoration-color:currentColor;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:var(--gcds-nav-link-default-decoration-thickness);text-underline-offset:var(--gcds-nav-link-default-underline-offset);transition:all .25s ease-in-out}@media only screen and (width < 64em){:host .gcds-nav-link{min-width:50%}}@media only screen and (width > 48em){:host .gcds-nav-link{max-width:var(--gcds-nav-link-default-max-width)}}:host .gcds-nav-link[aria-current=page]{pointer-events:none;text-decoration:none}}@layer variants{@media only screen and (width >= 64em){:host>.gcds-nav-link--topnav.gcds-nav-link{border-block-end:var(--gcds-nav-link-border-width) solid transparent;border-inline:0;color:var(--gcds-nav-link-top-nav-text);margin:var(--gcds-nav-link-top-nav-margin);padding:var(--gcds-nav-link-top-nav-padding)}:host>.gcds-nav-link--topnav.gcds-nav-link:not(:hover){text-decoration-color:transparent}:host([slot=home])>.gcds-nav-link{font:var(--gcds-nav-link-top-nav-home-font);padding:var(--gcds-nav-link-top-nav-home-padding)}}:host>.gcds-nav-link--sidenav.gcds-nav-link{padding:var(--gcds-nav-link-side-nav-padding)}}@layer hover{@media (hover:hover){:host .gcds-nav-link:hover{color:var(--gcds-nav-link-hover-text);text-decoration-thickness:var(\n        --gcds-nav-link-hover-decoration-thickness\n      )}:host>.gcds-nav-link--dropdown.gcds-nav-link:hover,:host>.gcds-nav-link--sidenav.gcds-nav-link:hover{color:var(--gcds-nav-link-hover-text)}:host>.gcds-nav-link--sidenav.gcds-nav-link:hover{background-color:var(--gcds-nav-link-side-nav-hover-background)}:host>.gcds-nav-link--dropdown.gcds-nav-link:hover{background-color:var(--gcds-nav-link-top-nav-hover-background)}}}@layer active{:host .gcds-nav-link[aria-current=page]{background-color:var(--gcds-nav-link-active-background);border-inline-start-color:var(--gcds-nav-link-active-border-color);color:var(--gcds-nav-link-active-text);font-weight:var(--gcds-nav-link-active-font-weight)}@media only screen and (width >= 64em){:host>.gcds-nav-link--topnav.gcds-nav-link[aria-current=page]{background-color:transparent;border-block-end-color:var(--gcds-nav-link-active-border-color);color:var(--gcds-nav-link-top-nav-text);font:var(--gcds-nav-link-font)}}}@layer focus{:host .gcds-nav-link:focus{background-color:var(--gcds-nav-link-focus-background);border-color:var(--gcds-nav-link-focus-background);border-radius:var(--gcds-nav-link-focus-border-radius);box-shadow:var(--gcds-nav-link-focus-box-shadow);color:var(--gcds-nav-link-focus-text);outline:var(--gcds-nav-link-focus-outline);outline-offset:var(--gcds-nav-link-focus-outline-offset);text-decoration:none}}";
const GcdsNavLinkStyle0 = gcdsNavLinkCss;
const GcdsNavLink$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsNavLink extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsClick = (0, import_stencil.createEvent)(this, "gcdsClick", 7);
    this.gcdsFocus = (0, import_stencil.createEvent)(this, "gcdsFocus", 7);
    this.gcdsBlur = (0, import_stencil.createEvent)(this, "gcdsBlur", 7);
    this.href = void 0;
    this.current = void 0;
    this.lang = void 0;
    this.navStyle = void 0;
  }
  /**
   * Focus the link element
   */
  async focusLink() {
    this.linkElement.focus();
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
  async componentWillLoad() {
    this.lang = (0, import_utils.a)(this.el);
    this.updateLang();
    if (this.el.closest("gcds-top-nav")) {
      if (this.el.parentNode.nodeName == "GCDS-TOP-NAV") {
        this.navStyle = "topnav";
      } else {
        this.navStyle = "dropdown";
      }
    } else {
      this.navStyle = "sidenav";
    }
  }
  render() {
    const { current, href } = this;
    const linkAttrs = {};
    if (current) {
      linkAttrs["aria-current"] = "page";
    }
    return (0, import_stencil.h)(import_stencil.Host, { role: "listitem" }, (0, import_stencil.h)("a", Object.assign({ class: `gcds-nav-link gcds-nav-link--${this.navStyle}`, href }, linkAttrs, { onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (e) => (0, import_utils.e)(e, this.gcdsClick, href), ref: (element) => this.linkElement = element }), (0, import_stencil.h)("slot", null)));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsNavLinkStyle0;
  }
}, [1, "gcds-nav-link", {
  "href": [513],
  "current": [516],
  "lang": [32],
  "navStyle": [32],
  "focusLink": [64]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-nav-link"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-nav-link":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsNavLink$1);
        }
        break;
    }
  });
}
const GcdsNavLink2 = GcdsNavLink$1;
const defineCustomElement = defineCustomElement$1;
