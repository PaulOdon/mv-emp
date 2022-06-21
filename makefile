start_dev_container:
	docker-compose up --build

start_dev_container_detach:
	docker-compose up --build -d

start_prod_container:
	docker-compose -f docker-compose.production.yaml up --build

start_prod_container_detach:
	docker-compose -f docker-compose.production.yaml up --build -d

stop_prod_container:
	docker-compose down

stop_dev_container:
	docker-compose -f docker-compose.production.yaml down