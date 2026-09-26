/**
 * Promise APIs
 *
 * Promise.all(): Returned an array of all successfully resolved promises if all success otherwise
 * first rejected promise error as result.
 * Promise.allSetteled(): Result of all the promises either success or fails.
 * Promise.race(): Return result of first resolved promise either success or fails.
 * Promise.any(): Retrun of first success promise if any otherwise aggregated error result of all promises.
 */

console.log('Promisee all');


const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('P1 success'), 1000);
});
const p2 = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('P2 success'), 5000);
    // setTimeout(() => reject('P2 fail'), 5000);
});
const p3 = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('P3 success'), 3000);
});

Promise.all([p1, p2, p3])
.then( (res) => {
    console.log(res);
} )
.catch ( (err) => {
    console.error(err);
});



