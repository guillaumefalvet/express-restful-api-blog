const logger = require('../log');

// eslint-disable-next-line func-names
const controllerHandler = (controllerAction) => async (request, response, next) => {
  try {
    logger.info('CHECKING FOR ERRORS');
    await controllerAction(request, response, next);
  } catch (error) {
    logger.debug('ERROR FOUND');
    // GOING TO MIDDLEWARE
    next(error);
  }
};

module.exports = controllerHandler;
