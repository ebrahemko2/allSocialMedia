function play() {
    var audio = document.getElementById("audio");
    audio.play();
}


document.querySelectorAll(".social-media a").forEach((socialIcon) => {
    socialIcon.onclick = () => {
        play();
    }
});