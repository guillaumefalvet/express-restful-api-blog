require('dotenv').config();

const express = require('express');
const router = require('./app/routers');
const logger = require('./app/log');

const port = process.env.PORT || 'port number';

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.json());
app.use(router);

app.listen(port, () => {
  logger.debug(`Server ready: http://localhost:${port}`);
});
