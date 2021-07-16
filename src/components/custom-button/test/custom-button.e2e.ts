import { newE2EPage } from '@stencil/core/testing';

describe('custom-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-button></custom-button>');

    const element = await page.find('custom-button');
    expect(element).toHaveClass('hydrated');
  });
});
