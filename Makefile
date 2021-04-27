build:
	@docker-compose build

start:
	@docker-compose up --detach

bash:
	@docker exec -it node sh

logs:
	@docker logs ganache

stop:
	@docker-compose down --remove-orphans
