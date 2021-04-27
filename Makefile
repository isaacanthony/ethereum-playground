build:
	@docker build -t ethereum-playground .

start:
	@docker run \
		--detach \
		--name ethereum-playground \
		--volume $(PWD):/src \
		ethereum-playground

bash:
	@docker exec -it ethereum-playground sh

logs:
	@docker logs ethereum-playground

stop:
	@docker stop ethereum-playground
	@docker rm ethereum-playground
