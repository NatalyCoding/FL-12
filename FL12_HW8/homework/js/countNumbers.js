function countNumbers(string) {
    function makeNumber(string) {
        let newstring = '';
        for (let i = 0; i < string.length; i++) {
            if (!isNaN(parseInt(string[i], 10))) {
                newstring += string[i];
            }
        }
        return newstring;
    }
    let answ = {};
    if (!string) {
        return answ;
    }
    string = makeNumber(string);
    for (let i = 0; i < string.length; i++) {
        let num = string[i];
        answ[num] = (answ[num] || 0) + 1;
    }
    return answ;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');