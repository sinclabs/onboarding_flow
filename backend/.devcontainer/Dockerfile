FROM node:lts-alpine

WORKDIR /workspace

RUN apk add openssh git

COPY package.json .

RUN npm install --quiet