'use strict';

export class UserInfo extends HTMLElement {
  constructor() {
    super();

    const template = document.querySelector('#user-info');
    const styleSheet = new CSSStyleSheet();
    const styles = `
      :host {
        display: flex;
      }

      p {
        margin: 0;
        font-size: var(--info-font-size);
      }

      p:first-child {
        margin-inline-end: 0.8rem;
        margin-block-end: 0.3rem;
      }

      img {
        display: block;
        block-size: var(--userpic-size);
        border-radius: 50%;
        transition: transform var(--base-transition-delay) ease-in-out;
      }

      img:hover {
        transform: scale(1.1);
      }
    `;
    const shadowRoot = this.attachShadow({ mode: 'open' });

    styleSheet.replaceSync(styles);
    shadowRoot.appendChild(template.content.cloneNode(true));
    shadowRoot.adoptedStyleSheets = [styleSheet];
  }
}
