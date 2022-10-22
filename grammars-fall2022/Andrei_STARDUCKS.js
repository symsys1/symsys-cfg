// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":"!","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION"]},
    {"name": "_", "symbols": [{"literal":" ","pos":16}]},
    {"name": "QUESTION", "symbols": ["QW", "_", "ORDER", "_", "ISTA", "_", "SENTENCE"]},
    {"name": "QUESTION", "symbols": ["QW", "_", "ORDER", "_", "IST", "_", "WISH"]},
    {"name": "SENTENCE", "symbols": ["SW", "_", "ORDER", "_", "ACT", "_", "WISH"]},
    {"name": "SENTENCE", "symbols": ["SW", "_", "ORDER", "_", "ACT", "_", "SENTENCE"]},
    {"name": "WISH$string$1", "symbols": [{"literal":"E"}, {"literal":"n"}, {"literal":"j"}, {"literal":"o"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"o"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":" "}, {"literal":":"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WISH", "symbols": ["WISH$string$1"]},
    {"name": "WISH$string$2", "symbols": [{"literal":"F"}, {"literal":"u"}, {"literal":"n"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":":"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":" "}, {"literal":"j"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"3"}, {"literal":"0"}, {"literal":"0"}, {"literal":"%"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":"u"}, {"literal":"p"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":":"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WISH", "symbols": ["WISH$string$2"]},
    {"name": "WISH$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"n"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"j"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}, {"literal":"?"}, {"literal":" "}, {"literal":"B"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":","}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":":"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WISH", "symbols": ["WISH$string$3"]},
    {"name": "QW$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"o"}, {"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QW", "symbols": ["QW$string$1"]},
    {"name": "SW$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SW", "symbols": ["SW$string$1"]},
    {"name": "ACT$string$1", "symbols": [{"literal":"I"}, {"literal":"s"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"y"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACT", "symbols": ["ACT$string$1"]},
    {"name": "SZ$string$1", "symbols": [{"literal":"T"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SZ", "symbols": ["SZ$string$1"]},
    {"name": "SZ$string$2", "symbols": [{"literal":"G"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SZ", "symbols": ["SZ$string$2"]},
    {"name": "SZ$string$3", "symbols": [{"literal":"V"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SZ", "symbols": ["SZ$string$3"]},
    {"name": "SZ$string$4", "symbols": [{"literal":"T"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SZ", "symbols": ["SZ$string$4"]},
    {"name": "SDR$string$1", "symbols": [{"literal":"I"}, {"literal":"c"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"V"}, {"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":" "}, {"literal":"B"}, {"literal":"l"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"L"}, {"literal":"a"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SDR", "symbols": ["SDR$string$1"]},
    {"name": "SDR$string$2", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"l"}, {"literal":" "}, {"literal":"M"}, {"literal":"a"}, {"literal":"c"}, {"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"a"}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SDR", "symbols": ["SDR$string$2"]},
    {"name": "SDR$string$3", "symbols": [{"literal":"P"}, {"literal":"u"}, {"literal":"m"}, {"literal":"p"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"S"}, {"literal":"p"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}, {"literal":" "}, {"literal":"F"}, {"literal":"r"}, {"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"u"}, {"literal":"c"}, {"literal":"c"}, {"literal":"i"}, {"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"B"}, {"literal":"l"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SDR", "symbols": ["SDR$string$3"]},
    {"name": "SDR$string$4", "symbols": [{"literal":"A"}, {"literal":"p"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"p"}, {"literal":" "}, {"literal":"O"}, {"literal":"a"}, {"literal":"t"}, {"literal":"m"}, {"literal":"i"}, {"literal":"l"}, {"literal":"k"}, {"literal":" "}, {"literal":"F"}, {"literal":"r"}, {"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"u"}, {"literal":"c"}, {"literal":"c"}, {"literal":"i"}, {"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"B"}, {"literal":"l"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SDR", "symbols": ["SDR$string$4"]},
    {"name": "SDR$string$5", "symbols": [{"literal":"C"}, {"literal":"h"}, {"literal":"o"}, {"literal":"c"}, {"literal":"o"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"r"}, {"literal":"u"}, {"literal":"m"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SDR", "symbols": ["SDR$string$5"]},
    {"name": "LDR$string$1", "symbols": [{"literal":"I"}, {"literal":"c"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"P"}, {"literal":"e"}, {"literal":"a"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"T"}, {"literal":"e"}, {"literal":"a"}, {"literal":" "}, {"literal":"L"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LDR", "symbols": ["LDR$string$1"]},
    {"name": "LDR$string$2", "symbols": [{"literal":"I"}, {"literal":"c"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"M"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"o"}, {"literal":" "}, {"literal":"B"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":" "}, {"literal":"T"}, {"literal":"e"}, {"literal":"a"}, {"literal":" "}, {"literal":"L"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LDR", "symbols": ["LDR$string$2"]},
    {"name": "LDR$string$3", "symbols": [{"literal":"i"}, {"literal":"c"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"R"}, {"literal":"o"}, {"literal":"y"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"E"}, {"literal":"n"}, {"literal":"g"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":" "}, {"literal":"B"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}, {"literal":"f"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"T"}, {"literal":"e"}, {"literal":"a"}, {"literal":" "}, {"literal":"L"}, {"literal":"a"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LDR", "symbols": ["LDR$string$3"]},
    {"name": "LDR$string$4", "symbols": [{"literal":"I"}, {"literal":"c"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"P"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"T"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"o"}, {"literal":" "}, {"literal":"T"}, {"literal":"e"}, {"literal":"a"}, {"literal":" "}, {"literal":"L"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LDR", "symbols": ["LDR$string$4"]},
    {"name": "NDR$string$1", "symbols": [{"literal":"E"}, {"literal":"s"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NDR", "symbols": ["NDR$string$1"]},
    {"name": "NDR$string$2", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"p"}, {"literal":"u"}, {"literal":"c"}, {"literal":"c"}, {"literal":"i"}, {"literal":"n"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NDR", "symbols": ["NDR$string$2"]},
    {"name": "NDR$string$3", "symbols": [{"literal":"A"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NDR", "symbols": ["NDR$string$3"]},
    {"name": "NDR$string$4", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"B"}, {"literal":"r"}, {"literal":"e"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NDR", "symbols": ["NDR$string$4"]},
    {"name": "ISTA$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"?"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ISTA$string$2", "symbols": [{"literal":"A"}, {"literal":"l"}, {"literal":"s"}, {"literal":"o"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ISTA", "symbols": ["ISTA$string$1", "_", "ISTA$string$2"]},
    {"name": "IST$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"?"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IST", "symbols": ["IST$string$1"]},
    {"name": "ORDER", "symbols": ["SZ", "_", "SDR"]},
    {"name": "ORDER", "symbols": ["SZ", "_", "LDR"]},
    {"name": "ORDER", "symbols": ["SZ", "_", "NDR"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
