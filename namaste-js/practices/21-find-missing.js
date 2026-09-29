function findMissingNumber(nums) {
    for(let i=0; i<nums.length;i++){
        if(!nums.includes(i)){
            return i;
        }
    }
    return nums.length;
}

//For the purpose of user debugging.
console.log( findMissingNumber([3,0,1]));
console.log( findMissingNumber([0,1]));
console.log( findMissingNumber([9,6,4,2,3,5,7,0,1]));
console.log( findMissingNumber([0]));


