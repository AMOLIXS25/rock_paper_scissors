const getIaRandomChoice = () => {
    const numberOfChoices = 3;
    let iaAvailableChoices = ['Rock', 'Paper', 'Scissors'];
    let iaChoice = iaAvailableChoices[Math.floor(Math.random() * numberOfChoices)];
    return iaChoice;
}

const isUserWin = (userChoice, iaChoice) => {
    let wins = ['Rock Scissors', 'Paper Rock', 'Scissors Paper'];
    let result = `${userChoice} ${iaChoice}`;
    console.log(result);
    if (wins.includes(result)) {
        console.log('Win !');
    } else if (userChoice == iaChoice) {
        console.log('Equality !');
    } else {
        console.log('Game over !');
    }
}

const main = () => {
    let userChoice = prompt('Enter a choice (Paper, Rock, Scissors) : ');
    isUserWin(userChoice, getIaRandomChoice());
}

main();