(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[2895],{"./src/components/gcds-top-nav/stories/gcds-top-nav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Top navigation",argTypes:{label:{name:"label",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},alignment:{control:{type:"radio"},options:["right","left","center"],table:{type:{summary:"string"},defaultValue:{summary:"right"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.langProp,home:{control:{type:"text"},table:{category:"Slots | Fentes"}}}},Default=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.home?`<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> `:null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.home?`<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> `:null}\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavGroup  openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  </GcdsNavGroup>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\s\snull\n/g,"")).bind({});Default.args={label:"Top navigation",alignment:"right",home:"Home nav link",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavGroup  openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  </GcdsNavGroup>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/utils/storybook/component-properties.js":module=>{module.exports={formProps:{disabled:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},validatorProps:{validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},langProp:{lang:{control:"radio",options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}}}}}]);