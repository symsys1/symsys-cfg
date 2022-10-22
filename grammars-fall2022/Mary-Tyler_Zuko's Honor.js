// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":7}]},
    {"name": "MAIN$string$1", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"n"}, {"literal":"o"}, {"literal":"r"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["MAIN$string$1"]},
    {"name": "MAIN$string$2", "symbols": [{"literal":"H"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":","}, {"literal":" "}, {"literal":"Z"}, {"literal":"u"}, {"literal":"k"}, {"literal":"o"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["MAIN$string$2"]},
    {"name": "MAIN$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}, {"literal":","}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"d"}, {"literal":"d"}, {"literal":"y"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["MAIN$string$3"]},
    {"name": "_", "symbols": [{"literal":" ","pos":25}]},
    {"name": "SENTENCE", "symbols": ["SUBJECTVERB", "_", "PLACE"]},
    {"name": "SUBJECTVERB$string$1", "symbols": [{"literal":"I"}, {"literal":","}, {"literal":" "}, {"literal":"P"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":" "}, {"literal":"Z"}, {"literal":"u"}, {"literal":"k"}, {"literal":"o"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECTVERB", "symbols": ["SUBJECTVERB$string$1", "_", "PREDICATE1"]},
    {"name": "SUBJECTVERB$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"v"}, {"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECTVERB", "symbols": ["SUBJECTVERB$string$2", "_", "PREDICATE2"]},
    {"name": "SUBJECTVERB$string$3", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"U"}, {"literal":"n"}, {"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"I"}, {"literal":"r"}, {"literal":"o"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECTVERB", "symbols": ["SUBJECTVERB$string$3", "_", "PREDICATE3"]},
    {"name": "PREDICATE1", "symbols": ["MODALVERB", "_", "VERBPHRASE"]},
    {"name": "MODALVERB$string$1", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MODALVERB", "symbols": ["MODALVERB$string$1"]},
    {"name": "MODALVERB$string$2", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MODALVERB", "symbols": ["MODALVERB$string$2"]},
    {"name": "MODALVERB$string$3", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MODALVERB", "symbols": ["MODALVERB$string$3"]},
    {"name": "MODALVERB$string$4", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MODALVERB", "symbols": ["MODALVERB$string$4"]},
    {"name": "VERBPHRASE$string$1", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"v"}, {"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$1", "_", "VERBPHRASE"]},
    {"name": "VERBPHRASE$string$2", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"p"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"v"}, {"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$2"]},
    {"name": "VERBPHRASE$string$3", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"n"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$3"]},
    {"name": "VERBPHRASE$string$4", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"g"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$4"]},
    {"name": "PREDICATE2$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREDICATE2", "symbols": ["PREDICATE2$string$1"]},
    {"name": "PREDICATE3$string$1", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREDICATE3", "symbols": ["PREDICATE3$string$1"]},
    {"name": "PREDICATE3$string$2", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"P"}, {"literal":"a"}, {"literal":"i"}, {"literal":" "}, {"literal":"S"}, {"literal":"h"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREDICATE3", "symbols": ["PREDICATE3$string$2"]},
    {"name": "PREDICATE3$string$3", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"s"}, {"literal":"d"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREDICATE3", "symbols": ["PREDICATE3$string$3"]},
    {"name": "PREDICATE3$string$4", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREDICATE3", "symbols": ["PREDICATE3$string$4"]},
    {"name": "PLACE$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"F"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"N"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$1"]},
    {"name": "PLACE$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"B"}, {"literal":"a"}, {"literal":" "}, {"literal":"S"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"S"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$2"]},
    {"name": "PLACE$string$3", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"N"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":" "}, {"literal":"A"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"T"}, {"literal":"e"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$3"]},
    {"name": "PLACE$string$4", "symbols": [{"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"K"}, {"literal":"y"}, {"literal":"o"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":" "}, {"literal":"I"}, {"literal":"s"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
