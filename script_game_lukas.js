let count = 8; 
const parts = document.querySelectorAll(".part");
const dragParts = document.querySelectorAll(".drag-part"); 

let drag = null;


function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.dropEffect = "copy";
    console.log(ev.dataTransfer.dropEffect)
    ev.dataTransfer.setData("text/plain", ev.target.id);
    drag = ev.target; 
    console.log(drag);
}

function dragover(ev){
  ev.preventDefault(); 
}

function drop(ev){
  let dropID = ev.target.getAttribute("id");

  if(dropID.includes(drag.getAttribute("id")[1])){
    drag.style.visibility="hidden"
    for (const part of parts) {
      if(part.getAttribute("alt").includes(dropID[1])){
        part.style.visibility="visible"
        count--;
        console.log(count)
        
      }
    }
  }
  if(count === 0){
    clearTimeout(t);

    
    alert("Vyhral si");
  }
}
//********************************************************************************************
//********************************************************************************************
// ******************************** TIMER ****************************************************
//********************************************************************************************
//********************************************************************************************

//https://jsfiddle.net/Daniel_Hug/pvk6p/
var h2 = document.getElementsByTagName('h2')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
    // if (count === 0) {
    //     clearTimeout(t); 
    // }
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
  h2.textContent = "00:00:00";
  seconds = 0, minutes = 0, hours = 0;
  count = 8;
  
  for (const part of dragParts) {
    part.style.visibility="visible";
  }

  for (const part of parts) {
    part.style.visibility="hidden";
  }
}










  