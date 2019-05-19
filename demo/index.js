import { html, render } from 'lit-html';
import '../src/bdm-carousel.js';

const selected = '1';
render(html`
  <bdm-carousel .selected=${selected}>
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
`, document.querySelector('#demo'));
