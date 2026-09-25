/**
 * What is async ?
 * What is await ?
 * How Async await works behind the scences ?
 * Examples of using aysnc/await
 * Error Handling
 * Interviews
 * Async await vs Promise.then/.catch
 */

const API_URL = "https://api.github.com/users/dineshinau";

// using promise chaining
// async function handleResp(){
//     fetch(API_URL)
//     .then( resp => resp.json())
//     .then(results => console.log(results))
// }

// // using await
// async function handleResp(){
//     const resp = await fetch(API_URL);
//     const result = await resp.json();
//     console.log(result);
// }

// using await: Error handlng
async function handleResp(){
    try{
        const resp = await fetch(API_URL);
        const result = await resp.json();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
handleResp();

// Another way to catch error. Since async function always returns promises. We can catch the error.
// handleResp().catch(err => console.log(err))
