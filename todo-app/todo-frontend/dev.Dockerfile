FROM node:16.20.2-alpine3.18

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV REACT_APP_BACKEND_URL=http://localhost:3000

CMD npm run dev