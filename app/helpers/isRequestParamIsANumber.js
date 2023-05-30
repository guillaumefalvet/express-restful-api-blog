module.exports = (request) => {
  if (/^(\d+,)*(\d+)$/.test(request.params.id)) {
    return Number(request.params.id);
  }
  throw new Error('only numbers as id');
};
