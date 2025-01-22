/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  var ways = {
    0: 0,
    1: 1,
    2: 2,
  };
  if (n <= 2) return ways[n];
  let i = 3;
  while (i < n + 1) {
    ways[i] = ways[i - 1] + ways[i - 2];
    i++;
  }
  return ways[n];
};

console.log(climbStairs(5));
