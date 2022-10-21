var grammars = [
  {
    name: "2. THE SPARROW BOT (Abena Ofosu)",
    fileName: "./grammars/Abena.js",
  },
 
];

let grammarForm = document.getElementById("grammarForm");
grammars.forEach((o) => {
  let opt = document.createElement("option");
  opt.value = o.fileName;
  opt.textContent = o.name;
  grammarForm.appendChild(opt);
});
