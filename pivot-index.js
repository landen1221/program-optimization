// add whatever parameters you deem necessary
function pivotIndex(arr) {
  let left = arr[0];
  let right = arr.slice(2).reduce((accum, val) => accum + val, 0);

  for (let i = 1; i < arr.length; i++) {
    if (left === right) return i;
    left += arr[i];
    right -= arr[i + 1];
  }
  return -1;
}

console.log(pivotIndex([1, 2, 1, 6, 3, 1])); // 3
console.log(pivotIndex([5, 2, 7])); // -1  no valid pivot index
console.log(pivotIndex([-1, 3, -3, 2])); // 1

module.exports = { pivotIndex };
