// alert(1)

// function name(count){
//     for (let i = 0; i < 9; i++) {
//         console.log(i);
//     }
// };

// name(2)

// function sum(a,b) {
//     let c = a + b;
//     return c;
// }

// let d = sum(2,2);
// console.log(d);

let a = 0;
let b = 1;

for (let i = 0; i <= 10; i++) {
    let c = a + b;
    console.log(a);
    a = b;
    b = c;
}