FROM node:alpine3.14 as build
RUN mkdir -p /app

WORKDIR /app
COPY package.json /app/
RUN npm install 

COPY . /app/
RUN npm run build --prod


FROM nginx:alpine 
COPY --from=build /app/dist/trip /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/ngnix/conf.d/default.conf
ENV API_URL="http://localhost:8080"
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]