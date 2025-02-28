Stock & Crypto Price API

This is a backend API built with Node.js, Express.js, and Redis to fetch real-time stock and cryptocurrency prices.

# Features 🚀

 - Fetch Stock Prices from Yahoo Finance

 - Get Cryptocurrency Prices from Binance API

 - Redis Caching to optimize performance

 - Dockerized Setup for easy deployment

<br>
# Installation & Setup 🛠

1. Clone the Repository
```
git clone https://github.com/gamepy91/stock-crypto-api.git
cd stock-crypto-api
```

2. Create a .env File
Create a .env file in the root directory:
```
PORT=3000
REDIS_HOST=redis
REDIS_PORT=6379
```

3. Run with Docker
Ensure Docker & Docker Compose are installed, then run:
```
docker-compose up --build
```
This will start the API, Redis, In Port 3000.

<br>

# API Endpoints 
Stock Price API 📈
| Method | Endpoint         | Description                |
|--------|-----------------|----------------------------|
| GET    | `/stock/:symbol`   | Fetch stock price       |

Example:
```
curl http://localhost:3000/stock/AAPL
```

Stock Price API 📈
| Method | Endpoint         | Description                |
|--------|-----------------|----------------------------|
| GET    | `/crypto/:symbol`   | Fetch Bitcoin price       |

Example:
```
curl http://localhost:3000/crypto/btc
```
<br>

# Postman Collection
This project contains a Postman Collection for easy API testing. You can import the collection into Postman to quickly test all API endpoints. The collection is included in the repository as a JSON file named `stock-crypto.postman_collection.json`



