// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE"]},
    {"name": "_", "symbols": [{"literal":" ","pos":10}]},
    {"name": "SENTENCE", "symbols": ["EXCLAMATION", "_", "SUB", "_", "VERBPHRASE", {"literal":".","pos":26}]},
    {"name": "SENTENCE", "symbols": ["SHORTER"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":35}]},
    {"name": "SUBNOTI$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBNOTI", "symbols": ["SUBNOTI$string$1"]},
    {"name": "SUBNOTI$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBNOTI", "symbols": ["SUBNOTI$string$2"]},
    {"name": "GERUNDPHRASE", "symbols": ["QUASIADVERB", "_", "ADJECTIVE", "_", "GERUND", "_", "OBJ"]},
    {"name": "EXCLAMATION$string$1", "symbols": [{"literal":"O"}, {"literal":"h"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$1"]},
    {"name": "EXCLAMATION$string$2", "symbols": [{"literal":"W"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$2", "_", "EXCLAMATION"]},
    {"name": "EXCLAMATION$string$3", "symbols": [{"literal":"I"}, {"literal":"'"}, {"literal":"m"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$3"]},
    {"name": "EXCLAMATION$string$4", "symbols": [{"literal":"R"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":"!"}, {"literal":"?"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$4"]},
    {"name": "ADJECTIVE$string$1", "symbols": [{"literal":"u"}, {"literal":"g"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$1"]},
    {"name": "ADJECTIVE$string$2", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$2"]},
    {"name": "ADJECTIVE$string$3", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$3"]},
    {"name": "ADJECTIVE$string$4", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$4"]},
    {"name": "ADJECTIVE$string$5", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"m"}, {"literal":"p"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$5"]},
    {"name": "VERBPHRASE$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$1", "_", "ADJECTIVE", "_", {"literal":"I","pos":121}, "_", "VERBPHRASE"]},
    {"name": "VERBPHRASE$string$2", "symbols": [{"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$2", "_", "ADJECTIVE", "_", {"literal":"I","pos":136}, "_", "VERBPHRASE"]},
    {"name": "VERBPHRASE$string$3", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$3", "_", "ADJECTIVE"]},
    {"name": "VERBPHRASE$string$4", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$4", "_", "GERUNDPHRASE"]},
    {"name": "VERBPHRASE$string$5", "symbols": [{"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$5", "_", "GERUNDPHRASE"]},
    {"name": "VERBPHRASE$string$6", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$6", "_", "GERUNDPHRASE"]},
    {"name": "VERBPHRASE$string$7", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$7", "_", "ADJECTIVE"]},
    {"name": "VERBPHRASE$string$8", "symbols": [{"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$8", "_", "ADJECTIVE"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"m"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"s"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "NEGATIVE$string$1", "symbols": [{"literal":"N"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVE", "symbols": ["NEGATIVE$string$1"]},
    {"name": "NEGATIVE$string$2", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVE", "symbols": ["NEGATIVE", "_", "NEGATIVE$string$2"]},
    {"name": "NEGATIVE$string$3", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVE", "symbols": ["NEGATIVE$string$3"]},
    {"name": "QUASIADVERB$string$1", "symbols": [{"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUASIADVERB", "symbols": ["QUASIADVERB$string$1"]},
    {"name": "QUASIADVERB$string$2", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUASIADVERB", "symbols": ["QUASIADVERB$string$2"]},
    {"name": "QUASIADVERB$string$3", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUASIADVERB", "symbols": ["QUASIADVERB$string$3"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1", "_", "OBJ", "OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"p"}, {"literal":"h"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"n"}, {"literal":"a"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "SHORTER$string$1", "symbols": [{"literal":"D"}, {"literal":"o"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SHORTER", "symbols": ["SHORTER$string$1", "_", "SUB", "_", "VERB", "_", "ADJECTIVE", {"literal":"?","pos":294}]},
    {"name": "SHORTER$string$2", "symbols": [{"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SHORTER", "symbols": ["SUB", "_", "SHORTER$string$2", "_", "QUASIADVERB", "_", "ADJECTIVE"]},
    {"name": "SHORTER$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SHORTER$string$4", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SHORTER", "symbols": ["NEGATIVE", "_", "SHORTER$string$3", "_", "SUBNOTI", "_", "SHORTER$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
