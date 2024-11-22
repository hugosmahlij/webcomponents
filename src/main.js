import './components/alert-message.js';
import './components/user-login.js';

document.addEventListener('login-result', (event) => {
    const alert = document.querySelector('alert-message');
  
    // Actualizamos el tipo y el mensaje del componente de alerta
    if (event.detail.success) {
      alert.setAttribute('type', 'success');
      alert.setAttribute('message', event.detail.message);
    } else {
      alert.setAttribute('type', 'error');
      alert.setAttribute('message', event.detail.message);
    }
  });