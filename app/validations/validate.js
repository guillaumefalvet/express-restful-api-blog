function validate(schema) {
  return (request, response, next) => {
    const { error } = schema.validate(request.body);
    if (error) {
      next(error);
    }
    return next();
  };
}

module.exports = validate;
