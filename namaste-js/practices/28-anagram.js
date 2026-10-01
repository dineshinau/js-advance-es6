// Using custom loop
// function isAnagram(str1, str2) {
//     let str1Arr = str1.toLowerCase().split('');
//     for(let i = 0; i< str2.length; i++){
//         let letter = str2[i];
//         if( letter >= 'a' && letter <= 'z'){
//             if(!str1Arr.includes(str2[i].toLowerCase())){
//                 return false
//             }
//         }
//     }
//     return true;
// }

//For the purpose of user debugging.
console.log(isAnagram("listeN", "silenT")); // true
console.log(isAnagram("hello", "World")); // false
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "A")); // true
console.log(isAnagram("dormitory!!", "dirty room")); // true

// Shorter format, using inbuilt functions.
function isAnagram(str1, str2) {
    const format = (str) => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    return format(str1) === format(str2)
}

