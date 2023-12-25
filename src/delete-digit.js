const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let nums = [];
  let arr = num.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let arrClone = arr;
    arrClone[i] = '';
    nums.push(Number(arrClone.join('')));
    arrClone[i] = el;
  }
  nums.sort((a,b) => b-a);
  return nums[0];
}

module.exports = {
  deleteDigit
};
