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
var gcds_alert_exports = {};
__export(gcds_alert_exports, {
  GcdsAlert: () => GcdsAlert2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_alert_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_gcds_container2 = require("./gcds-container2.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
const I18N = {
  en: {
    label: {
      danger: "This is a critical alert.",
      info: "This is an info alert.",
      success: "This is a success alert.",
      warning: "This is a warning alert."
    },
    closeBtn: "Close alert."
  },
  fr: {
    label: {
      danger: "Ceci est une alerte d'effacement.",
      info: "Ceci est une alerte d'information.",
      success: "Ceci est une alerte de succ\xE8s.",
      warning: "Ceci est une alerte d'avertissement."
    },
    closeBtn: "Fermer l'alerte."
  }
};
const gcdsAlertCss = "@layer reset, default, fixed, role, wide, compact, hover, focus;@layer reset{:host{display:block}:host .gcds-alert{box-sizing:border-box;text-align:left}:host .gcds-alert .alert__close-btn{box-sizing:border-box;cursor:pointer;padding:0}:host .gcds-alert slot{display:initial}}@layer default{:host .gcds-alert{border-inline-start:var(--gcds-alert-border-width) solid transparent;color:var(--gcds-alert-text);container:component alert/inline-size;font:var(--gcds-alert-font);padding:var(--gcds-alert-padding)}:host .gcds-alert .alert__content{flex:1 1 auto}:host .gcds-alert .alert__content .alert__heading{font:var(--gcds-alert-content-heading-font);margin:var(--gcds-alert-content-heading-margin)}:host .gcds-alert .alert__content ::slotted(*){margin-block-start:0}:host .gcds-alert .alert__content ::slotted(:last-child){margin-block-end:0}:host .gcds-alert .alert__content ::slotted(:not(:last-child)){margin-block-end:var(--gcds-alert-content-slotted-margin)}:host .gcds-alert .alert__content ::slotted(ol),:host .gcds-alert .alert__content ::slotted(ul){margin-inline-start:var(--gcds-alert-content-slotted-list-margin);padding:0}:host .gcds-alert .alert__close-btn{background-color:var(--gcds-alert-button-default-background);border:var(--gcds-alert-button-border-width) solid transparent;border-radius:var(--gcds-alert-button-border-radius);color:var(--gcds-alert-button-default-text);margin:var(--gcds-alert-button-margin);transition:all .15s ease-in-out}:host .gcds-alert .alert__close-btn gcds-icon{align-items:center;display:flex;height:var(--gcds-alert-button-icon-width-and-height);justify-content:center;padding:var(--gcds-alert-button-icon-padding);width:var(--gcds-alert-button-icon-width-and-height)}}@layer fixed{:host .gcds-alert.alert--is-fixed{border:0;position:sticky;top:0;width:100%;z-index:9999}}@layer role{:host .gcds-alert.alert--role-danger{background-color:var(--gcds-alert-danger-background);border-color:var(--gcds-alert-danger-icon);color:var(--gcds-alert-danger-text)}:host .gcds-alert.alert--role-danger .alert__icon{color:var(--gcds-alert-danger-icon)}:host .gcds-alert.alert--role-info{background-color:var(--gcds-alert-info-background);border-color:var(--gcds-alert-info-icon);color:var(--gcds-alert-info-text)}:host .gcds-alert.alert--role-info .alert__icon{color:var(--gcds-alert-info-icon)}:host .gcds-alert.alert--role-success{background-color:var(--gcds-alert-success-background);border-color:var(--gcds-alert-success-icon);color:var(--gcds-alert-success-text)}:host .gcds-alert.alert--role-success .alert__icon{color:var(--gcds-alert-success-icon)}:host .gcds-alert.alert--role-warning{background-color:var(--gcds-alert-warning-background);border-color:var(--gcds-alert-warning-icon);color:var(--gcds-alert-warning-text)}:host .gcds-alert.alert--role-warning .alert__icon{color:var(--gcds-alert-warning-icon)}}@layer wide{@container alert (width >= 36em){:host .gcds-alert .alert__container{align-items:flex-start;display:flex}}}@layer compact{@container alert (width < 36em){:host .gcds-alert .alert__icon{margin:var(--gcds-alert-icon-mobile-margin)}:host .gcds-alert .alert__heading{margin:var(--gcds-alert-content-heading-mobile-margin)}:host .gcds-alert .alert__close-btn{margin:var(--gcds-alert-button-mobile-margin)}}}@layer hover{:is(:host .gcds-alert .alert__close-btn:active,:host .gcds-alert .alert__close-btn:hover){border-color:currentColor}}@layer focus{:host .gcds-alert .alert__close-btn:focus{background-color:var(--gcds-alert-button-focus-background);border-color:var(--gcds-alert-button-focus-background);box-shadow:0 0 0 var(--gcds-alert-button-border-width) var(--gcds-alert-button-focus-text);color:var(--gcds-alert-button-focus-text);outline:var(--gcds-alert-button-outline-width) solid var(--gcds-alert-button-focus-background);outline-offset:var(--gcds-alert-button-border-width)}}";
const GcdsAlertStyle0 = gcdsAlertCss;
const GcdsAlert$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsAlert extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsDismiss = (0, import_stencil.createEvent)(this, "gcdsDismiss", 7);
    this.alertRole = "info";
    this.container = "full";
    this.heading = void 0;
    this.hideCloseBtn = false;
    this.hideRoleIcon = false;
    this.isFixed = false;
    this.isOpen = true;
    this.lang = void 0;
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
  }
  render() {
    const { alertRole, container, heading, hideCloseBtn, hideRoleIcon, isFixed, isOpen, lang } = this;
    return (0, import_stencil.h)(import_stencil.Host, null, isOpen ? (0, import_stencil.h)("div", { class: `gcds-alert alert--role-${alertRole} ${isFixed ? "alert--is-fixed" : ""}`, role: "alert", "aria-label": alertRole === "danger" ? I18N[lang].label.danger : alertRole === "info" ? I18N[lang].label.info : alertRole === "success" ? I18N[lang].label.success : alertRole === "warning" ? I18N[lang].label.warning : null }, (0, import_stencil.h)("gcds-container", { size: isFixed ? container : "full", centered: true }, (0, import_stencil.h)("div", { class: "alert__container" }, !hideRoleIcon && (0, import_stencil.h)("gcds-icon", { "aria-hidden": "true", class: "alert__icon", size: "h5", "margin-right": "250", name: alertRole === "danger" ? "exclamation-circle" : alertRole === "info" ? "info-circle" : alertRole === "success" ? "check-circle" : alertRole === "warning" ? "exclamation-triangle" : null }), (0, import_stencil.h)("div", { class: "alert__content" }, (0, import_stencil.h)("p", { class: "alert__heading" }, (0, import_stencil.h)("strong", null, heading)), (0, import_stencil.h)("slot", null)), !hideCloseBtn && (0, import_stencil.h)("button", { class: "alert__close-btn", onClick: (e) => {
      const event = (0, import_utils.e)(e, this.gcdsDismiss);
      if (event) {
        this.isOpen = false;
      }
    }, "aria-label": I18N[lang].closeBtn }, (0, import_stencil.h)("gcds-icon", { "aria-hidden": "true", name: "times", size: "text" }))))) : null);
  }
  get el() {
    return this;
  }
  static get style() {
    return GcdsAlertStyle0;
  }
}, [1, "gcds-alert", {
  "alertRole": [1, "alert-role"],
  "container": [1],
  "heading": [1],
  "hideCloseBtn": [4, "hide-close-btn"],
  "hideRoleIcon": [4, "hide-role-icon"],
  "isFixed": [1028, "is-fixed"],
  "isOpen": [32],
  "lang": [32]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-alert", "gcds-container", "gcds-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-alert":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsAlert$1);
        }
        break;
      case "gcds-container":
        if (!customElements.get(tagName)) {
          (0, import_gcds_container2.d)();
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
const GcdsAlert2 = GcdsAlert$1;
const defineCustomElement = defineCustomElement$1;
