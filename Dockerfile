# Étape de construction
FROM node:lts as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Étape de production
FROM nginx:stable as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

# Configuration Nginx pour le mode 'history' de Vue Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]