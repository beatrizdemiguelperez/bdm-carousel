import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import BdmCarousel from '../src/components/bdm-carousel/index.js';
import '../src/bdm-carousel.js';

import readme from '../README.md';

storiesOf('bdm-carousel', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(BdmCarousel), { notes: { markdown: readme } })
  .add(
    'Alternative Header',
    () => html`
      <bdm-carousel>
        <bdm-carousel-slide slot="slides">
          <p>Hello</p>
          <img src="https://picsum.photos/id/237/200/300">
          <button>Decline</button>
        </bdm-carousel-slide>
        <bdm-carousel-slide slot="slides">
          <p>Goodbye</p>
          <img src="https://picsum.photos/536/354">
        </bdm-carousel-slide>
        <bdm-carousel-slide slot="slides">
          <p>Hello again</p>
        </bdm-carousel-slide>
      </bdm-carousel>
    `,
  );
