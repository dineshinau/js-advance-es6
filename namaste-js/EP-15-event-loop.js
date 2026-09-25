// Event Loop
console.log('Start')
setTimeout( function db() {
    console.log('callback');
}, 5000);
console.log('End');

// 2nd Example: Event Listner

console.log('Start 1')
document.getElementById('clickMeBtn').addEventListener('click', function xyz() {
    console.log('Button was clicked: ', ++count);
});
console.log('End 1');

// 3rd example fetch - mircrotask queue
console.log('Start 2')
setTimeout( function cbT() {
    console.log('CB settime out: ');
}, 5000);

fetch('https://jsonplaceholder.typicode.com/todos/1').then(function cbF() {
    console.log('CB jsonplaceholder');
});

console.log('End 2');
