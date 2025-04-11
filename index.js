const getIaRandomChoice = () => {
    const numberOfChoices = 3;
    let iaAvailableChoices = ['Rock', 'Paper', 'Scissors'];
    let iaChoice = iaAvailableChoices[Math.floor(Math.random() * numberOfChoices)];
    return iaChoice;
}

const getUserChoice = () => {
    let userAvailableChoices = ['Rock', 'Paper', 'Scissors']; 
    let userChoice = '';
    while (true) {
        userChoice = prompt('Enter a choice (Paper, Rock, Scissors) : ');
        if (userAvailableChoices.includes(userChoice)) {
            break;
        } else {
            console.log('Please enter a valid choice !');
        }
    }
    return userChoice;
}

const isUserWin = (userChoice, iaChoice) => {
    let wins = ['Rock Scissors', 'Paper Rock', 'Scissors Paper'];
    let result = `${userChoice} ${iaChoice}`;
    console.log(result);
    if (wins.includes(result)) {
        console.log('Win !');
        return 1;
    } else if (userChoice == iaChoice) {
        console.log('Equality !');
        return 2;
    } else {
        console.log('Game over !');
        return 0;
    }
}

const main = () => {
    let iaScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = isUserWin(getUserChoice(), getIaRandomChoice());
        if (roundResult == 1) {
            playerScore++;
        } else if (roundResult == 0) {
            iaScore++;
        }
    }
    console.log('The game is finish score : ');
    console.log(`Player : ${playerScore}`);
    console.log(`IA : ${iaScore}`);
}

main();