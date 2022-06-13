const deepEqual = (obj1, obj2) => {
    const firstIsObject = typeof obj1 === 'object';
    const firstIsArray = Array.isArray(obj1);
    let isEqual = firstIsObject || obj1 === obj2;
  
    isEqual ||=
      typeof obj1 === 'number' &&
      typeof obj2 === 'number' &&
      isNaN(obj1) &&
      isNaN(obj2);
  
    if (isEqual && firstIsObject) {
      if (firstIsArray !== Array.isArray(obj2)) return false;
      const mirror = Object.keys(obj1);
      isEqual = mirror.length === Object.keys(obj2).length;
  
      mirror.forEach((key) => {
        if (!isEqual) return;
        isEqual =
          typeof obj1[key] === 'object'
            ? deepEqual(obj1[key], obj2[key])
            : obj1[key] === obj2[key];
      });
    }
  
    return isEqual;
  };

  module.exports = deepEqual;
