import {
    css
} from 'lit-element';

const styles = css `
 :host {
  overflow: hidden;
  box-sizing: content-box;
  display: block;
}
.carousel-content: {
  height: auto;
}
.carousel-viewport {
    width: 100%;
    margin: 0 auto;
}
.carousel-slides {
  transition: transform 0.25s ease 0s;
  align-items: center;
  display: flex;
  will-change: transform;
}
.carousel-controls {
  display: flex;
  flex-basis: 50%;
  align-items: center;
}
.carousel-control-button {
    width: 24px;
    height: 24px;
    z-index: 1;
}
.carousel-control-dots {
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
.control-right {
  margin-left: auto;
}
.arrow {
    font-size: 16px;
    line-height: 1;
}
`;

export default styles;
