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
        changeGuess("N/A");
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
    changeGuess(guess);
    if(guess==answer){
        answer = randNum(1,100);
        score++;
        console.log(answer);
        document.getElementById("score").innerHTML = score;
        document.getElementById("highScore").innerHTML = Math.max(highScore,score);
        defaultbg("green");
        guess+=". Correct!";
        prependGuess(guess,"green");
        return;
    }else if(guess>answer){
        guess+=". Too high!";
    }else{
        guess+= ". Too low!";
    }
    lives--;
    defaultbg("red");
    document.getElementById("lives").innerHTML = lives;
    prependGuess(guess,"red");
    if(lives===0){

    }
}
reset = () => {
    changeGuess("??");
    answer = randNum(1,100);
    lives = 10;
    score = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("lives").innerHTML = lives;
    document.getElementById("prevGuesses").innerHTML ="";
}
defaultbg = (color) => {
    document.getElementById("body").style.backgroundColor = color;
    if(color!="transparent"){
        setTimeout("defaultbg('transparent')",1000);
    }
}
prependGuess = (x, color) => {
    let item = document.createElement("li");
    let text = document.createTextNode(x);
    item.classList.add("list-group-item");
    item.classList.add(color);
    item.appendChild(text);
    document.getElementById("prevGuesses").prepend(item);
}
changeGuess = (guess) =>{
    document.getElementById("prev").innerHTML = guess;
}