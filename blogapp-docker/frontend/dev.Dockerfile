FROM node:20.3.1-alpine3.17

RUN apk add --no-cache tini

WORKDIR /usr/src/app

COPY . .

RUN yarn install

ENV VITE_BACKEND_URL=http://localhost:8080/api/

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["yarn", "dev", "--host", "0.0.0.0"]
