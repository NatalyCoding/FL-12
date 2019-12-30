let email = prompt('Enter your email');

if (email === '' || email === null) {
    alert("Canceled");
} else if (email.length < 5) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    prompt('Enter your password');
} else {
    alert("I don’t know you");
}