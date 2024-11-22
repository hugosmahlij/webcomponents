class AlertMessage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = /* html */ `
    <style>
        :host {
            display: block;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            font-family: Arial, sans-serif;
            color: #fff;
            transition: opacity 0.3s ease-in-out;
        }
        :host([type="success"]) {
            background-color: #4caf50;
        }
        :host([type="warning"]) {
            background-color: #ff9800;
        }
        :host([type="error"]) {
            background-color: #f44336;
        }
        :host([type="info"]) {
            background-color: #2196f3;
        }
        :host([hidden]) {
            display: none;
        }
    </style>
    <div id="message"></div>
        `;
  }

  static get observedAttributes() {
    return ['type', 'message'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const messageDiv = this.shadowRoot.querySelector('#message');
    if (name === 'message') {
      if (!newValue) {
        this.setAttribute('hidden', '');
      } else {
        this.removeAttribute('hidden');
        messageDiv.textContent = newValue;
      }
    }
  }
}

customElements.define('alert-message', AlertMessage);
