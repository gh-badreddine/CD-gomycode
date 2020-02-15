FROM node:12.4

WORKDIR /app

ADD . /app

CMD node index.js
