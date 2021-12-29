FROM node:17.3.0-alpine3.14
WORKDIR /apps
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN apk update && apk upgrade && apk add --no-cache \
  git

RUN yarn global add \
  eslint@8.5.0 \
  ethlint@1.2.5 \
  jshint@2.13.2 \
  lite-server@2.6.1 \
  solhint@3.3.6 \
  truffle@5.4.26

USER node
ENTRYPOINT ["tail", "-f", "/dev/null"]
