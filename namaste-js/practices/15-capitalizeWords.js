function capitalizeWords(sentence) {
    // For capitilizeCase
    // return sentence.toLowerCase().split(' ').map((word,index) => index === 0 ? word:  word.charAt(0).toUpperCase() + word.slice(1) ).join(' ');
    let words = sentence.trim().toLowerCase().split(' ');
    console.log(words);
    let newWords = words.map((word,index) => word.length > 0 ? word.trim().charAt(0).toUpperCase()+word.slice(1): '')
    console.log(newWords.filter((newWord) => newWord.length > 0 ));

    return sentence.length < 1 ? sentence : sentence.trim().toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1) ).filter((word)=> word.length>0).join(' ')
}

console.log(capitalizeWords("hello worlD")); // Hello World
console.log(capitalizeWords('javsScript is FUN')); // Javsscript Is Fun
console.log(capitalizeWords('    multiple spaces   ')); // Multiple Spaces
console.log(capitalizeWords('')); // ''
console.log(capitalizeWords('  worKing    solution  ')); // Working Solution

