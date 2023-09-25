/**
 * Reverses the digits of a given integer.
 *
 * @param {number} x - The integer to be reversed.
 * @return {number} The reversed integer. Returns 0 if the reversed integer overflows.
 */
var reverse = function (x) {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  let rev = 0;

  while (x !== 0) {
    const pop = x % 10;
    x = Math.trunc(x / 10);

    if (rev > INT_MAX / 10 || (rev === INT_MAX / 10 && pop > 7)) return 0;
    if (rev < INT_MIN / 10 || (rev === INT_MIN / 10 && pop < -8)) return 0;

    rev = rev * 10 + pop;
  }

  return rev;
};

console.log(reverse(-98765432111));
