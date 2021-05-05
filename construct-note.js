// add whatever parameters you deem necessary
function constructNote(str1, str2) {
  let str1Freq = frequency(str1);
  let str2Freq = frequency(str2);

  for (let key in str1Freq) {
    if (!str2Freq[key]) return false;
    if (str1Freq[key] > str2Freq[key]) return false;
  }
  return true;
}

const frequency = (str) => {
  let obj = {};
  for (let char of str) {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
};

module.exports = { constructNote, frequency };
