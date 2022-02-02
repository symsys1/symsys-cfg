// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["EXCLAMATION", {"literal":"!","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "SENTENCE", "symbols": ["SUBPHRASE", "_", "VERB", "_", "RANDOM", "_", "ADVERB"]},
    {"name": "EXCLAMATION", "symbols": ["SUBPHRASE", "_", "ADVERB", "_", "RANDOM"]},
    {"name": "EXCLAMATION", "symbols": ["SUBPHRASE", "_", "RANDOM", "_", "ADVERB"]},
    {"name": "SUBPHRASE$string$1", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBPHRASE", "symbols": ["SUBPHRASE$string$1"]},
    {"name": "SUBPHRASE$string$2", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBPHRASE", "symbols": ["SUBPHRASE$string$2"]},
    {"name": "SUBPHRASE$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBPHRASE", "symbols": ["SUBPHRASE$string$3"]},
    {"name": "SUBPHRASE$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBPHRASE", "symbols": ["SUBPHRASE$string$4"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "ADVERB$string$1", "symbols": [{"literal":"a"}, {"literal":"w"}, {"literal":"e"}, {"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$1"]},
    {"name": "ADVERB$string$2", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$2"]},
    {"name": "ADVERB$string$3", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$3"]},
    {"name": "ADVERB$string$4", "symbols": [{"literal":"y"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$4"]},
    {"name": "RANDOM$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RANDOM", "symbols": ["RANDOM$string$1", "_", "RANDOM"]},
    {"name": "RANDOM$string$2", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RANDOM", "symbols": ["RANDOM$string$2"]},
    {"name": "RANDOM$string$3", "symbols": [{"literal":"d"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RANDOM", "symbols": ["RANDOM$string$3", "_", "RANDOM"]},
    {"name": "RANDOM$string$4", "symbols": [{"literal":"O"}, {"literal":"M"}, {"literal":"G"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RANDOM", "symbols": ["RANDOM$string$4"]},
    {"name": "RANDOM$string$5", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RANDOM", "symbols": ["RANDOM$string$5"]},
    {"name": "RANDOM$string$6", "symbols": [{"literal":"T"}, {"literal":"B"}, {"literal":"H"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RANDOM", "symbols": ["RANDOM$string$6"]},
    {"name": "RANDOM$string$7", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RANDOM", "symbols": ["RANDOM$string$7"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
