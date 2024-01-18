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

// resetGame = () => {
//     pieceSize.style.display = "block";
//     reset.style.display = "none";
// }

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