FROM node:17.0.0-alpine3.14
WORKDIR /apps

RUN npm install -g \
  lite-server@2.6.1 \
  @openzeppelin/contracts@4.4.0 \
  truffle@5.4.22

ENTRYPOINT ["tail", "-f", "/dev/null"]
