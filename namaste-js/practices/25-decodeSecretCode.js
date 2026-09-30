function decodeSecretCode(s) {
  // your solution
  // your solution
  if(!s || s.length<1 || s.length % 2 !== 0) return '';

  let res = '';

  for (let i = 0; i < s.length; i+=2) {
    res += String.fromCharCode(parseInt(s.charCodeAt(i)) + parseInt(s[i + 1]));
  }
  return res;
}

console.log(decodeSecretCode("a2b3c1")); // ced
console.log(decodeSecretCode("x1y2z3")); //
console.log(decodeSecretCode("a0b0c0")); //
console.log(decodeSecretCode("")); //
