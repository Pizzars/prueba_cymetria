# Proyecto de Next.js con Autenticación y Consulta de Estudiantes

Este proyecto es una aplicación web construida con Next.js que incluye autenticación utilizando JWT y permite a los usuarios registrar nuevos usuarios y consultar si un estudiante ha sido aprobado mediante su documento.

## Funcionalidades

- **Autenticación**: Los usuarios pueden registrarse y autenticarse utilizando JSON Web Tokens (JWT).
- **Registro de Usuarios**: Permite registrar nuevos usuarios.
- **Consulta de Estudiantes**: Los usuarios autenticados pueden consultar si un estudiante ha sido aprobado mediante su documento. El formulario de consulta no se muestra si el usuario no está autenticado.

## Requisitos

- Node.js
- MySQL
- Express (para el backend)
- Next.js (para el frontend)
- Otros paquetes necesarios (consulte el archivo `package.json` para más detalles)

## Instalación

Primero instala las dependencias:

```bash
npm install
# or
yarn
```

Despues corre el proyecto:

```bash
npm run dev
# or
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en el buscador.

Debes instalar el backend para que el proyecto funcione correctamente, el cual se encuentra en:

[https://github.com/Pizzars/prueba_cymetria_back](https://github.com/Pizzars/prueba_cymetria_back)

Puedes ver el demo en:

[https://develop.d3h75vm3qdqkwm.amplifyapp.com/](https://develop.d3h75vm3qdqkwm.amplifyapp.com/)
