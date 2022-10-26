# Test nestjs project to analyze health check kafka with terminus

nestjs terminus microservices health check kafka

## before running

### start zookeeper and kafka

`docker-compose up -d`

### install dependencies

`yarn`

## run

`yarn start`

## test

* access http://localhost:3000
* on success you get successful terminus response
* on error you get unsuccessful terminus response

It is expected that most of the time to get an error response. If using concurrent requests it is possible to get rare successful responses also. More rare successful response is possible without concurrent requests. Most often the response is unsuccessful.