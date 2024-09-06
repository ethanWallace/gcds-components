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
var gcds_textarea_exports = {};
__export(gcds_textarea_exports, {
  GcdsTextarea: () => GcdsTextarea2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_textarea_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_validator_factory = require("./validator.factory.js");
var import_gcds_error_message2 = require("./gcds-error-message2.js");
var import_gcds_hint2 = require("./gcds-hint2.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_label2 = require("./gcds-label2.js");
var import_gcds_text2 = require("./gcds-text2.js");
const I18N = {
  en: {
    characters: {
      allowed: "characters allowed",
      left: "characters left"
    }
  },
  fr: {
    characters: {
      allowed: "caract\xE8res maximum",
      left: "caract\xE8res restants"
    }
  }
};
const gcdsTextareaCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-textarea-wrapper{border:0;margin:0;padding:0}:host .gcds-textarea-wrapper textarea{box-sizing:border-box}}@layer default{:host .gcds-textarea-wrapper{color:var(--gcds-textarea-default-text);font:var(--gcds-textarea-font);max-width:75ch;transition:color .15s ease-in-out;width:100%}:host .gcds-textarea-wrapper textarea{background-color:var(--gcds-textarea-default-background);background-image:none;border:var(--gcds-textarea-border-width) solid;border-radius:var(--gcds-textarea-border-radius);color:var(--gcds-textarea-default-text);display:block;font:inherit;height:auto;margin:var(--gcds-textarea-margin)!important;max-width:100%;min-height:var(--gcds-textarea-min-height);min-width:50%;padding:var(--gcds-textarea-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}}@layer disabled{:host .gcds-textarea-wrapper.gcds-disabled{color:var(--gcds-textarea-disabled-text)}:host .gcds-textarea-wrapper.gcds-disabled textarea:disabled{background-color:var(--gcds-textarea-disabled-background);border-color:var(--gcds-textarea-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-textarea-wrapper .error-message-container{display:block}:host .gcds-textarea-wrapper textarea.gcds-error:not(:focus){border-color:var(--gcds-textarea-danger-border)}}@layer focus{:host .gcds-textarea-wrapper:focus-within{color:var(--gcds-textarea-focus-text)}:host .gcds-textarea-wrapper:focus-within textarea:focus{border-color:var(--gcds-textarea-focus-text);box-shadow:var(--gcds-textarea-focus-box-shadow);outline:var(--gcds-textarea-outline-width) solid var(--gcds-textarea-focus-text);outline-offset:var(--gcds-textarea-border-width)}}";
const GcdsTextareaStyle0 = gcdsTextareaCss;
const GcdsTextarea$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsTextarea extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = (0, import_stencil.createEvent)(this, "gcdsFocus", 7);
    this.gcdsBlur = (0, import_stencil.createEvent)(this, "gcdsBlur", 7);
    this.gcdsChange = (0, import_stencil.createEvent)(this, "gcdsChange", 7);
    this.gcdsInput = (0, import_stencil.createEvent)(this, "gcdsInput", 7);
    this.gcdsError = (0, import_stencil.createEvent)(this, "gcdsError", 7);
    this.gcdsValid = (0, import_stencil.createEvent)(this, "gcdsValid", 7);
    this.internals = this.attachInternals();
    this._validator = import_validator_factory.d;
    this.onBlur = () => {
      if (this.validateOn == "blur") {
        this.validate();
      }
      this.gcdsBlur.emit();
    };
    this.handleInput = (e, customEvent) => {
      const val = e.target && e.target.value;
      this.value = val;
      this.internals.setFormValue(val ? val : null);
      if (e.type === "change") {
        const changeEvt = new e.constructor(e.type, e);
        this.el.dispatchEvent(changeEvt);
      }
      customEvent.emit(this.value);
    };
    this.characterCount = void 0;
    this.cols = void 0;
    this.disabled = false;
    this.errorMessage = void 0;
    this.hideLabel = false;
    this.hint = void 0;
    this.label = void 0;
    this.name = void 0;
    this.required = false;
    this.rows = 5;
    this.textareaId = void 0;
    this.value = void 0;
    this.validator = void 0;
    this.validateOn = void 0;
    this.inheritedAttributes = {};
    this.hasError = void 0;
    this.lang = void 0;
  }
  validateDisabledTextarea() {
    if (this.required) {
      this.disabled = false;
    }
  }
  validateErrorMessage() {
    if (this.disabled) {
      this.errorMessage = "";
    } else if (!this.hasError && this.errorMessage) {
      this.hasError = true;
    } else if (this.errorMessage == "") {
      this.hasError = false;
    }
  }
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = "blur";
    }
  }
  validateHasError() {
    if (this.disabled) {
      this.hasError = false;
    }
  }
  /**
   * Call any active validators
   */
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        id: `#${this.textareaId}`,
        message: `${this.label} - ${this.errorMessage}`
      });
    } else {
      this.errorMessage = "";
      this.gcdsValid.emit({ id: `#${this.textareaId}` });
    }
  }
  submitListener(e) {
    if (e.target == this.el.closest("form")) {
      if (this.validateOn && this.validateOn != "other") {
        this.validate();
      }
      if (this.hasError) {
        e.preventDefault();
      }
    }
  }
  /*
   * Form internal functions
   */
  formResetCallback() {
    if (this.value != this.initialValue) {
      this.internals.setFormValue(this.initialValue);
      this.value = this.initialValue;
      this.shadowElement.value = this.initialValue;
    }
  }
  formStateRestoreCallback(state) {
    this.internals.setFormValue(state);
    this.value = state;
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
    this.validateDisabledTextarea();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    (0, import_validator_factory.r)(this.el, "textarea");
    if (this.validator) {
      this._validator = (0, import_validator_factory.g)(this.validator);
    }
    this.inheritedAttributes = (0, import_utils.i)(this.el, this.shadowElement, [
      "placeholder"
    ]);
    this.internals.setFormValue(this.value ? this.value : null);
    this.initialValue = this.value ? this.value : null;
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = (0, import_validator_factory.g)(this.validator);
    }
  }
  render() {
    const { characterCount, cols, disabled, errorMessage, hideLabel, hint, label, required, rows, textareaId, value, hasError, inheritedAttributes, lang, name } = this;
    const style = {
      maxWidth: `${cols * 1.5}ch`
    };
    const attrsLabel = {
      label,
      required
    };
    const attrsTextarea = Object.assign({
      name,
      disabled,
      required,
      rows
    }, inheritedAttributes);
    if (hint || errorMessage || characterCount) {
      const hintID = hint ? `hint-${textareaId} ` : "";
      const errorID = errorMessage ? `error-message-${textareaId} ` : "";
      const countID = characterCount ? `textarea__count-${textareaId} ` : "";
      attrsTextarea["aria-describedby"] = `${hintID}${errorID}${countID}${attrsTextarea["aria-describedby"] ? `${attrsTextarea["aria-describedby"]}` : ""}`;
    }
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("div", { class: `gcds-textarea-wrapper ${disabled ? "gcds-disabled" : ""} ${hasError ? "gcds-error" : ""}` }, (0, import_stencil.h)("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": textareaId, lang })), hint ? (0, import_stencil.h)("gcds-hint", { "hint-id": textareaId }, hint) : null, errorMessage ? (0, import_stencil.h)("gcds-error-message", { messageId: textareaId }, errorMessage) : null, (0, import_stencil.h)("textarea", Object.assign({}, attrsTextarea, { class: hasError ? "gcds-error" : null, id: textareaId, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: (e) => this.handleInput(e, this.gcdsInput), onChange: (e) => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${textareaId}`, "aria-invalid": errorMessage ? "true" : "false", maxlength: characterCount ? characterCount : null, style: cols ? style : null, ref: (element) => this.shadowElement = element }), value), characterCount ? (0, import_stencil.h)("gcds-text", { id: `textarea__count-${textareaId}`, "aria-live": "polite" }, value == void 0 ? `${characterCount} ${I18N[lang].characters.allowed}` : `${characterCount - value.length} ${I18N[lang].characters.left}`) : null));
  }
  static get delegatesFocus() {
    return true;
  }
  static get formAssociated() {
    return true;
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "disabled": ["validateDisabledTextarea"],
      "errorMessage": ["validateErrorMessage"],
      "validator": ["validateValidator"],
      "hasError": ["validateHasError"]
    };
  }
  static get style() {
    return GcdsTextareaStyle0;
  }
}, [81, "gcds-textarea", {
  "characterCount": [2, "character-count"],
  "cols": [2],
  "disabled": [1028],
  "errorMessage": [1025, "error-message"],
  "hideLabel": [4, "hide-label"],
  "hint": [1],
  "label": [1],
  "name": [1],
  "required": [4],
  "rows": [2],
  "textareaId": [1, "textarea-id"],
  "value": [1025],
  "validator": [1040],
  "validateOn": [1025, "validate-on"],
  "inheritedAttributes": [32],
  "hasError": [32],
  "lang": [32],
  "validate": [64]
}, [[4, "submit", "submitListener"]], {
  "disabled": ["validateDisabledTextarea"],
  "errorMessage": ["validateErrorMessage"],
  "validator": ["validateValidator"],
  "hasError": ["validateHasError"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-textarea", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-text"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-textarea":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsTextarea$1);
        }
        break;
      case "gcds-error-message":
        if (!customElements.get(tagName)) {
          (0, import_gcds_error_message2.d)();
        }
        break;
      case "gcds-hint":
        if (!customElements.get(tagName)) {
          (0, import_gcds_hint2.d)();
        }
        break;
      case "gcds-icon":
        if (!customElements.get(tagName)) {
          (0, import_gcds_icon2.d)();
        }
        break;
      case "gcds-label":
        if (!customElements.get(tagName)) {
          (0, import_gcds_label2.d)();
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
const GcdsTextarea2 = GcdsTextarea$1;
const defineCustomElement = defineCustomElement$1;
