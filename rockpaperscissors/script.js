let userScore=0;
let computerScore=0;
const uscore=document.querySelector("#userScore");
const cscore=document.querySelector("#computerScore");
const msg=document.querySelector("#msg");
const drawGame = () =>{
    msg.innerText="Game was Drawn";
    msg.style.backgroundColor="#191429";
}

const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userScore++;
        uscore.innerText=userScore;
        msg.innerText=`You Win!, Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }else{
        computerScore++;
        cscore.innerText=computerScore;
        msg.innerText=`You lost, ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="red";
    }
}

const choices=document.querySelectorAll(".box");

const playgame=(userchoice)=>{
    const compChoice=genComCho();
    if(userchoice==compChoice){
      drawGame();
    }else{
        let userWin=true;
        if(userchoice ==="rock"){
            userWin=compChoice ==="paper"? false : true;
        }else if(userchoice==="paper"){
            userWin=compChoice ==="rock"? true : false;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
    
}
const genComCho=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

    });
});