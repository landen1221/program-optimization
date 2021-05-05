// add whatever parameters you deem necessary
function averagePair(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;

    if (avg === target) return true;
    if (avg < target) start++;
    else end--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 2, 3], 5)); // false
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true

module.exports = { averagePair };
