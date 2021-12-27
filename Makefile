build:
	@docker-compose pull
	@docker-compose build

start:
	@docker-compose up --detach
	@echo
	@echo "firefox \t http://localhost:5800"

bash:
	@docker exec -it node sh

logs:
	@docker logs ganache

stop:
	@docker-compose down --remove-orphans --volumes
