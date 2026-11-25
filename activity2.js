document.getElementById("start-button").addEventListener("click", startGame);

function startGame() {
    let player1 = prompt("Guess the secret number between 1 and 100:");
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 1;

    while (parseInt(player1) !== secretNumber) {

        if (parseInt(player1) < secretNumber) {
            player1 = prompt("Too low! Try again:");
        } else if (parseInt(player1) > secretNumber) {
            player1 = prompt("Too high! Try again:");
        }

        attempts++;
    }
    alert(`Congratulations! You guessed the number in ${attempts} attempts.`);


let medal = "";

if (attempts <= 5) {
    medal = "🥇";
} else if (attempts <= 10) {
    medal = "🥈";
} else {
    medal = "🥉";
}

document.getElementById("medal").textContent = medal;

}