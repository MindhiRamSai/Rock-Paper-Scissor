let userScore=0
let compScore=0

let choices=document.querySelectorAll(".choice")
let msg=document.querySelector(".win")

let options=["Rock","Paper","Scissor"]

choices.forEach(function(choice){
    choice.addEventListener('click',function(){
        let userChoice=choice.getAttribute("id")
        let comp=Math.floor(Math.random()*3)
        let compChoice=options[comp]
        checkWinnwer(userChoice,compChoice)
    })
})

function checkWinnwer(userChoice,compChoice){
    if(userChoice===compChoice){
        msg.innerHTML="Game Was Drawn both chooses "+userChoice+". Play again"
        msg.classList.add("draw")
        msg.classList.remove("won","lost")
    }
    else if(userChoice==="Rock" && compChoice==="Scissor"){
        msg.innerHTML="You won "+userChoice+" beats "+compChoice+". Play again"
        userScore++
        document.getElementById("your-score").innerHTML=userScore
        msg.classList.add("won")
        msg.classList.remove("lost","draw")
    }
    else if(userChoice==="Paper" && compChoice==="Rock"){
        msg.innerHTML="You won "+userChoice+" beats "+compChoice+". Play again"
        userScore++
        document.getElementById("your-score").innerHTML=userScore
        msg.classList.add("won")
        msg.classList.remove("lost","draw")
    }
    else if(userChoice==="Scissor" && compChoice==="Paper"){
        msg.innerHTML="You won "+userChoice+" beats "+compChoice+". Play again"
        userScore++
        document.getElementById("your-score").innerHTML=userScore
        msg.classList.add("won")
        msg.classList.remove("lost","draw")
    }
    else{
        msg.innerHTML="You lost "+compChoice+" beats "+userChoice+". Play again"
        compScore++
        document.getElementById("comp-score").innerHTML=compScore
        msg.classList.add("lost")
        msg.classList.remove("won","draw")
    }
}