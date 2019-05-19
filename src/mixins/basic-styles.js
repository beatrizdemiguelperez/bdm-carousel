import {
    LitElement,
    css
  } from 'lit-element';

  class GlobalStyles extends LitElement {
    static get styles() {
      return css`
      :host {
        display: block;
      }
      :focus {
        outline: 0;
      }
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed,
      figure, figcaption, footer, header, hgroup,
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article, aside, details, figcaption, figure,
      footer, header, hgroup, menu, nav, section {
        display: block;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      ol,ul,li {
        list-style: none;
        padding: 0px;
      }
      button {
        display: block;
        width: 100%;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        background-color: transparent;
        color: inherit;
        font-family: inherit;
    }

      .set-padding {
        padding: 8px 16px;
      }
      `;
    }
  }

  export default GlobalStyles;
