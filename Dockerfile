FROM node:17.3.0-alpine3.14
WORKDIR /apps

RUN apk update && apk upgrade && apk add --no-cache \
  git

RUN npm install -g \
  eslint@8.5.0 \
  ethlint@1.2.5 \
  lite-server@2.6.1 \
  @openzeppelin/contracts@4.4.1 \
  solhint@3.3.6 \
  truffle@5.4.26 \
  @truffle/hdwallet-provider@2.0.0

USER node
ENV NODE_OPTIONS=--openssl-legacy-provider
ENTRYPOINT ["tail", "-f", "/dev/null"]
