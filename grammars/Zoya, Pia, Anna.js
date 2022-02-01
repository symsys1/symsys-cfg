// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":6}]},
    {"name": "MAIN", "symbols": ["EXCLAMATION", {"literal":"!","pos":12}]},
    {"name": "MAIN", "symbols": ["STATEMENT", {"literal":".","pos":17}]},
    {"name": "_", "symbols": [{"literal":" ","pos":23}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"p"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "NOUN"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"A"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "OBJ"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$3", "_", "OBJ", "_", "QUESTION$string$4"]},
    {"name": "EXCLAMATION$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["SUB", "_", "VERB", "_", "EXCLAMATION$string$1", "_", "OBJ"]},
    {"name": "EXCLAMATION$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["SUB", "_", "VERB", "_", "EXCLAMATION$string$2", "_", "OBJ"]},
    {"name": "STATEMENT$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT", "symbols": ["SUB", "_", "STATEMENT$string$1", "_", "OBJ"]},
    {"name": "STATEMENT$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT$string$3", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT", "symbols": ["STATEMENT$string$2", "_", "OBJ", "_", "STATEMENT$string$3", "_", "ADJ"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":123}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"j"}, {"literal":"o"}, {"literal":"y"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "NOUN$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$1"]},
    {"name": "NOUN$string$2", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$2"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"w"}, {"literal":"s"}, {"literal":"p"}, {"literal":"a"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"z"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"v"}, {"literal":"o"}, {"literal":"l"}, {"literal":"u"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ", "_", "OBJ$string$6"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"u"}, {"literal":"s"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"i"}, {"literal":"q"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"t"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
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
