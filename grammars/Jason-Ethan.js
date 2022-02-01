// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "Main", "symbols": ["S", {"literal":".","pos":6}]},
    {"name": "Main", "symbols": ["Q", {"literal":"?","pos":12}]},
    {"name": "Main", "symbols": ["C", {"literal":"!","pos":18}]},
    {"name": "+", "symbols": [{"literal":" ","pos":24}]},
    {"name": "S", "symbols": ["SUBJECT", "+", "AUXVERB"]},
    {"name": "S", "symbols": ["BEGIN", "+", "SUBJECT", "+", "AUXVERB"]},
    {"name": "Q$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Q", "symbols": ["Q$string$1", "+", "PASTVERB", "+", "TECHOBJECTS"]},
    {"name": "Q$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"y"}, {"literal":" "}, {"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Q", "symbols": ["Q$string$2", "+", "SUBJECT", "+", "SERVANTVERBS", "+", "RULEOBJECTS"]},
    {"name": "C", "symbols": ["BEGIN", "+", "SECUREVERBS"]},
    {"name": "C$string$1", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "C", "symbols": ["BEGIN", "+", "RETRIEVALVERBS", "C$string$1", "+", "C"]},
    {"name": "BEGIN$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"e"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BEGIN", "symbols": ["BEGIN$string$1"]},
    {"name": "BEGIN$string$2", "symbols": [{"literal":"O"}, {"literal":"h"}, {"literal":" "}, {"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BEGIN", "symbols": ["BEGIN$string$2"]},
    {"name": "BEGIN$string$3", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BEGIN", "symbols": ["BEGIN$string$3"]},
    {"name": "BEGIN$string$4", "symbols": [{"literal":"d"}, {"literal":"u"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BEGIN", "symbols": ["BEGIN$string$4"]},
    {"name": "AUXVERB$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AUXVERB", "symbols": ["AUXVERB$string$1", "+", "RETRIEVALVERBS"]},
    {"name": "AUXVERB$string$2", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AUXVERB", "symbols": ["AUXVERB$string$2", "+", "SECUREVERBS"]},
    {"name": "AUXVERB$string$3", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"c"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AUXVERB", "symbols": ["AUXVERB$string$3", "+", "RETRIEVALVERBS"]},
    {"name": "AUXVERB$string$4", "symbols": [{"literal":"g"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AUXVERB", "symbols": ["AUXVERB$string$4", "+", "RETRIEVALVERBS"]},
    {"name": "AUXVERB", "symbols": ["RETRIEVALVERBS"]},
    {"name": "AUXVERB", "symbols": ["SECUREVERBS"]},
    {"name": "RETRIEVALVERBS$string$1", "symbols": [{"literal":"p"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RETRIEVALVERBS", "symbols": ["RETRIEVALVERBS$string$1", "+", "COVIDOBJECTS"]},
    {"name": "RETRIEVALVERBS$string$2", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RETRIEVALVERBS", "symbols": ["RETRIEVALVERBS$string$2", "+", "COVIDOBJECTS"]},
    {"name": "RETRIEVALVERBS$string$3", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RETRIEVALVERBS", "symbols": ["RETRIEVALVERBS$string$3", "+", "COVIDOBJECTS"]},
    {"name": "RETRIEVALVERBS$string$4", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RETRIEVALVERBS", "symbols": ["RETRIEVALVERBS$string$4", "+", "COVIDOBJECTS"]},
    {"name": "SECUREVERBS$string$1", "symbols": [{"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SECUREVERBS", "symbols": ["SECUREVERBS$string$1", "+", "TECHOBJECTS"]},
    {"name": "SECUREVERBS$string$2", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SECUREVERBS", "symbols": ["SECUREVERBS$string$2", "+", "TECHOBJECTS"]},
    {"name": "SECUREVERBS$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"b"}, {"literal":"i"}, {"literal":"l"}, {"literal":"i"}, {"literal":"z"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SECUREVERBS", "symbols": ["SECUREVERBS$string$3", "+", "TECHOBJECTS"]},
    {"name": "SERVANTVERBS$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SERVANTVERBS", "symbols": ["SERVANTVERBS$string$1"]},
    {"name": "SERVANTVERBS$string$2", "symbols": [{"literal":"a"}, {"literal":"b"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SERVANTVERBS", "symbols": ["SERVANTVERBS$string$2"]},
    {"name": "PASTVERB$string$1", "symbols": [{"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PASTVERB", "symbols": ["PASTVERB$string$1"]},
    {"name": "PASTVERB$string$2", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PASTVERB", "symbols": ["PASTVERB$string$2"]},
    {"name": "PASTVERB$string$3", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PASTVERB", "symbols": ["PASTVERB$string$3"]},
    {"name": "COVIDOBJECTS$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COVIDOBJECTS", "symbols": ["COVIDOBJECTS$string$1"]},
    {"name": "COVIDOBJECTS$string$2", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COVIDOBJECTS", "symbols": ["COVIDOBJECTS$string$2"]},
    {"name": "COVIDOBJECTS$string$3", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"C"}, {"literal":"O"}, {"literal":"L"}, {"literal":"O"}, {"literal":"R"}, {"literal":" "}, {"literal":"C"}, {"literal":"O"}, {"literal":"V"}, {"literal":"I"}, {"literal":"D"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COVIDOBJECTS", "symbols": ["COVIDOBJECTS$string$3"]},
    {"name": "COVIDOBJECTS$string$4", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"P"}, {"literal":"C"}, {"literal":"R"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COVIDOBJECTS", "symbols": ["COVIDOBJECTS$string$4"]},
    {"name": "TECHOBJECTS$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"n"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TECHOBJECTS", "symbols": ["TECHOBJECTS$string$1"]},
    {"name": "TECHOBJECTS$string$2", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TECHOBJECTS", "symbols": ["TECHOBJECTS$string$2"]},
    {"name": "TECHOBJECTS$string$3", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"Z"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"a"}, {"literal":"u"}, {"literal":"d"}, {"literal":"i"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TECHOBJECTS", "symbols": ["TECHOBJECTS$string$3"]},
    {"name": "TECHOBJECTS$string$4", "symbols": [{"literal":"Z"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TECHOBJECTS", "symbols": ["TECHOBJECTS$string$4"]},
    {"name": "RULEOBJECTS$string$1", "symbols": [{"literal":"S"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":" "}, {"literal":"C"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":" "}, {"literal":"G"}, {"literal":"u"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RULEOBJECTS", "symbols": ["RULEOBJECTS$string$1"]},
    {"name": "RULEOBJECTS$string$2", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"C"}, {"literal":"O"}, {"literal":"V"}, {"literal":"I"}, {"literal":"D"}, {"literal":" "}, {"literal":"r"}, {"literal":"u"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RULEOBJECTS", "symbols": ["RULEOBJECTS$string$2"]},
    {"name": "SUBJECT", "symbols": [{"literal":"I","pos":295}]},
    {"name": "SUBJECT$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$1"]},
    {"name": "SUBJECT$string$2", "symbols": [{"literal":"w"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$2"]}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
