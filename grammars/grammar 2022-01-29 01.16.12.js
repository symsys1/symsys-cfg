// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"v"}, {"literal":"i"}, {"literal":"s"}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "SENTENCE$string$1", "_", "OBJ", "_", "SENTENCE$string$2", "_", "SENTENCE"]},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"H"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$4", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$5", "symbols": [{"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$3", "_", "SUB", "_", "VERB", "_", "SENTENCE$string$4", "_", "ACTIVITIES", "SENTENCE$string$5", "_", "SENTENCE"]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "SUB", "_"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "OBJ"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$5", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$3", "_", "OBJ", "_", "QUESTION$string$4", "_", "SUB", "_", "QUESTION$string$5"]},
    {"name": "QUESTION$string$6", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$6", "_", "SUB", "_", "MOD"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "ACTIVITIES$string$1", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIVITIES", "symbols": ["ACTIVITIES$string$1"]},
    {"name": "ACTIVITIES$string$2", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"p"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIVITIES", "symbols": ["ACTIVITIES$string$2"]},
    {"name": "ACTIVITIES$string$3", "symbols": [{"literal":"h"}, {"literal":"i"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIVITIES", "symbols": ["ACTIVITIES$string$3"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"i"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"c"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"p"}, {"literal":"l"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "FEELINGS$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FEELINGS", "symbols": ["FEELINGS$string$1"]},
    {"name": "FEELINGS$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FEELINGS", "symbols": ["FEELINGS$string$2"]},
    {"name": "FEELINGS$string$3", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FEELINGS", "symbols": ["FEELINGS$string$3"]},
    {"name": "FEELINGS$string$4", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FEELINGS", "symbols": ["FEELINGS$string$4"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["VERB", "_", "MOD$string$1"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"m"}, {"literal":"c"}, {"literal":"h"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"m"}, {"literal":"A"}, {"literal":"u"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"G"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"p"}, {"literal":"M"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"C"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"2"}, {"literal":"0"}, {"literal":"2"}, {"literal":"5"}, {"literal":" "}, {"literal":"P"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"T"}, {"literal":"A"}, {"literal":"P"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "_", "symbols": [{"literal":" ","pos":203}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
