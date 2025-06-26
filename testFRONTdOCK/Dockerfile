# Build stage
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage  
FROM nginx:alpine

# Copier la configuration Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers build
COPY --from=builder /app/build /usr/share/nginx/html

# Créer un utilisateur non-root
RUN addgroup -g 1001 -S nginx
RUN adduser -S frontend -u 1001 -G nginx

# Permissions
RUN chown -R frontend:nginx /var/cache/nginx && \
    chown -R frontend:nginx /var/log/nginx && \
    chown -R frontend:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
    chown -R frontend:nginx /var/run/nginx.pid

USER frontend

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]