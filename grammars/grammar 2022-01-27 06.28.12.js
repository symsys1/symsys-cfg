// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", "PUNCT"]},
    {"name": "MAIN", "symbols": ["QUESTION", "QPUNCT"]},
    {"name": "MAIN", "symbols": ["SENTENCE", "PUNCT", "_", "PHRASE"]},
    {"name": "_", "symbols": [{"literal":" ","pos":28}]},
    {"name": "SENTENCE", "symbols": ["S1"]},
    {"name": "SENTENCE", "symbols": ["S2"]},
    {"name": "SENTENCE", "symbols": ["S3"]},
    {"name": "QUESTION", "symbols": ["Q1"]},
    {"name": "QUESTION", "symbols": ["Q2"]},
    {"name": "PHRASE$string$1", "symbols": [{"literal":"I"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["PHRASE$string$1", "PUNCT"]},
    {"name": "PHRASE$string$2", "symbols": [{"literal":"S"}, {"literal":"o"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["PHRASE$string$2", "QPUNCT"]},
    {"name": "PHRASE$string$3", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"e"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["PRONOUN", "_", "PHRASE$string$3", "PUNCT"]},
    {"name": "PHRASE$string$4", "symbols": [{"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["PRONOUN", "_", "PHRASE$string$4", "PUNCT"]},
    {"name": "S1$string$1", "symbols": [{"literal":"I"}, {"literal":"'"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "S1$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"d"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "S1", "symbols": ["S1$string$1", "_", "JOB", "PUNCT", "_", "ADJ", "_", "S1$string$2"]},
    {"name": "S2$string$1", "symbols": [{"literal":"B"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "S2$string$2", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"e"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"p"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"v"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "S2", "symbols": ["S2$string$1", "_", "JOB", "_", "S2$string$2"]},
    {"name": "S3$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "S3$string$2", "symbols": [{"literal":"D"}, {"literal":"e"}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "S3", "symbols": ["S3$string$1", "QPUNCT", "_", "S3$string$2", "_", "THINGS"]},
    {"name": "S3$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "S3$string$4", "symbols": [{"literal":"D"}, {"literal":"e"}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "S3$string$5", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "S3", "symbols": ["S3$string$3", "QPUNCT", "_", "S3$string$4", "_", "THINGS", "_", "S3$string$5", "_", "THINGS"]},
    {"name": "Q1$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"o"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Q1", "symbols": ["Q1$string$1", "_", "JOB"]},
    {"name": "Q2$string$1", "symbols": [{"literal":"H"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Q2", "symbols": ["Q2$string$1", "_", "COMPANIES"]},
    {"name": "PRONOUN$string$1", "symbols": [{"literal":"K"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUN", "symbols": ["PRONOUN$string$1"]},
    {"name": "PRONOUN$string$2", "symbols": [{"literal":"K"}, {"literal":"h"}, {"literal":"l"}, {"literal":"o"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUN", "symbols": ["PRONOUN$string$2"]},
    {"name": "PRONOUN$string$3", "symbols": [{"literal":"K"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUN", "symbols": ["PRONOUN$string$3"]},
    {"name": "PRONOUN$string$4", "symbols": [{"literal":"K"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"t"}, {"literal":"n"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUN", "symbols": ["PRONOUN$string$4"]},
    {"name": "PRONOUN$string$5", "symbols": [{"literal":"K"}, {"literal":"y"}, {"literal":"l"}, {"literal":"i"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUN", "symbols": ["PRONOUN$string$5"]},
    {"name": "PRONOUN$string$6", "symbols": [{"literal":"K"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUN", "symbols": ["PRONOUN$string$6"]},
    {"name": "PRONOUN$string$7", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUN", "symbols": ["PRONOUN$string$7"]},
    {"name": "PRONOUN$string$8", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUN", "symbols": ["PRONOUN$string$8"]},
    {"name": "PRONOUN$string$9", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUN", "symbols": ["PRONOUN$string$9"]},
    {"name": "JOB$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"e"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "JOB", "symbols": ["JOB$string$1"]},
    {"name": "JOB$string$2", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"c"}, {"literal":"i"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"a"}, {"literal":" "}, {"literal":"q"}, {"literal":"u"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "JOB", "symbols": ["JOB$string$2"]},
    {"name": "JOB$string$3", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "JOB", "symbols": ["JOB$string$3"]},
    {"name": "JOB$string$4", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "JOB", "symbols": ["JOB$string$4"]},
    {"name": "JOB$string$5", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "JOB", "symbols": ["JOB$string$5"]},
    {"name": "JOB$string$6", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "JOB", "symbols": ["JOB$string$6", "_", "JOB"]},
    {"name": "JOB$string$7", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "JOB", "symbols": ["JOB$string$7", "_", "COMPANIES"]},
    {"name": "JOB$string$8", "symbols": [{"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "JOB", "symbols": ["JOB$string$8"]},
    {"name": "COMPANIES$string$1", "symbols": [{"literal":"s"}, {"literal":"K"}, {"literal":"i"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPANIES", "symbols": ["COMPANIES$string$1"]},
    {"name": "COMPANIES$string$2", "symbols": [{"literal":"K"}, {"literal":"K"}, {"literal":"W"}, {"literal":" "}, {"literal":"B"}, {"literal":"e"}, {"literal":"a"}, {"literal":"u"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPANIES", "symbols": ["COMPANIES$string$2"]},
    {"name": "COMPANIES$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"x"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"p"}, {"literal":"e"}, {"literal":","}, {"literal":" "}, {"literal":"‘"}, {"literal":"K"}, {"literal":"i"}, {"literal":"m"}, {"literal":" "}, {"literal":"K"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":","}, {"literal":" "}, {"literal":"S"}, {"literal":"u"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"’"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPANIES", "symbols": ["COMPANIES$string$3"]},
    {"name": "COMPANIES$string$4", "symbols": [{"literal":"K"}, {"literal":"i"}, {"literal":"m"}, {"literal":" "}, {"literal":"K"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":":"}, {"literal":" "}, {"literal":"H"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":"w"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPANIES", "symbols": ["COMPANIES$string$4"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"A"}, {"literal":"m"}, {"literal":"b"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"B"}, {"literal":"r"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"n"}, {"literal":"f"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"B"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"u"}, {"literal":"n"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "ADJ$string$6", "symbols": [{"literal":"F"}, {"literal":"a"}, {"literal":"b"}, {"literal":"u"}, {"literal":"l"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$6"]},
    {"name": "PUNCT", "symbols": [{"literal":".","pos":308}]},
    {"name": "PUNCT", "symbols": [{"literal":"!","pos":312}]},
    {"name": "PUNCT$string$1", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PUNCT", "symbols": ["PUNCT$string$1"]},
    {"name": "QPUNCT", "symbols": [{"literal":"?","pos":322}]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"w"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "THINGS$string$5", "symbols": [{"literal":"c"}, {"literal":"i"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$5"]},
    {"name": "THINGS$string$6", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"u"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$6"]},
    {"name": "THINGS$string$7", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$7"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
