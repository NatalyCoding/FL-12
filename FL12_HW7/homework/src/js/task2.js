let pocket;
let pocketRandom;
let randomRange = 9;
let play = confirm('Do you want to play a game?');
if (play) {
    pocketRandom = Math.floor(Math.random() * randomRange);
} else {
    alert('You did not become a billionaire, but can.');
}