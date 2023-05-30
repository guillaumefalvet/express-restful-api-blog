const debug = require('debug')('app:server');
require('dotenv').config();
const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const router = require('./app/routers');

const port = process.env.PORT || 'port number';
const swaggerOptions = {
  info: {
    version: '1.0',
    title: 'REST API WITH EXPRESS',
    description: '',
  },
  baseDir: `${__dirname}/app`,
  filesPattern: './**/*.js',
  swaggerUIPath: '/api-docs',
  exposeSwaggerUI: true,
};
const app = express();
expressJSDocSwagger(app)(swaggerOptions);
app.use(express.json());
app.use(router);

app.listen(port, () => {
  debug(`Server ready: http://localhost:${port}`);
});
