/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function (dividend, divisor) {
  let intMax = Math.pow(2, 31) - 1;
  let intMin = -Math.pow(2, 31);
  let quotient = 0;

  if (divisor === 0 || dividend === 0) return 0;

  if (dividend === intMin && divisor === -1) return intMax;

  const isNegative =
    (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);

  let positiveDividend = Math.abs(dividend);
  let positiveDivisor = Math.abs(divisor);

  while (positiveDividend >= positiveDivisor) {
    positiveDividend -= positiveDivisor;
    quotient++;
  }

  if (isNegative) quotient -= quotient;

  return quotient;
};

console.log(divide(7, -3));
