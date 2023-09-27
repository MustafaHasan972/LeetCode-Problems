function addTwoNumbers(l1, l2) {
  let carry = 0;
  let result = [];
  let i = l1.length - 1;
  let j = l2.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const x = i >= 0 ? l1[i] : 0;
    const y = j >= 0 ? l2[j] : 0;
    const sum = x + y + carry;

    carry = Math.floor(sum / 10);
    result.unshift(sum % 10); // Adding the remainder to the beginning of the result array

    i--;
    j--;
  }

  return result;
}

console.log(addTwoNumbers([1, 2, 3], [9, 8, 7]));
