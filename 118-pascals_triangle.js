/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  p = [[1]];
  //p1[[1,1]]
  //p2[[1,2,1]]
  //p3[[1,3,3,1]]

  // iterate all rows 1...numRows-1
  if (numRows === 1) return p;
  for (let i = 1; i < numRows; i++) {
    row = [1];
    // iterate all 0...i items in row
    for (let j = 1; j < i; j++) {
      row.push(p[i - 1][j - 1] + p[i - 1][j]);
    }
    row.push(1);
    p.push(row);
  }
  return p;
};
console.log(generate(5));
