/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let candidate1 = null;
  let candidate2 = null;
  let count1 = 0;
  let count2 = 0;

  for (let num of nums) {
    if (candidate1 === num) {
      count1 += 1;
    } else if (candidate2 === num) {
      count2 += 1;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1 -= 1;
      count2 -= 1;
    }
  }

  count1 = 0;
  count2 = 0;
  for (let num of nums) {
    if (candidate1 === num) {
      count1 += 1;
    } else if (candidate2 === num) {
      count2 += 1;
    }
  }

  let result = [];
  if (count1 > nums.length / 3) {
    result.push(candidate1);
  } else if (count2 > nums.length / 3) {
    result.push(candidate2);
  }

  return result;
};

console.log(majorityElement([3, 2, 3]));
