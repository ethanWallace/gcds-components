/*! For license information please see Welcome-mdx.ee070662.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[5340],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./stories/Welcome.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",h1:"h1",h3:"h3",p:"p",...(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Welcome"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:"\n    p {\n      max-width: 75ch;\n    }\n\n    #storybook-docs > .sbdocs-wrapper {\n      position: relative;\n      padding-block-start: 424px;\n    }\n\n    #storybook-docs > .sbdocs-wrapper:before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block;\n      width: 100%;\n      height: 400px;\n      margin: 0;\n      overflow: hidden;\n      content: 'Image credit: John Lee, https://unsplash.com/photos/oMneOBYhJxY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink';\n      background: url(https://design-system.alpha.canada.ca/images/common/home/home-hero.jpg) top center no-repeat;\n      background-size: cover;\n      color: transparent;\n    }\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"welcome-to-gc-design-system",children:"Welcome to GC Design System"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This is an internal tool for the GCDS team."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"intro-boxes",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("gcds-grid",{tag:"ul",columns:"1fr","columns-tablet":"1fr 1fr",gap:"400",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"component-overview",children:"Component overview"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Select reusable code for common components, paired with best practice advice, for the framework you're using."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Coming soon"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"documentation",children:"Documentation"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"GC Design System pairs code with designs and guidance based on federal standards and accessibility best practice."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-button",{type:"link","button-style":"text-only",href:"https://design-system.alpha.canada.ca/",target:"_blank",children:"Get guidance"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"github",children:"GitHub"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Want to dive into the code? Take a look around our ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"gcds-components"})," repo."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-button",{type:"link","button-style":"text-only",href:"https://github.com/cds-snc/gcds-components",target:"_blank",children:"Go to GitHub"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"figma",children:"Figma"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Visit our Figma library to explore design assets."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-button",{type:"link","button-style":"text-only",href:"https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?node-id=4-1006&t=FZkRe6WFeQsdh3B2-0",target:"_blank",children:"Start designing"})]})]})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);