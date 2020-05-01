FROM nginx
COPY scripts/nginx.conf /etc/nginx/nginx.conf
COPY build /usr/share/nginx/html
