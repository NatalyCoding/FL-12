let a = prompt('Enter value for A'),
    b = prompt('Enter value for B'),
    c = prompt('Enter value for C');
if (isNaN(a || b || c) === true) {
    console.log('Invalid input data');
}
let discr = (b * b) - 4 * (a * c);
let sqrDiscr = Math.sqrt(discr);
if (discr === 0) {
    let x = -b / 2 * a;
    console.log('x = ' + x);
} else if (d > 0) {
    let x1 = (-b + sqrDiscr) / (2 * a);
    let x2 = (-b - sqrDiscr) / (2 * a);
    console.log('x1 = ' + x1 + ' x2 = ' + x2);
} else {
    console.log('no solution');
}