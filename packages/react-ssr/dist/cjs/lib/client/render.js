var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var render_exports = {};
__export(render_exports, {
  render: () => render
});
module.exports = __toCommonJS(render_exports);
var import_react = __toESM(require("react"));
var import_element_internals_polyfill = require("element-internals-polyfill");
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const delFocusElements = [
  "gcds-button",
  "gcds-checkbox",
  "gcds-date-input",
  "gcds-fieldset",
  "gcds-file-uploader",
  "gcds-input",
  "gcds-radio-group",
  "gcds-select",
  "gcds-textarea"
];
function render(children) {
  return __awaiter(this, void 0, void 0, function* () {
    const container = document.createElement("div");
    renderChildren(children, container);
    document.body.appendChild(container);
    container.remove();
    return children;
  });
}
function renderChildren(children, parent) {
  for (const node of children !== null && children !== void 0 ? children : []) {
    if (typeof node.type === "string") {
      const element = createElement(node.type, node.props);
      if (element) {
        parent.appendChild(element);
        renderChildren(node.props.children, element);
        if (node.type.includes("-")) {
          const originalConnected = element.connectedCallback;
          element.connectedCallback = function() {
            originalConnected === null || originalConnected === void 0 ? void 0 : originalConnected.call(element);
            setTimeout(() => {
              var _a, _b, _c;
              if (!element.shadowRoot) {
                return;
              }
              const styles = Array.from((_a = element.shadowRoot.querySelectorAll("style")) !== null && _a !== void 0 ? _a : []);
              for (const style of styles) {
                style.textContent = minimizeCss((_b = style.textContent) !== null && _b !== void 0 ? _b : "");
              }
              renderCustomElements(element.shadowRoot);
              const templateProps = {
                shadowrootmode: (_c = element.shadowRoot.mode) !== null && _c !== void 0 ? _c : "open",
                dangerouslySetInnerHTML: {
                  __html: element.shadowRoot.innerHTML
                }
              };
              if (delFocusElements.includes(node.type)) {
                templateProps["shadowrootdelegatesfocus"] = "true";
              }
              const templateShadowRoot = import_react.default.createElement("template", templateProps);
              if (node.props.children) {
                node.props.children.unshift(templateShadowRoot);
              } else {
                node.props.children = [templateShadowRoot];
              }
              Object.assign(node.props, attributesToProps(element.attributes));
              if (typeof node.props.style === "string") {
                node.props.style = parseStyle(node.props.style);
              }
            }, 0);
          };
        }
      }
    }
  }
}
const renderCustomElements = (shadowRoot) => {
  let customElements = Array.from(shadowRoot.innerHTML.matchAll(/<([a-z0-9]+-[\w-]+)/g)).map(([, e]) => e);
  customElements = customElements.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], []);
  for (const element of customElements) {
    const elementShadowRoot = shadowRoot.querySelectorAll(element);
    for (const e of elementShadowRoot) {
      if (e === null || e === void 0 ? void 0 : e.shadowRoot) {
        const template = document.createElement("template");
        template.setAttribute("shadowrootmode", "open");
        if (delFocusElements.includes(element)) {
          template.setAttribute("shadowrootdelegatesfocus", "true");
        }
        template.innerHTML = e === null || e === void 0 ? void 0 : e.innerHTML;
        renderCustomElements(e.shadowRoot);
        e === null || e === void 0 ? void 0 : e.appendChild(template);
      }
    }
  }
};
const reservedReactProperties = /* @__PURE__ */ new Set(["children", "localName", "ref"]);
const createElement = (type, props) => {
  const element = document.createElement(type);
  for (let name in props) {
    if (reservedReactProperties.has(name)) {
      continue;
    }
    const value = props[name];
    if (name === "style") {
      if (typeof value === "string") {
        element.style.cssText = value;
      } else {
        if (value) {
          for (name in value) {
            setStyle(element.style, name, value[name]);
          }
        }
      }
    } else if (name !== "dangerouslySetInnerHTML") {
      if (name !== "width" && name !== "height" && name !== "href" && name !== "list" && name !== "form" && name !== "tabIndex" && name !== "download" && name !== "rowSpan" && name !== "colSpan" && name in element) {
        try {
          element[name] = value !== null && value !== void 0 ? value : "";
          continue;
        } catch (_a) {
        }
      }
      if (typeof value === "function") {
      } else if ((value !== null || value !== void 0) && (value !== false || name[4] === "-")) {
        element.setAttribute(name.toLowerCase(), value);
      } else {
        element.removeAttribute(name);
      }
    }
  }
  return element;
};
const IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
const setStyle = (style, key, value) => {
  if (key[0] === "-") {
    style.setProperty(key, `${value !== null && value !== void 0 ? value : ""}`);
  } else if (value === null || value === void 0) {
    style[key] = "";
  } else if (typeof value !== "number" || IS_NON_DIMENSIONAL.test(key)) {
    style[key] = value;
  } else {
    style[key] = `${value}px`;
  }
};
const attributesToProps = (attributes) => Array.from(attributes).reduce((props, { name, value }) => Object.assign(Object.assign({}, props), { [name]: value }), {});
const parseStyle = (style) => style.split(";").reduce((styles, property) => {
  const [name, value] = property.split(":");
  return Object.assign(Object.assign({}, styles), { [name.trim()]: value.trim() });
}, {});
const minimizeCss = (content) => content.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!");
