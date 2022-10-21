var grammars = [
  {name:"1. Fizz: Kirsten and Avantika", fileName:"./grammars-fall2022/Kirsten_Avantika_Fizz.js"},
  {name:"2. Koreaboo (Hannah and Hana)", fileName:"./grammars-fall2022/Hannah_Hana_Koreaboo.js"},

];

let grammarForm = document.getElementById("grammarForm");
grammars.forEach((o) => {
  let opt = document.createElement("option");
  opt.value = o.fileName;
  opt.textContent = o.name;
  grammarForm.appendChild(opt);
});
