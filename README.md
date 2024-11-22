# Web Components

### Este proyecto es una introducción práctica al uso de Web Components utilizando las APIs nativas de Custom Elements y Shadow DOM. La aplicación creada consta de tres componentes principales que trabajan juntos para crear una interfaz de inicio de sesión interactiva y modular.

---

Estructura del Proyecto

```
src/
├── components/
│   ├── alert-message.js   # Componente de mensajes de alerta
│   ├── login-page.js      # Componente contenedor de la página de inicio de sesión
│   ├── user-login.js      # Componente del formulario de inicio de sesión
├── index.html             # Archivo HTML principal
├── main.js                # Archivo de entrada principal para importar los componentes
└── style.css              # Archivo de estilos globales
```

## Componentes

1. alert-message:
   Este componente muestra mensajes de alerta estilizados. Soporta cuatro tipos de alerta: éxito, advertencia, error e información.
   Atributos soportados:
   type: Define el estilo de la alerta (success, warning, error, info).
   message: Contiene el texto del mensaje a mostrar.
   Comportamiento:
   Si no se define el atributo message o está vacío, el componente se oculta automáticamente.

2. user-login:
   Este componente representa un formulario de inicio de sesión simple con campos para usuario y contraseña.
   Comportamiento:
   Al enviar el formulario, emite un evento personalizado login-result con detalles del resultado:
   success: Indica si el inicio de sesión fue exitoso.
   message: Contiene un mensaje descriptivo del resultado.

3. login-page:
   Este componente contenedor integra los dos componentes anteriores (alert-message y user-login).
   Comportamiento:
   Escucha el evento login-result emitido por user-login.
   Actualiza dinámicamente las propiedades de alert-message en función del resultado del inicio de sesión.

---

## Tecnologías Utilizadas

- Web Components:
  - Custom Elements: Para definir los componentes personalizados.
  - Shadow DOM: Para encapsular estilos y comportamientos.
- HTML y CSS: Para la estructura y el diseño de la interfaz.
