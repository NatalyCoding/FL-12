function addOne(x) {
    return x + 1;
}

function pipe(num, ...func) {
    let i;
    for (i = 0; i < func.length; i++) {
        num = func[i](num);
    }
    return num;
}

pipe(1, addOne, addOne);