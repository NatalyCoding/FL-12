let a = parseInt(prompt('Enter first side of triangle - A')),
    b = parseInt(prompt('Enter second side - B')),
    c = parseInt(prompt('Enter third side - C'));
if (isNaN(a) || isNaN(b) || isNaN(c) || a === '' || b === '' || c === '') {
    alert('input values should be ONLY numbers');
} else if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else {
    if (a + b <= c || a + c <= b || b + c <= a) {
        alert('Triangle doesn’t exist');
        console.log('Triangle doesn’t exist');
    } else if (a === b && a === c) {
        console.log('Equilateral triangle');
    } else if (a === b || a === c || b === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
}