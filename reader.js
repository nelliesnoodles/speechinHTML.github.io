// JavaScript source code for speech experiment

//const speech_div;
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
let recognition = new SpeechRecognition();

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

function startREC(){
  recognition.start()
}



recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  let textELEM = document.getElementById('sp2txt')
  let text = event.results[0][0].transcript;
  textELEM.innerHTML = text
}

recognition.onspeechend = function() {
  recognition.stop();
}



recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}


function addEventlistener_topage() {
    console.log("adding event listeners");
    element = document.getElementById("button1");
    element.addEventListener("click", speak);
    sp2txt = document.getElementById('sp2txt_button')
    sp2txt.addEventListener('click', startREC)
}

function speak() {
    line = get_line();
    element = document.getElementById("first-paragraph");
    element.innerHTML = line;

    speechSynthesis.speak(new SpeechSynthesisUtterance(line));
}
