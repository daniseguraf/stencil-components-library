import { newE2EPage } from '@stencil/core/testing';

describe('ubd-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ubd-button></ubd-button>');

    const element = await page.find('ubd-button');
    expect(element).toHaveClass('hydrated');
  });
});
