function countVowels(str) {
    let count = 0;
    if (str.length < 1) {
        return count;
    }

    for (let i = 0; i < str.length; i++){
        if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(str[i])) {
            count++;
        }
    }
    return count;
}

//For the purpose of user debugging.
console.log(countVowels("JavaScript"));


