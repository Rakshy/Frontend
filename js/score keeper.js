/**
 * Created by Rakshith on 9/27/17.
 */


var player1 = 0;
var player2 = 0;
var noofgames = 5;
var gameover=false;

p1status = document.getElementById("player1");
p2status = document.getElementById("player2");
resetstatus= document.getElementById("reset");
numinput = document.getElementById("nog");

p1status.addEventListener("click", function () { if (gameover==false){
    increment_score(1);}
});
p2status.addEventListener("click", function () {if (gameover==false){
    increment_score(2);}
});
resetstatus.addEventListener("click", function (){reset();});
numinput.addEventListener("input",function () {if (numinput.value>0 && numinput.value>player1 && numinput.value>player2){noofgames=numinput.value;
                document.getElementsByClassName("playingfor")[0].textContent = noofgames;}
                else if (numinput.value<=0){alert("please enter a positive value")}
                else {alert("enter a higher value")}});

function increment_score(x) {
    y=x;
    if (y ==1){
        player1+=1;
    }
    else if (y==2){
        player2+=1;
    }
    change_display();
}

function change_display() {

    document.getElementsByClassName("p1")[0].textContent = player1;
    if (player1==noofgames){
        win("p1")
    }
    document.getElementsByClassName("p2")[0].textContent = player2;
    if (player2==noofgames){
        win("p2")
    }
}
function win(ply){
    winner = ply;
    document.getElementsByClassName(winner)[0].style.color = "green";
    gameover=true;
}
function reset() {
    player1 = 0;
    player2 = 0;
    gameover=false;
    document.getElementsByClassName("p1")[0].textContent = player1;
    document.getElementsByClassName("p2")[0].textContent = player2;
    document.getElementsByClassName("p1")[0].style.color = "black"
    document.getElementsByClassName("p2")[0].style.color = "black"
}
