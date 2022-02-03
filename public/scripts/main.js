//import json file with the filenames

console.log("Client-side code running");
var selected = "./grammars/Aaron_Jack.js";

function grammarSelected(e) {
  selected = e.target.value;
}

var grammarSelect = document.getElementById("grammarForm");
grammarSelect.addEventListener("input", grammarSelected);

const button = document.getElementById("submit");
let utterance;

function say(text) {
  utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = speechSynthesis.getVoices()[0];
  speechSynthesis.speak(utterance);
}

button.addEventListener("click", function (e) {
  speechSynthesis.cancel(utterance);
  fetch("/clicked", {
    method: "POST",
    body: JSON.stringify({
      grammarName: selected,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.text().then(function (text) {
        console.log("Click was recorded");
        document.getElementById("sentence").innerHTML = text;
        document.getElementById("sentencedisplay").style.display = "block";
        say(text);
      });

      throw new Error("Request failed.");
    })
    .catch(function (error) {
      console.log(error);
    });
});
