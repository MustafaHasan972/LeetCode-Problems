// A function that returns three functions - increment, decrement and reset.
var createCounter = function (init) {
  let val = init;
  return {
    increment: function increment() {
      val += 1;
      return val;
    },
    decrement: function decrement() {
      val -= 1;
      return val;
    },
    reset: function reset() {
      val = init;
      return val;
    },
  };
};
