// Made by Hansome Boi
// Rafael Marrero 2019

function incrementValue(){
    let number = parseInt(document.getElementById('zeronumber').value, 10);
    number = isNaN(number) ? 0 : number;
    number++;
    document.getElementById('zeronumber').value = number;
        
}

function increaseFontSize(id, increaseFactor){
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + increaseFactor) + 'px';
}

function randomize() {
    document.getElementById('zeronumber').style.color = randomColors();
}
  
function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
