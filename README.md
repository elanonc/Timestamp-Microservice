# Timestamp Microservice

Esse projeto é a resolução de um dos 5 desafios finais para a certificação de Back End Development and API's da FreeCodeCamp. Foi utilizado o boilerplate code fornecido pela FreeCodeCamp.

Você pode encontrar o desafio no seguinte link: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice


## Requisitos

 - [x] A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
 - [x] A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
 - [x] A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
 - [x] Waiting: If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }
 - [x] (An empty date parameter should return the current time in a JSON object with a unix key
 - [x] An empty date parameter should return the current time in a JSON object with a utc key


## Para executar

```bash
# Clone este repositório
$ git clone https://github.com/elanonc/Timestamp-Microservice

# Entre na pasta
$ cd Timestamp-Microservice

# Instale as dependências
$ npm install

# Execute
$ npm run dev
```
