FROM node:16-alpine3.12
WORKDIR /app

ADD ./package.json /app/package.json
ADD ./package-lock.json /app/package-lock.json
RUN npm ci --production

ADD . /app/
ENTRYPOINT [ "node", "server.js" ]