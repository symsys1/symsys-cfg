// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SCOLDING"]},
    {"name": "MAIN", "symbols": ["QUESTION"]},
    {"name": "_", "symbols": [{"literal":" ","pos":14}]},
    {"name": "SCOLDING", "symbols": ["SCOLDINGWORD", "_", "TASK", {"literal":"!","pos":26}]},
    {"name": "SCOLDING", "symbols": ["THREATWORD", "_", "TASK", {"literal":"!","pos":36}]},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "TASK", {"literal":"?","pos":48}]},
    {"name": "TASK$string$1", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TASK", "symbols": ["TASK$string$1"]},
    {"name": "TASK$string$2", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TASK", "symbols": ["TASK$string$2"]},
    {"name": "TASK$string$3", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TASK", "symbols": ["TASK$string$3"]},
    {"name": "TASK$string$4", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TASK", "symbols": ["TASK$string$4"]},
    {"name": "TASK$string$5", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TASK", "symbols": ["TASK$string$5"]},
    {"name": "TASK$string$6", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TASK", "symbols": ["TASK$string$6"]},
    {"name": "TASK$string$7", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"p"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TASK", "symbols": ["TASK$string$7", "_", "FAMILYMEMBERTASK"]},
    {"name": "FAMILYMEMBER$string$1", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FAMILYMEMBER", "symbols": ["FAMILYMEMBER$string$1"]},
    {"name": "FAMILYMEMBER$string$2", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FAMILYMEMBER", "symbols": ["FAMILYMEMBER$string$2"]},
    {"name": "FAMILYMEMBER$string$3", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FAMILYMEMBER", "symbols": ["FAMILYMEMBER$string$3"]},
    {"name": "FAMILYMEMBER$string$4", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FAMILYMEMBER", "symbols": ["FAMILYMEMBER$string$4"]},
    {"name": "FAMILYMEMBERTASK", "symbols": ["FAMILYMEMBER", "_", "TASK"]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "QUESTIONWORD$string$2", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$2"]},
    {"name": "QUESTIONWORD$string$3", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"y"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"j"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$3"]},
    {"name": "QUESTIONWORD$string$4", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"h"}, {"literal":"u"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$4"]},
    {"name": "SCOLDINGWORD$string$1", "symbols": [{"literal":"h"}, {"literal":"u"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SCOLDINGWORD", "symbols": ["SCOLDINGWORD$string$1"]},
    {"name": "SCOLDINGWORD$string$2", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SCOLDINGWORD", "symbols": ["SCOLDINGWORD$string$2"]},
    {"name": "SCOLDINGWORD$string$3", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":"f"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"t"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SCOLDINGWORD", "symbols": ["SCOLDINGWORD$string$3"]},
    {"name": "SCOLDINGWORD$string$4", "symbols": [{"literal":"F"}, {"literal":"i"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}, {"literal":"n"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"M"}, {"literal":"I"}, {"literal":"D"}, {"literal":"D"}, {"literal":"L"}, {"literal":"E"}, {"literal":"N"}, {"literal":"A"}, {"literal":"M"}, {"literal":"E"}, {"literal":" "}, {"literal":"L"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"n"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SCOLDINGWORD", "symbols": ["SCOLDINGWORD$string$4"]},
    {"name": "THREATWORD$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THREATWORD", "symbols": ["THREATWORD$string$1"]},
    {"name": "THREATWORD$string$2", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"'"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THREATWORD", "symbols": ["THREATWORD$string$2"]},
    {"name": "THREATWORD$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"r"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THREATWORD", "symbols": ["THREATWORD$string$3"]},
    {"name": "THREATWORD$string$4", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"p"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"d"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THREATWORD", "symbols": ["THREATWORD$string$4", "_", "THREATWORD"]},
    {"name": "THREATWORD$string$5", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"p"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"d"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THREATWORD", "symbols": ["THREATWORD$string$5", "_", "SCOLDINGWORD"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
