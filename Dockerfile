FROM node:17.2.0-alpine3.14
WORKDIR /apps

RUN npm install -g \
  eslint@8.5.0 \
  ethlint@1.2.5 \
  lite-server@2.6.1 \
  @openzeppelin/contracts@4.4.0 \
  solhint@3.3.6 \
  truffle@5.4.22

ENTRYPOINT ["tail", "-f", "/dev/null"]
