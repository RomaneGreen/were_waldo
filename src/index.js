


//sets the timer
function timer() {
  let sec = 30;
  let timer = setInterval(function() {
    document.getElementById("timerdisplay").innerHTML =
      "Time left:" + "00:" + sec;
    sec--;
    if (sec < 1) {
      clearInterval(timer);
      alert("sorry times up!");
      window.history.back();
    }
    if (sec < 10) {
      document.getElementById("timerdisplay").innerHTML =
        "Time left:" + "00:0" + sec;
    }
  }, 1000);
}

window.onload = timer();



//gets coordinates
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
//   document.getElementById("info").innerHTML = coords; user shouldnt see coordinates
  if (x > 856 && x <= 945) {
    alert("Congrats!You found Wally!");
    window.history.back();
  }
}

showCoords(event);
