// add whatever parameters you deem necessary
function longestFall(arr) {
  if (!arr.length) return 0;
  let longest = 0;
  let current = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) current++;
    else {
      if (current > longest) longest = current;
      current = 1;
    }
  }
  return current > longest ? current : longest;
}

module.exports = { longestFall };
