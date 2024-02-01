console.log("text to speech converter");

let ourText = document.getElementById("ourText");
let playBtn = document.getElementById("playBtn");
let speech = new SpeechSynthesisUtterance();
console.log(speech);

let voices = [];
let voiceSelect = document.getElementById("voiceSelect");

window.speechSynthesis.onvoiceschanged=()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    // console.log(voices);

    voices.forEach((voice,i)=>{
        (voiceSelect.options[i]) = new Option(voice.name,i) 
    })

};

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})


playBtn.addEventListener('click',()=>{
    
    // console.log(speech.text); 
    speech.text = ourText.value;
    // console.log(speech.text);
    window.speechSynthesis.speak(speech) 
});

