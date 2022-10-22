// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "SENTENCE", "symbols": ["EXCLAMATORY", "SPACE", "SENTENCE"]},
    {"name": "SENTENCE", "symbols": ["TOPIC", "SPACE", "CONNECTOR", "SPACE", "DESCRIPTOR", "SPACE", "ADJECTIVE"]},
    {"name": "TOPIC$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"h"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$1"]},
    {"name": "TOPIC$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$2"]},
    {"name": "TOPIC$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$3"]},
    {"name": "TOPIC$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"m"}, {"literal":"p"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$4"]},
    {"name": "TOPIC$string$5", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$5"]},
    {"name": "CONNECTOR$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONNECTOR", "symbols": ["CONNECTOR$string$1"]},
    {"name": "DESCRIPTOR$string$1", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIPTOR", "symbols": ["DESCRIPTOR$string$1"]},
    {"name": "DESCRIPTOR$string$2", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIPTOR", "symbols": ["DESCRIPTOR$string$2"]},
    {"name": "DESCRIPTOR$string$3", "symbols": [{"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIPTOR", "symbols": ["DESCRIPTOR$string$3"]},
    {"name": "DESCRIPTOR$string$4", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIPTOR", "symbols": ["DESCRIPTOR$string$4"]},
    {"name": "ADJECTIVE$string$1", "symbols": [{"literal":"n"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$1"]},
    {"name": "ADJECTIVE$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$2"]},
    {"name": "ADJECTIVE$string$3", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$3"]},
    {"name": "ADJECTIVE$string$4", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$4"]},
    {"name": "ADJECTIVE$string$5", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"a"}, {"literal":"u"}, {"literal":"t"}, {"literal":"i"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$5"]},
    {"name": "ADJECTIVE$string$6", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$6"]},
    {"name": "EXCLAMATORY$string$1", "symbols": [{"literal":"W"}, {"literal":"o"}, {"literal":"w"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATORY", "symbols": ["EXCLAMATORY$string$1"]},
    {"name": "EXCLAMATORY$string$2", "symbols": [{"literal":"O"}, {"literal":"h"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATORY", "symbols": ["EXCLAMATORY$string$2"]},
    {"name": "EXCLAMATORY$string$3", "symbols": [{"literal":"G"}, {"literal":"e"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"z"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATORY", "symbols": ["EXCLAMATORY$string$3"]},
    {"name": "EXCLAMATORY$string$4", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"?"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATORY", "symbols": ["EXCLAMATORY$string$4"]},
    {"name": "QUESTION", "symbols": ["QUESTIONSTART", "SPACE", "SUBJECT", "SPACE", "DESCRIPTOR", "SPACE", "ADJECTIVE"]},
    {"name": "QUESTIONSTART$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"y"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONSTART", "symbols": ["QUESTIONSTART$string$1"]},
    {"name": "QUESTIONSTART$string$2", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONSTART", "symbols": ["QUESTIONSTART$string$2"]},
    {"name": "QUESTIONSTART$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"y"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONSTART", "symbols": ["QUESTIONSTART$string$3"]},
    {"name": "QUESTIONSTART$string$4", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONSTART", "symbols": ["QUESTIONSTART$string$4"]},
    {"name": "SUBJECT$string$1", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$1"]},
    {"name": "SUBJECT$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"m"}, {"literal":"p"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$2"]},
    {"name": "SUBJECT$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$3"]},
    {"name": "SUBJECT$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$4"]},
    {"name": "SPACE", "symbols": [{"literal":" ","pos":188}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
