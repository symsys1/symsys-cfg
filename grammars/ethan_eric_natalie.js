// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "QUESTION", "symbols": ["DAHA", "_", "OBJ"]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "VERB", "_", "OBJ"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "VERB", "_", "OBJ"]},
    {"name": "DAHA$string$1", "symbols": [{"literal":"D"}, {"literal":"A"}, {"literal":"H"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAHA", "symbols": ["DAHA$string$1"]},
    {"name": "DAHA$string$2", "symbols": [{"literal":"D"}, {"literal":"o"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAHA", "symbols": ["DAHA$string$2"]},
    {"name": "DAHA$string$3", "symbols": [{"literal":"H"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAHA", "symbols": ["DAHA$string$3"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "MOD"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"I"}, {"literal":"'"}, {"literal":"m"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "OBJ"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":94}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"R"}, {"literal":"e"}, {"literal":"s"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"R"}, {"literal":"A"}, {"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"o"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "GERUND$string$5", "symbols": [{"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$5"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "OBJ"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "OBJ"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4", "_", "SENTENCE"]},
    {"name": "MOD$string$5", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$5", "_", "SENTENCE"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"s"}, {"literal":"m"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"a"}, {"literal":"u"}, {"literal":"t"}, {"literal":"i"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "ADJ$string$6", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"l"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$6"]},
    {"name": "POSS$string$1", "symbols": [{"literal":"m"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSS", "symbols": ["POSS$string$1", "_", "ADJ", "_", "ADJ"]},
    {"name": "POSS$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSS", "symbols": ["POSS$string$2", "_", "ADJ"]},
    {"name": "POSS", "symbols": [{"literal":"a","pos":236}, "_", "ADJ"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["POSS", "_", "OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["POSS", "_", "OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"R"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["POSS", "_", "OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"R"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"D"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"I"}, {"literal":"D"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["POSS", "_", "OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["POSS", "_", "OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"i"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["POSS", "_", "OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"v"}, {"literal":"a"}, {"literal":"c"}, {"literal":"u"}, {"literal":"u"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["POSS", "_", "OBJ$string$8"]},
    {"name": "OBJ$string$9", "symbols": [{"literal":"Z"}, {"literal":"i"}, {"literal":"p"}, {"literal":"C"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["POSS", "_", "OBJ$string$9"]},
    {"name": "OBJ$string$10", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["POSS", "_", "OBJ$string$10"]},
    {"name": "OBJ$string$11", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"M"}, {"literal":"a"}, {"literal":"r"}, {"literal":"g"}, {"literal":"u"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$11"]},
    {"name": "OBJ$string$12", "symbols": [{"literal":"p"}, {"literal":"h"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"g"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["POSS", "_", "OBJ$string$12"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
