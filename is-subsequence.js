// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  let str1Idx = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1Idx === str1.length) return true;
    if (str2[i] === str1[str1Idx]) str1Idx++;
  }

  return str1Idx === str1.length ? true : false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

module.exports = { isSubsequence };
