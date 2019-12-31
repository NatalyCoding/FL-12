function isLeapYear(str) {
    let year = new Date(str);
    if (!isNaN(year)) {
        year = year.getFullYear();
        if (year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) {
            return `${year} is a leap year`;
        } else {
            return `${year} is not a leap year`;
        }
    } else {
        return 'Invalid date';
    }
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear(1213131313);