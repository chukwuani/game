// getting the rules button and giving it functionality

const rulesModal = document.querySelector('.rules-modal')
const cls = document.querySelector('.close-btn')
const rules = document.querySelector('.rules')

cls.addEventListener('click', () => {
    rulesModal.style.cssText= "display: none;"
})

rules.addEventListener('click', () => {
    rulesModal.style.cssText= "display: flex;"
})


// getting all the elements for the game
const playAgain = document.querySelector('.play-again') 
const result = document.querySelector('.result-section')
const main = document.querySelector('.main')
const playBtn = document.querySelectorAll('.btn-circle')
const paper = document.querySelector('.paper')
const rock = document.querySelector('.rock')
const scissors = document.querySelector('.scissors')
const scoreEl = document.querySelector('.score')
const output = document.querySelector('.output')
const userSelect = document.querySelector('.user-select')
const houseSelect = document.querySelector('.computer-select')
const choices = ['paper', 'rock', 'scissors'];
const userPick = document.querySelector('.user-pick')
const housePick = document.querySelector('.house-pick')
const noShow = document.querySelector('.no-show')
const lateShow = document.querySelector('.late-show')


// picking random choice for the house
function randomChoice() {
    return choices[Math.floor(Math.random() * choices.length)] ;
}

// play again button and reset winner selection
playAgain.addEventListener('click', () => {
    setTimeout(() => {
        result.style.cssText= "display: none;"
        main.style.cssText= "display: flex;"

        houseSelect.classList.remove('rock');
        houseSelect.classList.remove('paper');
        houseSelect.classList.remove('scissors');

        userSelect.classList.remove('rock');
        userSelect.classList.remove('paper');
        userSelect.classList.remove('scissors');

        noShow.style.cssText= "display: none;"
        lateShow.style.cssText= "display: none;"
    }, 200);


});


// picking user choice and other functionality
paper.addEventListener('click', () => {
    setTimeout(() => {
        result.style.cssText= "display: flex;"
        main.style.cssText= "display: none;"
    }, 200);

    userChoice = paper.getAttribute('data-choice')
    checkWinner();
    
})

rock.addEventListener('click', () => {
    setTimeout(() => {
        result.style.cssText= "display: flex;"
        main.style.cssText= "display: none;"
    }, 200);

    userChoice = rock.getAttribute('data-choice')  
    checkWinner();

})

scissors.addEventListener('click', () => {
    setTimeout(() => {
        result.style.cssText= "display: flex;"
        main.style.cssText= "display: none;"
    }, 200);
     
    userChoice = scissors.getAttribute('data-choice')
    checkWinner();
    
})


// declare winner and loser
function checkWinner() {
    const computerChoice = randomChoice();
    console.log(userChoice);
    console.log(computerChoice);

    houseSelect.classList.add(computerChoice);

    userSelect.classList.add(userChoice);

    if (userChoice === computerChoice) {
        // draw
        output.textContent = 'draw'
    }

    else if (userChoice === 'paper' && computerChoice === 'rock' || 
    userChoice === 'rock' && computerChoice === 'scissors'||
    userChoice === 'scissors' && computerChoice === 'paper'){
        // user won
        setTimeout(() => {
            scoreEl.textContent ++   
        }, 1500);
  
        output.textContent = 'you won'
    }
    else{
        // user lost
        setTimeout(() => {
                scoreEl.textContent --    
        }, 1500);

        output.textContent = 'you lost'
    }

    setTimeout(() => {
       noShow.style.cssText= "display: flex;"
    }, 1000);

    setTimeout(() => {
        lateShow.style.cssText= "display: flex;"
     }, 1500);

    const houseImage ="./images/icon-" + computerChoice + '.svg';
    const userImage ="./images/icon-" + userChoice + '.svg';

    housePick.setAttribute('src', houseImage); 
    userPick.setAttribute('src', userImage); 
}





