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

/// 5 ///
function flipOver(str) {
    let reverseStr = '';
    for (let i of str) {
        reverseStr = i + reverseStr;
    }
    return reverseStr;
}

/// 6 ///
function makeListFromRange([num1, num2]) {
    let arr = [];
    for (let i = num1; i <= num2; i++) {
        arr.push(i);
    }
    return arr;
}

/// 7 ///
function getArreyOfKeys(array, key) {
    const resultArr = [];
    executeforEach(array, value => resultArr.push(value[key]));
    return resultArr;
}

/// 8 ///
function substitute(array) {
    let newArray = [];
    mapArray(array, function(el) {
        let n = 30;
        if (el < n) {
            el = '*';
        }
        newArray.push(el);
    });
    return newArray;
}

/// 9 ///
function getPastDay(date, number) {
    const h = 24;
    const m = 60;
    const s = 60;
    const mi = 1000;
    const millisecInOneDay = h * m * s * mi;
    return new Date(date.getTime() - number * millisecInOneDay).getDate();
}

/// 10 ///
function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
    let min = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinute()}`;
    return `${year}/${month}/${day} ${hour}/${min}`;
}