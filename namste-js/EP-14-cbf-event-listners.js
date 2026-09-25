// what is a callback function in javascript?
setTimeout(function() {
    console.log('Timer is done');
}, 8000);

function x(p) {
    console.log('x is called');
    p();
}

x(function y() {
    console.log('y is called');
});

function attachEventListener(callback) {
    let count = 0;
    // Event Listeners are also callback functions
    document.getElementById('clickMeBtn').addEventListener('click', function xyz() {
        console.log('Button was clicked: ', ++count);
    });
}
attachEventListener();
