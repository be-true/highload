FROM node:16-alpine3.12
WORKDIR /app

ADD ./package* /app/
RUN npm ci --production

ADD . /app/
ENTRYPOINT [ "node", "server.js" ]