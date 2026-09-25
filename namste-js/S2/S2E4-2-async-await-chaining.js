/**
 * What is async ?
 * What is await ?
 * How Async await works behind the scences ?
 * Examples of using aysnc/await
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch
 */


// let seconds = 0;
// const timers = setInterval(() => {
//   console.log(seconds);
//   seconds++;

//   if (seconds > 20) {
//     clearInterval(timers);
//   }
// }, 1000);

let timer = 5;

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 is resolved in 5 Seconds');
    }, timer*1000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 is resolved in 10 Seconds');
    }, timer*2*1000);
});

async function handlePromises(){
    console.log('Waiting for promise p1 to resolve');
    const val1 = await p1; // handePromises execution is suspended till p1 is resolved.
    console.log('promise p1 is resolved. Value: '+val1);

    console.log('Waiting for promise p2 to resolve');
    const val2 = await p2; // handePromises execution is suspended again till p2 is resolved.
    console.log('Promise p2 is resolved. Value: '+val2);
}
handlePromises();
