# Etapa 1: Build de la aplicación con Vite
FROM node:18 AS builder

# Crear directorio de trabajo
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código y construir la app
COPY . .
RUN npm run build

# Etapa 2: Servidor NGINX para producción
FROM nginx:alpine

# Copiar archivos estáticos generados por Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# ✅ Cambiar el puerto de NGINX a 8080 (Cloud Run requiere que escuche en el puerto especificado por $PORT, por defecto es 8080)
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf

# Exponer el puerto que Cloud Run usará
EXPOSE 8080



# Comando para iniciar NGINX en primer plano
CMD ["nginx", "-g", "daemon off;"]
