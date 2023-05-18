require('dotenv').config();
const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const expressJSDocSwagger = require('express-jsdoc-swagger');
const router = require('./app/routers');
const logger = require('./app/log');

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
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.json());
app.use(router);

app.listen(port, () => {
  logger.debug(`Server ready: http://localhost:${port}`);
});
