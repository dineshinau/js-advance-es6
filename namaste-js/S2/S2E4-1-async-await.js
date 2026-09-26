/**
 * What is async ?
 * What is await ?
 * How Async await works behind the scences ?
 * Examples of using aysnc/await
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch
 */

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise is resolved');
    }, 5000);

});

// Async function always return promise.
 async function getData(){
    return pr;
 }

 console.log(getData);

 const promiseData = getData();
 console.log(promiseData);

promiseData.then((res) => console.log(res));

/******** Await is only used inside the aync function ***********/

async function newData() {
    console.log("Waiting for promise to resolve");
    const val = await pr; // await resove the promise.
    console.log(val);
}
newData();



