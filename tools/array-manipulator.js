const removeLast = (array) => {
  if (array.length <= 1 || typeof array !== 'object') return array;
  array.pop();
  return array;
};

module.exports = { removeLast };
