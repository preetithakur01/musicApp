FROM nginx:1.20.1-alpine
COPY /build /usr/share/nginx/html
CMD ["nginx","-g","daemon off;"] 