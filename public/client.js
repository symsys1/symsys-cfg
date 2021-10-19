// Script for fake password requirement
$(document).ready(function(){
  var pw = "chomsky"; // NOT SECURE - DO NOT ACTUALLY DO THIS FOR VALUABLE INFO
  // On submit button clicked
  $("#pwsubmit").click(function(){
    if ($("#textBox").val() != pw) {
      displayError();
    } else {
      showProjects();
    }
  });

  // Check for carriage return
  $("#textBox").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      if ($("#textBox").val() != pw) {
        displayError();
      } else {
        showProjects();
      }
    }
  });
});

function displayError() {
  $("#error").text("Password Incorrect");
  $("#error").css("color","red");
  $("#textBox").val("");
}

function showProjects() {
  $("#password").css("display","none");
  $("#projects").css("display","block");
}


console.log("Client-side code running");
var selected = "./grammars/frat.js";

function grammarSelected(e) {
  selected = e.target.value;
}

var grammarSelect = document.querySelector("#grammarForm");
grammarSelect.addEventListener("input", grammarSelected);

const button = document.getElementById("submit");

button.addEventListener("click", function(e) {
  fetch("/clicked", {
    method: "POST",
    body: JSON.stringify({
      grammarName: selected,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(function(response) {
      return response.text().then(function(text) {
        console.log("Click was recorded");
        document.getElementById("sentence").innerHTML = text;
        document.getElementById("sentencedisplay").style.display = "block";
      });
      throw new Error("Request failed.");
    })
    .catch(function(error) {
      console.log(error);
    });
});
