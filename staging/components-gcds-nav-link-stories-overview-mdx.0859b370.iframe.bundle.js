/*! For license information please see components-gcds-nav-link-stories-overview-mdx.0859b370.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[3603,961],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/gcds-nav-link/stories/overview.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_packages_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_gcds_nav_link_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-nav-link/stories/gcds-nav-link.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",code:"code",h2:"h2",h3:"h3",h4:"h4"},(0,_home_runner_work_gcds_components_gcds_components_packages_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_nav_link_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h1,{id:"navlinkgcds-nav-link",children:["NavLink",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<gcds-nav-link>"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_nav_link_stories__WEBPACK_IMPORTED_MODULE_2__.Default,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"state",children:"State"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_nav_link_stories__WEBPACK_IMPORTED_MODULE_2__.Default,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"current",children:"Current"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_nav_link_stories__WEBPACK_IMPORTED_MODULE_2__.Current,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"in-top-navigation",children:"In top navigation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"default-1",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_nav_link_stories__WEBPACK_IMPORTED_MODULE_2__.DefaultTopNav,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"current-1",children:"Current"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_nav_link_stories__WEBPACK_IMPORTED_MODULE_2__.CurrentTopNav,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"resources",children:"Resources"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-button",{type:"link","button-style":"text-only",href:"https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-nav-link",target:"_blank",children:"Github"})})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_gcds_components_gcds_components_packages_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/gcds-nav-link/stories/gcds-nav-link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Current:()=>Current,CurrentTopNav:()=>CurrentTopNav,Default:()=>Default,DefaultTopNav:()=>DefaultTopNav,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Navigation link",argTypes:{href:{name:"href",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},current:{name:"current",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},default:{control:{type:"text"},table:{category:"Slots | Fentes"}}}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-nav-link\n  href="${args.href}"\n  ${args.current?"current":null}\n>\n  ${args.default}\n</gcds-nav-link>\n\n\x3c!-- React code --\x3e\n<GcdsNavLink\n  href="${args.href}"\n  ${args.current?"current":null}\n>\n  ${args.default}\n</GcdsNavLink>\n`.replace(/\s\snull\n/g,""),TemplateTopNav=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav label="Top nav example">\n  <gcds-nav-link\n    href="${args.href}"\n    ${args.current?"current":null}\n  >\n    ${args.default}\n  </gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav label="Top nav example">\n  <GcdsNavLink\n    href="${args.href}"\n    ${args.current?"current":null}\n  >\n    ${args.default}\n  </GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={href:"#link",current:!1,default:"Nav link"};const Props=Template.bind({});Props.args={href:"#link",current:!1,default:"Nav link"};const Current=Template.bind({});Current.args={href:"#link",current:!0,default:"Nav link"};const DefaultTopNav=TemplateTopNav.bind({});DefaultTopNav.args={href:"#link",current:!1,default:"Nav link"};const CurrentTopNav=TemplateTopNav.bind({});CurrentTopNav.args={href:"#link",current:!0,default:"Nav link"};const Playground=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-nav-link\n  href="${args.href}"\n  ${args.current?"current":null}\n>\n  ${args.default}\n</gcds-nav-link>\n`.replace(/\s\snull\n/g,"")).bind({});Playground.args={href:"#link",current:!1,default:"Nav link"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-nav-link\n  href="${args.href}"\n  ${args.current ? `current` : null}\n>\n  ${args.default}\n</gcds-nav-link>\n\n\x3c!-- React code --\x3e\n<GcdsNavLink\n  href="${args.href}"\n  ${args.current ? `current` : null}\n>\n  ${args.default}\n</GcdsNavLink>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-nav-link\n  href="${args.href}"\n  ${args.current ? `current` : null}\n>\n  ${args.default}\n</gcds-nav-link>\n\n\x3c!-- React code --\x3e\n<GcdsNavLink\n  href="${args.href}"\n  ${args.current ? `current` : null}\n>\n  ${args.default}\n</GcdsNavLink>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Current.parameters={...Current.parameters,docs:{...Current.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-nav-link\n  href="${args.href}"\n  ${args.current ? `current` : null}\n>\n  ${args.default}\n</gcds-nav-link>\n\n\x3c!-- React code --\x3e\n<GcdsNavLink\n  href="${args.href}"\n  ${args.current ? `current` : null}\n>\n  ${args.default}\n</GcdsNavLink>\n`.replace(/\\s\\snull\\n/g, \'\')',...Current.parameters?.docs?.source}}},DefaultTopNav.parameters={...DefaultTopNav.parameters,docs:{...DefaultTopNav.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav label="Top nav example">\n  <gcds-nav-link\n    href="${args.href}"\n    ${args.current ? `current` : null}\n  >\n    ${args.default}\n  </gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav label="Top nav example">\n  <GcdsNavLink\n    href="${args.href}"\n    ${args.current ? `current` : null}\n  >\n    ${args.default}\n  </GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...DefaultTopNav.parameters?.docs?.source}}},CurrentTopNav.parameters={...CurrentTopNav.parameters,docs:{...CurrentTopNav.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav label="Top nav example">\n  <gcds-nav-link\n    href="${args.href}"\n    ${args.current ? `current` : null}\n  >\n    ${args.default}\n  </gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav label="Top nav example">\n  <GcdsNavLink\n    href="${args.href}"\n    ${args.current ? `current` : null}\n  >\n    ${args.default}\n  </GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...CurrentTopNav.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-nav-link\n  href=\"${args.href}\"\n  ${args.current ? `current` : null}\n>\n  ${args.default}\n</gcds-nav-link>\n`.replace(/\\s\\snull\\n/g, '')",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Props","Current","DefaultTopNav","CurrentTopNav","Playground"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);