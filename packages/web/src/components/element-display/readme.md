# element-display



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                         | Default     |
| -------- | --------- | ----------- | ---------------------------- | ----------- |
| `attrs`  | `attrs`   |             | `AttributesType[] \| string` | `undefined` |


## Dependencies

### Depends on

- [gcds-select](../gcds-select)
- [gcds-input](../gcds-input)

### Graph
```mermaid
graph TD;
  element-display --> gcds-select
  element-display --> gcds-input
  gcds-select --> gcds-label
  gcds-select --> gcds-hint
  gcds-select --> gcds-error-message
  gcds-hint --> gcds-text
  gcds-error-message --> gcds-text
  gcds-error-message --> gcds-icon
  gcds-input --> gcds-label
  gcds-input --> gcds-hint
  gcds-input --> gcds-error-message
  style element-display fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
