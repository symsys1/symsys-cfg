// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "SENTENCE", "symbols": ["EXCLAMATION", "_", "NOUN", "_", "SUB", "_", "VERB", "_", "MOD", "_", "PREPOSITION", "_", "OBJ"]},
    {"name": "EXCLAMATION$string$1", "symbols": [{"literal":"H"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$1"]},
    {"name": "EXCLAMATION$string$2", "symbols": [{"literal":"H"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$2"]},
    {"name": "EXCLAMATION$string$3", "symbols": [{"literal":"D"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$3"]},
    {"name": "EXCLAMATION$string$4", "symbols": [{"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$4"]},
    {"name": "NOUN$string$1", "symbols": [{"literal":"P"}, {"literal":"r"}, {"literal":"o"}, {"literal":"f"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"D"}, {"literal":"w"}, {"literal":"e"}, {"literal":"c"}, {"literal":"k"}, {"literal":","}, {"literal":"("}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}, {"literal":" "}, {"literal":"k"}, {"literal":"e"}, {"literal":"y"}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$1"]},
    {"name": "NOUN$string$2", "symbols": [{"literal":"P"}, {"literal":"r"}, {"literal":"o"}, {"literal":"f"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":","}, {"literal":"("}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}, {"literal":" "}, {"literal":"k"}, {"literal":"e"}, {"literal":"y"}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$2"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"h"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"v"}, {"literal":"o"}, {"literal":"m"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "VERB"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"u"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "PREPOSITION$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREPOSITION", "symbols": ["PREPOSITION$string$1"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
