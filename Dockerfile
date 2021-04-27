FROM node:16.0.0-alpine3.11
WORKDIR /src

RUN npm install -g \
  ganache-cli@6.12.2 \
  npm@7.11.1 \
  truffle@5.3.3

ENTRYPOINT ["ganache-cli", "--host", "0.0.0.0"]
