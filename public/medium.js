// Sets the timer
function timer() {
    let sec = 15;
    const timers = setInterval(() => {
        document.getElementById("timerdisplay").innerHTML =
      `Time left:00:${sec}`;
        sec--;
        if (sec < 1) {
            clearInterval(timers);
            alert("sorry times up!");
            window.history.back();
        }
        if (sec < 10) {
            document.getElementById("timerdisplay").innerHTML =
        `Time left:00:0${sec}`;
        }
    },1000);
}

window.onload = timer();

// Gets coordinates
function showCoords(event) {
    const x = event.clientX,
        y = event.clientY,
        // coords = `X coords: ${x}, Y coords: ${y}`;
    //   Document.getElementById("info").innerHTML = coords; //user shouldnt see coordinates
    
            if (x >= 551 && x <= 570) {  
        alert("Congrats!You found Wally!");
        window.history.back();
    }
}

showCoords();