var grammars = [
  {name:"2. Koreaboo (Hannah and Hana)", fileName:"./grammars-fall2022/Hannah_Hana_Koreaboo.js"},
  {name:"3. ? (Amrita and Caeley)", fileName:"./grammars-fall2022/Amrita and Caeley.js"},
  {name:"4. ? (Andrew)", fileName:"./grammars-fall2022/andrew.js"},
  {name:"5. Captain Black Beard (Chris Lopez)", fileName:"./grammars-fall2022/ChrisLopez,CaptainBlackBeard.js"},
  {name:"6. Strength Coach/Athlete Weightlifting (Drew Bowser)", fileName:"./grammars-fall2022/DrewBowserStrength Coach/Athlete Weightlifting.js"},
  {name:"7. Trump Tweets (Edoardo, Bryce)", fileName:"./grammars-fall2022/Edoardo, Bryce - Trump Tweets.js"},
  {name:"8. ? (Fara, Grace, Tunde)", fileName:"./grammars-fall2022/Fara, Grace, Tunde.js"},
  {name:"9. ? (?)", fileName:"./grammars-fall2022/grammar (2).js"},
  {name:"10. ? (?)", fileName:"./grammars-fall2022/grammar 2022-10-18 22.43.01.js"},
  {name:"11. ? (?)", fileName:"./grammars-fall2022/grammar 2022-10-20 04.29.22.js"},
  {name:"12. ? (?)", fileName:"./grammars-fall2022/grammar 2022-10-20 04.41.18.js"},
  {name:"13. ? (?)", fileName:"./grammars-fall2022/grammar 2022-10-20 09.23.52.js"},
  {name:"14. ? (?)", fileName:"./grammars-fall2022/grammar 2022-10-20 20.53.03.js"},
  {name:"15. ? (?)", fileName:"./grammars-fall2022/grammar 2022-10-20 23.21.53.js"},
  {name:"16. ? (?)", fileName:"./grammars-fall2022/grammar 2022-10-21 01.09.53.js"},
  {name:"17. ? (?)", fileName:"./grammars-fall2022/grammar 2022-10-21 04.00.44.js"},
  {name:"18. ? (?)", fileName:"./grammars-fall2022/grammar.js"},
  {name:"20. ? (Jasper)", fileName:"./grammars-fall2022/Jasper.js"},
  {name:"21. ? (Jeff Probst)", fileName:"./grammars-fall2022/JeffProbst.js"},
  {name:"22. ? (Jenny, Lila)", fileName:"./grammars-fall2022/Jenny_Lila.js"},
  {name:"23. ? (Jerry)", fileName:"./grammars-fall2022/Jerry_Wei_grammar.js"},
  {name:"26. ? (Lauren)", fileName:"./grammars-fall2022/Lauren.js"},
  {name:"27. ? (Lucien)", fileName:"./grammars-fall2022/Lucien Lasseau.js"},
  {name:"28. ? (Lucy)", fileName:"./grammars-fall2022/lucykw.js"},
  {name:"29. Yoda (Megan, Arshya)", fileName:"./grammars-fall2022/MeganArshya_YodaCFG.js"},
  {name:"30. ? (Olivia, Brianna)", fileName:"./grammars-fall2022/OliviaBrianna.js"},
  {name:"31. ? (Sophia, Imogen)", fileName:"./grammars-fall2022/Sophia and Imogen.js"},
  {name:"32. Tekgurler (?)", fileName:"./grammars-fall2022/tekgurler_grammar.js"},
];

let grammarForm = document.getElementById("grammarForm");
grammars.forEach((o) => {
  let opt = document.createElement("option");
  opt.value = o.fileName;
  opt.textContent = o.name;
  grammarForm.appendChild(opt);
});
