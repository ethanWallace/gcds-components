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
var gcds_nav_group2_exports = {};
__export(gcds_nav_group2_exports, {
  G: () => GcdsNavGroup,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_nav_group2_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
const gcdsNavGroupCss = "@layer reset, defaults, sideNav, topNav, mobileNav, desktop, mobile, hover, focus;@layer reset{:host *{box-sizing:border-box;margin:0;padding:0}}@layer defaults{:host{align-self:flex-end;display:flex;flex-direction:column;position:relative}:host .gcds-nav-group__trigger{align-items:center;background:transparent;border:0;color:var(--gcds-nav-group-trigger-text);cursor:pointer;display:flex;font:var(--gcds-nav-group-trigger-font);padding:var(--gcds-nav-group-trigger-padding);text-align:left;width:100%}:host .gcds-nav-group__trigger[aria-expanded=false]+.gcds-nav-group__list{display:none}:host .gcds-nav-group__trigger-desc{display:none}}@layer sideNav{:host .gcds-trigger--expandable{font-weight:var(--gcds-nav-group-side-nav-trigger-font-weight);margin-block-end:var(--gcds-nav-group-side-nav-trigger-margin)}:host .gcds-trigger--expandable gcds-icon{margin-inline-end:var(--gcds-nav-group-side-nav-trigger-icon-margin)}}@layer topNav{:host .gcds-trigger--dropdown{border-block-end:var(--gcds-nav-group-top-nav-trigger-border-width) solid transparent;margin-inline-start:var(\n      --gcds-nav-group-top-nav-trigger-margin-inline-start\n    );padding:var(--gcds-nav-group-top-nav-trigger-padding);text-decoration:underline solid currentColor var(--gcds-nav-group-top-nav-trigger-decoration-thickness);text-decoration-color:transparent;text-underline-offset:var(\n      --gcds-nav-group-top-nav-trigger-underline-offset\n    );transition:all .25s ease-in-out}:host .gcds-trigger--dropdown[aria-expanded=true]{background-color:var(\n        --gcds-nav-group-top-nav-trigger-expanded-background-color\n      )}:host .gcds-trigger--dropdown gcds-icon{margin-inline-start:var(--gcds-nav-group-top-nav-trigger-icon-margin);order:2}}@layer mobileNav{:host(.gcds-mobile-nav){width:100%}:host(.gcds-mobile-nav) .gcds-trigger--expandable{border:var(--gcds-nav-group-mobile-trigger-border-width) solid;border-radius:var(--gcds-nav-group-mobile-trigger-border-radius);color:var(--gcds-nav-group-mobile-trigger-text);flex-direction:row-reverse;justify-content:center;margin-block-start:var(--gcds-nav-group-mobile-trigger-margin);text-align:center}:host(.gcds-mobile-nav) .gcds-trigger--expandable gcds-icon{display:none}:host([open].gcds-mobile-nav){background-color:var(--gcds-nav-group-mobile-background);height:100vh;left:0;overflow-y:scroll;padding:var(--gcds-nav-group-mobile-padding);position:fixed;top:0;width:100%;z-index:100}}@layer desktop{@media only screen and (width >= 64em){:host .gcds-nav-group__trigger{max-width:var(--gcds-nav-group-trigger-max-width)}:host .gcds-nav--expandable{padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}:host .gcds-nav--dropdown{background-color:var(--gcds-nav-group-top-nav-dropdown-background);border-radius:var(--gcds-border-radius-md);box-shadow:var(--gcds-nav-group-top-nav-dropdown-box-shadow);margin-block-start:var(--gcds-spacing-200);padding:var(--gcds-nav-group-top-nav-dropdown-padding);position:absolute;top:100%;width:var(--gcds-nav-group-top-nav-dropdown-width);z-index:1}:host(.gcds-mobile-nav)>.gcds-nav--expandable{display:block;padding:0}:host(.gcds-mobile-nav) .gcds-trigger--expandable{display:none}:host(.gcds-mobile-nav-topnav)>.gcds-nav--expandable{display:flex}}@media only screen and (width >= 64em) and (width < 96em){:host .gcds-nav--dropdown{right:0}}}@layer mobile{@media only screen and (width < 64em){:host(.gcds-mobile-nav)>.gcds-nav--expandable{margin:var(--gcds-nav-group-mobile-list-margin)}:host([open]:not(.gcds-mobile-nav)) .gcds-nav-group__list{padding-inline-start:var(--gcds-nav-group-side-nav-dropdown-padding)}}@media only screen and (48em < width < 64em){:host(.gcds-mobile-nav) .gcds-trigger--expandable{align-self:flex-start;width:auto}}}@layer hover{@media (hover:hover){:host .gcds-nav-group__trigger:hover{color:var(--gcds-nav-group-trigger-hover-text)}:host .gcds-trigger--dropdown:hover{color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-color:var(--gcds-nav-group-top-nav-trigger-hover-text);text-decoration-thickness:var(\n          --gcds-nav-group-top-nav-trigger-hover-decoration-thickness\n        )}:host .gcds-trigger--expandable:hover{background-color:var(\n          --gcds-nav-group-side-nav-trigger-hover-background\n        )}}}@layer focus{:host .gcds-nav-group__trigger:focus{background-color:var(--gcds-nav-group-trigger-focus-background);border-color:var(--gcds-nav-group-trigger-focus-background);border-radius:var(--gcds-nav-group-trigger-focus-border-radius);box-shadow:var(--gcds-nav-group-trigger-focus-box-shadow);color:var(--gcds-nav-group-trigger-focus-text);outline:var(--gcds-nav-group-trigger-focus-outline);outline-offset:var(--gcds-nav-group-trigger-focus-outline-offset);text-decoration:none}}";
const GcdsNavGroupStyle0 = gcdsNavGroupCss;
const GcdsNavGroup = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsNavGroup2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsClick = (0, import_stencil.createEvent)(this, "gcdsClick", 7);
    this.gcdsFocus = (0, import_stencil.createEvent)(this, "gcdsFocus", 7);
    this.gcdsBlur = (0, import_stencil.createEvent)(this, "gcdsBlur", 7);
    this.closeTrigger = void 0;
    this.menuLabel = void 0;
    this.openTrigger = void 0;
    this.open = false;
    this.lang = void 0;
    this.navStyle = void 0;
  }
  async focusOutListener(e) {
    if ((e.target === this.el || this.el.contains(e.target)) && !this.el.contains(e.relatedTarget) && this.navStyle === "dropdown" && this.open) {
      setTimeout(() => this.toggleNav(), 200);
    }
  }
  /**
   * Focus button element
   */
  async focusTrigger() {
    this.triggerElement.focus();
  }
  /**
   * Toggle the nav open or closed
   */
  async toggleNav() {
    this.open = !this.open;
    for (let i = 0; i < this.el.children.length; i++) {
      if (this.el.children[i].nodeName == "GCDS-NAV-GROUP" && this.el.children[i].hasAttribute("open")) {
        this.el.children[i].toggleNav();
      }
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
  async componentWillLoad() {
    this.lang = (0, import_utils.a)(this.el);
    this.updateLang();
    if (this.el.parentNode.nodeName == "GCDS-TOP-NAV") {
      this.navStyle = "dropdown";
      if (this.open) {
        this.open = false;
      }
    } else {
      this.navStyle = "expandable";
    }
    if (this.el.parentNode.nodeName == "GCDS-NAV-GROUP" && !this.el.parentNode.classList.contains("gcds-mobile-nav") && this.el.closest("gcds-top-nav")) {
      this.el.remove();
    }
  }
  render() {
    const { closeTrigger, menuLabel, open, openTrigger } = this;
    return (0, import_stencil.h)(import_stencil.Host, { role: "listitem", open }, (0, import_stencil.h)("button", { "aria-haspopup": "true", "aria-expanded": open.toString(), ref: (element) => this.triggerElement = element, class: `gcds-nav-group__trigger gcds-trigger--${this.navStyle}`, onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (e) => {
      const event = (0, import_utils.e)(e, this.gcdsClick);
      if (event) {
        this.toggleNav();
      }
    } }, (0, import_stencil.h)("gcds-icon", { name: open ? "angle-up" : "angle-down" }), closeTrigger && open ? closeTrigger : openTrigger), (0, import_stencil.h)("ul", { "aria-label": menuLabel, class: `gcds-nav-group__list gcds-nav--${this.navStyle}` }, (0, import_stencil.h)("slot", null)));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsNavGroupStyle0;
  }
}, [1, "gcds-nav-group", {
  "closeTrigger": [513, "close-trigger"],
  "menuLabel": [513, "menu-label"],
  "openTrigger": [513, "open-trigger"],
  "open": [1540],
  "lang": [32],
  "navStyle": [32],
  "focusTrigger": [64],
  "toggleNav": [64]
}, [[4, "focusout", "focusOutListener"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-nav-group", "gcds-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-nav-group":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsNavGroup);
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
