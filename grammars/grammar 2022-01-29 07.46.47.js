// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "MAIN", "symbols": ["EXCLAMATION", {"literal":"!","pos":18}]},
    {"name": "_", "symbols": [{"literal":" ","pos":24}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"e"}, {"literal":"x"}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "ADJECTIVE", "_", "OBJ"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "SUB", "_", "VERB", "_", "ADJECTIVE", "_", "OBJ"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"v"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$3", "_", "SUB", "_", "QUESTION$string$4", "_", "OBJ"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "SOBJ"]},
    {"name": "EXCLAMATION$string$1", "symbols": [{"literal":"B"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$1", "_", "OBJ", "_", "EXCLAMATION$string$2"]},
    {"name": "EXCLAMATION$string$3", "symbols": [{"literal":"j"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["SUB", "_", "EXCLAMATION$string$3", "_", "VERB", "_", "OBJ"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":123}]},
    {"name": "VERB$string$1", "symbols": [{"literal":"e"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"f"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "CONJ$string$1", "symbols": [{"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJ", "symbols": ["CONJ$string$1", "_", "SENTENCE"]},
    {"name": "CONJ$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJ", "symbols": ["CONJ$string$2", "_", "SENTENCE"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"m"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"c"}, {"literal":"i"}, {"literal":"r"}, {"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"B"}, {"literal":"1"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "SOBJ$string$1", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOBJ", "symbols": ["SOBJ$string$1", "_", "CONJ"]},
    {"name": "SOBJ$string$2", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"n"}, {"literal":"i"}, {"literal":"s"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOBJ", "symbols": ["SOBJ$string$2", "_", "CONJ"]},
    {"name": "SOBJ$string$3", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOBJ", "symbols": ["SOBJ$string$3", "_", "CONJ"]},
    {"name": "SOBJ$string$4", "symbols": [{"literal":"c"}, {"literal":"i"}, {"literal":"r"}, {"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOBJ", "symbols": ["SOBJ$string$4"]},
    {"name": "SOBJ$string$5", "symbols": [{"literal":"B"}, {"literal":"1"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOBJ", "symbols": ["SOBJ$string$5"]},
    {"name": "ADJECTIVE$string$1", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$1"]},
    {"name": "ADJECTIVE$string$2", "symbols": [{"literal":"e"}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$2"]},
    {"name": "ADJECTIVE$string$3", "symbols": [{"literal":"h"}, {"literal":"u"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$3"]},
    {"name": "ADJECTIVE$string$4", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$4"]},
    {"name": "ADJECTIVE$string$5", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"c"}, {"literal":"h"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
