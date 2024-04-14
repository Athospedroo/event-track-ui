FROM node:21.7-alpine AS builder

WORKDIR /event-track-ui

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3028

CMD npm run start