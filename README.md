# vue-base

> A Vue.js project

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn start

# build for production with minification
yarn build

# create mock api
node src/utils/faker.js > db.json

# build mock api
json-server --watch db.json

# test mock api
curl -X GET "http://localhost:3000/movies" 
```

## Pages
``` bash
# P_101: Movie
# P_102: Product
```
[guide mock api](https://www.sitepoint.com/mock-rest-apis-using-json-server/)