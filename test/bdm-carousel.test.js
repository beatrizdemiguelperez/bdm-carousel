import { html, fixture, expect } from '@open-wc/testing';

import '../src/bdm-carousel.js';

describe('<bdm-carousel>', () => {
  it('has a default property heading', async () => {
    const el = await fixture('<bdm-carousel></bdm-carousel>');

    expect(el.heading).to.equal('Hello world!');
  });

  it('allows property heading to be overwritten', async () => {
    const el = await fixture(html`
      <bdm-carousel heading="different heading"></bdm-carousel>
    `);

    expect(el.heading).to.equal('different heading');
  });
});
