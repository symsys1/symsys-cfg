// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "SENTENCE", "symbols": ["VERBUPPER", {"literal":",","pos":20}, "_", "SUBJECTSING", "_", "MODALVERB"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["VERBUPPER", {"literal":",","pos":34}, "_", "SUBJECTSING", "_", "SENTENCE$string$1"]},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["VERBUPPER", {"literal":",","pos":48}, "_", "SUBJECTSING", "_", "SENTENCE$string$2"]},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["ADJECTIVEUPPER", {"literal":",","pos":62}, "_", "SUBJECTSING", "_", "SENTENCE$string$3"]},
    {"name": "SENTENCE$string$4", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["ADJECTIVEUPPER", {"literal":",","pos":76}, "_", "SUBJECTPLURAL", "_", "SENTENCE$string$4"]},
    {"name": "SENTENCE$string$5", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["ADVERB", "_", "ADJECTIVELOWER", {"literal":",","pos":94}, "_", "SUBJECTSING", "_", "SENTENCE$string$5"]},
    {"name": "SENTENCE$string$6", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["ADVERB", "_", "ADJECTIVELOWER", {"literal":",","pos":112}, "_", "SUBJECTSING", "_", "SENTENCE$string$6"]},
    {"name": "SENTENCE$string$7", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["EMPHASIZER", "_", "ADJECTIVELOWER", {"literal":",","pos":130}, "_", "SUBJECTSING", "_", "SENTENCE$string$7"]},
    {"name": "SUBJECTSING$string$1", "symbols": [{"literal":"D"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"V"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECTSING", "symbols": ["SUBJECTSING$string$1"]},
    {"name": "SUBJECTSING$string$2", "symbols": [{"literal":"O"}, {"literal":"b"}, {"literal":"i"}, {"literal":" "}, {"literal":"W"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECTSING", "symbols": ["SUBJECTSING$string$2"]},
    {"name": "SUBJECTSING$string$3", "symbols": [{"literal":"L"}, {"literal":"u"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"k"}, {"literal":"y"}, {"literal":"w"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECTSING", "symbols": ["SUBJECTSING$string$3"]},
    {"name": "SUBJECTSING$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"h"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"O"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECTSING", "symbols": ["SUBJECTSING$string$4"]},
    {"name": "SUBJECTPLURAL$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECTPLURAL", "symbols": ["SUBJECTPLURAL$string$1"]},
    {"name": "SUBJECTPLURAL$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECTPLURAL", "symbols": ["SUBJECTPLURAL$string$2"]},
    {"name": "SUBJECTPLURAL$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"J"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECTPLURAL", "symbols": ["SUBJECTPLURAL$string$3"]},
    {"name": "VERBUPPER$string$1", "symbols": [{"literal":"F"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBUPPER", "symbols": ["VERBUPPER$string$1"]},
    {"name": "VERBUPPER$string$2", "symbols": [{"literal":"A"}, {"literal":"t"}, {"literal":"t"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBUPPER", "symbols": ["VERBUPPER$string$2"]},
    {"name": "VERBUPPER$string$3", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"t"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBUPPER", "symbols": ["VERBUPPER$string$3"]},
    {"name": "VERBUPPER$string$4", "symbols": [{"literal":"T"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBUPPER", "symbols": ["VERBUPPER$string$4"]},
    {"name": "VERBUPPER$string$5", "symbols": [{"literal":"S"}, {"literal":"e"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBUPPER", "symbols": ["VERBUPPER$string$5"]},
    {"name": "VERBLOWER$string$1", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBLOWER", "symbols": ["VERBLOWER$string$1"]},
    {"name": "VERBLOWER$string$2", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":"t"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBLOWER", "symbols": ["VERBLOWER$string$2"]},
    {"name": "VERBLOWER$string$3", "symbols": [{"literal":"m"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"t"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBLOWER", "symbols": ["VERBLOWER$string$3"]},
    {"name": "VERBLOWER$string$4", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBLOWER", "symbols": ["VERBLOWER$string$4"]},
    {"name": "VERBLOWER$string$5", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBLOWER", "symbols": ["VERBLOWER$string$5"]},
    {"name": "MODALVERB$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MODALVERB", "symbols": ["MODALVERB$string$1"]},
    {"name": "MODALVERB$string$2", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MODALVERB", "symbols": ["MODALVERB$string$2"]},
    {"name": "ADJECTIVEUPPER$string$1", "symbols": [{"literal":"W"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVEUPPER", "symbols": ["ADJECTIVEUPPER$string$1"]},
    {"name": "ADJECTIVEUPPER$string$2", "symbols": [{"literal":"W"}, {"literal":"i"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVEUPPER", "symbols": ["ADJECTIVEUPPER$string$2"]},
    {"name": "ADJECTIVEUPPER$string$3", "symbols": [{"literal":"P"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVEUPPER", "symbols": ["ADJECTIVEUPPER$string$3"]},
    {"name": "ADJECTIVEUPPER$string$4", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"l"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVEUPPER", "symbols": ["ADJECTIVEUPPER$string$4"]},
    {"name": "ADJECTIVEUPPER$string$5", "symbols": [{"literal":"I"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVEUPPER", "symbols": ["ADJECTIVEUPPER$string$5"]},
    {"name": "ADJECTIVEUPPER$string$6", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVEUPPER", "symbols": ["ADJECTIVEUPPER$string$6"]},
    {"name": "ADJECTIVEUPPER$string$7", "symbols": [{"literal":"D"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVEUPPER", "symbols": ["ADJECTIVEUPPER$string$7"]},
    {"name": "ADJECTIVELOWER$string$1", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVELOWER", "symbols": ["ADJECTIVELOWER$string$1"]},
    {"name": "ADJECTIVELOWER$string$2", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVELOWER", "symbols": ["ADJECTIVELOWER$string$2"]},
    {"name": "ADJECTIVELOWER$string$3", "symbols": [{"literal":"p"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVELOWER", "symbols": ["ADJECTIVELOWER$string$3"]},
    {"name": "ADJECTIVELOWER$string$4", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVELOWER", "symbols": ["ADJECTIVELOWER$string$4"]},
    {"name": "ADJECTIVELOWER$string$5", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVELOWER", "symbols": ["ADJECTIVELOWER$string$5"]},
    {"name": "ADJECTIVELOWER$string$6", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVELOWER", "symbols": ["ADJECTIVELOWER$string$6"]},
    {"name": "ADJECTIVELOWER$string$7", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVELOWER", "symbols": ["ADJECTIVELOWER$string$7"]},
    {"name": "EMPHASIZER$string$1", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIZER", "symbols": ["EMPHASIZER", "_", "EMPHASIZER$string$1"]},
    {"name": "EMPHASIZER$string$2", "symbols": [{"literal":"V"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIZER", "symbols": ["EMPHASIZER$string$2"]},
    {"name": "ADVERB$string$1", "symbols": [{"literal":"T"}, {"literal":"r"}, {"literal":"u"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$1"]},
    {"name": "ADVERB$string$2", "symbols": [{"literal":"O"}, {"literal":"b"}, {"literal":"v"}, {"literal":"i"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$2"]},
    {"name": "ADVERB$string$3", "symbols": [{"literal":"P"}, {"literal":"e"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$3"]},
    {"name": "ADVERB$string$4", "symbols": [{"literal":"Q"}, {"literal":"u"}, {"literal":"i"}, {"literal":"e"}, {"literal":"t"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
