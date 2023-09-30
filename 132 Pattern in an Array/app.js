function find132Pattern(nums) {
  const n = nums.length;
  if (n < 3) {
    return false;
  }

  let minLeft = new Array(n);
  minLeft[0] = nums[0];

  for (let i = 1; i < n; i++) {
    minLeft[i] = Math.min(nums[i], minLeft[i - 1]);
  }

  let stack = [];

  for (let j = n - 1; j >= 0; j--) {
    if (nums[j] > minLeft[j]) {
      while (stack.length > 0 && stack[stack.length - 1] <= minLeft[j]) {
        stack.pop();
      }

      if (stack.length > 0 && stack[stack.length - 1] < nums[j]) {
        return true;
      }

      stack.push(nums[j]);
    }
  }
  return false;
}

console.log(find132Pattern([1, 2, 3, 4]));
console.log(find132Pattern([3, 1, 4, 2]));
