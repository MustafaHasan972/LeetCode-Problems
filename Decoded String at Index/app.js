/**
 * Calculates the decoded character at index `k` in string `s`.
 *
 * @param {string} s - The input string.
 * @param {number} k - The index position to decode.
 * @return {string} The decoded character at index `k`.
 */
let decodeAtIndex = function (s, k) {
  let length = 0;
  let i = 0;

  while (length < k) {
    if (!isNaN(s[i])) {
      length *= Number(s[i]);
    } else {
      length++;
    }
    i++;
  }

  for (let j = i - 1; j >= 0; j--) {
    if (!isNaN(s[j])) {
      length /= Number(s[j]);
      k %= length;
    } else {
      if (k === 0 || k === length) {
        return s[j];
      }
      length--;
    }
  }

  return "";
};
