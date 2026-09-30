function decodeSecretCode(s) {
  // your solution
  let res = '';
  console.log(s);

  for (let i=0; i<s.length-1; i++) {
    console.log(i +'-'+s.charCodeAt(i)+'-'+s[i+1]);

    res+= String.fromCharCode(parseInt(s.charCodeAt(i))+parseInt(s[i+1]));
  }
  console.log(res);
}

console.log(decodeSecretCode("a2b3c1")); //
