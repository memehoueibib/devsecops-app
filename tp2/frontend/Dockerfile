FROM nginx:alpine

# Copier le fichier HTML
COPY index.html /usr/share/nginx/html/

# Configuration Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Utiliser le groupe nginx existant et créer seulement l'utilisateur
RUN adduser -S frontend -u 1001 -G nginx

# Permissions
RUN chown -R frontend:nginx /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && chown frontend:nginx /var/run/nginx.pid

USER frontend
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
