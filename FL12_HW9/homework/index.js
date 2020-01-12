function convert(arr) {
    let arg;
    let convertedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            arg = Number(arr[i]);
            convertedArr.push(arg);
        } else if (typeof arr[i] === 'number') {
            arg = String(arr[i]);
            convertedArr.push(arg);
        }

    }

    return convertedArr;
}

let myarr = ['1', 2, 3, '4'];
convert(myarr);

/// 2 ///
function executeforEach(array, callback) {
    for (let value of array) {
        callback(value);
    }
}

/// 3 ///
function mapArray(array, callback) {
    let resultArray = [];
    executeforEach(array, value => resultArray.push(callback(parseInt(value))));
    return resultArray;
}

/// 4 ///
function filterArray(array, callback) {
    let filteredArr = [];
    executeforEach(array, function(el) {
        let n = 2;
        if (el % n === 0) {
            filteredArr.push(callback(el));
        }
    });
    return filteredArr;
}