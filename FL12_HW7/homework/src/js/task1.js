let email = prompt('Enter your email', '');
const checkPasswLength = 5;
let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let userPassw = 'UserPass';
let adminPassw = 'AdminPass';
let passw, changePassw, oldPassw, newPassw, confirmPassw;

if (email === '' || email === null) {
    alert('Canceled');
} else
if (email.length < checkPasswLength) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === 'userEmail' || email === 'adminEmail') {
    passw = prompt('Enter your password', '');
    if (email === 'userEmail' && passw === 'userPassw' || email === 'adminEmail' && passw === 'adminPassw') {
        changePassw = confirm('Do you want to change your password?', '');
        if (changePassw === true) {
            oldPassw = prompt('Enter old password', '');
            if (oldPassw === '' || oldPassw === null) {
                alert('Canceled.');
            } else if (oldPassw === passw) {
                newPassw = prompt('Enter new password', '');
                if (newPassw === '' || newPassw === null) {
                    alert('Canceled');
                } else if (newPassw.length < checkPasswLength) {
                    alert('It\'s too short password. Sorry.');
                } else {
                    confirmPassw = prompt('Repeat new password, please', '');
                    if (confirmPassw === newPassw) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password!');
            }
        } else {
            alert('You have failed the change!');
        }
    } else if (passw === '' || passw === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don\'t know you');
}