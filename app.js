const compRes=["rock", "paper", "scissors"];
 
function computerPlay(){
    return compRes[Math.floor(Math.random()*3)];
}

function game(){
let winnerComputer=0;
let winnerPlayer=0;
let counter=0;
function playRound(playerSelection, computerSelection){
    
   
  
    if(playerSelection==="rock" && computerSelection==="paper"){ winnerComputer=++winnerComputer;
    /*return "You lose! paper beats rock"*/}
    else if(playerSelection==="rock" && computerSelection==="scissors"){winnerPlayer=++winnerPlayer;
         /*return "You win! rock beats scissors"*/}
    else if(playerSelection==="paper" && computerSelection==="scissors"){winnerComputer=++winnerComputer;
        /*return "You lose! scissors beat paper"*/}
    else if(playerSelection==="paper" && computerSelection==="rock"){ winnerPlayer=++winnerPlayer;
    /*return "You win! paper beats rock"*/}
    else if(playerSelection==="scissors" && computerSelection==="rock"){winnerComputer=++winnerComputer;
       /* return "You lose! rock beats scissors" */}
    else if(playerSelection==="scissors" && computerSelection==="paper"){winnerPlayer=++winnerPlayer;
    /*return "You win! scissors beat paper"*/}
    /*else {return "It's a draw!"}*/
    
    
}   



while(counter < 5){
    const computerSelection = computerPlay();
    const playerSelection = prompt('Enter your choice').toLowerCase();
    console.log(playRound(playerSelection,computerSelection));
    counter++;
}
if(winnerComputer>winnerPlayer){
    console.log(`Sorry! Computer won ${winnerComputer} to ${winnerPlayer}`)
}
else if(winnerPlayer>winnerComputer){
    console.log(`Congratulation! You won ${winnerPlayer} to ${winnerComputer}`)
}
else{
    console.log(`Draw computer won ${winnerComputer} times and you won ${winnerPlayer} times. please play again. `)
}

}
game();