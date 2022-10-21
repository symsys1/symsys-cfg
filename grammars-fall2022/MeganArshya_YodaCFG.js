// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "SENTENCE", "symbols": ["ADV", "_", "SUB", "_", "VERB"]},
    {"name": "SENTENCE", "symbols": ["OBJ", "_", "SUB", "_", "VERB"]},
    {"name": "SENTENCE", "symbols": ["ADV", "_", "SUB", "_", "VERB", "_", "MOD"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":54}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"F"}, {"literal":"o"}, {"literal":"r"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"l"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "ADV$string$1", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"d"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$1", "_", "CONJ", "_", "ADV"]},
    {"name": "ADV$string$2", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"s"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$2", "_", "CONJ", "_", "ADV"]},
    {"name": "ADV$string$3", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"i"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$3"]},
    {"name": "ADV$string$4", "symbols": [{"literal":"a"}, {"literal":"g"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$4"]},
    {"name": "ADV$string$5", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$5"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "OBJ", "_", "MOD"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "OBJ", "_", "VERB"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "OBJ"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4", "_", "OBJ"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "CONJ$string$1", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJ", "symbols": ["CONJ$string$1"]},
    {"name": "CONJ$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJ", "symbols": ["CONJ$string$2"]},
    {"name": "CONJ$string$3", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJ", "symbols": ["CONJ$string$3"]},
    {"name": "CONJ$string$4", "symbols": [{"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJ", "symbols": ["CONJ$string$4"]},
    {"name": "_", "symbols": [{"literal":" ","pos":206}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
