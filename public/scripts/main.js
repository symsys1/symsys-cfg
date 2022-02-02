//import json file with the filenames
requirejs(["grammars"], function () {
  let grammarForm = document.getElementById("grammarForm");
  grammars.forEach((o) => {
    let opt = document.createElement("option");
    opt.value = o.fileName;
    opt.textContent = o.name;
    grammarForm.appendChild(opt);
  });
});

let selected = "./grammars/Aaron_Jack.js";

function grammarSelected(e) {
  selected = e.target.value;
}

let grammarSelect = document.querySelector("#grammarForm");
grammarSelect.addEventListener("input", grammarSelected);

const button = document.getElementById("submit");
let utterance;

function say(text) {
  utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = speechSynthesis.getVoices()[33];
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
        document.getElementById("sentence").innerText = text;
        document.getElementById("sentencedisplay").style.display = "block";
        say(text);
      });

      throw new Error("Request failed.");
    })
    .catch(function (error) {
      console.log(error);
    });
});
