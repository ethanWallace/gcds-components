import { Component, Host, h, Prop, Watch, Element, State } from '@stencil/core';
import Prism from 'prismjs';
import prettier from 'prettier';
import prettierPluginHTML from 'prettier/plugins/html';

export type AttributesType = {
  name: string;
  control: 'select' | 'text' | 'none';
  options?: Array<string>;
  required?: boolean;
  defaultValue?: string;
  type?: string;
  onlyProperty?: boolean;
};

export type SlotType = {
  name: string;
  description: string;
};

export type EventType = {
  name: string;
  description: string;
  details: string | object;
};

@Component({
  tag: 'element-display',
  styleUrls: ['element-display.css', 'prism.css'],
  shadow: true,
})
export class ElementDisplay {
  @Element() el: HTMLElement;

  private displayElement?: Element;
  private htmlCodePreview?: HTMLElement;
  private reactCodePreview?: HTMLElement;

  private attributeObject;
  private slotObject;
  private eventObject;

  @Prop() attrs?: string | Array<AttributesType>;
  @Watch('attrs')
  validateAttrs() {
    if (typeof this.attrs == 'object') {
      this.attributeObject = this.attrs;
    } else if (typeof this.attrs == 'string') {
      this.attributeObject = JSON.parse(this.attrs);
    }
  }

  @Prop() slots?: string | Array<SlotType>;
  @Watch('slots')
  validateSlots() {
    if (typeof this.slots == 'object') {
      this.slotObject = this.slots;
    } else if (typeof this.slots == 'string') {
      this.slotObject = JSON.parse(this.slots);
    }
  }

  @Prop() events?: string | Array<EventType>;
  @Watch('events')
  validateEvents() {
    if (typeof this.events == 'object') {
      this.eventObject = this.events;
    } else if (typeof this.events == 'string') {
      this.eventObject = JSON.parse(this.events);
    }
  }

  @State() display: string = 'attr';

  /////// Attribute changes

  private handleAttrInput = e => {
    // this.displayElement[e.target.name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = e.target.value;
    this.displayElement.setAttribute(e.target.name, e.target.value);
    this.formatCodePreview();
  };

  /////// Slot changes

  private handleSlotInput = e => {
    if (e.target.name === 'default') {
      this.displayElement.innerHTML = this.displayElement.innerHTML.replace(
        this.displayElement.innerHTML,
        e.target.value,
      );
    }

    this.formatCodePreview();
  };

  private getSlotValue(name) {
    if (name === 'default') {
      return this.displayElement.innerHTML;
    }
  }

  //////// Code preview

  private convertToReact(str) {
    let react = str.replace(
      /"([^"]*)"|(\b[a-z]+(?:-[a-z]+)+\b)/g,
      (match, quoted, kebab) => {
        if (quoted) return `"${quoted}"`;

        if (kebab) {
          return kebab.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
        }

        return match;
      },
    );

    return react.replace('<g', '<G').replace('</g', '</G');
  }

  private removeUnwantedAttributes(html) {
    const regex = /\s*(aria-[a-z\-]+|class|(?<!-)\brole\b)="[^"]*"/g;
    return html.replace(regex, '');
  }

  private async formatCodePreview() {
    const code = await prettier.format(
      this.removeUnwantedAttributes(this.el.innerHTML),
      { parser: 'html', plugins: [prettierPluginHTML] },
    );
    const react = this.convertToReact(code);

    this.htmlCodePreview.innerHTML = Prism.highlight(
      code,
      Prism.languages.html,
      'html',
    );
    this.reactCodePreview.innerHTML = Prism.highlight(
      react,
      Prism.languages.html,
      'html',
    );
  }

  async componentWillLoad() {
    this.validateAttrs();
    this.validateSlots();
    this.validateEvents();

    this.displayElement = this.el.children[0];
  }

  async componentDidLoad() {
    this.formatCodePreview();
  }

  render() {
    return (
      <Host>
        <div class="display-frame">
          <slot></slot>
        </div>

        <div class="code-frame">
          <pre class="language-html">
            <code
              id="html"
              ref={element => (this.htmlCodePreview = element as HTMLElement)}
            ></code>
          </pre>
          <pre class="language-html">
            <code
              id="react"
              ref={element => (this.reactCodePreview = element as HTMLElement)}
            ></code>
          </pre>
        </div>

        <table class="attributes">
          <tr>
            <th>Attributes</th>
            <th>Type</th>
            <th>Default value</th>
            <th>Control</th>
          </tr>
          {this.attributeObject &&
            this.attributeObject.map(attr => {
              let control = '';

              let displayValue =
                this.displayElement.getAttribute(attr.name) != null
                  ? this.displayElement.getAttribute(attr.name)
                  : attr?.defaultValue;

              if (attr.control === 'select') {
                const options = JSON.parse(attr.options);
                // console.log(options);
                control = (
                  <gcds-select
                    label={attr.name}
                    selectId={attr.name}
                    name={attr.name}
                    value={displayValue}
                    onInput={e => this.handleAttrInput(e)}
                    onChange={e => this.handleAttrInput(e)}
                  >
                    {options.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </gcds-select>
                );
              } else if (attr.control === 'text') {
                control = (
                  <gcds-input
                    name={attr.name}
                    label={attr.name}
                    inputId={attr.name}
                    hide-label
                    type="text"
                    value={displayValue}
                    onInput={e => this.handleAttrInput(e)}
                    onChange={e => this.handleAttrInput(e)}
                  ></gcds-input>
                );
              }

              return (
                <tr>
                  <td>{attr.name}</td>
                  <td>{attr.type}</td>
                  <td>{attr?.defaultValue}</td>
                  <td>{control}</td>
                </tr>
              );
            })}
        </table>

        {this.slotObject && (
          <table class="slots">
            <caption>
              Slots allow passing text or patterns to the component.
            </caption>
            <tr>
              <th>Slot name</th>
              <th>Description</th>
              <th>Control</th>
            </tr>

            {this.slotObject.map(slot => {
              const controlValue = this.getSlotValue(slot.name);
              const control = (
                <gcds-textarea
                  label={slot.name}
                  textareaId={slot.name}
                  name={slot.name}
                  hideLabel
                  value={controlValue}
                  onInput={e => this.handleSlotInput(e)}
                  onChange={e => this.handleSlotInput(e)}
                ></gcds-textarea>
              );
              return (
                <tr>
                  <td>{slot.name}</td>
                  <td>{slot.description}</td>
                  <td>{control}</td>
                </tr>
              );
            })}
          </table>
        )}

        {this.eventObject && (
          <table class="events">
            <caption>Custom events the component has</caption>
            <tr>
              <th>Event name</th>
              <th>Description</th>
              <th>Details</th>
            </tr>

            {this.eventObject.map(event => {
              return (
                <tr>
                  <td>{event.name}</td>
                  <td>{event.description}</td>
                  <td>{event.details}</td>
                </tr>
              );
            })}
          </table>
        )}
      </Host>
    );
  }
}
