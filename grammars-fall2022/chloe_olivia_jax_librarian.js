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
    {"name": "QUESTION$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "INGVERB"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"A"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "BOOK", "APPOS"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$3", "_", "THINGS", "_", "QUESTION$string$4", "_", "GERUND"]},
    {"name": "COMAND$string$1", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMAND", "symbols": ["COMAND$string$1", "_", "INGVERB", "_", "PREP", "_", "LOCATION"]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"D"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "QUESTIONWORD$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$2"]},
    {"name": "QUESTIONWORD$string$3", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$3"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "INGVERB", "_", "MOD"]},
    {"name": "SENTENCE", "symbols": ["COMAND"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "APPOS$string$1", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "APPOS", "symbols": ["APPOS$string$1"]},
    {"name": "APPOS$string$2", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"s"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":"i"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "APPOS", "symbols": ["APPOS$string$2"]},
    {"name": "APPOS$string$3", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"d"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "APPOS", "symbols": ["APPOS$string$3"]},
    {"name": "APPOS$string$4", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"s"}, {"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "APPOS", "symbols": ["APPOS$string$4"]},
    {"name": "APPOS$string$5", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "APPOS", "symbols": ["APPOS$string$5"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "INGVERB$string$1", "symbols": [{"literal":"w"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGVERB", "symbols": ["INGVERB$string$1"]},
    {"name": "INGVERB$string$2", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGVERB", "symbols": ["INGVERB$string$2"]},
    {"name": "INGVERB$string$3", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGVERB", "symbols": ["INGVERB$string$3"]},
    {"name": "INGVERB$string$4", "symbols": [{"literal":"r"}, {"literal":"u"}, {"literal":"n"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGVERB", "symbols": ["INGVERB$string$4"]},
    {"name": "INGVERB$string$5", "symbols": [{"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGVERB", "symbols": ["INGVERB$string$5"]},
    {"name": "INGVERB$string$6", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"f"}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGVERB", "symbols": ["INGVERB$string$6"]},
    {"name": "PREP$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREP", "symbols": ["PREP$string$1"]},
    {"name": "PREP$string$2", "symbols": [{"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREP", "symbols": ["PREP$string$2"]},
    {"name": "PREP$string$3", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREP", "symbols": ["PREP$string$3"]},
    {"name": "PREP$string$4", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREP", "symbols": ["PREP$string$4"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"c"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "THINGS"]},
    {"name": "MOD", "symbols": ["PREP", "_", "LOCATION"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "SENTENCE"]},
    {"name": "LOCATION$string$1", "symbols": [{"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"L"}, {"literal":"i"}, {"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$1"]},
    {"name": "LOCATION$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$2"]},
    {"name": "LOCATION$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$3"]},
    {"name": "LOCATION$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$4"]},
    {"name": "LOCATION$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$5"]},
    {"name": "LOCATION$string$6", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"i"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$6"]},
    {"name": "LOCATION$string$7", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$7"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"c"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"a"}, {"literal":"u"}, {"literal":"d"}, {"literal":"i"}, {"literal":"o"}, {"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "THINGS$string$5", "symbols": [{"literal":"g"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$5"]},
    {"name": "THINGS$string$6", "symbols": [{"literal":"p"}, {"literal":"u"}, {"literal":"z"}, {"literal":"z"}, {"literal":"e"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$6"]},
    {"name": "EXCLAMATION$string$1", "symbols": [{"literal":"B"}, {"literal":"e"}, {"literal":" "}, {"literal":"q"}, {"literal":"u"}, {"literal":"i"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$1"]},
    {"name": "EXCLAMATION$string$2", "symbols": [{"literal":"S"}, {"literal":"h"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$2"]},
    {"name": "EXCLAMATION$string$3", "symbols": [{"literal":"S"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$3"]},
    {"name": "EXCLAMATION$string$4", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$4"]},
    {"name": "EXCLAMATION$string$5", "symbols": [{"literal":"C"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$5"]},
    {"name": "BOOK$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"O"}, {"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOK", "symbols": ["BOOK$string$1"]},
    {"name": "BOOK$string$2", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"R"}, {"literal":"y"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOK", "symbols": ["BOOK$string$2"]},
    {"name": "BOOK$string$3", "symbols": [{"literal":"E"}, {"literal":"d"}, {"literal":"u"}, {"literal":"c"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOK", "symbols": ["BOOK$string$3"]},
    {"name": "BOOK$string$4", "symbols": [{"literal":"W"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"P"}, {"literal":"e"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOK", "symbols": ["BOOK$string$4"]},
    {"name": "BOOK$string$5", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"T"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOK", "symbols": ["BOOK$string$5"]},
    {"name": "BOOK$string$6", "symbols": [{"literal":"H"}, {"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"P"}, {"literal":"o"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOK", "symbols": ["BOOK$string$6"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();