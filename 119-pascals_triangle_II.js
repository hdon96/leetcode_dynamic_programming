/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  let lastRow = [1];
  let lastRowIndex = 0;
  let currRow;
  while (lastRowIndex <= rowIndex) {
    currRow = [1];
    for (let i = 1; i <= lastRowIndex; i++) {
      currRow.push(lastRow[i - 1] + lastRow[i]);
    }
    lastRowIndex++;
    currRow.push(1);
    if (lastRowIndex === rowIndex) return currRow;
    lastRow = currRow;
  }
};
console.log(getRow(5));
