# 🛍️ LaUnica - eCommerce

LaUnica es un eCommerce desarrollado como parte del curso de **Desarrollo en React JS** de la **Universidad Tecnológica Nacional (UTN)**.

El proyecto permite a los usuarios explorar productos y ver detalles. Además, posee un panel para administradores desde el cual se pueden añadir, modificar y eliminar productos. Utiliza tecnologías modernas del ecosistema JavaScript para crear una experiencia de usuario rápida, fluida y escalable.

---

## 🚀 Tecnologías utilizadas

- ⚛️ [React](https://reactjs.org/)
- 🧭 [React Router](https://reactrouter.com/)
- ⚡ [Vite](https://vitejs.dev/)
- 🔥 [Firebase](https://firebase.google.com/) (Firestore, Auth)

---

## 📦 Instalación y ejecución local

Si deseas clonar este repositorio y ejecutarlo en tu máquina local, sigue estos pasos:

### 1. Clona el repositorio

```bash
git clone https://github.com/teopatagonico/react-tpfinal-curso.git
```

### 2. Accede a la carpeta del proyecto

```bash
cd launica
```

### 3. Instala las dependencias

```bash
npm install
```

### 4. Ejecuta la aplicación en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` o en el puerto que indique Vite.

---

## 🔧 Configuración de Firebase

Este proyecto utiliza Firebase para:

* Base de datos (Firestore)
* Autenticación

Asegúrate de crear un proyecto en [Firebase Console](https://console.firebase.google.com/) y configurar tus credenciales creando el archivo `.env` en la carpeta `./launica` siguiendo este formato:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
```

---

## 📚 Créditos

Este proyecto fue desarrollado como parte del curso **Desarrollo en React JS** dictado por la **Universidad Tecnológica Nacional (UTN)**.

---

## 📝 Licencia

Este proyecto es de uso educativo y sin fines comerciales. Puedes modificarlo y adaptarlo libremente.