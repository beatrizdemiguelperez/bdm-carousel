import {
    css
} from 'lit-element';

const styles = css `
:host {
  display: block;
  width: 100%;
}
.slide-content {
  position: relative !important;
}
.slide-card {
  width: 100%;
  height: 100%;
  margin: 8px auto;
  border-radius: 1px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  background-color: #FFFFFF;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
`;

export default styles;
