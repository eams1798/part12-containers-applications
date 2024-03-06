FROM node:20.3.1-alpine3.17

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN yarn ci

USER node

CMD yarn start
