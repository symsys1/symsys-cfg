// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":7}]},
    {"name": "MAIN", "symbols": ["SENTENCE", "_", "CONJ", "_", "SENTENCE"]},
    {"name": "_", "symbols": [{"literal":" ","pos":25}]},
    {"name": "SENTENCE", "symbols": ["JOKE", "_", "ADJ", "_", "EXPLANATION", "_", "ACTION", "_", "EVENT", "_", "ADV"]},
    {"name": "JOKE$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"m"}, {"literal":"a"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "JOKE", "symbols": ["JOKE$string$1"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"p"}, {"literal":"t"}, {"literal":"i"}, {"literal":"z"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"s"}, {"literal":"w"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3", "_", "CONJ", "_", "ACTION"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4", "_", "CONJ", "_", "ACTION"]},
    {"name": "ACTION$string$5", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"n"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$5", "_", "CONJ", "_", "ACTION"]},
    {"name": "ACTION$string$6", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$6"]},
    {"name": "ACTION$string$7", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$7"]},
    {"name": "EXPLANATION$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXPLANATION", "symbols": ["EXPLANATION$string$1"]},
    {"name": "EXPLANATION$string$2", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXPLANATION", "symbols": ["EXPLANATION$string$2"]},
    {"name": "EVENT$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"R"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"S"}, {"literal":"e"}, {"literal":"a"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EVENT", "symbols": ["EVENT$string$1"]},
    {"name": "EVENT$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EVENT", "symbols": ["EVENT$string$2"]},
    {"name": "EVENT$string$3", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"S"}, {"literal":"e"}, {"literal":"a"}, {"literal":" "}, {"literal":"W"}, {"literal":"o"}, {"literal":"r"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EVENT", "symbols": ["EVENT$string$3"]},
    {"name": "EVENT$string$4", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EVENT", "symbols": ["EVENT$string$4"]},
    {"name": "ADV$string$1", "symbols": [{"literal":"h"}, {"literal":"y"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$1"]},
    {"name": "ADV$string$2", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$2"]},
    {"name": "ADV$string$3", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"u"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$3"]},
    {"name": "ADV$string$4", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$4"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"j"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "CONJ$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJ", "symbols": ["CONJ$string$1"]},
    {"name": "CONJ$string$2", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJ", "symbols": ["CONJ$string$2"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
