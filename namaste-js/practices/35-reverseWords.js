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

console.log(reverseWords("Hello World"));      // olleH dlroW
console.log(reverseWords("JavaScript is fun"));      // tpircSavaJ si nuf
console.log(reverseWords("   Lead  and   Trial    "));      //   daeL  dna   lairT
console.log(reverseWords(""));      //
console.log(reverseWords("OneWord"));      // droWenO

