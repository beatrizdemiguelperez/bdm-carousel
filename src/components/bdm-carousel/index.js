import {
  html
} from 'lit-element';
import styles from './styles';
import BasicStyles from '../../mixins/basic-styles';
import BdmCarouselDots from '../bdm-carousel-dots/index.js';

class BdmCarousel extends BasicStyles {
  static get styles() {
      return [
          super.styles,
          styles
      ];
  }

  static get is() {
      return 'bdm-carousel';
  }

  static get properties() {
      return {
          selected: {
              type: Number
          },
      };
  }

  constructor() {
    super();
    this.selected = 0
  }

  get slides() {
    return this.querySelectorAll('bdm-carousel-slide');
  }

  get slidesContainer() {
    return this.shadowRoot.querySelector('.carousel-slides');
  }

  selectSlide(selectedIndex) {
    this._selected = selectedIndex;
    this.slides.forEach((slide, index) => {
      slide.setAttribute('selected', index === selectedIndex);
    });
  }

  translateTo(offset = 0){
    this.slidesContainer.style.transform = `translateX(${-offset}px)`;
  }

  goTo(slideIndex = 0) {
    const offset = slideIndex * this.slidesWidth;
    this.selectSlide(slideIndex);
    this.translateTo(offset);
  }

  addDots() {
    const dots = document.createElement('bdm-carousel-dots');
    dots.setAttribute('selected', this._selected);
    dots.setAttribute('total',this.slidesLength);
    this.shadowRoot.querySelector('.carousel-control-dots').appendChild(dots);
  }

  firstUpdated(){
    const container = this.slidesContainer;
    const slidesLength = this.slides.length;

    this.slidesLength= slidesLength;

    container.style.width = `${slidesLength*100}%`;

    this.slidesWidth = container.getBoundingClientRect().width/slidesLength;

    this.addDots();
    this.goTo(this.selected);
  }

  prev() {
    const selected = this._selected;
    const prev = Math.max(0, selected - 1);

    if (selected !== prev) {
      this.goTo(prev);
    }
  }

  next() {
    const selected = this._selected;
    const next = Math.min(this.slidesLength - 1, selected + 1);

    if (selected !== next) {
      this.goTo(next);
    }
  }

  render() {
      return  html `
      <div>
         <div class="carousel-content">
            <div class="carousel-viewport">
                <ul class="carousel-slides">
                  <slot name="slides"></slot>
                </ul>
            </div>
         </div>
          <div class="carousel-controls">
              <button @click=${this.prev} class="carousel-control-button control-left" aria-label="previous">
                  <span class="arrow">&#11139;</span>
              </button>
              <div class="carousel-control-dots" aria-hidden="true">
              </div>
              <button @click=${this.next} class="carousel-control-button control-right" aria-label="next">
                  <span class="arrow">&#11137;</span>
              </button>
          </div>
      </div>
      `;
  }
}

export default BdmCarousel;
