// JavaScript source code for speech experiment

//const speech_div;

var current_index = 0;
var max_len = Monty_text.length - 1;

function get_line() {
    let line = Monty_text[current_index];
    if (current_index > max_len) {
        current_index = 0;
    }
    else {
        current_index += 1;
    }
    return line;   
  
};




function addEventlistener_topage() {
    console.log("adding event listeners");
    element = document.getElementById("button1");
    element.addEventListener("click", speak);
}

function speak() {
    line = get_line();
    element = document.getElementById("first-paragraph");
    element.innerHTML = line;

    speechSynthesis.speak(new SpeechSynthesisUtterance(line));
}
speak();




    
