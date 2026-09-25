// Trust issues with the setTimeout function in JavaScript can lead to unexpected behavior,
// especially when dealing with asynchronous code. It's important to understand how the event loop works and
//  how callbacks are executed.

console.log('Start 3');
setTimeout(function cbT2() {
    console.log('CB setTimeout 3: ');
}, 3000);

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log('End 3');
