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
var gcds_side_nav_exports = {};
__export(gcds_side_nav_exports, {
  GcdsSideNav: () => GcdsSideNav2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_side_nav_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_utils2 = require("./utils2.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_nav_group2 = require("./gcds-nav-group2.js");
const I18N = {
  en: {
    closeTrigger: "Close",
    menuLabel: "Menu",
    navLabel: " - Use the enter key to select a menu item and travel to its page. Use the left and right arrow keys to navigate between menu and submenu items. Use the right arrow key to open submenus when they are available. Use the left arrow or escape keys to close a menu."
  },
  fr: {
    closeTrigger: "Fermer",
    menuLabel: "Menu",
    navLabel: " - Utiliser la touche d'entr\xE9e pour s\xE9lectionner un \xE9l\xE9ment du menu et voyager \xE0 la page indiqu\xE9e. Utiliser les fl\xE8ches gauches et droites pour naviguer entre les \xE9l\xE9ments et les sous-\xE9l\xE9ments du menu. Ouvrir les sous-\xE9l\xE9ments du menu avec la fl\xE8che droite lorsqu'il sont disponible. Fermer le menu avec la fl\xE8che gauche ou la touche d'\xE9chappement."
  }
};
const gcdsSideNavCss = "@layer reset, default, desktop, mobile;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0;padding:0}}@layer default{:host{width:100%}:host .gcds-side-nav__heading{font:var(--gcds-side-nav-heading-font);margin-block-end:var(--gcds-side-nav-heading-margin);padding:var(--gcds-side-nav-heading-padding)}}@layer desktop{@media only screen and (width >= 64em){:host .gcds-side-nav{max-width:var(--gcds-side-nav-max-width)}}}@layer mobile{@media only screen and (width < 64em){:host .gcds-side-nav__heading{display:block;height:0;margin:0;overflow:hidden;padding:0;width:0}}}";
const GcdsSideNavStyle0 = gcdsSideNavCss;
const GcdsSideNav$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsSideNav extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.label = void 0;
    this.lang = void 0;
    this.navItems = [];
    this.navSize = void 0;
  }
  async focusInListener(e) {
    if (this.el.contains(e.target) && !this.navSize) {
      const mediaQuery = window.matchMedia("screen and (min-width: 64em)");
      const nav = this.el;
      const mobileTrigger = this.mobile;
      if (mediaQuery.matches) {
        this.navSize = "desktop";
      } else {
        this.navSize = "mobile";
      }
      await this.updateNavItemQueue(this.el);
      mediaQuery.addEventListener("change", async function(e2) {
        if (e2.matches) {
          nav.updateNavSize("desktop");
          await nav.updateNavItemQueue(nav);
          if (mobileTrigger.hasAttribute("open")) {
            mobileTrigger.toggleNav();
          }
        } else {
          nav.updateNavSize("mobile");
          await nav.updateNavItemQueue(nav);
        }
      });
    }
  }
  async focusOutListener(e) {
    if (!this.el.contains(e.relatedTarget)) {
      if (this.navSize == "mobile") {
        if (this.mobile.hasAttribute("open")) {
          await this.mobile.toggleNav();
        }
      }
    }
  }
  async keyDownListener(e) {
    if (this.el.contains(document.activeElement)) {
      (0, import_utils2.h)(e, this.el, this.navItems);
    }
  }
  async gcdsClickListener(e) {
    if (this.el.contains(e.target)) {
      if (e.target == this.el && this.navSize == "mobile") {
        await this.updateNavItemQueue(e.target);
      } else if (e.target.nodeName == "GCDS-NAV-GROUP" && !e.target.hasAttribute("open")) {
        await this.updateNavItemQueue(this.el);
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
  /*
   * Get current navSize state
   */
  async getNavSize() {
    return this.navSize;
  }
  /*
   * Pass new window size: desktop or mobile
   */
  async updateNavSize(size) {
    this.navSize = size;
  }
  /*
   * Update item queue for keyboard navigation based on passed element
   */
  async updateNavItemQueue(el, includeElement) {
    if (includeElement) {
      const childElements = await (0, import_utils2.g)(el);
      this.navItems = [el, ...childElements];
    } else {
      this.navItems = await (0, import_utils2.g)(el);
    }
    if (this.navSize == "mobile") {
      this.navItems = [...this.navItems, this.mobile];
    }
  }
  async componentWillLoad() {
    this.lang = (0, import_utils.a)(this.el);
    this.updateLang();
  }
  render() {
    const { label, lang } = this;
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("nav", { "aria-label": `${label}${I18N[lang].navLabel}`, class: "gcds-side-nav" }, (0, import_stencil.h)("h2", { class: "gcds-side-nav__heading" }, label), (0, import_stencil.h)("ul", null, (0, import_stencil.h)("gcds-nav-group", { menuLabel: I18N[lang].menuLabel, closeTrigger: I18N[lang].closeTrigger, openTrigger: I18N[lang].menuLabel, class: "gcds-mobile-nav", ref: (element) => this.mobile = element, lang }, (0, import_stencil.h)("slot", null)))));
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsSideNavStyle0;
  }
}, [1, "gcds-side-nav", {
  "label": [1],
  "lang": [32],
  "navItems": [32],
  "navSize": [32],
  "getNavSize": [64],
  "updateNavSize": [64],
  "updateNavItemQueue": [64]
}, [[4, "focusin", "focusInListener"], [4, "focusout", "focusOutListener"], [4, "keydown", "keyDownListener"], [4, "gcdsClick", "gcdsClickListener"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-side-nav", "gcds-icon", "gcds-nav-group"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-side-nav":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsSideNav$1);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(tagName)) {
          (0, import_gcds_icon2.d)();
        }
        break;
      case "gcds-nav-group":
        if (!customElements.get(tagName)) {
          (0, import_gcds_nav_group2.d)();
        }
        break;
    }
  });
}
const GcdsSideNav2 = GcdsSideNav$1;
const defineCustomElement = defineCustomElement$1;
