import { newSpecPage } from '@stencil/core/testing';
import { CustomButton } from '../custom-button';

describe('custom-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomButton],
      html: `<custom-button></custom-button>`,
    });
    expect(page.root).toEqualHtml(`
      <custom-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-button>
    `);
  });
});
