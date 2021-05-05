# Docker, Webpack, jQuery and Bootstrap 4


----


### Requirements:
- Docker
- NodeJs
- Webpack
- npm or yarn

## Docker

----
### Build an :

`` docker-compose build ``


### Running an image:
``docker-compose up -d``


## NPM

---

### Install all dependencies

``npm install``
or 

``yarn install``

### Install development dependencies
#### \* Package will appear in \`devDependencies\`

``npm install node-sass sass-loader autoprefixer babel-loader  css-loader style-loader mini-css-extract-plugin --save-dev``


## Webpack

----
### may require webpack-cli

``npm install --save-dev webpack-cli``


### build for production deployment
#### \* current mode is `production`

``npm run build``

 or 
 
``yarn build``


### if don't want to js library in bundle, use `externals` option.
- [Webpack Externals](https://webpack.js.org/configuration/externals/)
