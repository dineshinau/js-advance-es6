// Event bublling and capturing (Tickering)

document.querySelector("#grantparent").addEventListener( 'click', () => {
    console.log('Grant parent clicked');
}, true );

document.querySelector('#parent').addEventListener( 'click', (e) => {
    console.log('Parent clicked');
    e.stopPropagation();
}, true );

document.querySelector('#child').addEventListener( 'click', () => {
    console.log('Child clicked');
}, true );
