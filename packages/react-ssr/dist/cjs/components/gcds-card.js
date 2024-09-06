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
var gcds_card_exports = {};
__export(gcds_card_exports, {
  GcdsCard: () => GcdsCard2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_card_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_link2 = require("./gcds-link2.js");
var import_gcds_sr_only2 = require("./gcds-sr-only2.js");
var import_gcds_text2 = require("./gcds-text2.js");
const I18N = {
  en: {
    tagged: "Tagged:",
    badgeError: "gcds-card: The badge attribute has a character limit of 20 characters."
  },
  fr: {
    tagged: "Baliser :",
    badgeError: "gcds-card: L'attribut badge a une limite de caract\xE8res de 20 caract\xE8res."
  }
};
const gcdsCardCss = '@layer reset, default, link, hover, focus;@layer reset{:host{display:block}:host *{box-sizing:border-box;margin:0;padding:0}:host slot{display:initial}}@layer default{:host .gcds-card{background-color:var(--gcds-card-background-color);box-shadow:var(--gcds-card-box-shadow);color:var(--gcds-card-color);display:block;height:100%;max-width:var(--gcds-card-max-width);overflow:hidden;padding:var(--gcds-card-padding);position:relative}:host .gcds-card .gcds-badge{background-color:var(--gcds-card-badge-background-color);left:0;padding:var(--gcds-card-badge-padding);position:absolute;top:0;text-wrap:nowrap}:host .gcds-card .gcds-card__image{margin:var(--gcds-card-image-margin);width:100%}:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font-desktop);width:fit-content}@media only screen and (width < 48em){:host .gcds-card .gcds-card__title{font:var(--gcds-card-title-font-mobile)}}:host .gcds-card .gcds-card__title:has(+.gcds-card__description){margin:var(--gcds-card-title-margin)}:host .gcds-card .gcds-card__description{--gcds-text-size-body-desktop:var(--gcds-card-description-font-desktop)}@media only screen and (width < 48em){:host .gcds-card .gcds-card__description{font:var(--gcds-card-description-font-mobile)}}}@layer link{:host .gcds-card gcds-link::part(link):after{bottom:0;content:"";left:0;pointer-events:auto;position:absolute;right:0;top:0;z-index:1}}@layer hover{@media (hover:hover){:host .gcds-card:hover{background-color:var(--gcds-card-hover-background-color);box-shadow:var(--gcds-card-hover-box-shadow);cursor:pointer}}}@layer focus{:host .gcds-card:has(:focus-within){box-shadow:var(--gcds-card-focus-box-shadow);outline:var(--gcds-card-focus-outline);outline-offset:var(--gcds-card-focus-outline-offset)}:host gcds-link::part(link):focus{background-color:var(--gcds-card-focus-link-background-color);border:var(--gcds-card-focus-link-border);box-shadow:var(--gcds-card-focus-link-box-shadow);color:var(--gcds-card-focus-link-color);outline:var(--gcds-card-focus-link-outline);text-decoration:underline currentColor var(--gcds-card-focus-link-text-decoration-thickness)}}';
const GcdsCardStyle0 = gcdsCardCss;
const GcdsCard$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsCard extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = (0, import_stencil.createEvent)(this, "gcdsFocus", 7);
    this.gcdsBlur = (0, import_stencil.createEvent)(this, "gcdsBlur", 7);
    this.gcdsClick = (0, import_stencil.createEvent)(this, "gcdsClick", 7);
    this.cardTitle = void 0;
    this.href = void 0;
    this.cardTitleTag = "a";
    this.description = void 0;
    this.badge = void 0;
    this.imgSrc = void 0;
    this.imgAlt = void 0;
    this.lang = void 0;
    this.errors = [];
  }
  validateCardTitle() {
    if (!this.cardTitle || this.cardTitle.trim() == "") {
      this.errors.push("cardTitle");
    } else if (this.errors.includes("cardTitle")) {
      this.errors.splice(this.errors.indexOf("cardTitle"), 1);
    }
  }
  validateHref() {
    if (!this.href || this.href.trim() == "") {
      this.errors.push("href");
    } else if (this.errors.includes("href")) {
      this.errors.splice(this.errors.indexOf("href"), 1);
    }
  }
  validateBadge() {
    if (this.badge && this.badge.length > 20) {
      console.error(`${I18N["en"].badgeError} | ${I18N["fr"].badgeError}`);
      this.errors.push("badge");
    } else if (this.errors.includes("badge")) {
      this.errors.splice(this.errors.indexOf("badge"), 1);
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
   * Validate required properties
   */
  validateRequiredProps() {
    this.validateCardTitle();
    this.validateHref();
    if (this.errors.includes("href") || this.errors.includes("cardTitle")) {
      return false;
    }
    return true;
  }
  async componentWillLoad() {
    this.lang = (0, import_utils.a)(this.el);
    this.updateLang();
    this.validateBadge();
    let valid = this.validateRequiredProps();
    if (!valid) {
      (0, import_utils.l)("gcds-card", this.errors, ["badge"]);
    }
  }
  get renderDescription() {
    if (this.el.innerHTML.trim() != "") {
      return (0, import_stencil.h)("div", { class: "gcds-card__description" }, (0, import_stencil.h)("slot", null));
    } else if (this.description) {
      return (0, import_stencil.h)("div", { class: "gcds-card__description" }, (0, import_stencil.h)("gcds-text", { "margin-bottom": "0" }, this.description));
    } else {
      return null;
    }
  }
  render() {
    const { cardTitle, cardTitleTag, href, badge, imgSrc, imgAlt, renderDescription, lang, errors } = this;
    const Element = cardTitleTag;
    const taggedAttr = {};
    if (badge) {
      taggedAttr["aria-describedby"] = "gcds-badge";
    }
    if (this.validateRequiredProps()) {
      return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("div", { class: "gcds-card" }, imgSrc && (0, import_stencil.h)("img", { src: imgSrc, alt: imgAlt ? imgAlt : "", class: "gcds-card__image" }), badge && !errors.includes("badge") && (0, import_stencil.h)("gcds-text", { id: "gcds-badge", class: "gcds-badge", "text-role": "light", "margin-bottom": "0", size: "caption" }, (0, import_stencil.h)("strong", null, (0, import_stencil.h)("gcds-sr-only", null, I18N[lang].tagged), badge)), Element != "a" ? (0, import_stencil.h)(Element, Object.assign({ class: "gcds-card__title" }, taggedAttr), (0, import_stencil.h)("gcds-link", { href }, cardTitle)) : (0, import_stencil.h)("gcds-link", Object.assign({ href, class: "gcds-card__title" }, taggedAttr), cardTitle), renderDescription));
    }
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "cardTitle": ["validateCardTitle"],
      "href": ["validateHref"],
      "badge": ["validateBadge"]
    };
  }
  static get style() {
    return GcdsCardStyle0;
  }
}, [1, "gcds-card", {
  "cardTitle": [513, "card-title"],
  "href": [513],
  "cardTitleTag": [1, "card-title-tag"],
  "description": [513],
  "badge": [1537],
  "imgSrc": [513, "img-src"],
  "imgAlt": [513, "img-alt"],
  "lang": [32],
  "errors": [32]
}, void 0, {
  "cardTitle": ["validateCardTitle"],
  "href": ["validateHref"],
  "badge": ["validateBadge"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-card", "gcds-icon", "gcds-link", "gcds-sr-only", "gcds-text"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-card":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsCard$1);
        }
        break;
      case "gcds-icon":
        if (!customElements.get(tagName)) {
          (0, import_gcds_icon2.d)();
        }
        break;
      case "gcds-link":
        if (!customElements.get(tagName)) {
          (0, import_gcds_link2.d)();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(tagName)) {
          (0, import_gcds_sr_only2.d)();
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
const GcdsCard2 = GcdsCard$1;
const defineCustomElement = defineCustomElement$1;
