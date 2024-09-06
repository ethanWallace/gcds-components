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
var utils_exports = {};
__export(utils_exports, {
  a: () => assignLanguage,
  b: () => elementGroupCheck,
  c: () => isValidDate,
  e: () => emitEvent,
  i: () => inheritAttributes,
  l: () => logError,
  o: () => observerConfig
});
module.exports = __toCommonJS(utils_exports);
const inheritAttributes = (el, shadowElement, attributes = []) => {
  let attributeObject = {};
  for (let i = 0; i < el.attributes.length; i++) {
    const attr = el.attributes[i];
    if (attr.name.includes("aria-")) {
      attributeObject[attr.name] = attr.value;
    }
  }
  attributes.forEach((attr) => {
    if (el.hasAttribute(attr) || shadowElement && shadowElement.hasAttribute(attr)) {
      const value = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
const assignLanguage = (el) => {
  var _a;
  let lang = "";
  if (!el.getAttribute("lang")) {
    const closestLangAttribute = (_a = closestElement("[lang]", el)) === null || _a === void 0 ? void 0 : _a.getAttribute("lang");
    if (closestLangAttribute == "en" || !closestLangAttribute) {
      lang = "en";
    } else {
      lang = "fr";
    }
  } else if (el.getAttribute("lang") == "en") {
    lang = "en";
  } else {
    lang = "fr";
  }
  return lang;
};
const closestElement = (selector, el) => {
  if (el) {
    return el && el != document && typeof window != "undefined" && el != window && el.closest(selector) || closestElement(selector, el.getRootNode().host);
  }
  return null;
};
const observerConfig = {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ["lang"]
};
const elementGroupCheck = (name) => {
  let hasCheck = false;
  const element = document.querySelectorAll(`input[name=${name}]`);
  for (let i = 0; i < element.length; i++) {
    if (element[i].checked) {
      hasCheck = true;
    }
  }
  return !hasCheck;
};
const emitEvent = (e, customEvent, value) => {
  const event = customEvent.emit(value);
  if (event.defaultPrevented || e.defaultPrevented) {
    e.preventDefault();
    return false;
  }
  return true;
};
const logError = (name, errorArr, optionalAttrsArrToRemove) => {
  let engMsg = "Render error, please check required properties.";
  let frMsg = "Erreur de rendu, veuillez v\xE9rifier les propri\xE9t\xE9s requises.";
  let errors = [...errorArr];
  if (optionalAttrsArrToRemove && optionalAttrsArrToRemove.length > 0) {
    for (const optionalAttr of optionalAttrsArrToRemove) {
      if (errors.includes(optionalAttr)) {
        errors.splice(errors.indexOf(optionalAttr), 1);
      }
    }
  }
  console.error(`${name}: ${engMsg} (${errors}) | ${name}: ${frMsg} (${errors})`);
};
const isValidDate = (dateString, forceFormat) => {
  let fullregex = /^\d{4}-\d{2}-\d{2}$/;
  let compactregex = /^\d{4}-\d{2}$/;
  let format = "";
  if (fullregex.test(dateString)) {
    format = "full";
  } else if (compactregex.test(dateString)) {
    format = "compact";
  } else {
    return false;
  }
  if (forceFormat && format != forceFormat) {
    return false;
  }
  const formattedDate = `${dateString}${format === "compact" ? "-15" : ""}`;
  const [year, month, day] = formattedDate.split("-").map(Number);
  const thirtyOneDays = [1, 3, 5, 7, 8, 10, 12];
  const thirtyDays = [4, 6, 9, 11];
  if (month < 1 || month > 12) {
    return false;
  } else if (thirtyDays.includes(month) && (day < 1 || day > 30)) {
    return false;
  } else if (thirtyOneDays.includes(month) && (day < 1 || day > 31)) {
    return false;
  } else if (!isLeapYear(year) && month === 2 && (day < 1 || day > 28)) {
    return false;
  } else if (isLeapYear(year) && month === 2 && (day < 1 || day > 29)) {
    return false;
  }
  return true;
};
function isLeapYear(y) {
  return !(y & 3 || !(y % 25) && y & 15);
}
