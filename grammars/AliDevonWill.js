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
    {"name": "QUESTION$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "QUESTION$string$1", "_", "SUB", "_", "QUESTION$string$2"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$5", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$3", "_", "THINGS", "_", "QUESTION$string$4", "_", "SUB", "_", "QUESTION$string$5"]},
    {"name": "EXCLAMATION$string$1", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}, {"literal":"a"}, {"literal":"z"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATIONWORD", "_", "OBJ", "_", "EXCLAMATION$string$1"]},
    {"name": "EXCLAMATIONWORD$string$1", "symbols": [{"literal":"W"}, {"literal":"O"}, {"literal":"W"}, {"literal":"!"}, {"literal":"!"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATIONWORD", "symbols": ["EXCLAMATIONWORD$string$1"]},
    {"name": "EXCLAMATIONWORD$string$2", "symbols": [{"literal":"I"}, {"literal":"N"}, {"literal":"C"}, {"literal":"R"}, {"literal":"E"}, {"literal":"D"}, {"literal":"I"}, {"literal":"B"}, {"literal":"L"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATIONWORD", "symbols": ["EXCLAMATIONWORD$string$2"]},
    {"name": "EXCLAMATIONWORD$string$3", "symbols": [{"literal":"L"}, {"literal":"O"}, {"literal":"O"}, {"literal":"K"}, {"literal":" "}, {"literal":"-"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATIONWORD", "symbols": ["EXCLAMATIONWORD$string$3"]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "QUESTIONWORD$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$2"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "MOD"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"b"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "OBJ", "_", "SENTENCE$string$2", "_", "SUB"]},
    {"name": "SENTENCE", "symbols": ["SENTENCE", "_", "MOD"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"R"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"T"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"B"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"M"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"U"}, {"literal":"n"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"W"}, {"literal":"a"}, {"literal":"y"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}, {"literal":"k"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "SUB$string$5", "symbols": [{"literal":"D"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"k"}, {"literal":" "}, {"literal":"J"}, {"literal":"e"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$5"]},
    {"name": "SUB$string$6", "symbols": [{"literal":"L"}, {"literal":"e"}, {"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"J"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$6"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5", "_", "OBJ"]},
    {"name": "INGFORM$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$1"]},
    {"name": "INGFORM$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$2"]},
    {"name": "INGFORM$string$3", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$3"]},
    {"name": "INGFORM$string$4", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$4"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "OBJ"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "OBJ"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"a"}, {"literal":"g"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4"]},
    {"name": "MOD$string$5", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$5", "_", "SENTENCE"]},
    {"name": "MOD$string$6", "symbols": [{"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$6"]},
    {"name": "MOD$string$7", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD", "_", "MOD$string$7", "_", "OBJ"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"u"}, {"literal":"c"}, {"literal":"h"}, {"literal":"d"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"u"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"B"}, {"literal":"o"}, {"literal":"w"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"P"}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"i"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"L"}, {"literal":"e"}, {"literal":"a"}, {"literal":"g"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "OBJ$string$9", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":" "}, {"literal":"k"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$9"]},
    {"name": "OBJ$string$10", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$10"]},
    {"name": "OBJ$string$11", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"a"}, {"literal":"m"}, {"literal":" "}, {"literal":"d"}, {"literal":"u"}, {"literal":"n"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$11"]},
    {"name": "OBJ$string$12", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"H"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}, {"literal":" "}, {"literal":"M"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$12"]},
    {"name": "OBJ$string$13", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"u"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$13"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"u"}, {"literal":"c"}, {"literal":"h"}, {"literal":"d"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"u"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"m"}, {"literal":"p"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "THINGS$string$5", "symbols": [{"literal":"v"}, {"literal":"i"}, {"literal":"c"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
