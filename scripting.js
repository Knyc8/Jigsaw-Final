const timer = document.getElementById('timer');
const pieceSize = document.getElementById('pieceSize');
const reset = document.getElementById('reset');
const preview = document.getElementById('preview');
const previewCon = document.getElementById('previewCon');

let hour = 0;
let min = 0;
let sec = 0;

//Starts game and resets
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
    preview.style.display = "flex";
}

const showPreview = () => {
    previewCon.style.display = "flex";
}

const closePreview = () => {
    previewCon.style.display = "none";
}

//Starts the timer
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

/***** Upload image *****/
const puzzleImg = document.getElementById('puzzlefield');

var rows = 8;
var cols = 8;

var currPiece;
var otherPiece;

setPieces = () => {
    //initializes the empty board
    puzzleImg.style.backgroundImage = "none";
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let piece = document.createElement("img");
            piece.src = "./res/empty.jpg";

            //allows dragability
            piece.addEventListener("dragstart", dStart);
            piece.addEventListener("dragover", dOver);
            piece.addEventListener("dragenter", dEnter);
            piece.addEventListener("dragleave", dLeave);
            piece.addEventListener("drop", dDrop);
            piece.addEventListener("dragend", dEnd);
            puzzleImg.append(piece);
        }
    }

    //initializes the amount of pieces and their dimensions
    let pieces = [];
    for (let i = 0; i < rows * cols; i++) {
        pieces.push(i.toString());
    }

    //Shuffles
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);
        let temp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = temp;
    }

    //Sets the pieces to the puzzle container
    for (let i = 0; i < pieces.length; i++) {
        let piece = document.createElement("img");
        piece.src = "./res/" + pieces[i] + ".jpg";

        //DRAG FUNCTIONALITY
        piece.addEventListener("dragstart", dStart);
        piece.addEventListener("dragover", dOver);
        piece.addEventListener("dragenter", dEnter);
        piece.addEventListener("dragleave", dLeave);
        piece.addEventListener("drop", dDrop);
        piece.addEventListener("dragend", dEnd);

        if (i < pieces.length / 2) {
            document.getElementById("piecesCon1").append(piece);
        }
        else {
            document.getElementById("piecesCon2").append(piece);
        }
    }
}

/***** Drag Functions *****/
function dStart() {
    currPiece = this;
}

function dOver(e) {
    e.preventDefault();
}

function dEnter(e) {
    e.preventDefault();
}

function dLeave() {

}

function dDrop() {
    otherPiece = this;
}

function dEnd() {
    if (currPiece.src.includes("empty")) {
        return;
    }
    let currPieceImg = currPiece.src;
    let otherPieceImg = otherPiece.src;
    currPiece.src = otherPieceImg;
    otherPiece.src = currPieceImg;
}