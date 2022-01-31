/* Setting things up. */
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const port = 8080;
app.use(express.static("public"));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("example app listening at http://localhost:" + port);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

function gen(grammar, name) {
  var stack = [name];
  var rules = grammar.ParserRules;
  var str = "";
  while (stack.length > 0 && stack.length < 200) {
    var currentname = stack.pop();
    if (typeof currentname === "string") {
      var goodrules = grammar.ParserRules.filter(function (x) {
        return x.name === currentname;
      }).sort(function (a, b) {
        return a.symbols.length - b.symbols.length;
      });
      if (goodrules.length > 0) {
        var chosen = goodrules[Math.floor(Math.random() * goodrules.length)];
        // if the stack grows big, choose the smallest
        // rule so we can try to get it to terminate
        if (stack.length > 7) {
          chosen = goodrules[0];
        }
        for (var i = chosen.symbols.length - 1; i >= 0; i--) {
          stack.push(chosen.symbols[i]);
        }
      } else {
        throw new Error("Nothing matches rule: " + currentname + "!");
      }
    } else if (currentname.test) {
      // var c = new randexp(currentname).gen(); //Is this important? I just commented it out!
      // str += c;
      continue;
    } else if (currentname.literal) {
      var c = currentname.literal;
      str += c;
      continue;
    }
  }
  return str;
}
// const date = new Date().toLocaleString();

app.post("/clicked", (req, res) => {
  let grammarPath = req.body.grammarName;
  let example = gen(require(grammarPath), require(grammarPath).ParserStart);
  res.send(example);
});
