import { newE2EPage } from '@stencil/core/testing';

describe('element-display', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<element-display></element-display>');

    const element = await page.find('element-display');
    expect(element).toHaveClass('hydrated');
  });
});
