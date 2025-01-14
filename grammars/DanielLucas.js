// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "AIN", "symbols": ["LABEL", "_", "SENTENCE", {"literal":".","pos":10}]},
    {"name": "AIN", "symbols": ["QUESTION", {"literal":"?","pos":16}]},
    {"name": "_", "symbols": [{"literal":" ","pos":22}]},
    {"name": "SENTENCE$subexpression$1$string$1", "symbols": [{"literal":"s"}, {"literal":"m"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$subexpression$1", "symbols": ["SENTENCE$subexpression$1$string$1"]},
    {"name": "SENTENCE$subexpression$1$string$2", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$subexpression$1", "symbols": ["SENTENCE$subexpression$1$string$2"]},
    {"name": "SENTENCE", "symbols": ["SENTENCE$subexpression$1", "_", "CAUSE", "_", "EFFECT", "_", "CONNECTOR", "_", "CAUSE", "_", "CONSEQUENCE"]},
    {"name": "QUESTION$subexpression$1$string$1", "symbols": [{"literal":"s"}, {"literal":"m"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$subexpression$1", "symbols": ["QUESTION$subexpression$1$string$1"]},
    {"name": "QUESTION$subexpression$1$string$2", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$subexpression$1", "symbols": ["QUESTION$subexpression$1$string$2"]},
    {"name": "QUESTION", "symbols": ["INQUIRY", "_", "QUESTION$subexpression$1", "_", "CAUSE", "_", "EFFECT"]},
    {"name": "INQUIRY$string$1", "symbols": [{"literal":"D"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY", "symbols": ["INQUIRY$string$1"]},
    {"name": "INQUIRY$string$2", "symbols": [{"literal":"H"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY", "symbols": ["INQUIRY$string$2"]},
    {"name": "LABEL$string$1", "symbols": [{"literal":"W"}, {"literal":"A"}, {"literal":"R"}, {"literal":"N"}, {"literal":"I"}, {"literal":"N"}, {"literal":"G"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LABEL", "symbols": ["LABEL$string$1"]},
    {"name": "LABEL$string$2", "symbols": [{"literal":"D"}, {"literal":"A"}, {"literal":"N"}, {"literal":"G"}, {"literal":"E"}, {"literal":"R"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LABEL", "symbols": ["LABEL$string$2"]},
    {"name": "LABEL$string$3", "symbols": [{"literal":"A"}, {"literal":"T"}, {"literal":"T"}, {"literal":"E"}, {"literal":"N"}, {"literal":"T"}, {"literal":"I"}, {"literal":"O"}, {"literal":"N"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LABEL", "symbols": ["LABEL$string$3"]},
    {"name": "LABEL$string$4", "symbols": [{"literal":"C"}, {"literal":"A"}, {"literal":"U"}, {"literal":"T"}, {"literal":"I"}, {"literal":"O"}, {"literal":"N"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LABEL", "symbols": ["LABEL$string$4"]},
    {"name": "LABEL$string$5", "symbols": [{"literal":"N"}, {"literal":"O"}, {"literal":"T"}, {"literal":"I"}, {"literal":"C"}, {"literal":"E"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LABEL", "symbols": ["LABEL$string$5"]},
    {"name": "CAUSE$string$1", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CAUSE", "symbols": ["CAUSE$string$1"]},
    {"name": "CAUSE$string$2", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CAUSE", "symbols": ["CAUSE$string$2"]},
    {"name": "CAUSE$string$3", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":"u"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CAUSE", "symbols": ["CAUSE$string$3"]},
    {"name": "CAUSE$string$4", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CAUSE", "symbols": ["CAUSE$string$4"]},
    {"name": "CAUSE$string$5", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"i"}, {"literal":"m"}, {"literal":"p"}, {"literal":"a"}, {"literal":"i"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CAUSE", "symbols": ["CAUSE$string$5"]},
    {"name": "CAUSE$string$6", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CAUSE", "symbols": ["CAUSE$string$6"]},
    {"name": "CAUSE$string$7", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"u"}, {"literal":"l"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CAUSE", "symbols": ["CAUSE$string$7"]},
    {"name": "CAUSE$string$8", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CAUSE", "symbols": ["CAUSE$string$8"]},
    {"name": "CAUSE$string$9", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"a"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CAUSE", "symbols": ["CAUSE$string$9"]},
    {"name": "EFFECT$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"d"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EFFECT", "symbols": ["EFFECT$string$1"]},
    {"name": "EFFECT$string$2", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EFFECT", "symbols": ["EFFECT$string$2"]},
    {"name": "EFFECT$string$3", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"a"}, {"literal":"d"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EFFECT", "symbols": ["EFFECT$string$3", "_", "SENTENCE"]},
    {"name": "EFFECT$string$4", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":" "}, {"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"m"}, {"literal":"b"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EFFECT", "symbols": ["EFFECT$string$4"]},
    {"name": "EFFECT$string$5", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"c"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EFFECT", "symbols": ["EFFECT$string$5"]},
    {"name": "EFFECT$string$6", "symbols": [{"literal":"C"}, {"literal":"O"}, {"literal":"P"}, {"literal":"D"}, {"literal":","}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"l"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EFFECT", "symbols": ["EFFECT$string$6"]},
    {"name": "EFFECT$string$7", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"f"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EFFECT", "symbols": ["EFFECT$string$7"]},
    {"name": "EFFECT$string$8", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EFFECT", "symbols": ["EFFECT$string$8", "_", "ACTION"]},
    {"name": "EFFECT$string$9", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"i"}, {"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EFFECT", "symbols": ["EFFECT$string$9", "_", "ACTION"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"o"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"o"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "CONNECTOR$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"c"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONNECTOR", "symbols": ["CONNECTOR$string$1"]},
    {"name": "CONNECTOR$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONNECTOR", "symbols": ["CONNECTOR$string$2"]},
    {"name": "CONSEQUENCE$string$1", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":"y"}, {"literal":" "}, {"literal":"u"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONSEQUENCE", "symbols": ["CONSEQUENCE$string$1"]},
    {"name": "CONSEQUENCE$string$2", "symbols": [{"literal":"a"}, {"literal":"m"}, {"literal":"p"}, {"literal":"u"}, {"literal":"t"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONSEQUENCE", "symbols": ["CONSEQUENCE$string$2"]},
    {"name": "CONSEQUENCE$string$3", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONSEQUENCE", "symbols": ["CONSEQUENCE$string$3"]},
    {"name": "CONSEQUENCE$string$4", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONSEQUENCE", "symbols": ["CONSEQUENCE$string$4"]},
    {"name": "CONSEQUENCE$string$5", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONSEQUENCE", "symbols": ["CONSEQUENCE$string$5"]}
]
  , ParserStart: "AIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
