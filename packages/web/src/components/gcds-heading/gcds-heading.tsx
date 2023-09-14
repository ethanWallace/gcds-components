import { Component, Element, Host, Watch, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-heading',
  styleUrl: 'gcds-heading.css',
  shadow: false,
  scoped: true,
})
export class GcdsHeading {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Sets the appropriate HTML tag for the selected level.
   */
  @Prop({ mutable: true }) tag!: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  @Watch('tag')
  validateTag(newValue: string) {
    const values = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    if (!values.includes(newValue)) {
      console.error('Not a valid tag.');
    }
  }

  /**
   * Sets the line length to a maximum amount of characters per line for
   * each heading level, ensuring a comfortable, accessible reading length.
   */
  @Prop() characterLimit?: boolean = true;

  /**
   * Adds an optional red border below a H1 heading.
   */
  @Prop({ mutable: true }) h1Border?: 'subtle' | 'strong' | 'none' = 'none';

  @Watch('h1Border')
  validateH1Border(newValue: string) {
    const values = ['subtle', 'strong', 'none'];

    if (!values.includes(newValue)) {
      this.h1Border = 'none';
    }
  }

  /**
   * Adds margin above the heading.
   */
  @Prop({ mutable: true }) marginTop?:
    | '0'
    | '50'
    | '100'
    | '150'
    | '200'
    | '250'
    | '300'
    | '400'
    | '450'
    | '500'
    | '550'
    | '600'
    | '700'
    | '800'
    | '900'
    | '1000';

  @Watch('marginTop')
  validateMarginTop(newValue: string) {
    const values = [
      '0',
      '50',
      '100',
      '150',
      '200',
      '250',
      '300',
      '400',
      '450',
      '500',
      '550',
      '600',
      '700',
      '800',
      '900',
      '1000',
    ];

    if (this.marginTop && !values.includes(newValue)) {
      console.error('Not a valid margin.');
    }
  }

  /**
   * Adds margin below the heading.
   */
  @Prop({ mutable: true }) marginBottom?:
    | '0'
    | '50'
    | '100'
    | '150'
    | '200'
    | '250'
    | '300'
    | '400'
    | '450'
    | '500'
    | '550'
    | '600'
    | '700'
    | '800'
    | '900'
    | '1000';

  @Watch('marginBottom')
  validateMarginBottom(newValue: string) {
    const values = [
      '0',
      '50',
      '100',
      '150',
      '200',
      '250',
      '300',
      '400',
      '450',
      '500',
      '550',
      '600',
      '700',
      '800',
      '900',
      '1000',
    ];

    if (this.marginBottom && !values.includes(newValue)) {
      console.error('Not a valid margin.');
    }
  }

  componentWillLoad() {
    // Validate attributes and set defaults
    this.validateTag(this.tag);
    this.validateH1Border(this.h1Border);
    this.validateMarginTop(this.marginTop);
    this.validateMarginBottom(this.marginBottom);
  }

  render() {
    const { characterLimit, h1Border, marginTop, marginBottom, tag } = this;

    const Tag = tag;

    return (
      <Host>
        <Tag
          class={`
            gcds-heading
            ${characterLimit ? 'limit' : ''}
            ${h1Border != 'none' ? `b-${h1Border}` : ''}
            ${marginTop ? `mt-${marginTop}` : ''}
            ${marginBottom ? `mb-${marginBottom}` : ''}
          `}
        >
          <slot />
        </Tag>
      </Host>
    );
  }
}
