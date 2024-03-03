# build stage

FROM node:16.20.2-alpine3.18 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

# ENV CI=true

# RUN npm run test

ENV REACT_APP_BACKEND_URL=http://localhost:3000

RUN npm run build


# production stage

FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

