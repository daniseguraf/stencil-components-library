import { newSpecPage } from "@stencil/core/dist/testing";
import { Button } from './button';

describe('ubd-button', () => {
  it('should render a button component', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<ubd-button></ubd-button>`
    });

    expect(page.root).toEqualHtml(`
      <ubd-button>
       <mock:shadow-root>
         <button type="button">
           <slot></slot>
         </button>
       </mock:shadow-root>
     </ubd-button>
    `)
  });
});
