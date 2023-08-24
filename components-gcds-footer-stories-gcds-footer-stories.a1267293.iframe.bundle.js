(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[6427],{"./src/components/gcds-footer/stories/gcds-footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Footer",argTypes:{display:{control:"radio",options:["compact","full"],table:{type:{summary:"string"},defaultValue:{summary:"compact"}}},contextualHeading:{name:"contextual-heading",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},contextualLinks:{name:"contextual-links",control:"text",description:'{ "link-label": "link-href" }',table:{type:{summary:"string/object"},defaultValue:{summary:"-"}}},subLinks:{name:"sub-links",control:"text",description:'{ "link-label": "link-href" }',table:{type:{summary:"string/object"},defaultValue:{summary:"-"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.langProp}},Default=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-footer\n  ${"compact"!=args.display?`display="${args.display}"`:null}\n  ${args.contextualHeading&&args.contextualLinks?`contextual-heading="${args.contextualHeading}"`:null}\n  ${args.contextualHeading&&args.contextualLinks?`contextual-links='${args.contextualLinks}'`:null}\n  ${args.subLinks?`sub-links='${args.subLinks}'`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-footer>\n\n\x3c!-- React code --\x3e\n<GcdsFooter\n  ${"compact"!=args.display?`display="${args.display}"`:null}\n  ${args.contextualHeading&&args.contextualLinks?`contextualHeading="${args.contextualHeading}"`:null}\n  ${args.contextualHeading&&args.contextualLinks?`contextualLinks='${args.contextualLinks}'`:null}\n  ${args.subLinks?`subLinks='${args.subLinks}'`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsFooter>\n`.replace(/\s\snull\n/g,"")).bind({});Default.args={display:"full",contextualHeading:"Contextual navigation",contextualLinks:'{ "Why GC Notify": "#", "Features": "#", "Activity on GC Notify": "#" }',subLinks:"",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-footer\n  ${args.display != "compact" ? `display="${args.display}"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-heading="${args.contextualHeading}"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-links=\'${args.contextualLinks}\'` : null}\n  ${args.subLinks ? `sub-links=\'${args.subLinks}\'` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</gcds-footer>\n\n\x3c!-- React code --\x3e\n<GcdsFooter\n  ${args.display != "compact" ? `display="${args.display}"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualHeading="${args.contextualHeading}"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualLinks=\'${args.contextualLinks}\'` : null}\n  ${args.subLinks ? `subLinks=\'${args.subLinks}\'` : null}\n  ${args.lang != "en" ? `lang="${args.lang}"` : null}\n>\n</GcdsFooter>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/utils/storybook/component-properties.js":module=>{module.exports={formProps:{disabled:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}}},validatorProps:{validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},langProp:{lang:{control:"radio",options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}}}}}]);