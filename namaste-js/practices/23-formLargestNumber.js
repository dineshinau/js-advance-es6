function formLargestNumber(arr) {
  //write your implementation here
  //write your implementation here
  console.log(arr);

  const nums = arr.map((num) => num.toString())
  console.log(nums);


  nums.sort((a, b) => {
    return (b+a).localeCompare(a+b)
  })
  console.log(nums);


  if ('0' === nums[0]) {
    return '0'
  }
  return nums.join('');
}

//For the purpose of user debugging.
console.log( formLargestNumber([3, 30, 34, 5, 9]));
console.log( formLargestNumber([54, 546, 548, 60]));

