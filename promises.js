exports.getRandomNumber = (maxValue, callback) => {
  if (callback !== undefined) {
    setTimeout(() => {
      const result = Math.floor(Math.random() * maxValue);

      if (typeof maxValue !== 'number') {
        return callback(new Error('Veuillez passer un nombre!'));
      }

      callback(null, result);
    }, 0);
  }

  return new Promise((resolve, reject) => {
    const result = Math.floor(Math.random() * maxValue);

    if (typeof maxValue !== 'number') {
      reject(new Error('Veuillez passer un nombre!'));
    }

    resolve(result);
  });
};
