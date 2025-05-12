# Etapa 1: Build
FROM node:18 AS builder

# Crea el directorio de la app
WORKDIR /app

# Copia las dependencias y archivos de la app
COPY package*.json ./
RUN npm install

COPY . .

# Compila la aplicación de React (Vite) para producción
RUN npm run build

# Etapa 2: Servidor NGINX para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos construidos desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia la configuración personalizada de NGINX (opcional)
# COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
