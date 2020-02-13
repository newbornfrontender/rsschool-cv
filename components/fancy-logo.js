'use strict';

export class FancyLogo extends HTMLElement {
  constructor() {
    super();

    const template = document.querySelector('#fancy-logo');
    const styleSheet = new CSSStyleSheet();
    const styles = `
      :host {
        display: flex;
        align-items: center;
      }

      p {
        margin: 0;
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        inline-size: 2.5rem;
        block-size: 2.5rem;
        border-radius: 50%;
        font-size: 1.2rem;
        background-color: var(--blue);
      }

      .text {
        margin-inline-start: 0.8rem;
        font-size: 1.4rem;
      }
    `;
    const shadowRoot = this.attachShadow({ mode: 'open' });

    styleSheet.replaceSync(styles);
    shadowRoot.appendChild(template.content.cloneNode(true));
    shadowRoot.adoptedStyleSheets = [styleSheet];
  }
}
