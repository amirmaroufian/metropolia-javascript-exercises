const numberOfDice = Number(prompt("Number of dice:"));
const targetSum = Number(prompt("Desired sum:"));

const simulations = 100000;
let matches = 0;

for (let i = 0; i < simulations; i++) {
    let sum = 0;

    for (let j = 0; j < numberOfDice; j++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }

    if (sum === targetSum) {
        matches++;
    }
}

const probability = (matches / simulations) * 100;

document.body.innerHTML =
    `<p>Probability to get sum ${targetSum} with ${numberOfDice} dice is approximately ${probability.toFixed(2)}%</p>`;