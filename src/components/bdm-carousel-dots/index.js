import {
  html
} from 'lit-element';
import styles from './styles';
import BasicStyles from '../../mixins/basic-styles';

class BdmCarouselDots extends BasicStyles {
    static get styles() {
        return [
            super.styles,
            styles
        ];
    }

    static get is() {
        return 'bdm-carousel-dots';
    }

    static get properties() {
        return {
            selected: {
                type: Number,
                reflect: true
            },
            total: {
              type: Number
          },
        };
    }

    get dots() {
      return [...Array(this.total).keys()]
    }

    render() {
        return html`
          <ul class="carousel-control-dots-list">
            ${this.dots.map(i => html`
            <li class="dot">
                <span class="icon ${i === this.selected? 'full-dot' : 'empty-dot'}"></span>
            </li>`)}
          </ul>
        `;
    }
}

window.customElements.define(BdmCarouselDots.is, BdmCarouselDots);

export default BdmCarouselDots;
