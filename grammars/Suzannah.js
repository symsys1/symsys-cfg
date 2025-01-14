// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"U"}, {"literal":"p"}, {"literal":"v"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "SUB", "_", "SENTENCE$string$2", "_", "VERB"]},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"5"}, {"literal":"0"}, {"literal":" "}, {"literal":"U"}, {"literal":"p"}, {"literal":"v"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"I"}, {"literal":"'"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$3", "_", "VERB"]},
    {"name": "SENTENCE$string$4", "symbols": [{"literal":"D"}, {"literal":"o"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":"v"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$5", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$4", "_", "SUB", "_", "SENTENCE$string$5", "_", "VERB"]},
    {"name": "SENTENCE$string$6", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"k"}, {"literal":"a"}, {"literal":"r"}, {"literal":"m"}, {"literal":"a"}, {"literal":"-"}, {"literal":"f"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":","}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$6", "_", "SENTENCE"]},
    {"name": "SENTENCE$string$7", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":" "}, {"literal":"U"}, {"literal":"p"}, {"literal":"v"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"I"}, {"literal":"'"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$7", "_", "VERB"]},
    {"name": "SENTENCE$string$8", "symbols": [{"literal":"F"}, {"literal":"i"}, {"literal":"z"}, {"literal":"z"}, {"literal":" "}, {"literal":"F"}, {"literal":"a"}, {"literal":"m"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$9", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$8", "_", "SUB", "_", "SENTENCE$string$9", "_", "VERB"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":92}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUBPOS$string$1", "symbols": [{"literal":"m"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBPOS", "symbols": ["SUBPOS$string$1"]},
    {"name": "SUBPOS$string$2", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBPOS", "symbols": ["SUBPOS$string$2"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2", "_", "OBJ"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3", "_", "SUBPOS", "_", "PEOPLE"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"r"}, {"literal":"u"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5", "_", "PLACE"]},
    {"name": "VERB$string$6", "symbols": [{"literal":"m"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB$string$7", "symbols": [{"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$6", "_", "SUBPOS", "_", "PEOPLE", "_", "VERB$string$7", "_", "PLACE"]},
    {"name": "VERB$string$8", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$8", "_", "SUBPOS", "_", "PEOPLE"]},
    {"name": "VERB$string$9", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB$string$10", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$9", "_", "OBJ", "_", "VERB$string$10", "_", "PLACE"]},
    {"name": "VERB$string$11", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":" "}, {"literal":"t"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$11"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["SUBPOS", "_", "OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"j"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"P"}, {"literal":"S"}, {"literal":"Y"}, {"literal":"C"}, {"literal":"H"}, {"literal":" "}, {"literal":"3"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"y"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["SUBPOS", "_", "OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"S"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"C"}, {"literal":"O"}, {"literal":"V"}, {"literal":"I"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "PEOPLE$string$1", "symbols": [{"literal":"e"}, {"literal":"x"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$1"]},
    {"name": "PEOPLE$string$2", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$2"]},
    {"name": "PEOPLE$string$3", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$3"]},
    {"name": "PEOPLE$string$4", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$4"]},
    {"name": "PEOPLE$string$5", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$5"]},
    {"name": "PEOPLE$string$6", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"f"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$6"]},
    {"name": "PEOPLE$string$7", "symbols": [{"literal":"R"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$7"]},
    {"name": "PLACE$string$1", "symbols": [{"literal":"F"}, {"literal":"L"}, {"literal":"O"}, {"literal":"M"}, {"literal":"O"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$1"]},
    {"name": "PLACE$string$2", "symbols": [{"literal":"G"}, {"literal":"O"}, {"literal":"V"}, {"literal":"C"}, {"literal":"O"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$2"]},
    {"name": "PLACE$string$3", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$3"]},
    {"name": "PLACE$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$4"]},
    {"name": "PLACE$string$5", "symbols": [{"literal":"A"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$5"]},
    {"name": "PLACE$string$6", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"T"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$6"]},
    {"name": "PLACE$string$7", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"i"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"C"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$7"]},
    {"name": "PLACE$string$8", "symbols": [{"literal":"P"}, {"literal":"h"}, {"literal":"i"}, {"literal":"P"}, {"literal":"s"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$8"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
