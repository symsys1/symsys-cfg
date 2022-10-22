// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "Main", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "SENTENCE", "symbols": ["SUBJECT", "_", "VERB", "_", "INFINITIVE", "_", "MINI"]},
    {"name": "SUBJECT$string$1", "symbols": [{"literal":"M"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$1"]},
    {"name": "SUBJECT", "symbols": [{"literal":"I","pos":34}]},
    {"name": "SUBJECT$string$2", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$2"]},
    {"name": "SUBJECT$string$3", "symbols": [{"literal":"M"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$3"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "INFINITIVE$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INFINITIVE", "symbols": ["INFINITIVE$string$1"]},
    {"name": "INFINITIVE$string$2", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INFINITIVE", "symbols": ["INFINITIVE$string$2"]},
    {"name": "INFINITIVE$string$3", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"r"}, {"literal":"u"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INFINITIVE", "symbols": ["INFINITIVE$string$3"]},
    {"name": "INFINITIVE$string$4", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INFINITIVE", "symbols": ["INFINITIVE$string$4"]},
    {"name": "PREP$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREP", "symbols": ["PREP$string$1"]},
    {"name": "PREP$string$2", "symbols": [{"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREP", "symbols": ["PREP$string$2"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"c"}, {"literal":"c"}, {"literal":"o"}, {"literal":"l"}, {"literal":"i"}, {"literal":" "}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"P"}, {"literal":"u"}, {"literal":"f"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"M"}, {"literal":"a"}, {"literal":"g"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"D"}, {"literal":"r"}, {"literal":"a"}, {"literal":"g"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"i"}, {"literal":"m"}, {"literal":"a"}, {"literal":"g"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"O"}, {"literal":"t"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"s"}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "ADJ$string$6", "symbols": [{"literal":"y"}, {"literal":"u"}, {"literal":"m"}, {"literal":"m"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$6"]},
    {"name": "ADJ$string$7", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"f"}, {"literal":"r"}, {"literal":"a"}, {"literal":"g"}, {"literal":"i"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}, {"literal":"x"}, {"literal":"p"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"d"}, {"literal":"o"}, {"literal":"c"}, {"literal":"i"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$7"]},
    {"name": "ADJ$string$8", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$8", "_", "ADJ"]},
    {"name": "MINI", "symbols": ["PREP", "_", "ADJ", "_", "OBJ"]},
    {"name": "_", "symbols": [{"literal":" ","pos":159}]}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
