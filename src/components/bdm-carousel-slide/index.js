import {
  html
} from 'lit-element';
import styles from './styles';
import BasicStyles from '../../mixins/basic-styles';

class BdmCarouselSlide extends BasicStyles {
    static get styles() {
        return [
            super.styles,
            styles
        ];
    }

    static get is() {
        return 'bdm-carousel-slide';
    }

    static get properties() {
        return {
            selected: {
                type: Number
            }
        };
    }

    render() {
        return html`
        <li class="slide-content">
          <div class="slide-card">
            <slot></slot>
          </div>
        </li>
        `;
    }
}

export default BdmCarouselSlide;
