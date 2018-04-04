
function timer() {
    let sec = 5;
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

// Get coordinates
function showCoords(event) {
    const x = event.clientX,
        y = event.clientY,
        //  Coords = `X coords: ${x}, Y coords: ${y}`;
    // Document.getElementById("info").innerHTML = coords;  user shouldnt see coordinates 

    // eslint-disable-next-line Parsing error: Unexpected keyword 'if'
    if (x > 714 && x <= 730) { 
        alert("Congrats!You found Wally!");
        window.history.back();
    }
}

showCoords();