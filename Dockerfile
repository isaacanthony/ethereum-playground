FROM node:16.0.0-alpine3.11
WORKDIR /apps

RUN npm install -g \
  lite-server@2.6.1 \
  truffle@5.3.3

ENTRYPOINT ["tail", "-f", "/dev/null"]
