# PostgreSQL

1) Run `docker-compose up` to spin up database, `docker-compose down` to spin down. 

2) Connect to the database via psql in docker.
   
```
docker exec -it sensor-hub_db psql -U usr -a sensorhub
```

