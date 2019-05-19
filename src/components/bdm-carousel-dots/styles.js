import {
    css
} from 'lit-element';

const styles = css `
:host {
  display: block;
  width: 100%;
}
.carousel-control-dots-list {
  display: flex;
  flex-basis: 50%;
  align-items: center;
  justify-content: center;
}
.dot {
  margin-right: .4em;
}
.icon {
    font-size: 16px;
    line-height: 1;
}
.full-dot::before {
 content: "\u25CF";
}
.empty-dot::before {
 content: "\u25CB";
}
`;

export default styles;
