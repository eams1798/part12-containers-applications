FROM node:20.3.1-alpine3.17 AS build-stage

RUN apk add --no-cache tini

WORKDIR /usr/src/app

COPY . .

RUN yarn ci

ENV VITE_BACKEND_URL=http://localhost:8080/api/

RUN ["yarn", "build"]

ENTRYPOINT ["/sbin/tini", "--"]

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

RUN chmod 444 /etc/nginx/nginx.conf