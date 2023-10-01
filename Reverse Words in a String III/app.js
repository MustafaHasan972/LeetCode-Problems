/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
  }
  return arr.join(" ");

  // Another Method to solve this problem
  //   return s
  //     .split(" ")
  //     .map((word) => word.split("").reverse().join(""))
  //     .join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
