# IZY-ACADEMY-FRONT

Front en React para la plataforma de formacion academica Izy-academy

## Tecnologías Utilizadas

*   **React:**  Una biblioteca de JavaScript para construir interfaces de usuario.
*   **Yarn:** Un gestor de paquetes rápido, fiable y seguro.
*   **[Otras tecnologías relevantes, como React Router, alguna librería de UI como Material-UI o Bootstrap, Axios para peticiones HTTP, etc.]**

## Requisitos Previos

*   **Node.js y npm:**  Asegúrate de tener Node.js y npm instalados. Puedes descargarlos desde [https://nodejs.org/](https://nodejs.org/).  npm generalmente se instala automáticamente con Node.js.
*   **Yarn:**  Instala Yarn globalmente si aún no lo tienes:
    ```bash
    npm install -g yarn
    ```

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clona el repositorio:**
    ```bash
    git clone [URL del repositorio]
    cd [nombre del directorio del proyecto]
    ```

2.  **Instala las dependencias con Yarn parado en el directorio del proyecto izzy-front:**
    ```bash
    yarn install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    yarn start
    ```

    Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

## Scripts Disponibles

Dentro del directorio del proyecto, puedes ejecutar los siguientes comandos:

*   `yarn start`:  Inicia la aplicación en modo desarrollo.
*   `yarn build`:  Crea una versión optimizada para producción en la carpeta `build`.
*   `yarn test`:  Ejecuta las pruebas unitarias (si las hay).
*   `yarn eject`:  **¡Atención!**  Este comando es irreversible. Expulsa la configuración de Create React App, dándote control total sobre las dependencias de configuración (webpack, Babel, etc.).  Úsalo solo si necesitas una configuración muy personalizada.