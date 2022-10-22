// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "Main", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "Main", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["PEOPLE", "_", "QUESTION$string$1", "_", "VERB", "_", "QUESTION$string$2", "_", "LOCATIONS"]},
    {"name": "PEOPLE$string$1", "symbols": [{"literal":"C"}, {"literal":"-"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$1"]},
    {"name": "PEOPLE$string$2", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$2"]},
    {"name": "PEOPLE$string$3", "symbols": [{"literal":"C"}, {"literal":"r"}, {"literal":"y"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$3"]},
    {"name": "PEOPLE$string$4", "symbols": [{"literal":"K"}, {"literal":"e"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$4"]},
    {"name": "PEOPLE$string$5", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$5"]},
    {"name": "PEOPLE$string$6", "symbols": [{"literal":"G"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$6"]},
    {"name": "LOCATIONS$string$1", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATIONS", "symbols": ["LOCATIONS$string$1"]},
    {"name": "LOCATIONS$string$2", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"-"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATIONS", "symbols": ["LOCATIONS$string$2"]},
    {"name": "LOCATIONS$string$3", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"b"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATIONS", "symbols": ["LOCATIONS$string$3"]},
    {"name": "LOCATIONS$string$4", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATIONS", "symbols": ["LOCATIONS$string$4"]},
    {"name": "LOCATIONS$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}, {"literal":" "}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATIONS", "symbols": ["LOCATIONS$string$5"]},
    {"name": "LOCATIONS$string$6", "symbols": [{"literal":"S"}, {"literal":"R"}, {"literal":"3"}, {"literal":"0"}, {"literal":"6"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATIONS", "symbols": ["LOCATIONS$string$6"]},
    {"name": "LOCATIONS$string$7", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"R"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATIONS", "symbols": ["LOCATIONS$string$7"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":"m"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"z"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"s"}, {"literal":"o"}, {"literal":"l"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"n"}, {"literal":"i"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "VERB$string$6", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"g"}, {"literal":"i"}, {"literal":"g"}, {"literal":"g"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$6"]},
    {"name": "VERB$string$7", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$7"]},
    {"name": "NOISE$string$1", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}, {"literal":"m"}, {"literal":"m"}, {"literal":"m"}, {"literal":"h"}, {"literal":"h"}, {"literal":"m"}, {"literal":"m"}, {"literal":"m"}, {"literal":"m"}, {"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOISE", "symbols": ["NOISE$string$1", "_", "SENTENCE"]},
    {"name": "NOISE$string$2", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}, {"literal":"G"}, {"literal":"R"}, {"literal":"R"}, {"literal":"R"}, {"literal":"R"}, {"literal":"R"}, {"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOISE", "symbols": ["NOISE$string$2"]},
    {"name": "NOISE$string$3", "symbols": [{"literal":"("}, {"literal":"b"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":"s"}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOISE", "symbols": ["NOISE$string$3"]},
    {"name": "NOISE$string$4", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}, {"literal":"N"}, {"literal":"a"}, {"literal":"u"}, {"literal":"r"}, {"literal":"r"}, {"literal":"r"}, {"literal":"r"}, {"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOISE", "symbols": ["NOISE$string$4", "_", "SENTENCE"]},
    {"name": "PRONOUNS", "symbols": [{"literal":"I","pos":157}]},
    {"name": "PRONOUNS$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUNS", "symbols": ["PRONOUNS$string$1"]},
    {"name": "PRONOUNS$string$2", "symbols": [{"literal":"w"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUNS", "symbols": ["PRONOUNS$string$2"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["PRONOUNS", "_", "SENTENCE$string$1", "_", "VERB", "_", "SENTENCE$string$2", "_", "PEOPLE", "_", "SENTENCE$string$3", "_", "LOCATIONS"]},
    {"name": "SENTENCE$string$4", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$5", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$6", "symbols": [{"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["PRONOUNS", "_", "SENTENCE$string$4", "_", "VERB", "_", "SENTENCE$string$5", "_", "PEOPLE", "_", "SENTENCE$string$6", "_", "LOCATIONS", "_", "NOISE"]},
    {"name": "SENTENCE", "symbols": ["NOISE", "_", "QUESTION", "_", "NOISE", "_", "SENTENCE"]}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
