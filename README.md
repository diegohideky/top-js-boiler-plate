# Top JS Boiler Plate
> Express Node JS Restful API

```
yarn: 1.19.0
node: 12.13.0
```

A restful api created using Express (Node JS), DDD, Sequelize

## Installation

Ubuntu 16.04:

1. Install first [nvm](https://hackernoon.com/how-to-install-node-js-on-ubuntu-16-04-18-04-using-nvm-node-version-manager-668a7166b854)
2. Install [node](https://nodejs.org/en/download/) 12.13.0
```
nvm install 12.13.0
nvm use 12.13.0
nvm alias default 12.13.0 //to set node 12.13.0 as default
```
3. Install [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
4. Install [docker](https://github.com/fmidev/smartmet-server/wiki/Setting-up-Docker-and-Docker-Compose-(Ubuntu-16.04-and-18.04.1))

## Development setup

To start developing you only need to run the next commands:
```sh
yarn
yarn dc:up //to start container
yarn mg //to start migrations
yarn start:dev
```
You can configurate your env variables in the `.env.dev` file

## Testing

All tests are created with [Jest](https://jestjs.io/) using the suffix **.test.js**

To run the tests you need to make sure the docker container is running:
```
yarn dc:up
```
You also need to create a new database called **test**
After you start the container and create the database, you can run the next commands:
```
yarn test //to run tests
yarn test:watch //to run tests in hot reload mode
yarn test:coverage //to run tests and display coverage file
```
You can configurate your env variables in the `.env.test` file

## Linting

The lint configuration is based in the airbnb recommended lint pattern.

To run verify the code pattern you can run:
```
yarn lint
yarn ling:fix //to fix automatically lint problems
```

## Meta

Diego Hideky – [@diegohideky](http://instagram.com/diegohideky) – diegohideky@gmail.com

[https://github.com/diegohideky](https://github.com/diegohideky)

## Contributing

1. Fork it (<https://github.com/diegohideky/top-js-boiler-plate>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
