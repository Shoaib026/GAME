const choices = ["stone", "paper", "scissors"];

document.getElementById("stone").addEventListener("click", () => playGame("stone"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = getResult(playerChoice, computerChoice);

    displayResult(playerChoice, computerChoice, result);
}

function getResult(player, computer) {
    if (player === computer) return "It's a tie!";
    if (
        (player === "stone" && computer === "scissors") ||
        (player === "paper" && computer === "stone") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!";
    }
    return "Computer wins!";
}

function displayResult(player, computer, result) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        You chose <strong>${player}</strong>.<br>
        Computer chose <strong>${computer}</strong>.<br>
        <strong>${result}</strong>
    `;
}
