alert("working");

 function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("info").innerHTML = coords;
    
}

showCoords();

// document.getElementById('infoh').addEventListener('click',function(){
//     console.log('hi');
// })