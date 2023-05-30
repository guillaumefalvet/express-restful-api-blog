const debug = require('debug')('app:helpers');

// eslint-disable-next-line func-names
const controllerHandler = (controllerAction) => async (request, response, next) => {
  try {
    debug('CHECKING FOR ERRORS');
    await controllerAction(request, response, next);
    debug('NO ERROR FOUND');
  } catch (error) {
    debug('ERROR FOUND');
    // GOING TO MIDDLEWARE
    next(error);
  }
};

module.exports = controllerHandler;
