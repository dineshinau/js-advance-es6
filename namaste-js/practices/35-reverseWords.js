function reverseWords(sentence) {
    // Your implementation
    if ('' === sentence) {
        return ''
    }
    let words = sentence.split(' ');
    let res = '';
    let len = 0;
    for (let word of words){
        len++;
        for (let i = word.length-1; i >= 0; i--){
            res += word[i];
        }
        res += len < words.length ? ' ' : '';
    }
    return res;
}

// Using inbuilt functions

function reverseWords1(sentence) {
    return sentence.split(/(\s+)/)
    .map(word => {
        return word.trim() ? word.split('').reverse().join('') : word // trim with return empty for space string, else convert the word to character array then reverse the array and join to form the get reversered word.
    }).join('') // join to get the reverse sentence.
}

console.log(reverseWords1("Hello World"));      // olleH dlroW
console.log(reverseWords1("JavaScript is fun"));      // tpircSavaJ si nuf
console.log(reverseWords1("   Lead  and   Trial    "));      //   daeL  dna   lairT
console.log(reverseWords1(""));      //
console.log(reverseWords1("OneWord"));      // droWenO

