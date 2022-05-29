# syngenta-backend-assignmenrt1




# NodeJS secure RESTFUL api

A minimal, secure RESTFUL api for NodeJS. This project includes access control of objects, and crud operation and model!

# Installation

* Clone the repo by using ```git clone```.
* Run ```npm install``` on the cloned directory.


# Running the software

* ```node src/server.js``` for simple setups.

# Adding new dishes into the backend system

To add dishes, simply send a POST to /dishes/ with the required fields in the req body,

```
http://localhost:5000/dishes/
```

# To get all dishes 
To get all dishes, simply send a GET to /dishes/ with the required fields in the query string, like so:
```
http://localhost:5000/dishes/
```

# To get all dishes based on location and restaurant
To get dishes, simply send a GET to /dishes/food?location=&restaurant_name=/ with the required fields in the query string, like so:
```
http://localhost:5000/dishes/food?location=Hyderbad&restaurant_name=Brundavan Restaurant
```

# To get all dishes based on Location
To get dishes, simply send a GET to /dishes/location/ with the required fields in the query string, like so:
```
http://localhost:5000/dishes/location?location=Mumbai
```


# To get all dishes based on Restaurant name
To get dishes, simply send a GET to /dishes/restaurant/ with the required fields in the query string, like so:
```
http://localhost:5000/dishes/restaurant?restaurant_name=Sai baba food restaurant
```

# To get status of a particular dish
To get status of a dish, simply send a GET to /dishes/status/ with the required fields in the query string, like so:
```
http://localhost:5000/dishes/status?dish_name=Tandoori Mutton
```


# Adding dishes into the cart

To add dishes into cart, simply send a POST to /cart/ with the required fields in the req body,

```
http://localhost:5000/cart
```

# Order dishes

To oredr dishes, simply send a POST to /order/ with the required fields in the req body,

```
http://localhost:5000/order
```

# API Endpoints

```
GET http://localhost:5000/dishes/
POST http://localhost:5000/dishes/
GET http://localhost:5000/dishes/food?location=Hyderbad&restaurant_name=Brundavan Restaurant
GET http://localhost:5000/dishes/location?location=Mumbai
GET http://localhost:5000/dishes/restaurant?restaurant_name=Sai baba food restaurant
GET http://localhost:5000/dishes/status?dish_name=Tandoori Mutton
POST http://localhost:5000/cart
POST http://localhost:5000/order

```
