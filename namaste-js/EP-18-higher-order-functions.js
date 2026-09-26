// Highere order functions
let radius = [3,2,5,6];

const area = (radius) => {
    return Math.PI * radius*radius;
}

const circumference = (radius) => {
    return 2 * Math.PI * radius;
}

const diameter = (radius) => {
    return 2 * radius;
}

const calculate = (r, logic) => {
    let output = [];
    for (let i=0; i<r.length; i++) {
        output.push(logic(r[i]))
    }
    return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));
