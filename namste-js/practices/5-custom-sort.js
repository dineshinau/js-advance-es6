
function customSort(arr) {
    let nums= [], chars = [];
    for (let i in arr){
        if(typeof arr[i] !== 'number'){
            chars.push(arr[i]);
            continue;
        }
        nums.push(arr[i]);
    }
    // sort nums

    for (let i =0 ; i< nums.length; i++){
        for (let j = 0; j < nums.length-i-1; j++) {
            if(nums[j] > nums[j+1]){
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
            }
        }
    }

    // sort alphabets
    for(let i = 0; i<chars.length; i++){
        for (let j = 0; j < chars.length-i-1; j++) {
            if(chars[j]>chars[j+1]){
                [chars[j],chars[j+1]] = [chars[j+1],chars[j]];
            }
        }
    }
    return Array.prototype.concat(nums,chars)
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a",2,"g","s",'A', 'D', 'p', 'G'];
console.log(customSort(input));
