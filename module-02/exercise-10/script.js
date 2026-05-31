let numberOfCandidates = Number(prompt("Enter number of candidates:"));

let candidates = [];

for (let i = 0; i < numberOfCandidates; i++) {
    let name = prompt(`Name for candidate ${i + 1}:`);
    candidates.push({
        name: name,
        votes: 0,
    });
}

let numberOfVoters = Number(prompt("Enter number of voters:"));

for (let i = 0; i < numberOfVoters; i++) {
    let vote = prompt("Who will you vote for? (leave empty for blank vote)");

    if (vote === "") {
        continue;
    }

    let candidate = candidates.find(c => c.name === vote);

    if (candidate) {
        candidate.votes++;
    }
}

candidates.sort((a, b) => b.votes - a.votes);

let winner = candidates[0];

console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);

console.log("results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}