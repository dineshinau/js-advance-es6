function decodeSecretCode(s) {
  // your solution
  // your solution
  let res = '';
  if (!s) {
    return res;
  }
  if (s.length % 2 !== 0) {
    return res;
  }
  for (let i = 0; i < s.length - 1; i++) {
    res += String.fromCharCode(parseInt(s.charCodeAt(i)) + parseInt(s[i + 1]));
    i++;
  }
  return res;
}

console.log(decodeSecretCode("a2b3c1")); // ced
console.log(decodeSecretCode("x1y2z3")); //
console.log(decodeSecretCode("a0b0c0")); //
console.log(decodeSecretCode("")); //
