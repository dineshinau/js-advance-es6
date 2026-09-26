// Block, Block Scope, Shadowing
// {
//     var a= 10;
//     let b= 20;
//     const c= 30;
// }

let a = 5;
var b= 7;
let c = 8;
var d = 11;
{
 let a = 6;
 var b = 8;
 let d = 12;
//  var c = 9; // Illegal showings
 console.log(a); // 6
 console.log(b) // 8
 console.log(d) // 12
}
 console.log(a); // 5
 console.log(b) // 8
 console.log(d) // 11

