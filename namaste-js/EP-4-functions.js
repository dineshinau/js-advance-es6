// functions
var x =5;
console.log(x);//5
a(); //10
console.log(x);//10
b(); //70
console.log(x);//70

function a (){
    x= 10;
    console.log(x);
}
console.log(x);//70
function b() {
    x=70;
    console.log(x);
}
console.log(x);//70

// 5 10 10 70 70 70 70
