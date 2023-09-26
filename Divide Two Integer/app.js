// Refactored code to improve readability and maintainability

const divide = function (A, B) {
  // Handle edge case where dividend is the minimum value and divisor is -1
  if (A === -2147483648 && B === -1) return 2147483647;

  // Initialize variables
  let ans = 0;
  let sign = 1;

  // Check if dividend and divisor are negative
  if (A < 0) {
    A = -A;
    sign = -sign;
  }
  if (B < 0) {
    B = -B;
    sign = -sign;
  }

  // Handle special cases where dividend is equal to divisor
  if (A === B) return sign;

  // Perform division using bit manipulation
  for (let i = 0, val = B; A >= B; i = 0, val = B) {
    // Find the largest multiple of divisor that is less than or equal to dividend using left shift
    while (val > 0 && val <= A) {
      val = B << ++i;
    }

    // Subtract the multiple from dividend and update quotient
    A -= B << (i - 1);
    ans += 1 << (i - 1);
  }

  // Apply sign to the quotient
  return sign < 0 ? -ans : ans;
};
