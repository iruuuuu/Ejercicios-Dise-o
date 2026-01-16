# Stage 1: Build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# Stage 2: Servir con Nginx + HTTPS
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY certs/selfsigned.crt /etc/nginx/certs/selfsigned.crt
COPY certs/selfsigned.key /etc/nginx/certs/selfsigned.key
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]