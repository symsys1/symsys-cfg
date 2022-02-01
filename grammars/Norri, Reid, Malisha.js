// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN$string$1", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["SENTENCE", "MAIN$string$1", "_", "INSULT", {"literal":".","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["START", "_", "FOOD", "_", "SENTENCE$string$1", "_", "DESCRIPTOR", "_", "ADJ"]},
    {"name": "START$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$1"]},
    {"name": "START$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$2"]},
    {"name": "FOOD$string$1", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FOOD", "symbols": ["FOOD$string$1"]},
    {"name": "FOOD$string$2", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FOOD", "symbols": ["FOOD$string$2"]},
    {"name": "FOOD$string$3", "symbols": [{"literal":"p"}, {"literal":"i"}, {"literal":"z"}, {"literal":"z"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FOOD", "symbols": ["FOOD$string$3"]},
    {"name": "FOOD$string$4", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FOOD", "symbols": ["FOOD$string$4"]},
    {"name": "FOOD$string$5", "symbols": [{"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FOOD", "symbols": ["FOOD$string$5"]},
    {"name": "DESCRIPTOR$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIPTOR", "symbols": ["DESCRIPTOR$string$1"]},
    {"name": "DESCRIPTOR$string$2", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIPTOR", "symbols": ["DESCRIPTOR$string$2"]},
    {"name": "DESCRIPTOR$string$3", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIPTOR", "symbols": ["DESCRIPTOR$string$3"]},
    {"name": "DESCRIPTOR$string$4", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"k"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIPTOR", "symbols": ["DESCRIPTOR$string$4"]},
    {"name": "DESCRIPTOR$string$5", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIPTOR", "symbols": ["DESCRIPTOR$string$5"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"c"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"g"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "PHRASE$string$1", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["DESCRIPTOR", "_", "PHRASE$string$1"]},
    {"name": "PHRASE$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"i"}, {"literal":"d"}, {"literal":"i"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"w"}, {"literal":"i"}, {"literal":"c"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["DESCRIPTOR", "_", "PHRASE$string$2"]},
    {"name": "PHRASE$string$3", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"n"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["DESCRIPTOR", "_", "PHRASE$string$3"]},
    {"name": "PHRASE$string$4", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"a"}, {"literal":"p"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"c"}, {"literal":"i"}, {"literal":"e"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["DESCRIPTOR", "_", "PHRASE$string$4"]},
    {"name": "PHRASE$string$5", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["DESCRIPTOR", "_", "PHRASE$string$5"]},
    {"name": "INSULT$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INSULT", "symbols": ["INSULT$string$1", "_", "PHRASE"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
