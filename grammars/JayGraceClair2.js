// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN$string$1", "symbols": [{"literal":"M"}, {"literal":"m"}, {"literal":"m"}, {"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["MAIN$string$1", "_", "SENTENCE", {"literal":".","pos":10}]},
    {"name": "MAIN$string$2", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["MAIN$string$2", "_", "SENTENCE", {"literal":".","pos":20}]},
    {"name": "MAIN", "symbols": ["QUESTION"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "MOD"]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"D"}, {"literal":"o"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "SENTENCE", {"literal":"?","pos":49}]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"W"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"a"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "SENTENCE", {"literal":"?","pos":59}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1", "_", "ADJ", "_", "NOUN"]},
    {"name": "SUB", "symbols": [{"literal":"a","pos":77}, "_", "ADJ", "_", "NOUN"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"2"}, {"literal":"0"}, {"literal":"1"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"1"}, {"literal":"9"}, {"literal":"9"}, {"literal":"7"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"N"}, {"literal":"a"}, {"literal":"p"}, {"literal":"a"}, {"literal":" "}, {"literal":"V"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"B"}, {"literal":"u"}, {"literal":"r"}, {"literal":"g"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "ADJ$string$6", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$6"]},
    {"name": "ADJ$string$7", "symbols": [{"literal":"A"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$7"]},
    {"name": "ADJ$string$8", "symbols": [{"literal":"C"}, {"literal":"V"}, {"literal":"S"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$8"]},
    {"name": "NOUN$string$1", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"r"}, {"literal":"l"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$1"]},
    {"name": "NOUN$string$2", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"S"}, {"literal":"a"}, {"literal":"u"}, {"literal":"v"}, {"literal":"i"}, {"literal":"g"}, {"literal":"n"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$2"]},
    {"name": "NOUN$string$3", "symbols": [{"literal":"P"}, {"literal":"i"}, {"literal":"n"}, {"literal":"o"}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"N"}, {"literal":"o"}, {"literal":"i"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$3"]},
    {"name": "NOUN$string$4", "symbols": [{"literal":"S"}, {"literal":"h"}, {"literal":"i"}, {"literal":"r"}, {"literal":"a"}, {"literal":"z"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$4"]},
    {"name": "NOUN$string$5", "symbols": [{"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"a"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$5"]},
    {"name": "NOUN$string$6", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"z"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$6"]},
    {"name": "NOUN$string$7", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"p"}, {"literal":"e"}, {"literal":" "}, {"literal":"j"}, {"literal":"u"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$7"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"p"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"g"}, {"literal":"g"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"a"}, {"literal":"c"}, {"literal":"c"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"u"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD$string$3", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "OBJ", "_", "MOD$string$3", "_", "SENTENCE"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"e"}, {"literal":"l"}, {"literal":"u"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4", "_", "OBJ"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"a"}, {"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"c"}, {"literal":"i"}, {"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"v"}, {"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"c"}, {"literal":"o"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"v"}, {"literal":"o"}, {"literal":"l"}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"c"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"s"}, {"literal":"p"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "_", "symbols": [{"literal":" ","pos":243}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();