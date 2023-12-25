const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  let chars = [];
  let arr1 = str1.split('');
  let arr2 = str2.split('');

  for (let i = 0; i < arr1.length; i++) {
    let element = arr1[i];
    console.log(element)

    if (arr2.includes(element)) {
      chars.push(element);
      let index = arr2.indexOf(element);
      arr2[index] = '';
    }
  }
  return chars.length;
}

module.exports = {
  getCommonCharacterCount
};
