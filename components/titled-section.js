'use strict';

export class TitledSection extends HTMLElement {
  constructor() {
    super();

    const template = document.querySelector('#titled-section');
    const styleSheet = new CSSStyleSheet();
    const styles = `
      :host {
        display: block;
        padding: var(--indent);
        border: 1px solid #e1e1e1;
        border-radius: 10px;
        box-shadow: 0 12px 12px -10px #ccc;
        transition: box-shadow 0.2s ease-in-out;
      }

      :host(:hover) {
        box-shadow: none;
      }

      ::slotted(h2) {
        margin: 0;
        margin-block-end: 20px;
        color: var(--blue);
      }
    `;
    const shadowRoot = this.attachShadow({ mode: 'open' });

    styleSheet.replaceSync(styles);
    shadowRoot.appendChild(template.content.cloneNode(true));
    shadowRoot.adoptedStyleSheets = [styleSheet];
  }
}
