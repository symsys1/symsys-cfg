console.log("Client-side code running");
let obj = [
  {
    name: "2. Stanford Administration Mail (Lee Rosenthal and Abigail Neely)",
    fileName: "./grammars/AbigailLee.js",
  },
  {
    name: "3. GPS Directions (Agustin Olvera)",
    fileName: "./grammars/Agustin.js",
  },
  {
    name: "4. Stanford Student Asking Peer Out (Ahmad Allen, George Dimopoulos, Jennifer Fung)",
    fileName: "./grammars/Ahmad, George, Jen.js",
  },
  {
    name: "5. The Stanford Daily Pitchbot ( AJ Nadel, Bhakti Anbarasan, Michelle Bao)",
    fileName: "./grammars/AJ_Bhakti_Michelle.js",
  },
  {
    name: "6. Stoner Speech (Dean Alamy, Akshana Dassanaike )",
    fileName: "./grammars/Akshana & Dean.js",
  },
  {
    name: "7. Frat Bro Simulator (Alex Le, Joseph Tey)",
    fileName: "./grammars/Alex Le and Joseph Tey.js",
  },
  {
    name: "8. Provost Persis Drell (Alexa Kupor)",
    fileName: "./grammars/AlexaKupor.js",
  },
  {
    name: "9. Frat Bro Working the Door (Alexander Chon, Lucien Roose)",
    fileName: "./grammars/AlexLucien.js",
  },
  {
    name: "10. Golf Commentators (Ali Ansari)",
    fileName: "./grammars/Ali Grammar.js",
  },
  {
    name: "11. Stanford Dorm Chats (Ananya Vasireddy, Sidharth Srinivasan, Pooja Akella)",
    fileName: "./grammars/Ananya, Sidharth, Pooja.js",
  },
  {
    name: "12. Excuses for Canceled Plans (Angelina Ye, Alicia Purpur)",
    fileName: "./grammars/Angelina, Alicia.js",
  },
  {
    name: "13. Student-athlete CFG (Annabelle Bachmann, Iris Klok, Lettie Cabot)",
    fileName: "./grammars/Annabelle_Iris_Lettie.js",
  },
  {
    name: "14. Dear Professor (Patricia Strutz, Ariana Lotfi)",
    fileName: "./grammars/Ariana_Patricia.js",
  },
  {
    name: "15. ProFro at Stanford Admit Weekend (Aya Aziz, Akosua Kissi)",
    fileName: "./grammars/Aya Aziz, Akosua Kissi.js",
  },
  {
    name: "16. IYKYK (Beatriz Stix-Brunell)",
    fileName: "./grammars/Beatriz Stix-Brunell Grammar.js",
  },
  {
    name: "17. Symsys Discussion Board (Jayson Guo, Natalie Wang, Belinda Yeung)",
    fileName: "./grammars/belindajaysonnatalie.js",
  },
  {
    name: "18. Country Singer (Brandon Bui, Lishan Carroll)",
    fileName: "./grammars/Brandon and Lishan.js",
  },
  {
    name: "19. Bad Comedian (Brandon Rupp, Akshar Sarvesh)",
    fileName: "./grammars/Brandon_and_Akshar.js",
  },
  {
    name: "20. LinkedIn Post (Kaelyn Ong, Brandon Lieu)",
    fileName: "./grammars/BrandonLieu_KaelynOng.js",
  },
  {
    name: "21. Stanford Friends (Caroline Cahilly, Alex Lougeay, Noa Bregman)",
    fileName: "./grammars/caroline_alex_noa.js",
  },
  {
    name: "22. Spotify Wrapped (Eli Waldman, Catherine Harbour)",
    fileName: "./grammars/Catherine_Eli.js",
  },
  {
    name: "23. NFT advertiser (Emanuel Adamiak, Chase Adams)",
    fileName: "./grammars/Chase_Emanuel.js",
  },
  {
    name: "24. Canadian, eh? (Danny Goldberg, Willow Herz)",
    fileName: "./grammars/Danny Goldberg & Willow Herz.js",
  },
  {
    name: "25. VolleyBros (Dylan Pichay)",
    fileName: "./grammars/DylanPichay.js",
  },
  {
    name: "26. Michael Scott Unfiltered (Edwin Amaya, Jose Ruiz-Nino)",
    fileName: "./grammars/Edwin Amaya & Jose Ruiz.js",
  },
  {
    name: "27. Soto's common phrases (Eli Wandless)",
    fileName: "./grammars/Eli Wandless (2ND VERSION).js",
  },
  {
    name: "28. Gollum/Smeagol (Emilio Melgoza)",
    fileName: "./grammars/Emilio 2022-01-28 12.52.55.js",
  },
  {
    name: "29. New Yawker (Eric Zhu, Jenna Kim, Akea Pavel)",
    fileName: "./grammars/Eric Jenna Akea.js",
  },
  {
    name: "30. Ethan Dormski (Ethan Bernheim, Eric Montes, Natalie Sinsheimer)",
    fileName: "./grammars/ethan_eric_natalie.js",
  },
  {
    name: "31. Big Game Disaster  (Eva Ye, Carl Zhang)",
    fileName: "./grammars/Eva&Carl.js",
  },
  {
    name: "32. Gamer Chat (Felicity Huang)",
    fileName: "./grammars/FelicityHuangGrammar.js",
  },
  {
    name: "33. 1984 Grammar (Ian Lasic-Ellis, Nick Keubler )",
    fileName: "./grammars/Ian and Nick.js",
  },
  {
    name: "34. Acting Coach (Jaden Southern)",
    fileName: "./grammars/Jaden.js",
  },
  {
    name: "35. Overheard on Love Island (Jasmine Vonk, Emily Liang)",
    fileName: "./grammars/jasmine_emily.js",
  },
  {
    name: "36. Stanford Email Headline Generator (Jeewoo Choi, Thalia Revilla, Brett Strickland)",
    fileName: "./grammars/JeewooTahliaBrett.js",
  },
  {
    name: "37. Stanford Entrepreneurs (JJ Hennessy)",
    fileName: "./grammars/jj.js",
  },
  {
    name: "38. Standup Comedian One/Two-Liners (Kassadey Delgado)",
    fileName: "./grammars/Kassadey.js",
  },
  {
    name: "39. Stanford Buzz/Fizz App (Kate Cressey, Taylor Gindlesperger, and Gabi Peters)",
    fileName: "./grammars/katetaylorgabi.js",
  },
  {
    name: "40. POV: Southie Resident (Kieran Barrett, Roya Ahmadi, Imgard Bonheur )",
    fileName: "./grammars/Kieran_Roya_Imgard.js",
  },
  {
    name: "41. Academic-Interest Club Promotional Emails (Larissa Lauer)",
    fileName: "./grammars/Larissa.js",
  },
  {
    name: "42. Stanford Scam Emails (Lauren Lowe)",
    fileName: "./grammars/Lauren Lowe.js",
  },
  {
    name: "43. Lear's Nonsense Poems (Sobhana)",
    fileName: "./grammars/Lear's Nonsense Poems.js",
  },
  {
    name: "44. Persis COVID Email (Damanpreet Singh",
    fileName: "Jawad Imad Jafar",
  },
  {
    name: "45. LSJUMB (Steven G. Opferman)",
    fileName: "./grammars/LSJUMB (Steven Opferman).js",
  },
  {
    name: "46. Frat Bro (Mario Nicolas, Ryan Chelugut )",
    fileName: "./grammars/MarioandRyan.js",
  },
  {
    name: "47. Articulating Needs and Boundaries (Natasha Johnson)",
    fileName: "./grammars/Natasha.js",
  },
  {
    name: "48. Tiger Mom (Nathan Tan, Jeremy Tian, Abhinav Sinha)",
    fileName: "./grammars/NathanJeremyAbhinav.js",
  },
  {
    name: "49. Heartbroken gurl (Norah Asemota, Diego Maglione, Sontee Scott)",
    fileName: "./grammars/NorahDiegoSontee.js",
  },
  {
    name: "50. Gordan Ramsey  (Reid Mccaw, Norri Dupree, Malisha Lutchmeea)",
    fileName: "./grammars/Norri, Reid, Malisha.js",
  },
  {
    name: "51. Type A Stanford Start-Up Student (Nainoa Visperas, Oriana Jackson, and Shaye Story)",
    fileName: "./grammars/OrianaJacksonNainoaVisperasShayeStory.js",
  },
  {
    name: "52. Down Bad (Rachel Wu, Noah Wong, Sebastian Russo)",
    fileName: "./grammars/Rachel_Sebastian_Noah.js",
  },
  {
    name: "53. Ranch Talk (Calico)",
    fileName: "./grammars/ranch_talk_CalicoDucheneaux.js",
  },
  {
    name: "54. Completely reasonable COVID-19 policy generator (Sofia Vera Verduzco, Richard Yuan)",
    fileName: "./grammars/Richard, Sofia.js",
  },
  {
    name: "55. RA Groupme Messages (Sade Oyekenu and Dominic Terrones:)",
    fileName: "./grammars/SadeAndDominic.js",
  },
  {
    name: "56. Stanford Student Email (Savahna Padilla, Mohamed Elhassan, Emilio Rueda)",
    fileName: "./grammars/SavahnaMohamedEmilio.js",
  },
  {
    name: "57. StanfordAds (Jessica Chudnovsky, Steven Le)",
    fileName: "./grammars/Steven Le & Jessica Chudnovsky.js",
  },
  {
    name: "58. Let's Ask Siri (Steven Pu, Brittany Ozioma Linus, Thanh Nhut Tieu)",
    fileName: "./grammars/Steven, Brittany, Thanh.js",
  },
  {
    name: "59. Stanford Fizz Thoughts (Suzannah Wistreich)",
    fileName: "./grammars/Suzannah.js",
  },
  {
    name: "60. Gamer Rage (Ulises Medina)",
    fileName: "./grammars/Ulises Medina.js",
  },
  {
    name: "61. Myself (Will Shan)",
    fileName: "./grammars/William Shan.js",
  },
];

let grammarForm = document.getElementById("grammarForm");

obj.forEach((o) => {
  //json variables
  let opt = document.createElement("option");
  opt.value = o.fileName;
  opt.textContent = o.name;
  grammarForm.appendChild(opt);
});

var selected = "./grammars/Aaron_Jack.js";

function grammarSelected(e) {
  selected = e.target.value;
}

var grammarSelect = document.querySelector("#grammarForm");
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
