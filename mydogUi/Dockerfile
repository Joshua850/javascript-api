FROM node:16-alpine AS build-stage


WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm","run dev" ]