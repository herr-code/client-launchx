# ![Vue-js](https://user-images.githubusercontent.com/61515833/173712907-68dc3161-676e-4041-9f0e-69ff7df057a0.png) Vue-3-crud (Frontend)

Ejercicio 4) Semana 5: LaunchX | Mission Backend JS

Esta es una práctica fullstack ya que tenemos un [backend](https://github.com/herr-code/cliente-servidor) y un cliente (este proyecto). El backend es una API (realizada [aquí](https://github.com/herr-code/api-prisma-db)) la cúal será consumida por este cliente (frontend), que no es más que una aplicación hecha en Vue 3.

## :electric_plug: Funcionamiento

![diagram](https://user-images.githubusercontent.com/61515833/173716529-ee07a6ea-5e28-4343-b141-48617f5ef204.png)

[Vue](https://vuejs.org/) es un framework progresivo eficaz y versátil para crear interfaces de usuario. Se basa en HTML, CSS y JS estándar, es escalable y accesible. Esta práctica integra [Bootstrap 4](https://getbootstrap.com/) para aplicar unos estilos base y [Axios](https://axios-http.com/es/) para realizar los `request` a la API. Existen diversas formas de trabajar con Vue pero en este pryecto se hablará de [Single-File Components (SFC)](https://vuejs.org/guide/introduction.html#single-file-components) y [Options API](https://vuejs.org/guide/introduction.html#api-styles). Puede revisar mas detalles en [Vue.org](https://vuejs.org/guide/introduction.html).

### **Single-File Components**

La forma más aceptada por los desarrolladores y tiene un paso de compilación ya que se trabaja con archivos `*.vue`, encapsula la lógica del componente (JavaScript), la plantilla (HTML) y los estilos (CSS) en un solo archivo. Aquí está un ejemplo escrito en formato SFC:

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```
### **Options API**

Con la API de opciones, definimos la lógica de un componente usando un objeto de opciones como `data`, `methods`y `mounted`. Las propiedades definidas por la API se exponen en funciones `this` internas, que apuntan a la instancia del componente:

```vue
<script>
export default {
  // Properties returned from data() becomes reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```
### **Rutas (Router)**
Al agregar [Vue Router](https://router.vuejs.org/), todo lo que tenemos que hacer es asignar nuestros componentes y dejar que el enrutador nos permita navegar a las rutas que tenemos definidas. Esto es lo que hace posible crear una [Single-page Application](https://developer.mozilla.org/en-US/docs/Glossary/SPA). He aquí el ejemplo:

```html
<nav class="navbar navbar-expand navbar-light bg-white">
  <router-link to="/" class="navbar-brand">LaunchX</router-link>
  <div class="navbar-nav mr-auto">
    <li class="nav-item">
      <router-link to="/explorers" class="nav-link">Explorers</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/add" class="nav-link">Agregar Explorer</router-link>
    </li>
  </div>
</nav>
<div class="container mt-3">
  <router-view />
</div>
```
Del código anterior destaquemos dos cosas:

- `router-link`: Componente personalizado para crear enlaces. Esto permite que Vue Router cambie la URL sin recargar la página, maneje la generación de URL y su codificación.

- `router-view`: Mostrará el componente que corresponde a la url.

### **Axios**

El archivo http-common contiene la URL base para realizar las peticiones y el tipo de datos a manejar. Este será usado por el servicio `ExplorerService`. Puedes checar más información de como trabaja axios [aquí](https://axios-http.com/).

```js
import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-type": "application/json"
  }
});
```
### Services

Aquí está el archivo `ExplorerService` que hará uso de `http-common` para realizar las peticiones a la API e interactuar con los componentes para renderizar la información. Ejemplo de un método para pedir todos los explorers disponibles:

```js
import http from "../http-common";

class ExplorerService {
  getAll() {
    return http.get("/explorers");
  }
}

export default new ExplorerService();
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
