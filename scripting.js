const timer = document.getElementById('timer');
const pieceSize = document.getElementById('pieceSize');
const reset = document.getElementById('reset');

let hour = 0;
let min = 0;
let sec = 0;

startGame = () => {
    var refreshID = startTime();
    console.log(refreshID);
    try {
        clearInterval(refreshID);
        console.log("worked");
    }
    catch {
        console.log("Did not work");
    }
    hour = 0;
    min = 0;
    sec = 0;

    pieceSize.style.display = "none";
    reset.style.display = "flex";
}

const startTime = async () => {
    setInterval(() => {
        timerContent = "";
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
        if (min == 60) {
            min = 0;
            hour++;
        }

        timerContent += `${hour}:`;
        if (min < 10) {
            timerContent += `0${min}:`;
        }
        else {
            timerContent += `${min}:`;
        }
        if (sec < 10) {
            timerContent += `0${sec}`;
        }
        else {
            timerContent += sec;
        }


        timer.innerHTML = timerContent
    }, 1000)
}

// const puzzleImg = document.getElementById('puzzlefield');

// var loadFile = (event) => {
//     var imgUrl = URL.createObjectURL(event.target.files[0]);

//     puzzleImg.style.backgroundImage = `url(${imgUrl})`;

//     puzzleImg.style.height = "40rem";
//     puzzleImg.style.width = "50rem";

//     startTime();
// }

const puzzlefield = document.getElementById("puzzlefield");

var rows = 8;
var cols = 8;

var currPiece;
var otherPiece;

window.onload = () => {
    for (let row = 0; row <rows; row++) {
        for (let col=0; col < cols; col++) {
            let piece = document.createElement("img");
            piece.src = "/res/empty.jpg";

            puzzlefield.append(piece)
        }
    }

    let pieces = [];
    for (let i=1; i<=rows*cols; i++) {
        pieces.push(i.toString());
    }

    pieces.reverse();
    for (let i=0; i<pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);
        let temp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = temp;
    }

    console.log(pieces);

    for (i = 0; i < pieces.length; i++) {
        let piece = document.createElement("img");
        piece.src = `./res/${pieces[i]}.jpg`;
        if (i<pieces.length/2) {
            document.getElementById("piecesCon1").append(piece);
        }
        else {
            document.getElementById("piecesCon2").append(piece);
        }
    }
}