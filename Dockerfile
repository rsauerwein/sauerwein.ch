FROM nginx:alpine

# Copy static files
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY avatar.jpeg /usr/share/nginx/html/
COPY favicon.svg /usr/share/nginx/html/
COPY robots.txt /usr/share/nginx/html/
COPY sitemap.xml /usr/share/nginx/html/

# Custom nginx config for caching and compression
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
