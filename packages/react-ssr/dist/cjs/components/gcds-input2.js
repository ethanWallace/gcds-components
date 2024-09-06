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
var gcds_input2_exports = {};
__export(gcds_input2_exports, {
  G: () => GcdsInput,
  d: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_input2_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_validator_factory = require("./validator.factory.js");
var import_gcds_error_message2 = require("./gcds-error-message2.js");
var import_gcds_hint2 = require("./gcds-hint2.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_label2 = require("./gcds-label2.js");
var import_gcds_text2 = require("./gcds-text2.js");
const gcdsInputCss = "@layer reset, default, disabled, error, focus;@layer reset{:host{display:block}:host .gcds-input-wrapper{border:0;margin:0;padding:0}:host .gcds-input-wrapper input{box-sizing:border-box}}@layer default{:host .gcds-input-wrapper{color:var(--gcds-input-default-text);font:var(--gcds-input-font);max-width:75ch;transition:color .15s ease-in-out;width:100%}:host .gcds-input-wrapper input{background-color:var(--gcds-input-default-background);background-image:none;border:var(--gcds-input-border-width) solid;border-radius:var(--gcds-input-border-radius);color:var(--gcds-input-default-text);display:block;font:inherit!important;height:auto;margin:var(--gcds-input-margin)!important;max-width:100%;min-height:var(--gcds-input-min-width-and-height);min-width:var(--gcds-input-min-width-and-height);padding:var(--gcds-input-padding)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,outline .15s ease-in-out;width:100%}:host .gcds-input-wrapper input[type=number]{-moz-appearance:textfield}:host .gcds-input-wrapper input[type=number]::-webkit-inner-spin-button,:host .gcds-input-wrapper input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}}@layer disabled{:host .gcds-input-wrapper.gcds-disabled{color:var(--gcds-input-disabled-text)}:host .gcds-input-wrapper.gcds-disabled input:disabled{background-color:var(--gcds-input-disabled-background);border-color:var(--gcds-input-disabled-text);cursor:not-allowed}}@layer error{:host .gcds-input-wrapper input.gcds-error:not(:focus){border-color:var(--gcds-input-danger-border)}}@layer focus{:host .gcds-input-wrapper:focus-within{color:var(--gcds-input-focus-text)}:host .gcds-input-wrapper:focus-within input:focus{border-color:var(--gcds-input-focus-text);box-shadow:var(--gcds-input-focus-box-shadow);outline:var(--gcds-input-outline-width) solid var(--gcds-input-focus-text);outline-offset:var(--gcds-input-border-width)}}";
const GcdsInputStyle0 = gcdsInputCss;
const GcdsInput = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsInput2 extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = (0, import_stencil.createEvent)(this, "gcdsFocus", 7);
    this.gcdsBlur = (0, import_stencil.createEvent)(this, "gcdsBlur", 7);
    this.gcdsInput = (0, import_stencil.createEvent)(this, "gcdsInput", 7);
    this.gcdsChange = (0, import_stencil.createEvent)(this, "gcdsChange", 7);
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
    this.disabled = false;
    this.errorMessage = void 0;
    this.hideLabel = false;
    this.hint = void 0;
    this.inputId = void 0;
    this.name = void 0;
    this.label = void 0;
    this.required = false;
    this.size = void 0;
    this.type = "text";
    this.value = void 0;
    this.autocomplete = void 0;
    this.validator = void 0;
    this.validateOn = void 0;
    this.inheritedAttributes = {};
    this.hasError = void 0;
    this.lang = void 0;
  }
  validateDisabledInput() {
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
   * Watch HTML attributes to inherit changes
   */
  ariaInvalidWatcher() {
    this.inheritedAttributes = (0, import_utils.i)(this.el, this.shadowElement, [
      "placeholder"
    ]);
  }
  ariaDescriptiondWatcher() {
    this.inheritedAttributes = (0, import_utils.i)(this.el, this.shadowElement, [
      "placeholder"
    ]);
  }
  /**
   * Call any active validators
   */
  async validate() {
    if (!this._validator.validate(this.value) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        id: `#${this.inputId}`,
        message: `${this.label} - ${this.errorMessage}`
      });
    } else {
      this.errorMessage = "";
      this.gcdsValid.emit({ id: `#${this.inputId}` });
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
  keyDownListener(e) {
    if (e.target == this.el && e.key === "Enter") {
      const formButton = document.createElement("button");
      formButton.type = "submit";
      formButton.style.display = "none";
      this.el.closest("form").appendChild(formButton);
      formButton.click();
      formButton.remove();
    }
  }
  /*
   * Form internal functions
   */
  formResetCallback() {
    if (this.value != this.initialValue) {
      this.internals.setFormValue(this.initialValue);
      this.value = this.initialValue;
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
    this.validateDisabledInput();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    (0, import_validator_factory.r)(this.el, "input", this.type);
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
    const { disabled, errorMessage, hideLabel, hint, inputId, name, label, required, size, type, value, hasError, autocomplete, inheritedAttributes, lang } = this;
    const style = {
      maxWidth: `calc(${size * 2}ch + (2 * var(--gcds-input-padding)))`
    };
    const attrsInput = Object.assign({
      disabled,
      required,
      type,
      value,
      autocomplete
    }, inheritedAttributes);
    const attrsLabel = {
      label,
      required
    };
    if (hint || errorMessage) {
      const hintID = hint ? `hint-${inputId} ` : "";
      const errorID = errorMessage ? `error-message-${inputId} ` : "";
      attrsInput["aria-describedby"] = `${hintID}${errorID}${attrsInput["aria-describedby"] ? ` ${attrsInput["aria-describedby"]}` : ""}`;
    }
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("div", { class: `gcds-input-wrapper ${disabled ? "gcds-disabled" : ""} ${hasError ? "gcds-error" : ""}` }, (0, import_stencil.h)("gcds-label", Object.assign({}, attrsLabel, { "hide-label": hideLabel, "label-for": inputId, lang })), hint ? (0, import_stencil.h)("gcds-hint", { "hint-id": inputId }, hint) : null, errorMessage ? (0, import_stencil.h)("gcds-error-message", { messageId: inputId }, errorMessage) : null, (0, import_stencil.h)("input", Object.assign({}, attrsInput, { class: hasError ? "gcds-error" : null, id: inputId, name, onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: (e) => this.handleInput(e, this.gcdsInput), onChange: (e) => this.handleInput(e, this.gcdsChange), "aria-labelledby": `label-for-${inputId}`, "aria-invalid": inheritedAttributes["aria-invalid"] === "true" ? inheritedAttributes["aria-invalid"] : errorMessage ? "true" : "false", size, style: size ? style : null, part: "input", ref: (element) => this.shadowElement = element }))));
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
      "disabled": ["validateDisabledInput"],
      "errorMessage": ["validateErrorMessage"],
      "validator": ["validateValidator"],
      "hasError": ["validateHasError"],
      "aria-invalid": ["ariaInvalidWatcher"],
      "aria-description": ["ariaDescriptiondWatcher"]
    };
  }
  static get style() {
    return GcdsInputStyle0;
  }
}, [81, "gcds-input", {
  "disabled": [1028],
  "errorMessage": [1025, "error-message"],
  "hideLabel": [4, "hide-label"],
  "hint": [1],
  "inputId": [1, "input-id"],
  "name": [1],
  "label": [1],
  "required": [4],
  "size": [2],
  "type": [1],
  "value": [1025],
  "autocomplete": [1],
  "validator": [1040],
  "validateOn": [1025, "validate-on"],
  "inheritedAttributes": [32],
  "hasError": [32],
  "lang": [32],
  "validate": [64]
}, [[4, "submit", "submitListener"], [4, "keydown", "keyDownListener"]], {
  "disabled": ["validateDisabledInput"],
  "errorMessage": ["validateErrorMessage"],
  "validator": ["validateValidator"],
  "hasError": ["validateHasError"],
  "aria-invalid": ["ariaInvalidWatcher"],
  "aria-description": ["ariaDescriptiondWatcher"]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-input", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-text"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-input":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsInput);
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
