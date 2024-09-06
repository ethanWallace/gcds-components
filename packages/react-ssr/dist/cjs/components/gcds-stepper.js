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
var gcds_stepper_exports = {};
__export(gcds_stepper_exports, {
  GcdsStepper: () => GcdsStepper2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_stepper_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_gcds_heading2 = require("./gcds-heading2.js");
var import_gcds_sr_only2 = require("./gcds-sr-only2.js");
const I18N = {
  en: {
    step: "Step",
    of: "of"
  },
  fr: {
    step: "\xC9tape",
    of: "sur"
  }
};
const gcdsStepperCss = "@layer reset, default;@layer reset{:host{display:block}}@layer default{:host .gcds-stepper .gcds-stepper__steps{display:block;font:var(--gcds-stepper-font-desktop);margin:var(--gcds-stepper-margin-desktop)}@media only screen and (width < 48em){:host .gcds-stepper .gcds-stepper__steps{font:var(--gcds-stepper-font-mobile);margin:var(--gcds-stepper-margin-mobile)}}}";
const GcdsStepperStyle0 = gcdsStepperCss;
const GcdsStepper$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsStepper extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.currentStep = void 0;
    this.totalSteps = void 0;
    this.tag = "h2";
    this.errors = [];
    this.lang = void 0;
  }
  validateCurrentStep() {
    if (this.currentStep <= 0 || isNaN(this.currentStep) || this.currentStep > this.totalSteps) {
      this.errors.push("currentStep");
    } else if (this.errors.includes("currentStep")) {
      this.errors.splice(this.errors.indexOf("currentStep"), 1);
    }
  }
  validateTotalSteps() {
    if (this.totalSteps <= 0 || isNaN(this.totalSteps) || this.totalSteps < this.currentStep) {
      this.errors.push("totalSteps");
    } else if (this.errors.includes("totalSteps")) {
      this.errors.splice(this.errors.indexOf("totalSteps"), 1);
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
  validateChildren() {
    if (this.el.innerHTML.trim() == "") {
      this.errors.push("children");
    } else if (this.errors.includes("children")) {
      this.errors.splice(this.errors.indexOf("children"), 1);
    }
  }
  validateRequiredProps() {
    this.validateCurrentStep();
    this.validateTotalSteps();
    this.validateChildren();
    if (this.errors.includes("totalSteps") || this.errors.includes("currentStep") || this.errors.includes("children")) {
      return false;
    }
    return true;
  }
  async componentWillLoad() {
    this.lang = (0, import_utils.a)(this.el);
    this.updateLang();
    let valid = this.validateRequiredProps();
    if (!valid) {
      (0, import_utils.l)("gcds-stepper", this.errors);
    }
  }
  render() {
    const { currentStep, lang, totalSteps, tag } = this;
    return (0, import_stencil.h)(import_stencil.Host, null, this.validateRequiredProps() && (0, import_stencil.h)("gcds-heading", { tag, class: "gcds-stepper", "margin-top": "0", "margin-bottom": "300" }, (0, import_stencil.h)("span", { class: "gcds-stepper__steps" }, `${I18N[lang].step} ${currentStep} ${I18N[lang].of} ${totalSteps}`, (0, import_stencil.h)("gcds-sr-only", null, " : ")), (0, import_stencil.h)("slot", null)));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "currentStep": ["validateCurrentStep"],
      "totalSteps": ["validateTotalSteps"]
    };
  }
  static get style() {
    return GcdsStepperStyle0;
  }
}, [1, "gcds-stepper", {
  "currentStep": [1026, "current-step"],
  "totalSteps": [1026, "total-steps"],
  "tag": [1],
  "errors": [32],
  "lang": [32]
}, void 0, {
  "currentStep": ["validateCurrentStep"],
  "totalSteps": ["validateTotalSteps"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-stepper", "gcds-heading", "gcds-sr-only"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-stepper":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsStepper$1);
        }
        break;
      case "gcds-heading":
        if (!customElements.get(tagName)) {
          (0, import_gcds_heading2.d)();
        }
        break;
      case "gcds-sr-only":
        if (!customElements.get(tagName)) {
          (0, import_gcds_sr_only2.d)();
        }
        break;
    }
  });
}
const GcdsStepper2 = GcdsStepper$1;
const defineCustomElement = defineCustomElement$1;
