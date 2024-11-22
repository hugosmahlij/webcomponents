import './alert-message.js';
import './user-login.js';

class LoginPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = /* html */ `
        <style>
            :host {
                display: block;
                max-width: 400pc;
                margin: 20px auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 8px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                background-color: #fff;
                font-family: Arial, sans-serif;
            }
        </style>
        <alert-message type="info" message="Please, sign in"></alert-message>
        <user-login></user-login>
        `;
  }

  connectedCallback() {
    const alertMessage = this.shadowRoot.querySelector('alert-message');
    const userLogin = this.shadowRoot.querySelector('user-login');

    userLogin.addEventListener('login-result', (event) => {
      const { success, message } = event.detail;

      alertMessage.setAttribute('type', success ? 'success' : 'error');
      alertMessage.setAttribute('message', message);
    });
  }
}

customElements.define('login-page', LoginPage);
