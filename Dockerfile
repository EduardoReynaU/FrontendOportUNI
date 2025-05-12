# Etapa 1: Build de la aplicación con Vite
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servidor NGINX para producción
FROM nginx:alpine

# Copiar archivos estáticos generados por Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# ✅ Cambiar el puerto de NGINX a 8080 (para Cloud Run)
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf

# ✅ Configurar NGINX para redirigir todas las rutas a index.html (manejo de SPA)
RUN printf 'server {\n\
    listen 8080;\n\
    server_name localhost;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
\n\
    location / {\n\
        try_files $uri /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
