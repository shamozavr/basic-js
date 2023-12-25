const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(array) {
  let result = {
  };
  for(let i = 0; i < array.length; i++) {
    let parts = array[i].split('.');
    let part = '';

    for (let j = parts.length - 1; j >= 0; j--) {
      part += `.${parts[j]}`;

      if(Object.keys(result).includes(part)) {
        result[part] += 1;
      } else {
        result[part] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
