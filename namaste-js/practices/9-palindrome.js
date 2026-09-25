function validatePalindrome(str) {
    let lower = str.toLowerCase();
    lower = lower.replace(/[^a-z0-9]/g,"");

    if (lower === lower.split("").reverse().join("")) {
        return true;
    }
    return false;
}

const input1 = 'A man, a plan, a canal: Panama';
const input2 = 'race a car';
const input3 = " ";
const input4 = "1234";
const input5 = "@!!!@@!";

const res1 = validatePalindrome(input1)
const res2 = validatePalindrome(input2)
const res3 = validatePalindrome(input3)
const res4 = validatePalindrome(input4)
const res5 = validatePalindrome(input5)

console.log(res1); // Output: true
console.log(res2); // Output: false
console.log(res3); // Output: true
console.log(res4); // Output: false
console.log(res5); // Output: true
