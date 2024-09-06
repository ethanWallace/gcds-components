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
var gcds_file_uploader_exports = {};
__export(gcds_file_uploader_exports, {
  GcdsFileUploader: () => GcdsFileUploader2,
  defineCustomElement: () => defineCustomElement
});
module.exports = __toCommonJS(gcds_file_uploader_exports);
var import_stencil = require("../lib/stencil");
var import_utils = require("./utils.js");
var import_validator_factory = require("./validator.factory.js");
var import_gcds_error_message2 = require("./gcds-error-message2.js");
var import_gcds_hint2 = require("./gcds-hint2.js");
var import_gcds_icon2 = require("./gcds-icon2.js");
var import_gcds_label2 = require("./gcds-label2.js");
var import_gcds_sr_only2 = require("./gcds-sr-only2.js");
var import_gcds_text2 = require("./gcds-text2.js");
const I18N = {
  en: {
    button: {
      remove: "Remove",
      upload: "Choose file"
    },
    summary: {
      selected: "Currently selected:",
      unselected: "No file currently selected."
    },
    removeFile: "Remove file"
  },
  fr: {
    button: {
      remove: "Supprimer",
      upload: "Choisir un fichier"
    },
    summary: {
      selected: "Actuellement s\xE9lectionn\xE9:",
      unselected: "Aucun fichier actuellement s\xE9lectionn\xE9."
    },
    removeFile: "Supprimer le fichier"
  }
};
const gcdsFileUploaderCss = "@layer reset, default, input, files, disabled, error, focus, active;@layer reset{:host{display:block}:host .gcds-file-uploader-wrapper{border:0;margin:0;padding:0}:host .gcds-file-uploader-wrapper button{cursor:pointer;font:inherit;outline:0}}@layer default{:host .gcds-file-uploader-wrapper{align-items:flex-start;color:var(--gcds-file-uploader-default-text);display:flex;flex-direction:column;font:var(--gcds-file-uploader-font);max-width:90%;transition:color .15s ease-in-out}:host .gcds-file-uploader-wrapper button{border-radius:var(--gcds-file-uploader-file-button-border-radius);transition:all .15s ease-in-out}}@layer input{:host .gcds-file-uploader-wrapper .file-uploader__input{display:inline-block;position:relative}:host .gcds-file-uploader-wrapper .file-uploader__input button{background-color:var(--gcds-file-uploader-button-background);border:var(--gcds-file-uploader-button-border-width) solid var(--gcds-file-uploader-button-text);color:var(--gcds-file-uploader-button-text);font-weight:var(--gcds-file-uploader-button-font-weight);margin:var(--gcds-file-uploader-button-margin);padding:var(--gcds-file-uploader-button-padding)}:host .gcds-file-uploader-wrapper .file-uploader__input input{cursor:pointer;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%}:host .gcds-file-uploader-wrapper .file-uploader__input #file-uploader__summary{height:0;margin:0;overflow:hidden;visibility:hidden}}@layer files{:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file{align-items:center;border:var(--gcds-file-uploader-file-border-width) solid var(--gcds-file-uploader-file-border-color);cursor:pointer;display:flex;justify-content:space-between;max-width:var(--gcds-file-uploader-file-max-width);padding:var(--gcds-file-uploader-file-padding);width:100%}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file:not(:last-of-type){border-block-end:0}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file:last-of-type{margin:var(--gcds-file-uploader-button-margin)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file gcds-text{overflow:auto}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file gcds-text::part(text){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button{align-items:center;background:transparent;border:0;color:var(--gcds-file-uploader-file-button-default-text);display:flex;font-weight:var(--gcds-file-uploader-button-font-weight);margin:var(--gcds-file-uploader-file-button-margin);padding:var(--gcds-file-uploader-file-button-padding)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus) span{overflow:visible;text-decoration:underline var(--gcds-file-uploader-file-button-default-decoration-thickness);text-underline-offset:var(\n          --gcds-file-uploader-file-button-underline-offset\n        )}}@layer disabled{:host .gcds-file-uploader-wrapper.gcds-disabled{color:var(--gcds-file-uploader-disabled-text)}:host .gcds-file-uploader-wrapper.gcds-disabled :is(.file-uploader__input,.file-uploader__uploaded-file){pointer-events:none}:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__input button,:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__uploaded-file,:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__uploaded-file button{color:inherit}:host .gcds-file-uploader-wrapper.gcds-disabled .file-uploader__input button{background-color:var(--gcds-file-uploader-disabled-background);border-color:currentColor}}@layer error{:host .gcds-file-uploader-wrapper.gcds-error .file-uploader__uploaded-file{border-color:var(--gcds-file-uploader-file-danger-border-color)}}@layer hover{@media (hover:hover){:host .gcds-file-uploader-wrapper .file-uploader__input:not(:focus-within):hover button{background-color:var(--gcds-file-uploader-hover-button-background)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus):hover{color:var(--gcds-file-uploader-file-button-hover-text)}:host .gcds-file-uploader-wrapper .file-uploader__uploaded-file button:not(:focus):hover span{text-decoration-thickness:var(\n            --gcds-file-uploader-file-button-hover-decoration-thickness\n          )}}}@layer focus{:host .gcds-file-uploader-wrapper:focus-within{color:var(--gcds-file-uploader-focus-text)}:host .gcds-file-uploader-wrapper:focus-within .file-uploader__uploaded-file:focus-within{border-color:var(--gcds-file-uploader-file-focus-border-color)}:host .gcds-file-uploader-wrapper:focus-within .file-uploader__input:focus-within button,:host .gcds-file-uploader-wrapper:focus-within .file-uploader__uploaded-file button:focus{background-color:var(--gcds-file-uploader-focus-button-background);border-color:var(--gcds-file-uploader-focus-button-background);color:var(--gcds-file-uploader-focus-button-text);outline:var(--gcds-file-uploader-button-outline-width) solid var(--gcds-file-uploader-focus-button-background);outline-offset:var(--gcds-file-uploader-focus-button-outline-offset)}}@layer active{:host .gcds-file-uploader-wrapper .file-uploader__input:has(input:active) button{background-color:var(--gcds-file-uploader-active-button-background);border-color:var(--gcds-file-uploader-active-button-background);color:var(--gcds-file-uploader-active-button-text)}}";
const GcdsFileUploaderStyle0 = gcdsFileUploaderCss;
const GcdsFileUploader$1 = /* @__PURE__ */ (0, import_stencil.proxyCustomElement)(class GcdsFileUploader extends import_stencil.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.gcdsFocus = (0, import_stencil.createEvent)(this, "gcdsFocus", 7);
    this.gcdsBlur = (0, import_stencil.createEvent)(this, "gcdsBlur", 7);
    this.gcdsChange = (0, import_stencil.createEvent)(this, "gcdsChange", 7);
    this.gcdsInput = (0, import_stencil.createEvent)(this, "gcdsInput", 7);
    this.gcdsRemoveFile = (0, import_stencil.createEvent)(this, "gcdsRemoveFile", 7);
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
      const filesContainer = [];
      const files = Array.from(e.target.files);
      files.map((file) => {
        filesContainer.push(file["name"]);
      });
      this.addFilesToFormData(files);
      this.value = [...filesContainer];
      if (this.validateOn == "blur") {
        setTimeout(() => {
          this.validate();
        }, 100);
      }
      if (e.type === "change") {
        const changeEvt = new e.constructor(e.type, e);
        this.el.dispatchEvent(changeEvt);
      }
      customEvent.emit(this.value);
    };
    this.removeFile = (e) => {
      e.preventDefault();
      const fileName = e.target.closest(".file-uploader__uploaded-file").childNodes[0].textContent;
      const filesContainer = this.value;
      const file = filesContainer.indexOf(fileName);
      if (file > -1) {
        filesContainer.splice(file, 1);
        const dt = new DataTransfer();
        for (let f = 0; f < this.shadowElement.files.length; f++) {
          if (this.shadowElement.files[f].name != fileName) {
            dt.items.add(this.shadowElement.files[f]);
          }
        }
        this.shadowElement.files = dt.files;
        this.addFilesToFormData(this.shadowElement.files);
      }
      this.value = [...filesContainer];
      this.gcdsRemoveFile.emit(this.value);
    };
    this.addFilesToFormData = (files) => {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append(this.name, file, file.name);
      });
      this.internals.setFormValue(formData);
    };
    this.uploaderId = void 0;
    this.name = void 0;
    this.label = void 0;
    this.required = false;
    this.disabled = false;
    this.value = [];
    this.accept = void 0;
    this.multiple = void 0;
    this.errorMessage = void 0;
    this.hint = void 0;
    this.validator = void 0;
    this.validateOn = void 0;
    this.hasError = void 0;
    this.inheritedAttributes = {};
    this.lang = void 0;
  }
  validateDisabledSelect() {
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
    if (!this._validator.validate(this.shadowElement.files) && this._validator.errorMessage) {
      this.errorMessage = this._validator.errorMessage[this.lang];
      this.gcdsError.emit({
        id: `#${this.uploaderId}`,
        message: `${this.label} - ${this.errorMessage}`
      });
    } else {
      this.errorMessage = "";
      this.gcdsValid.emit({ id: `#${this.uploaderId}` });
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
    this.internals.setFormValue("");
    this.value = [];
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
    this.validateDisabledSelect();
    this.validateHasError();
    this.validateErrorMessage();
    this.validateValidator();
    (0, import_validator_factory.r)(this.el, "file");
    if (this.validator) {
      this._validator = (0, import_validator_factory.g)(this.validator);
    }
    this.inheritedAttributes = (0, import_utils.i)(this.el, this.shadowElement);
  }
  componentWillUpdate() {
    if (this.validator) {
      this._validator = (0, import_validator_factory.g)(this.validator);
    }
  }
  render() {
    const { accept, disabled, errorMessage, hasError, hint, label, lang, multiple, name, required, uploaderId, value, inheritedAttributes } = this;
    const attrsInput = Object.assign(Object.assign({
      accept,
      disabled,
      multiple,
      name,
      required,
      value
    }, inheritedAttributes), { "aria-describedby": `${inheritedAttributes["aria-describedby"] ? `${inheritedAttributes["aria-describedby"]} ` : ""}file-uploader__summary` });
    const attrsLabel = {
      label,
      required
    };
    if (hint || errorMessage) {
      const hintID = hint ? `hint-${uploaderId} ` : "";
      const errorID = errorMessage ? `error-message-${uploaderId} ` : "";
      attrsInput["aria-describedby"] = `${hintID}${errorID}${attrsInput["aria-describedby"]}`;
    }
    return (0, import_stencil.h)(import_stencil.Host, null, (0, import_stencil.h)("div", { class: `gcds-file-uploader-wrapper ${disabled ? "gcds-disabled" : ""} ${hasError ? "gcds-error" : ""}` }, (0, import_stencil.h)("gcds-label", Object.assign({}, attrsLabel, { "label-for": uploaderId, lang })), hint ? (0, import_stencil.h)("gcds-hint", { "hint-id": uploaderId }, hint) : null, errorMessage ? (0, import_stencil.h)("gcds-error-message", { messageId: uploaderId }, errorMessage) : null, (0, import_stencil.h)("div", { class: `file-uploader__input ${value.length > 0 ? "uploaded-files" : ""}` }, (0, import_stencil.h)("button", { type: "button", tabindex: "-1", onClick: () => this.shadowElement.click() }, I18N[lang].button.upload), (0, import_stencil.h)("input", Object.assign({ type: "file", id: uploaderId }, attrsInput, { onBlur: () => this.onBlur(), onFocus: () => this.gcdsFocus.emit(), onInput: (e) => this.handleInput(e, this.gcdsInput), onChange: (e) => this.handleInput(e, this.gcdsChange), "aria-invalid": hasError ? "true" : "false", ref: (element) => this.shadowElement = element })), value.length > 0 ? (0, import_stencil.h)("gcds-sr-only", { id: "file-uploader__summary" }, (0, import_stencil.h)("span", null, I18N[lang].summary.selected, " "), value.map((file) => (0, import_stencil.h)("span", null, file, " "))) : (0, import_stencil.h)("gcds-sr-only", { id: "file-uploader__summary" }, I18N[lang].summary.unselected)), value.length > 0 ? value.map((file) => (0, import_stencil.h)("div", { class: "file-uploader__uploaded-file", "aria-label": `${I18N[lang].removeFile} ${file}.` }, (0, import_stencil.h)("gcds-text", { "margin-bottom": "0" }, file), (0, import_stencil.h)("button", { onClick: (e) => this.removeFile(e) }, (0, import_stencil.h)("span", null, I18N[lang].button.remove), (0, import_stencil.h)("gcds-icon", { name: "times", size: "text", "margin-left": "200" })))) : null));
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
      "disabled": ["validateDisabledSelect"],
      "errorMessage": ["validateErrorMessage"],
      "validator": ["validateValidator"],
      "hasError": ["validateHasError"]
    };
  }
  static get style() {
    return GcdsFileUploaderStyle0;
  }
}, [81, "gcds-file-uploader", {
  "uploaderId": [1537, "uploader-id"],
  "name": [1],
  "label": [513],
  "required": [516],
  "disabled": [1540],
  "value": [1040],
  "accept": [513],
  "multiple": [516],
  "errorMessage": [1537, "error-message"],
  "hint": [513],
  "validator": [1040],
  "validateOn": [1025, "validate-on"],
  "hasError": [32],
  "inheritedAttributes": [32],
  "lang": [32],
  "validate": [64]
}, [[4, "submit", "submitListener"]], {
  "disabled": ["validateDisabledSelect"],
  "errorMessage": ["validateErrorMessage"],
  "validator": ["validateValidator"],
  "hasError": ["validateHasError"]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gcds-file-uploader", "gcds-error-message", "gcds-hint", "gcds-icon", "gcds-label", "gcds-sr-only", "gcds-text"];
  components.forEach((tagName) => {
    switch (tagName) {
      case "gcds-file-uploader":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, GcdsFileUploader$1);
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
const GcdsFileUploader2 = GcdsFileUploader$1;
const defineCustomElement = defineCustomElement$1;
