function generateAtoZ() {
  let arr = [];
  for (let i=65; i<90; i++){
    arr.push(String.fromCharCode(i));
  }
  return arr;
}

console.log(generateAtoZ());

