function shuffle(array) {
    // Your implementation
    let res = array.slice();

    for(let i = res.length-1;i>0;i-- ){
        const j = Math.floor(Math.random() * (i+1)); //random index
        [res[i],res[j]] = [res[j],res[i]]
    }
    return res;
}

//For the purpose of user debugging.

//For the purpose of user debugging.
console.log( shuffle([1, 2, 3, 4, 5]));
console.log( shuffle(['a','b','c']));
console.log( shuffle([]));



