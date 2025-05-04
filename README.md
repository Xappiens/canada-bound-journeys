# Canada Bound Journeys - Stack Tecnológico

Este documento describe el stack tecnológico completo necesario para desplegar este proyecto en un servidor con Ubuntu 24.04.

## Requisitos del Sistema
- Ubuntu Server 24.04 LTS
- Al menos 1 GB de RAM (2+ GB recomendado)
- 10 GB de espacio en disco (mínimo)
- Acceso a internet para descargar paquetes

## Frontend
- **Runtime**: Node.js 18+ LTS (recomendado Node.js 20 LTS)
- **Gestión de paquetes**: npm 10+ o yarn 1.22+
- **Framework**: React 18 con TypeScript
- **Build**: Vite
- **Estilos**: Tailwind CSS con shadcn-ui
- **Routing**: React Router Dom
- **Estado**: Tanstack React Query

## Backend y API
- **Framework**: Node.js con Express o Fastify
- **API**: REST o GraphQL con Apollo Server
- **ORM**: Prisma o TypeORM
- **Validación**: Zod (ya instalado en frontend)

## Bases de Datos
- **Relacional**: PostgreSQL
- **Caché**: Redis (para sesiones y cache)

## Gestión de Usuarios y Autenticación
- **Autenticación**: JWT con Passport.js
- **Hasheo**: bcrypt
- **Gestión de Permisos**: CASL o AccessControl

## Infraestructura
- **Servidor Web**: nginx como proxy inverso
- **Certificados SSL**: Let's Encrypt
- **Contenerización**: Docker y Docker Compose
- **Almacenamiento**: Servicio S3-compatible para imágenes y archivos

## Seguridad
- **Headers HTTP**: Helmet.js
- **Rate Limiting**: Express-rate-limit o similar
- **CORS**: Configurado para permitir solo orígenes autorizados

## Monitorización
- **Logging**: Winston o Pino
- **Métricas**: Prometheus
- **Visualización**: Grafana

## Pasos de Despliegue
1. Configuración del servidor Ubuntu 24.04
2. Instalación de Node.js y npm
3. Instalación y configuración de bases de datos
4. Configuración de nginx como servidor web
5. Configuración de SSL con Let's Encrypt
6. Clonación del repositorio
7. Construcción de la aplicación
8. Configuración del proxy inverso en nginx
9. Configuración del sistema para reinicio automático

## Alternativas para Desarrollo Rápido
Se puede utilizar una solución como Supabase, Firebase o Amplify que proporciona muchos de estos servicios integrados, simplificando el despliegue inicial.

# Frontend - canada-bound-journeys

## Despliegue en producción

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Genera la build de producción:
   ```bash
   npm run build
   ```

3. Sirve la carpeta `dist` con un servidor estático. Ejemplo usando `serve`:
   ```bash
   npm install -g serve
   serve -s dist
   ```

También puedes usar Nginx, Apache, Vercel, Netlify, etc. para servir la carpeta `dist`.

Asegúrate de configurar las variables de entorno necesarias si tu frontend las utiliza (por ejemplo, la URL del backend).
