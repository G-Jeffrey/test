// Alright got it
// thank you
randNum = (x,y) => {
    return Math.floor(Math.random()*y+x);
}
let answer = randNum(1,100), lives = 10, highScore = 0, score = 0;
console.log(answer);
document.getElementById("lives").innerHTML = lives;
document.getElementById("highScore").innerHTML = highScore;
document.getElementById("score").innerHTML = score;
clicked = () => {
    let guess = parseInt(document.getElementById('guess').value);
    if(isNaN(guess)){
        alert("No Input");
        return;
    }
    if(lives===0){
        highScore = Math.max(score,highScore);
        if(confirm("You are out of lives! Would you like to play again?")){
            reset();
        }
        return;
    }
    
    if(guess==answer){
        answer = randNum(1,100);
        score++;
        defaultbg("green");
        console.log(answer);
        document.getElementById("score").innerHTML = score;
        document.getElementById("highScore").innerHTML = Math.max(highScore,score);
        document.getElementById('guess').value="";
        return;
    }else if(guess>answer){
        guess+=". Too high!";
    }else{
        guess+= ". Too low!";
    }
    defaultbg("red");
    lives--;
    document.getElementById("lives").innerHTML = lives;
    prependGuess(guess);
}
reset = () => {
    answer = randNum(1,100);
    lives = 10;
    score = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("lives").innerHTML = lives;
    document.getElementById("prevGuesses").innerHTML ="";
}
defaultbg = (color) => {
    document.body.style.backgroundColor = color;
    if(color!="white"){
        setTimeout("defaultbg('white')",500);
    }
}
prependGuess = (x) => {
    let item = document.createElement("li");
    let text = document.createTextNode(x);
    item.classList.add("list-group-item");
    item.appendChild(text);
    document.getElementById("prevGuesses").prepend(item);
}