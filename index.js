let playerScore = 0;
let computerScore = 0;


const playRound = (userChoice, computerChoice) => {
    const resultRound = `${userChoice} ${computerChoice}`;
    const { resultRoundTextOne, resultRoundTextTwo } = resultRoundManager(
        userChoice, computerChoice, resultRound
    );
    updateChoices(userChoice, computerChoice);
    updateResultRoundText(resultRoundTextOne, resultRoundTextTwo);
    updateScore(playerScore, computerScore);
}


const resultRoundManager = (userChoice, computerChoice, resultRound) => {
    const userWins = ['rock scissors', 'paper rock', 'scissors paper'];
    const computerWins = ['rock paper', 'paper scissors', 'scissors rock'];
    let resultRoundTextOne = '';
    let resultRoundTextTwo = '';
    if (userWins.includes(resultRound)) {
        resultRoundTextOne = 'You won !';
        resultRoundTextTwo = `${userChoice} beats ${computerChoice}`;
        playerScore++;
    } else if (computerWins.includes(resultRound)) {
        resultRoundTextOne = 'You lost !';
        resultRoundTextTwo = `${userChoice} is beaten by ${computerChoice}`;
        computerScore++;
    } else {
        resultRoundTextOne = 'It\'s a tie !';
        resultRoundTextTwo = `${userChoice} ties with ${computerChoice}`;
    }
    return { resultRoundTextOne, resultRoundTextTwo };
}

const verifIfScoreIsFive = (pScore, cScore) => {
    if (pScore === 5) {
        window.location.reload(true);
        alert('You win...');
    } else if (cScore === 5) {
        window.location.reload(true);
        alert('You lost...');
    }
}

const updateChoices = (userChoice, computerChoice) => {
    const playerChoiceParagraph = document.querySelector('.player-choice');
    const computerChoiceParagraph = document.querySelector('.computer-choice');
    playerChoiceParagraph.textContent = getEmojiFromChoice(userChoice);
    computerChoiceParagraph.textContent = getEmojiFromChoice(computerChoice);
}


const getEmojiFromChoice = (choice) => {
    if (choice === 'rock') {
        return '🗿';
    } else if (choice === 'paper') {
        return '📃';
    } else {
        return '✂️';
    }
}


const updateResultRoundText = (resultRoundTextOne, resultRoundTextTwo) => {
    const resultRoundParagraphOne = document.querySelector('.result-round-text-container p:first-child');
    const resultRoundParagraphTwo = document.querySelector('.result-round-text-container p:last-child');
    resultRoundParagraphOne.textContent = resultRoundTextOne;
    resultRoundParagraphTwo.textContent = resultRoundTextTwo;
}


const updateScore = (playerScore, computerScore) => {
    const computerScoreParagraph = document.querySelector('.computer-score');
    computerScoreParagraph.textContent = `Computer : ${computerScore}`;  
    const playerScoreParagraph = document.querySelector('.player-score');
    playerScoreParagraph.textContent = `Player: ${playerScore}`;
    verifIfScoreIsFive(playerScore, computerScore);
}


const main = () => {
    initializeListenersToPlayARound();
}


const initializeListenersToPlayARound = () => {
    const rockPaperScissorsCards = document.querySelectorAll('.card');
    rockPaperScissorsCards.forEach((card) => {
        card.addEventListener('click', (event) => {
            const userChoice = event.target.className.split(' ')[1];
            playRound(userChoice, getComputerChoice());
        });
    });
}


const getComputerChoice = () => {
    const availableComputerChoice = ['rock', 'paper', 'scissors'];
    return availableComputerChoice[Math.floor(Math.random() * availableComputerChoice.length)]; 
}

main();