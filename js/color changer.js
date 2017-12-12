/**
 * Created by Rakshith on 9/27/17.
 */

//Supporting function for random generator
var colors=[];
var squares = document.querySelectorAll(".square");
var resetbutton = document.querySelector('#reset');
var message = document.getElementById('message');
var difficulty = 6;
var modebuttons = document.getElementsByClassName('mode');
function init() {

    load_mode_listeners();
    load_square_listeners();
    load_resetbutton_listener();
    resetcolors();
}
function load_mode_listeners() {
    for (var i = 0; i < modebuttons.length; i++) {
        modebuttons[i].addEventListener('click', function () {
            if (this.textContent === 'Easy') {
                modebuttons[0].classList.remove('selected');
                modebuttons[1].classList.remove('selected');
                this.classList.add('selected');
                difficulty = 3;
            }
            else {
                modebuttons[0].classList.remove('selected');
                modebuttons[1].classList.remove('selected');
                this.classList.add('selected');
                difficulty = 6;
            }
            $('#reset').click();
        });
    }
}
function load_square_listeners() {
    for (i = 0; i < difficulty; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;

            if (clickedColor == winner) {
                (document.getElementById("message")).textContent = "Correct!!";
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
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
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
    colorsquares();
    }
function colorsquares() {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.display='block';
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display='none';
        }

    }
}
function load_resetbutton_listener() {
    //reset button
    resetbutton.addEventListener('click',function () {
    resetcolors();
    (document.querySelector('h1')).style.backgroundColor = 'steelblue';
    resetbutton.textContent = 'New Colors';
    message.textContent='';
});
}



init();






