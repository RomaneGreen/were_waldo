function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("info").innerHTML = coords;
    if (x > 714 &&  x <= 730) {
        alert('Congrats!You found Wally!');
    }
}

showCoords();