FROM node:latest

ARG SERVER_PORT

RUN mkdir -p /usr/src/server

WORKDIR /usr/src/server

COPY package.json .

RUN npm install

COPY . .

EXPOSE ${SERVER_PORT}

CMD ["npm", "start"]