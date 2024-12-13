import { newSpecPage } from '@stencil/core/testing';
import { ElementDisplay } from '../element-display';

describe('element-display', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ElementDisplay],
      html: `<element-display></element-display>`,
    });
    expect(page.root).toEqualHtml(`
      <element-display>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </element-display>
    `);
  });
});
