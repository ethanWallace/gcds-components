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
var gcds_link2_exports = {};
__export(gcds_link2_exports, {
  G: () => GcdsLink,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_link2_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
const I18N = {
  en: {
    external: " (Opens destination in a new tab.)",
    phone: " (Attempts to open a phone app.)",
    download: " (Attempts to download a file to the device.)",
    email: " (Opens new message in email program.)"
  },
  fr: {
    external: " (Ouvre l'emplacement dans un nouvel onglet.)",
    phone: " (Tente d'ouvrir une application de t\xE9l\xE9phonie.)",
    download: " (Tente de t\xE9l\xE9charger un fichier sur l'appareil.)",
    email: " (Ouvre un nouveau message dans le logiciel de messagerie.)"
  }
};
const gcdsLinkCss = "@layer reset, default, display, size, variant, hover, visited, focus;@layer reset{:host{display:inline-block}:host slot{display:initial}}@layer default{:host .gcds-link{color:var(--gcds-link-default);cursor:pointer;text-decoration-color:currentColor;text-decoration-style:solid;text-decoration-thickness:var(--gcds-link-decoration-thickness);text-underline-offset:var(--gcds-link-underline-offset);transition:all .35s}}@layer display{:host .gcds-link.d-block{display:block}}@layer size{:host .gcds-link.link--small{font:var(--gcds-link-font-small-desktop)}@media only screen and (width < 48em){:host .gcds-link.link--small{font:var(--gcds-link-font-small-mobile)}}:host .gcds-link.link--regular{font:var(--gcds-link-font-regular-desktop)}@media only screen and (width < 48em){:host .gcds-link.link--regular{font:var(--gcds-link-font-regular-mobile)}}:host .gcds-link.link--inherit{font:inherit}}@layer variant{:host .gcds-link.variant-light{color:var(--gcds-link-light)}}@layer hover{@media (hover:hover){:host .gcds-link:hover{text-decoration-thickness:var(--gcds-link-hover-decoration-thickness)}:host .gcds-link:hover:not(.variant-light){color:var(--gcds-link-hover)}}}@layer visited{:host .gcds-link:not(.variant-light):visited{color:var(--gcds-link-visited)}}@layer focus{:host .gcds-link:focus{background-color:var(--gcds-link-focus-background);border-radius:var(--gcds-link-focus-border-radius);box-shadow:var(--gcds-link-focus-box-shadow);color:var(--gcds-link-focus-text);outline:var(--gcds-link-focus-outline-width) solid var(--gcds-link-focus-background);outline-offset:var(--gcds-link-focus-outline-offset);text-decoration:none}}";
const GcdsLinkStyle0 = gcdsLinkCss;
const GcdsLink = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsLink2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = (0, import_stencil.createEvent)(this, "gcdsFocus", 7);
    this.gcdsBlur = (0, import_stencil.createEvent)(this, "gcdsBlur", 7);
    this.gcdsClick = (0, import_stencil.createEvent)(this, "gcdsClick", 7);
    this.variant = "default";
    this.size = "inherit";
    this.display = "inline";
    this.href = void 0;
    this.rel = void 0;
    this.target = "_self";
    this.external = false;
    this.download = void 0;
    this.type = void 0;
    this.inheritedAttributes = {};
    this.lang = void 0;
  }
  validateVariant(newValue) {
    const values = ["default", "light"];
    if (!values.includes(newValue)) {
      this.variant = "default";
    }
  }
  validateSize(newValue) {
    const values = ["regular", "small", "inherit"];
    if (!values.includes(newValue)) {
      this.size = "inherit";
    }
  }
  validateDisplay(newValue) {
    const values = ["block", "inline"];
    if (!values.includes(newValue)) {
      this.display = "inline";
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
  componentWillLoad() {
    this.validateVariant(this.variant);
    this.validateSize(this.size);
    this.validateDisplay(this.display);
    this.inheritedAttributes = (0, import_utils.i)(this.el, this.shadowElement, [
      "referrerpolicy"
    ]);
    this.lang = (0, import_utils.a)(this.el);
    this.updateLang();
  }
  render() {
    const { size, lang, display, href, rel, target, external, download, type, inheritedAttributes, variant } = this;
    const attrs = {
      href,
      rel,
      target,
      download,
      type
    };
    const isExternal = target === "_blank" || external;
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("a", Object.assign({ role: "link", tabIndex: 0 }, attrs, { class: `gcds-link link--${size} ${display != "inline" ? `d-${display}` : ""} ${variant != "default" ? `variant-${variant}` : ""}`, ref: (element) => this.shadowElement = element, target: isExternal ? "_blank" : target, rel: isExternal ? "noopener noreferrer" : rel }, inheritedAttributes, { part: "link", onBlur: () => this.gcdsBlur.emit(), onFocus: () => this.gcdsFocus.emit(), onClick: (e) => (0, import_utils.e)(e, this.gcdsClick, href) }), (0, import_stencil.h)("slot", null), target === "_blank" || external ? (0, import_stencil.h)("gcds-icon", { name: "external-link", label: I18N[lang].external, "margin-left": "100" }) : download !== void 0 ? (0, import_stencil.h)("gcds-icon", { name: "download", label: I18N[lang].download, "margin-left": "100" }) : href && href.toLowerCase().startsWith("mailto:") ? (0, import_stencil.h)("gcds-icon", { "icon-style": "regular", name: "envelope", label: I18N[lang].email, "margin-left": "100" }) : href && href.toLowerCase().startsWith("tel:") && (0, import_stencil.h)("gcds-icon", { name: "phone", label: I18N[lang].phone, "margin-left": "100" })));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "variant": ["validateVariant"],
      "size": ["validateSize"],
      "display": ["validateDisplay"]
    };
  }
  static get style() {
    return GcdsLinkStyle0;
  }
}, [1, "gcds-link", {
  "variant": [1025],
  "size": [1025],
  "display": [1025],
  "href": [1],
  "rel": [1],
  "target": [1],
  "external": [4],
  "download": [1],
  "type": [1],
  "inheritedAttributes": [32],
  "lang": [32]
}, void 0, {
  "variant": ["validateVariant"],
  "size": ["validateSize"],
  "display": ["validateDisplay"]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-link", "gcds-icon"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-link":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsLink);
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
