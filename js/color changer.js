/**
 * Created by Rakshith on 9/27/17.
 */

//Supporting function for random generator
var colors=[];
var squares = document.querySelectorAll(".square");
var resetbutton = document.querySelector('#reset');
var message = document.getElementById('message');
var difficulty = 6;
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
//Random color generator
function getrandomcolor(){
    var hehe= "rgb("+((getRandomIntInclusive(0,255)).toString()+", "+
        (getRandomIntInclusive(0,255)).toString()+", "+
        (getRandomIntInclusive(0,255)).toString())+")";
    return hehe
}
function resetcolors(){
    colors = [];
for (j=0; j<difficulty; j++){
    colors.push(getrandomcolor())
    }
    winner = (colors[Math.floor(Math.random() * colors.length)]);
    colordisplay = document.getElementById("colordisplay");
    colordisplay.textContent=winner;
    }
function colorsquares() {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
}

//reset button
resetbutton.addEventListener('click',function () {
    resetcolors();
    colorsquares();
    (document.querySelector('h1')).style.backgroundColor = 'steelblue';
    message.textContent="Pick a Color";
    resetbutton.textContent = 'New Colors';
});

resetcolors();

colorsquares();

easy.addEventListener('click',function () {
    easy.classList.add('hover');
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = $("body").css("background-color");
    }
    difficulty = 3;
    $('#reset').click();
});

hard.addEventListener('click',function () {
    difficulty = 6;
    $('#reset').click();
});

for(i=0;i<difficulty;i++) {
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor == winner) {
            (document.getElementById("message")).textContent = "Correct";
            reset.textContent = "Play Again?";
            (document.querySelector('h1')).style.backgroundColor = winner;

            for (x = 0; x < difficulty; x++) {
                squares[x].style.backgroundColor = winner;
            }
        }
        else {
            this.style.backgroundColor = $("body").css("background-color");
            message.textContent = "Try Again";
        }
    });
}

