// Scope chain

function a() {
    console.log(b);//10
    c(); //20
    function c() {
        b=20;
        console.log(b);
    }
}
var b=10;
a();
