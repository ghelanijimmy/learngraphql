FROM node:latest

ARG APP_PORT

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE ${APP_PORT}

CMD ["npm", "start"]