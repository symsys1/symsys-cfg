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
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "ADJ", "_", "SENTENCE$string$2"]},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$4", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$3", "_", "THING", "_", "SENTENCE$string$4", "_", "THING"]},
    {"name": "SENTENCE$string$5", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":","}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE", "_", "SENTENCE$string$5"]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"f"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"?"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"y"}, {"literal":"?"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["THING", "_", "QUESTION$string$1", "_", "MOD"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"'"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "THING"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"z"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"a"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "ADJ$string$6", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$6"]},
    {"name": "THING$string$1", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"o"}, {"literal":"t"}, {"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$1"]},
    {"name": "THING$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$2"]},
    {"name": "THING$string$3", "symbols": [{"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"o"}, {"literal":"m"}, {"literal":"i"}, {"literal":"c"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$3"]},
    {"name": "THING$string$4", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"A"}, {"literal":"I"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$4"]},
    {"name": "THING$string$5", "symbols": [{"literal":"N"}, {"literal":"F"}, {"literal":"T"}, {"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$5"]},
    {"name": "THING$string$6", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"M"}, {"literal":"e"}, {"literal":"t"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$6"]},
    {"name": "THING$string$7", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"A"}, {"literal":"p"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$7"]},
    {"name": "ADJ2$string$1", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ2", "symbols": ["ADJ2$string$1"]},
    {"name": "ADJ2$string$2", "symbols": [{"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ2", "symbols": ["ADJ2$string$2"]},
    {"name": "ADJ2$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"w"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ2", "symbols": ["ADJ2$string$3"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "ADJ2"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
