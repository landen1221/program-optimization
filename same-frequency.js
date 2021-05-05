// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
  // convert both nums to strings
  let int1Str = int1.toString();
  let int2Str = int2.toString();

  // quick check if strings are same length
  if (int1Str.length !== int2Str.length) return false;

  // calc int1 num freq
  let int1Freq = frequency(int1Str);

  // calc int2 num freq
  let int2Freq = frequency(int2Str);

  // compare freq of both nums
  for (let key in int1Freq) {
    if (int1Freq[key] !== int2Freq[key]) return false;
  }

  return true;
}

// make frequency function
const frequency = (num) => {
  const obj = {};
  for (let val of num) {
    if (obj[val]) obj[val] += 1;
    else obj[val] = 1;
  }

  return obj;
};

module.exports = { sameFrequency };
