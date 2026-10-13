let userScore = 0;
let compScore = 0;
const msg = document.querySelector('.msg-container');
const choices = document.querySelectorAll('.imgs');
let userpara = document.querySelector('.user');
let comppara = document.querySelector('.comp');
choices.forEach((imgs)=>{
    imgs.addEventListener('click',()=>{
        const userChoice = imgs.getAttribute('id');
        playGame(userChoice);
    })
});
const playGame =(userChoice)=>{
    // console.log("User Choice : ", userChoice);
    //generate computer choice
    genCompChoice();
    const cChoice =genCompChoice();
    // console.log("Computer Choice : ",cChoice);
    if(userChoice === cChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            // paper,scissors
           userWin = cChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper'){
            //rock,scissors
            userWin = cChoice === 'rock' ? true : false;
        }else{
            //rock,paper
            userWin = cChoice === 'rock' ? false : true;
        }

        showWinner(userWin,userChoice,cChoice);
};
};
const genCompChoice=()=>{
    const options = ['rock','paper','scissors'];
    const CompChoice = Math.floor(Math.random()*3);
    return options[CompChoice];
};
const drawGame = ()=>{
    // console.log("Game is Draw!");
     msg.innerText ="Game was Draw, Play Again";
     msg.style.backgroundColor = "#012a4a";
};
const showWinner = (userWin,userChoice,cChoice) =>{
    if(userWin === true){
        userScore++;
        userpara.innerText = userScore;
        // console.log("You Win!");
        msg.innerText =`You Win! Your ${userChoice} beats ${cChoice}`;
        msg.style.backgroundColor = "#90a955";
    }else{
        // console.log("You Lose!");
        msg.innerText =`You Lose! ${cChoice} beats yours ${userChoice}`;
         compScore++;
         comppara.innerText = compScore;
         msg.style.backgroundColor = "#e76f51";
    }

};