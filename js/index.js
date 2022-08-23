document.querySelector(".btn").addEventListener("click",playGame);



function playGame() {
    var randomFirstNumber = Math.random();

    randomFirstNumber = Math.floor(randomFirstNumber * 6) +1;
    
    console.log(randomFirstNumber);
    
    document.querySelector(".img1").setAttribute("src","images/dice"+randomFirstNumber+".png");
    
    var randomSecondNumber = Math.random();
    
    randomSecondNumber = Math.floor(randomSecondNumber * 6) +1;
    
    document.querySelector(".img2").setAttribute("src","images/dice"+randomSecondNumber+".png");
    
    if(randomFirstNumber > randomSecondNumber){
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }else if(randomSecondNumber > randomFirstNumber){
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }else{
        document.querySelector("h1").innerHTML = "Draw!";
    } 
}

