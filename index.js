const getIaRandomChoice = () => {
    const numberOfChoices = 3;
    let iaChoices = ['Rock', 'Paper', 'Scissors'];
    let randomChoicesOfIa = iaChoices[Math.floor(Math.random() * numberOfChoices)];
    return randomChoicesOfIa;
}

let userChoice = parseInt(prompt('Enter a choice (Rock, Paper, Scissors) : '));