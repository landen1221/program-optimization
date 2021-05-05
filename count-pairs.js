// add whatever parameters you deem necessary
// O(n log n)
function countPairs(arr, sumVal) {
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  let pairs = 0;

  while (start < end) {
    let total = arr[start] + arr[end];
    if (total === sumVal) {
      pairs++;
      start++;
      end--;
    } else if (total < sumVal) {
      start++;
    } else {
      end--;
    }
  }
  return pairs;
}

console.log(countPairs([3, 1, 5, 4, 2], 6)); // 2 (1,5 and 2,4)
console.log(countPairs([10, 4, 8, 2, 6, 0], 10)); // 3 (2,8, 4,6, 10,0)
console.log(countPairs([4, 6, 2, 7], 10)); // 1 (4,6)
console.log(countPairs([1, 2, 3, 4, 5], 10)); // 0
console.log(countPairs([1, 2, 3, 4, 5], -3)); // 0
console.log(countPairs([0, -4], -4)); // 1
console.log(countPairs([1, 2, 3, 0, -1, -2], 0)); // 2

module.exports = { countPairs };
