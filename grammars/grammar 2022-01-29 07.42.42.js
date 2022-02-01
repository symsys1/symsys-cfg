// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["EMAIL", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "EMAIL", "symbols": ["GREETING", "_", "PROFESSOR", "_", "SENTENCE", "_", "CONCLUSION"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "MOD", "_", "VERB", "_", "CONJ", "_", "PREPOSITION", "_", "OBJ"]},
    {"name": "APOLOGY$string$1", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "APOLOGY", "symbols": ["APOLOGY$string$1"]},
    {"name": "GREETING$string$1", "symbols": [{"literal":"H"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GREETING", "symbols": ["GREETING$string$1"]},
    {"name": "GREETING$string$2", "symbols": [{"literal":"H"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GREETING", "symbols": ["GREETING$string$2"]},
    {"name": "GREETING$string$3", "symbols": [{"literal":"D"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GREETING", "symbols": ["GREETING$string$3"]},
    {"name": "GREETING$string$4", "symbols": [{"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GREETING", "symbols": ["GREETING$string$4"]},
    {"name": "PROFESSOR$string$1", "symbols": [{"literal":"P"}, {"literal":"r"}, {"literal":"o"}, {"literal":"f"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"D"}, {"literal":"w"}, {"literal":"e"}, {"literal":"c"}, {"literal":"k"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROFESSOR", "symbols": ["PROFESSOR$string$1"]},
    {"name": "PROFESSOR$string$2", "symbols": [{"literal":"P"}, {"literal":"r"}, {"literal":"o"}, {"literal":"f"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROFESSOR", "symbols": ["PROFESSOR$string$2"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2", "_", "APOLOGY"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"h"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"v"}, {"literal":"o"}, {"literal":"m"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "MOD"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"b"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3"]},
    {"name": "CONJ$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJ", "symbols": ["CONJ$string$1"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1", "_", "SENTENCE"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3", "_", "SENTENCE"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"u"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "PREPOSITION$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREPOSITION", "symbols": ["PREPOSITION$string$1"]},
    {"name": "CONCLUSION$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"k"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCLUSION", "symbols": ["CONCLUSION$string$1"]},
    {"name": "CONCLUSION$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"k"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCLUSION", "symbols": ["CONCLUSION$string$2"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
