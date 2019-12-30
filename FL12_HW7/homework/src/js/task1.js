let email = prompt('Enter your email', '');
let checkNumber = 5;

if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < checkNumber) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com') {
    let pass1 = prompt('Enter your password', '');
    if (pass1 === 'UserPass') {
        confirm('Do you want to change your password?', '');
    } else if (pass1 === '' || pass1 === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (email === 'admin@gmail.com') {
    let pass2 = prompt('Enter your password', '');
    if (pass2 === 'AdminPass') {
        confirm('Do you want to change your password?', '');
    } else if (pass2 === '' || pass2 === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don\'t know you');
}