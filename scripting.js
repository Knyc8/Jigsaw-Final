const puzzleImg = document.getElementById('puzzlefield');

var loadFile = (event) => {
    var imgUrl = URL.createObjectURL(event.target.files[0]);

    puzzleImg.style.backgroundImage = `url(${imgUrl})`;

    puzzleImg.style.height = "40rem";
    puzzleImg.style.width = "50rem";
}