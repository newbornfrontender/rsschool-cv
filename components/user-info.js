'use strict';

import { visuallyHidden } from '/helpers.js';

export class UserInfo extends HTMLElement {
  constructor() {
    super();

    const template = document.querySelector('#user-info');
    const styleSheet = new CSSStyleSheet();
    const styles = `
      :host {
        display: flex;
      }

      :host([sticky]) {
        --userpic-size: 1.5rem;
      }

      :host([sticky]) div {
        ${visuallyHidden}
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
        transition:
          transform var(--transition-duration) var(--transition-timing-function),
          block-size var(--transition-duration) var(--transition-timing-function);
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

  get sticky() {
    return this.getAttribute('sticky');
  }

  set sticky(value) {
    if (Boolean(value)) this.setAttribute('sticky', '');
    else this.removeAttribute('sticky');
  }

  connectedCallback() {
    window.addEventListener('scroll', () => this.toggle());
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', () => this.toggle());
  }

  static get observedAttributes() {
    return ['sticky'];
  }

  toggle() {
    const header = document.querySelector('header');
    const offset = window.pageYOffset;
    const height = header.offsetHeight;

    if (offset > height) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
