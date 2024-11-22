class UserLogin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = /* html */ `
    <style>
        :host {
            display:block;
            max-width:300px;
            margin:20px auto;
            padding:20px;
            border: 1px solid #ccc;
            border-radius:5px;
            font-family:Arial, sans-serif;
            background-color: #f9f9f9;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        h2 {
            margin-top: 0;
            text-align: center;
        }
        form {
            display:flex;
            flex-direction:column;
        }
        label {
            margin-bottom: 5px;
            font-size: 14px;
        }
        input {
            margin-bottom: 15px;
            padding: 8px;
            font-size:14px;
            border: 1px solid #ccc;
            border-radius:3px;
        }
        button {
            padding: 10px;
            font-size:14px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
    <h2>Log in</h2>
    <form>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>

        <button type="submit">Log in</button>
    </form>
    `;
  }

  connectedCallback() {
    const form = this.shadowRoot.querySelector('form');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const username = form.username.value.trim();
      const password = form.password.value.trim();

      const event = new CustomEvent('login-result', {
        detail: {
          success: username === 'admin' && password === '1234',
          message:
            username === 'admin' && password === '1234'
              ? 'Log in succesful'
              : 'Wrong username or password',
        },
        bubbles: true,
        composed: true,
      });

      this.dispatchEvent(event);
    });
  }
}

customElements.define('user-login', UserLogin);
