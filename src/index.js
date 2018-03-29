alert('working')


function foundWaldo(){
    
    console.log('yo');
    
}

foundWaldo();

 function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("info").innerHTML = coords;
    if (x > 856 &&  x <= 945) {
        alert('Congrats!You found Wally!');
    }
    
};

showCoords(event);
