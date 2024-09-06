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
var validator_factory_exports = {};
__export(validator_factory_exports, {
  d: () => defaultValidator,
  g: () => getValidator,
  r: () => requiredValidator,
  v: () => validateFieldsetElements
});
module.exports = __toCommonJS(validator_factory_exports);
var import_utils = require("./utils.js");
const defaultValidator = {
  validate: (_x) => true
};
function combineValidators(v1, v2) {
  let combined;
  combined = {
    validate: (x) => {
      const res1 = v1.validate(x);
      const res2 = v2.validate(x);
      if (!res1) {
        combined.errorMessage = v1.errorMessage;
      } else if (!res2) {
        combined.errorMessage = v2.errorMessage;
      }
      return res1 && res2;
    }
  };
  return combined;
}
function requiredValidator(element, type, subtype) {
  if (element.required) {
    switch (type) {
      case "input":
        switch (subtype) {
          case "email":
            if (element.validator) {
              element.validator.unshift("requiredEmailField");
            } else {
              element.validator = ["requiredEmailField"];
            }
            break;
          default:
            if (element.validator) {
              element.validator.unshift("requiredField");
            } else {
              element.validator = ["requiredField"];
            }
            break;
        }
        break;
      case "select":
        if (element.validator) {
          element.validator.unshift("requiredSelectField");
        } else {
          element.validator = ["requiredSelectField"];
        }
        break;
      case "textarea":
        if (element.validator) {
          element.validator.unshift("requiredField");
        } else {
          element.validator = ["requiredField"];
        }
        break;
      case "file":
        if (element.validator) {
          element.validator.unshift("requiredFileInput");
        } else {
          element.validator = ["requiredFileInput"];
        }
        break;
      case "checkbox":
        if (element.validator) {
          element.validator.unshift("requiredCheck");
        } else {
          element.validator = ["requiredCheck"];
        }
        break;
      case "fieldset":
        if (element.validator) {
          element.validator.unshift("requiredFieldset");
        } else {
          element.validator = ["requiredFieldset"];
        }
        break;
      case "date-input":
        if (element.validator) {
          element.validator.unshift("requiredDateInput");
        } else {
          element.validator = ["requiredDateInput"];
        }
        break;
    }
  }
}
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const requiredField = {
  validate: (value) => value != null && value.trim() != "",
  errorMessage: {
    en: "Enter information to continue.",
    fr: "Saisissez des renseignements pour continuer."
  }
};
const requiredEmailField = {
  validate: (value) => value != null && value.trim() != "" && (value.toLowerCase().match(emailPattern) ? true : false),
  errorMessage: {
    en: "Enter a valid email address to continue. Use a standard format. Example: name@address.ca.",
    fr: "Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca."
  }
};
const requiredFileInput = {
  validate: (value) => value.length > 0,
  errorMessage: {
    en: "You must upload a file to continue.",
    fr: "Vous devez t\xE9l\xE9verser un fichier pour continuer."
  }
};
const requiredSelectField = {
  validate: (value) => value != null && value.trim() != "",
  errorMessage: {
    en: "Choose an option to continue.",
    fr: "Choisissez une option pour continuer."
  }
};
const dateInputErrorMessage = {
  en: {
    all: "Enter the date.",
    missingmonth: "Select the month.",
    missingyear: "Enter the year.",
    missingday: "Enter the day.",
    missingmonthday: "Select the month and enter the day.",
    missingmonthyear: "Select the month and enter the year.",
    missingdayyear: "Enter the day and year.",
    invalidyearlength: "Year must be 4 digits.",
    invalidyear: "Enter a valid year.",
    invalidday: "Enter a valid day."
  },
  fr: {
    all: "Saisissez la date.",
    missingmonth: "S\xE9lectionnez un mois.",
    missingyear: "Saisissez l'ann\xE9e.",
    missingday: "Saisissez le jour.",
    missingmonthday: "Saisissez le jour et s\xE9lectionnez un mois.",
    missingmonthyear: "S\xE9lectionnez un mois et saisissez l'ann\xE9e.",
    missingdayyear: "Saisissez le jour et l'ann\xE9e.",
    invalidyearlength: "L'ann\xE9e doit inclure 4 chiffres.",
    invalidyear: "Entrez une ann\xE9e valide.",
    invalidday: "Saisissez un jour valide."
  }
};
const requiredDateInput = {
  validate: (date) => {
    if ((0, import_utils.c)(date)) {
      return { valid: true };
    }
    let splitDate = date.split("-");
    let dateObject = {
      day: splitDate[2],
      month: splitDate[1],
      year: splitDate[0]
    };
    let format = splitDate.length === 3 ? "full" : "compact";
    const error = getDateInputError(dateObject, format);
    return error;
  },
  errorMessage: dateInputErrorMessage
};
const getDateInputError = (dateValues, format) => {
  const { day, month, year } = dateValues;
  let errorResponse = {
    valid: false,
    errors: {
      day: false,
      month: false,
      year: false
    },
    reason: {
      en: "",
      fr: ""
    }
  };
  if (!day && !month && !year) {
    errorResponse.errors.day = true;
    errorResponse.errors.month = true;
    errorResponse.errors.year = true;
    errorResponse.reason.en = dateInputErrorMessage.en.all;
    errorResponse.reason.fr = dateInputErrorMessage.fr.all;
  } else if (!day && month && year) {
    errorResponse.errors.day = true;
    errorResponse.reason.en = dateInputErrorMessage.en.missingday;
    errorResponse.reason.fr = dateInputErrorMessage.fr.missingday;
  } else if (day && !month && year || !day && !month && year && format === "compact") {
    errorResponse.errors.month = true;
    errorResponse.reason.en = dateInputErrorMessage.en.missingmonth;
    errorResponse.reason.fr = dateInputErrorMessage.fr.missingmonth;
  } else if (day && month && !year || !day && month && !year && format === "compact") {
    errorResponse.errors.year = true;
    errorResponse.reason.en = dateInputErrorMessage.en.missingyear;
    errorResponse.reason.fr = dateInputErrorMessage.fr.missingyear;
  } else if (!day && !month && year) {
    errorResponse.errors.day = true;
    errorResponse.errors.month = true;
    errorResponse.reason.en = dateInputErrorMessage.en.missingmonthday;
    errorResponse.reason.fr = dateInputErrorMessage.fr.missingmonthday;
  } else if (!day && month && !year) {
    errorResponse.errors.day = true;
    errorResponse.errors.year = true;
    errorResponse.reason.en = dateInputErrorMessage.en.missingdayyear;
    errorResponse.reason.fr = dateInputErrorMessage.fr.missingdayyear;
  } else if (day && !month && !year) {
    errorResponse.errors.year = true;
    errorResponse.errors.month = true;
    errorResponse.reason.en = dateInputErrorMessage.en.missingmonthyear;
    errorResponse.reason.fr = dateInputErrorMessage.fr.missingmonthyear;
  } else if (year.length != 4) {
    errorResponse.errors.year = true;
    errorResponse.reason.en = dateInputErrorMessage.en.invalidyearlength;
    errorResponse.reason.fr = dateInputErrorMessage.fr.invalidyearlength;
  } else if (year < 0 || year > 9999) {
    errorResponse.errors.year = true;
    errorResponse.reason.en = dateInputErrorMessage.en.invalidyear;
    errorResponse.reason.fr = dateInputErrorMessage.fr.invalidyear;
  } else {
    errorResponse.errors.day = true;
    errorResponse.reason.en = dateInputErrorMessage.en.invalidday;
    errorResponse.reason.fr = dateInputErrorMessage.fr.invalidday;
  }
  return errorResponse;
};
const requiredCheck = {
  validate: (value) => value,
  errorMessage: {
    en: "You must check the box to continue.",
    fr: "Vous devez cocher la case pour continuer."
  }
};
const requiredFieldset = {
  validate: (id) => {
    const el = document.querySelector(`[fieldset-id=${id}]`);
    const elChildren = el.children;
    const isValid = validateFieldsetElements(el, elChildren);
    return !isValid.includes(false);
  },
  errorMessage: {
    en: "Choose an option to continue.",
    fr: "Choisissez une option pour continuer."
  }
};
function validateFieldsetElements(element, nodeList) {
  let isValid = [];
  for (let i = 0; i < nodeList.length; i++) {
    switch (nodeList[i].nodeName) {
      case "GCDS-FIELDSET": {
        const validFieldsetChildren = validateFieldsetElements(nodeList[i], nodeList[i].children);
        isValid = isValid.concat(validFieldsetChildren);
        break;
      }
      case "GCDS-CHECKBOX": {
        const inputName = nodeList[i].getAttribute("name");
        const sameNameInputs = element.querySelectorAll(`[name=${inputName}]`);
        let childGroupValid = false;
        if (sameNameInputs.length > 1) {
          for (let c = 0; c < sameNameInputs.length; c++) {
            if (sameNameInputs[c].hasAttribute("checked")) {
              childGroupValid = true;
            }
          }
          isValid.push(childGroupValid);
        } else {
          isValid.push(nodeList[i].hasAttribute("checked") ? true : false);
        }
        break;
      }
      case "GCDS-RADIO-GROUP": {
        const inputName = nodeList[i].getAttribute("name");
        const sameNameInputs = element.querySelector(`[name=${inputName}]`);
        const shadowInputs = sameNameInputs.shadowRoot.querySelectorAll("input");
        let childGroupValid = false;
        for (let r = 0; r < shadowInputs.length; r++) {
          if (shadowInputs[r].checked) {
            childGroupValid = true;
          }
        }
        isValid.push(childGroupValid);
        break;
      }
    }
  }
  return isValid;
}
var ValidatorsName;
(function(ValidatorsName2) {
  ValidatorsName2["requiredField"] = "requiredField";
  ValidatorsName2["requiredEmailField"] = "requiredEmailField";
  ValidatorsName2["requiredCheck"] = "requiredCheck";
  ValidatorsName2["requiredFieldset"] = "requiredFieldset";
  ValidatorsName2["requiredFileInput"] = "requiredFileInput";
  ValidatorsName2["requiredSelectField"] = "requiredSelectField";
  ValidatorsName2["requiredDateInput"] = "requiredDateInput";
})(ValidatorsName || (ValidatorsName = {}));
function getValidator(list) {
  return (list || []).map((v) => {
    if (typeof v === "string") {
      return validatorFactory(v);
    } else if (v && v.name) {
      v = v;
      return validatorFactory(v.name);
    } else {
      return v;
    }
  }).reduce(combineValidators, defaultValidator);
}
function validatorFactory(name, options) {
  switch (name) {
    case ValidatorsName.requiredField:
      return requiredField;
    case ValidatorsName.requiredEmailField:
      return requiredEmailField;
    case ValidatorsName.requiredSelectField:
      return requiredSelectField;
    case ValidatorsName.requiredCheck:
      return requiredCheck;
    case ValidatorsName.requiredFieldset:
      return requiredFieldset;
    case ValidatorsName.requiredDateInput:
      return requiredDateInput;
    case ValidatorsName.requiredFileInput:
      return requiredFileInput;
    default:
      return defaultValidator;
  }
}
