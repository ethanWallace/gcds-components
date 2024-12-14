# element-display



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                         | Default     |
| -------- | --------- | ----------- | ---------------------------- | ----------- |
| `attrs`  | `attrs`   |             | `AttributesType[] \| string` | `undefined` |
| `events` | `events`  |             | `EventType[] \| string`      | `undefined` |
| `slots`  | `slots`   |             | `SlotType[] \| string`       | `undefined` |


## Dependencies

### Depends on

- [gcds-button](../gcds-button)
- [gcds-select](../gcds-select)
- [gcds-input](../gcds-input)
- [gcds-textarea](../gcds-textarea)

### Graph
```mermaid
graph TD;
  element-display --> gcds-button
  element-display --> gcds-select
  element-display --> gcds-input
  element-display --> gcds-textarea
  gcds-button --> gcds-icon
  gcds-select --> gcds-label
  gcds-select --> gcds-hint
  gcds-select --> gcds-error-message
  gcds-hint --> gcds-text
  gcds-error-message --> gcds-text
  gcds-error-message --> gcds-icon
  gcds-input --> gcds-label
  gcds-input --> gcds-hint
  gcds-input --> gcds-error-message
  gcds-textarea --> gcds-label
  gcds-textarea --> gcds-hint
  gcds-textarea --> gcds-error-message
  gcds-textarea --> gcds-text
  style element-display fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
