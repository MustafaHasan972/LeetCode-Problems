/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let even = [];
  let odd = [];

  for (let n of nums) {
    if (n % 2 === 0) {
      even.push(n);
    } else {
      odd.push(n);
    }
  }
  return even.concat(odd);
};

console.log(sortArrayByParity([3, 1, 2, 4]));
