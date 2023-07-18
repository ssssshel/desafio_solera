# Documentación
## Descripción

Este es un proyecto desarrollado en NestJS, un framework de Node.js que facilita la creación de aplicaciones web escalables y mantenibles. El objetivo de esta aplicación es proporcionar una API para gestionar usuarios y obtener su nombre completo si las credenciales son válidas.

## Configuración de Variables de Entorno

Para configurar las variables de entorno utilizadas en el proyecto, se ha utilizado el paquete dotenv. Asegúrate de crear un archivo .env en la raíz del proyecto y definir las variables de entorno necesarias, como se muestra en el siguiente ejemplo:

```markdown
DB_HOST=localhost
DB_PORT=5432
DB_USER=myuser
DB_PASS=mypassword
DB_NAME=mydb
```

## Estructura del Proyecto

El proyecto sigue una estructura organizada para facilitar el desarrollo y mantenimiento:

  - **user.controller.ts**: Controlador específico para la gestión de usuarios.
  - **user.service.ts**: Servicio que maneja la lógica de negocio para la gestión de usuarios.
  - **user.model.ts**: Definición del modelo de datos para la tabla de usuarios.
  - **app.module.ts**: Módulo principal de la aplicación donde se configuran los controladores, servicios y conexiones de base de datos.
  - **config/**: Directorio con archivos de configuración (por ejemplo, constants.ts) utilizados en todo el proyecto.
  - **utils/**: Directorio que contiene utilidades y DTOs (Data Transfer Objects) utilizados en la aplicación.

## Iniciar la Aplicación

Antes de iniciar la aplicación, asegúrate de tener instaladas las dependencias ejecutando:

```console
npm install
```


Una vez que las dependencias estén instaladas, puedes iniciar la aplicación utilizando el siguiente comando:

```console
npm start
```

La aplicación estará disponible en http://localhost:3000.

## Endpoints de la API

La API ofrece los siguientes endpoints para la gestión de usuarios:

    GET /api/v1/user/fullname: Obtiene el nombre completo del usuario si las credenciales son válidas. Se deben proporcionar los parámetros username y password en la consulta.

## Tecnologías Utilizadas

El proyecto utiliza las siguientes tecnologías:

  - **NestJS**: Framework de Node.js para la construcción de aplicaciones web escalables y mantenibles.
  - **Sequelize**: ORM (Object-Relational Mapping) para interactuar con la base de datos MySQL.
  - **dotenv**: Para la carga de variables de entorno desde el archivo .env.
  - **bcrypt**: Biblioteca para el cifrado de contraseñas.