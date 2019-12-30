let pocket;
let pocketRandom;
let randomRange = 9;
let randomIncrease = 4;
let allowedUserAttempts = 3;
let attemptsCount = 0;
let attemptsLeft = allowedUserAttempts - attemptsCount;
let userPrize = 0;
let prize1 = 100;
let prize2 = 50;
let prize3 = 25;
let prizes = [prize1, prize2, prize3];
let play = confirm('Do you want to play a game?');
if (play) {
    pocketRandom = Math.floor(Math.random() * randomRange);
    while (attemptsCount < allowedUserAttempts) {
        pocket = parseInt(prompt('Choose a roulette pocket number from 0 to ' + (randomRange - 1) +
            '\nAttempts left: ' + attemptsLeft +
            '\nTotal prize: ' + userPrize + '$' +
            '\nPossible prize on current attempt: ' + prizes[attemptsCount] + '$', ''));
        if (pocket === pocketRandom) {
            userPrize = prizes[attemptsCount];
            attemptsCount++;
            let again = confirm('Congratulation, you won!   Your prize is: ' + userPrize +
                '$. Do you want to continue?');
            if (again) {

                randomRange += randomIncrease;
                pocketRandom = Math.floor(Math.random() * randomRange);
                for (let i = 0; i < prizes.length; i++) {
                    prizes[i] *= prizeInc;
                }
            } else {
                alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
                play = confirm('Do You want play again?');
                if (play) {

                    randomRange = randomDefault;
                    for (let i = 0; i < prizes.length; i++) {
                        prizes[i] = prizesDefault[i];
                    }
                } else {
                    break;
                }
            }

        } else {
            alert('Thank you for your participation. Your prize is: ' + userPrize + '$');
            play = confirm('Do You want to play again?');
        }
    } else {
        alert('You did not become a billionaire, but can.');
    }