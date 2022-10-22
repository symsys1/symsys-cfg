// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "SENTENCE", "symbols": ["STARTER", {"literal":",","pos":26}, "_", "SUB1", "_", "MOD1"]},
    {"name": "SENTENCE", "symbols": ["STARTER", {"literal":",","pos":40}, "_", "SUB2", "_", "MOD2"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["STARTER", {"literal":",","pos":54}, "_", "SENTENCE$string$1", "_", "SUB3", "_", "MOD3"]},
    {"name": "QUESTION", "symbols": ["STARTER", {"literal":",","pos":74}, "_", "Q1", "_", "VERB", "_", "PHRASE"]},
    {"name": "QUESTION", "symbols": ["STARTER", {"literal":",","pos":92}, "_", "Q2", "_", "GERUND", "_", "PHRASE"]},
    {"name": "Q1$string$1", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Q1", "symbols": ["Q1$string$1"]},
    {"name": "Q1$string$2", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Q1", "symbols": ["Q1$string$2"]},
    {"name": "Q2$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"o"}, {"literal":"’"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Q2", "symbols": ["Q2$string$1"]},
    {"name": "STARTER$string$1", "symbols": [{"literal":"B"}, {"literal":"r"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$1"]},
    {"name": "STARTER$string$2", "symbols": [{"literal":"D"}, {"literal":"a"}, {"literal":"w"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$2"]},
    {"name": "STARTER$string$3", "symbols": [{"literal":"B"}, {"literal":"r"}, {"literal":"u"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$3"]},
    {"name": "STARTER$string$4", "symbols": [{"literal":"Y"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$4"]},
    {"name": "STARTER$string$5", "symbols": [{"literal":"M"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$5"]},
    {"name": "STARTER$string$6", "symbols": [{"literal":"D"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$6"]},
    {"name": "SUB1", "symbols": [{"literal":"I","pos":151}]},
    {"name": "SUB2$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$1"]},
    {"name": "SUB2$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}, {"literal":"g"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$2"]},
    {"name": "SUB2$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$3"]},
    {"name": "SUB2$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$4"]},
    {"name": "SUB3$string$1", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB3", "symbols": ["SUB3$string$1"]},
    {"name": "SUB3$string$2", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB3", "symbols": ["SUB3$string$2"]},
    {"name": "SUB3$string$3", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB3", "symbols": ["SUB3$string$3"]},
    {"name": "SUB3$string$4", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"x"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB3", "symbols": ["SUB3$string$4"]},
    {"name": "SUB3$string$5", "symbols": [{"literal":"G"}, {"literal":"o"}, {"literal":"v"}, {"literal":"C"}, {"literal":"o"}, {"literal":" "}, {"literal":"g"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB3", "symbols": ["SUB3$string$5"]},
    {"name": "SUB3$string$6", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"o"}, {"literal":"t"}, {"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"g"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB3", "symbols": ["SUB3$string$6"]},
    {"name": "MOD1$string$1", "symbols": [{"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD1", "symbols": ["MOD1$string$1", "_", "INTERJECTION", "_", "ADV", "_", "ADJ"]},
    {"name": "MOD1$string$2", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD1", "symbols": ["MOD1$string$2", "_", "VERB", "_", "PHRASE"]},
    {"name": "MOD2$string$1", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD2", "symbols": ["MOD2$string$1", "_", "INTERJECTION", "_", "ADV", "_", "ADJ"]},
    {"name": "MOD2$string$2", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD2", "symbols": ["MOD2$string$2", "_", "GERUND", "_", "PHRASE"]},
    {"name": "MOD3$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD3", "symbols": ["MOD3$string$1", "_", "INTERJECTION", "_", "ADV", "_", "ADJ"]},
    {"name": "INTERJECTION$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$1"]},
    {"name": "INTERJECTION$string$2", "symbols": [{"literal":"j"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$2"]},
    {"name": "INTERJECTION$string$3", "symbols": [{"literal":"u"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$3"]},
    {"name": "ADV$string$1", "symbols": [{"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$1"]},
    {"name": "ADV$string$2", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$2"]},
    {"name": "ADV$string$3", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$3"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2", "_", "GAME"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"r"}, {"literal":"u"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2", "_", "GAME"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"r"}, {"literal":"u"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "GERUND$string$5", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$5"]},
    {"name": "PHRASE$string$1", "symbols": [{"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE$string$2", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["PHRASE$string$1", "_", "PLACE", "_", "PHRASE$string$2", "_", "PEOPLE"]},
    {"name": "PHRASE$string$3", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["PHRASE$string$3", "_", "PEOPLE"]},
    {"name": "PLACE$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"y"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$1"]},
    {"name": "PLACE$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$2"]},
    {"name": "PLACE$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$3"]},
    {"name": "PLACE$string$4", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"e"}, {"literal":"c"}, {"literal":"i"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$4"]},
    {"name": "PLACE$string$5", "symbols": [{"literal":"O"}, {"literal":"n"}, {"literal":" "}, {"literal":"C"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$5"]},
    {"name": "PLACE$string$6", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"m"}, {"literal":"C"}, {"literal":"h"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$6"]},
    {"name": "PLACE$string$7", "symbols": [{"literal":"E"}, {"literal":"u"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$7"]},
    {"name": "PLACE$string$8", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":"m"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$8"]},
    {"name": "PEOPLE$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$1"]},
    {"name": "PEOPLE$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$2"]},
    {"name": "PEOPLE$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"D"}, {"literal":"J"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$3"]},
    {"name": "PEOPLE$string$4", "symbols": [{"literal":"M"}, {"literal":"T"}, {"literal":"L"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$4"]},
    {"name": "PEOPLE$string$5", "symbols": [{"literal":"P"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$5"]},
    {"name": "PEOPLE$string$6", "symbols": [{"literal":"K"}, {"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$6"]},
    {"name": "PEOPLE$string$7", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"R"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$7"]},
    {"name": "GAME$string$1", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GAME", "symbols": ["GAME$string$1"]},
    {"name": "GAME$string$2", "symbols": [{"literal":"p"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GAME", "symbols": ["GAME$string$2"]},
    {"name": "GAME$string$3", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GAME", "symbols": ["GAME$string$3"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();