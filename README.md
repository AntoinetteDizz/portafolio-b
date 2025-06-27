# 🚀 Backend Portfolio - API NestJS

Backend desarrollado con NestJS para gestionar proyectos y tecnologías de un portfolio personal. Esta API proporciona endpoints RESTful para crear y consultar proyectos y tecnologías.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Endpoints de la API](#endpoints-de-la-api)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Configuración](#configuración)

## ✨ Características

- **API RESTful** con NestJS
- **Validación de datos** con class-validator
- **CORS configurado** para desarrollo y producción
- **Base de datos** con TypeORM y PostgreSQL
- **Estructura modular** y escalable
- **Documentación automática** de endpoints

## 🛠️ Tecnologías Utilizadas

- **NestJS** - Framework de Node.js
- **TypeScript** - Lenguaje de programación
- **TypeORM** - ORM para base de datos
- **PostgreSQL** - Base de datos relacional
- **class-validator** - Validación de datos
- **Jest** - Testing framework

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd portafolio-b
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configura las variables de entorno**
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   PORT=3000
   DATABASE_URL=postgresql://usuario:password@localhost:5432/nombre_db
   ```

4. **Ejecuta las migraciones de la base de datos**
   ```bash
   npm run migration:run
   ```

## 🚀 Uso

### Desarrollo
```bash
npm run start:dev
```

### Producción
```bash
npm run build
npm run start:prod
```

### Testing
```bash
npm run test
npm run test:e2e
```

## 📡 Endpoints de la API

### Base URL
```
http://localhost:3000
```

### 1. Página Principal
- **GET** `/`
  - **Descripción**: Página de bienvenida con HTML
  - **Respuesta**: Página HTML indicando que la API está funcionando
  - **Ejemplo**: `http://localhost:3000/`

### 2. Saludo
- **GET** `/api/saludo`
  - **Descripción**: Endpoint de prueba con mensaje de saludo
  - **Respuesta**: `{ "message": "Hola desde el backend!" }`
  - **Ejemplo**: `http://localhost:3000/api/saludo`

### 3. Proyectos

#### Obtener todos los proyectos
- **GET** `/proyectos`
  - **Descripción**: Lista todos los proyectos
  - **Respuesta**: Array de proyectos
  - **Ejemplo**: `http://localhost:3000/proyectos`

#### Crear un nuevo proyecto
- **POST** `/proyectos`
  - **Descripción**: Crea un nuevo proyecto
  - **Body** (JSON):
    ```json
    {
      "titulo": "Nombre del proyecto",
      "imagen": "https://ejemplo.com/imagen.jpg",
      "urlRepo": "https://github.com/usuario/proyecto",
      "tecnologiasIds": [1, 2, 3]
    }
    ```
  - **Campos requeridos**:
    - `titulo` (string): Nombre del proyecto
    - `urlRepo` (string, URL): Enlace al repositorio
    - `tecnologiasIds` (array de números): IDs de las tecnologías utilizadas
  - **Campos opcionales**:
    - `imagen` (string, URL): URL de la imagen del proyecto

### 4. Tecnologías

#### Obtener todas las tecnologías
- **GET** `/tecnologias`
  - **Descripción**: Lista todas las tecnologías
  - **Respuesta**: Array de tecnologías
  - **Ejemplo**: `http://localhost:3000/tecnologias`

#### Crear una nueva tecnología
- **POST** `/tecnologias`
  - **Descripción**: Crea una nueva tecnología
  - **Body** (JSON):
    ```json
    {
      "nombre": "React",
      "imagen": "https://ejemplo.com/react-logo.png",
      "categoria": "Frontend"
    }
    ```
  - **Campos requeridos**:
    - `nombre` (string): Nombre de la tecnología
    - `categoria` (string): Categoría de la tecnología
  - **Campos opcionales**:
    - `imagen` (string, URL): URL del logo de la tecnología

### 5. Base de Datos

#### Verificar estado de la base de datos
- **GET** `/database/status`
  - **Descripción**: Verifica la conexión a la base de datos
  - **Respuesta**: 
    ```json
    {
      "status": "ok",
      "message": "Conexión exitosa a la base de datos"
    }
    ```
  - **Ejemplo**: `http://localhost:3000/database/status`

## 📁 Estructura del Proyecto

```
src/
├── app.controller.ts          # Controlador principal
├── app.module.ts             # Módulo principal
├── app.service.ts            # Servicio principal
├── main.ts                   # Punto de entrada
├── database/                 # Módulo de base de datos
│   ├── database.controller.ts
│   └── database.module.ts
├── proyecto/                 # Módulo de proyectos
│   ├── dto/
│   │   └── create-proyecto.dto.ts
│   ├── entities/
│   │   └── proyecto.entity.ts
│   ├── proyecto.controller.ts
│   ├── proyecto.module.ts
│   └── proyecto.service.ts
└── tecnologia/               # Módulo de tecnologías
    ├── dto/
    │   └── create-tecnologia.dto.ts
    ├── entities/
    │   └── tecnologia.entity.ts
    ├── tecnologia.controller.ts
    ├── tecnologia.module.ts
    └── tecnologia.service.ts
```

## ⚙️ Configuración

### Variables de Entorno
- `PORT`: Puerto del servidor (por defecto: 3000)
- `DATABASE_URL`: URL de conexión a PostgreSQL

### CORS
La API está configurada para permitir peticiones desde:
- `http://localhost:3001` (desarrollo local)
- `https://portafolio-f.onrender.com` (producción)

### Validación
- Se utiliza `ValidationPipe` global para validar todos los datos de entrada
- Los DTOs están configurados con decoradores de validación
- Se eliminan automáticamente propiedades no permitidas

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests e2e
npm run test:e2e

# Cobertura de tests
npm run test:cov
```

## 📝 Scripts Disponibles

- `npm run build` - Compila el proyecto
- `npm run start` - Inicia el servidor
- `npm run start:dev` - Inicia en modo desarrollo con hot reload
- `npm run start:debug` - Inicia en modo debug
- `npm run start:prod` - Inicia en modo producción
- `npm run lint` - Ejecuta el linter
- `npm run format` - Formatea el código con Prettier

---

**Desarrollado con ❤️ usando NestJS**
