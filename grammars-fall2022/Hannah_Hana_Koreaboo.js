// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}, "_", "SENTENCE", {"literal":".","pos":12}]},
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":"!","pos":18}]},
    {"name": "MAIN$string$1", "symbols": [{"literal":"?"}, {"literal":"?"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["QUESTION", "MAIN$string$1"]},
    {"name": "_", "symbols": [{"literal":" ","pos":29}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "QUESTION$string$1", "_", "OBJ"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "THINGS"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$3", "_", "PEOPLE", {"literal":"?","pos":61}]},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"D"}, {"literal":"o"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$4", "_", "LANGUAGE"]},
    {"name": "QUESTION$string$5", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$5", "_", "THINGS"]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "QUESTIONWORD$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$2"]},
    {"name": "QUESTIONWORD$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$3"]},
    {"name": "QUESTIONWORD$string$4", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$4"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "MOD"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"O"}, {"literal":"M"}, {"literal":"G"}, {"literal":"!"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "OBJ", {"literal":"!","pos":117}, "_", "SENTENCE"]},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$2", "_", "GERUND", "_", "OBJ"]},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"S"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"h"}, {"literal":"a"}, {"literal":"e"}, {"literal":"y"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$3", "_", "PEOPLE", {"literal":"!","pos":143}, "_", "SENTENCE"]},
    {"name": "SENTENCE$string$4", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$4", "_", "GERUND", "_", "THINGS"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":164}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"A"}, {"literal":"n"}, {"literal":"n"}, {"literal":"e"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":"h"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":"y"}, {"literal":"o"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2", "_", "SENTENCE"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1", "_", "PEOPLE"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2", "_", "OBJ"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3", "_", "PLACE"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"v"}, {"literal":"i"}, {"literal":"s"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4", "_", "PLACE"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5", "_", "OBJ"]},
    {"name": "VERB$string$6", "symbols": [{"literal":"o"}, {"literal":"b"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$6", "_", "OBJ"]},
    {"name": "VERB$string$7", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$7"]},
    {"name": "VERB$string$8", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$8", "_", "PEOPLE"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"o"}, {"literal":"b"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "GERUND$string$5", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$5"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "OBJ"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "OBJ"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"c"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4"]},
    {"name": "MOD$string$5", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$5", "_", "SENTENCE"]},
    {"name": "MOD$string$6", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$6", "_", "OBJ", "_", "MOD"]},
    {"name": "MOD", "symbols": [{"literal":";","pos":313}, "_", "SENTENCE"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"A"}, {"literal":"s"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"b"}, {"literal":"i"}, {"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"O"}, {"literal":"p"}, {"literal":"p"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"K"}, {"literal":"-"}, {"literal":"p"}, {"literal":"o"}, {"literal":"p"}, {"literal":" "}, {"literal":"i"}, {"literal":"d"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"K"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"B"}, {"literal":"T"}, {"literal":"S"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"K"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"B"}, {"literal":"B"}, {"literal":"Q"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"k"}, {"literal":"i"}, {"literal":"m"}, {"literal":"c"}, {"literal":"h"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "OBJ$string$9", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"l"}, {"literal":"g"}, {"literal":"o"}, {"literal":"g"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$9"]},
    {"name": "PEOPLE$string$1", "symbols": [{"literal":"J"}, {"literal":"-"}, {"literal":"h"}, {"literal":"o"}, {"literal":"p"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$1"]},
    {"name": "PEOPLE$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"K"}, {"literal":"-"}, {"literal":"p"}, {"literal":"o"}, {"literal":"p"}, {"literal":" "}, {"literal":"i"}, {"literal":"d"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$2"]},
    {"name": "PEOPLE$string$3", "symbols": [{"literal":"I"}, {"literal":"U"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$3"]},
    {"name": "PEOPLE$string$4", "symbols": [{"literal":"N"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$4"]},
    {"name": "PEOPLE$string$5", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"K"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$5"]},
    {"name": "PEOPLE$string$6", "symbols": [{"literal":"J"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}, {"literal":"k"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$6"]},
    {"name": "PEOPLE$string$7", "symbols": [{"literal":"W"}, {"literal":"o"}, {"literal":"n"}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$7"]},
    {"name": "LANGUAGE$string$1", "symbols": [{"literal":"K"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LANGUAGE", "symbols": ["LANGUAGE$string$1"]},
    {"name": "LANGUAGE$string$2", "symbols": [{"literal":"J"}, {"literal":"a"}, {"literal":"p"}, {"literal":"a"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LANGUAGE", "symbols": ["LANGUAGE$string$2"]},
    {"name": "PLACE$string$1", "symbols": [{"literal":"K"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$1"]},
    {"name": "PLACE$string$2", "symbols": [{"literal":"J"}, {"literal":"a"}, {"literal":"p"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$2"]},
    {"name": "PLACE$string$3", "symbols": [{"literal":"K"}, {"literal":"-"}, {"literal":"t"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$3"]},
    {"name": "PLACE$string$4", "symbols": [{"literal":"L"}, {"literal":"i"}, {"literal":"t"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"T"}, {"literal":"o"}, {"literal":"k"}, {"literal":"y"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$4"]},
    {"name": "PLACE$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"A"}, {"literal":"s"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"c"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$5"]},
    {"name": "PLACE$string$6", "symbols": [{"literal":"H"}, {"literal":"-"}, {"literal":"M"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$6"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"K"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"g"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"x"}, {"literal":"-"}, {"literal":"e"}, {"literal":"y"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"D"}, {"literal":"o"}, {"literal":"u"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"y"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "THINGS$string$5", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"b"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$5"]},
    {"name": "THINGS$string$6", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$6"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();