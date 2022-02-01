// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "OBJ"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"P"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "VERB", "_", "OBJ"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "ADJ", "_", "OBJ"]},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "OBJ", "_", "SENTENCE$string$2", "_", "SENTENCE"]},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "OBJ", "_", "SENTENCE$string$3", "_", "OBJ"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":100}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"W"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"m"}, {"literal":"p"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"m"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"i"}, {"literal":"p"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":"o"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "VERB$string$6", "symbols": [{"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"i"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$6"]},
    {"name": "VERB$string$7", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$7"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"C"}, {"literal":"O"}, {"literal":"V"}, {"literal":"I"}, {"literal":"D"}, {"literal":"-"}, {"literal":"1"}, {"literal":"9"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"P"}, {"literal":"f"}, {"literal":"i"}, {"literal":"z"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"v"}, {"literal":"a"}, {"literal":"c"}, {"literal":"c"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"N"}, {"literal":"9"}, {"literal":"5"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":"o"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"l"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"P"}, {"literal":"C"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "OBJ$string$9", "symbols": [{"literal":"O"}, {"literal":"m"}, {"literal":"i"}, {"literal":"c"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"v"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$9"]},
    {"name": "OBJ$string$10", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"e"}, {"literal":"x"}, {"literal":"i"}, {"literal":"b"}, {"literal":"i"}, {"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$10"]},
    {"name": "OBJ$string$11", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$11"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"e"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"m"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"h"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"-"}, {"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
