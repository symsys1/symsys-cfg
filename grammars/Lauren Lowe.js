// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN$string$1", "symbols": [{"literal":" "}, {"literal":"R"}, {"literal":"e"}, {"literal":"g"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":"s"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}, "MAIN$string$1", "_", "NAME"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"f"}, {"literal":"e"}, {"literal":"r"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"."}, {"literal":" "}, {"literal":"A"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"i"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"e"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":" "}, {"literal":"i"}, {"literal":"m"}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "SUB", "SENTENCE$string$2", "_", "MONEY", "SENTENCE$string$3", "_", "CONDITION", {"literal":".","pos":36}, "_", "ACTION"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"k"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":"c"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"m"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"p"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":"s"}, {"literal":"-"}, {"literal":"b"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"t"}, {"literal":"h"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"p"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "SUB$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"t"}, {"literal":"h"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$5"]},
    {"name": "MONEY$string$1", "symbols": [{"literal":"$"}, {"literal":"9"}, {"literal":"5"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MONEY", "symbols": ["MONEY$string$1"]},
    {"name": "MONEY$string$2", "symbols": [{"literal":"$"}, {"literal":"1"}, {"literal":","}, {"literal":"0"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MONEY", "symbols": ["MONEY$string$2"]},
    {"name": "MONEY$string$3", "symbols": [{"literal":"$"}, {"literal":"5"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MONEY", "symbols": ["MONEY$string$3"]},
    {"name": "MONEY$string$4", "symbols": [{"literal":"$"}, {"literal":"1"}, {"literal":","}, {"literal":"5"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MONEY", "symbols": ["MONEY$string$4"]},
    {"name": "MONEY$string$5", "symbols": [{"literal":"$"}, {"literal":"5"}, {"literal":","}, {"literal":"0"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MONEY", "symbols": ["MONEY$string$5"]},
    {"name": "CONDITION$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"f"}, {"literal":"i"}, {"literal":"r"}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}, {"literal":","}, {"literal":" "}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITION", "symbols": ["CONDITION$string$1", "_", "CONDITION"]},
    {"name": "CONDITION$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"$"}, {"literal":"1"}, {"literal":"0"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"s"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITION", "symbols": ["CONDITION$string$2"]},
    {"name": "CONDITION$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"c"}, {"literal":"i"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"c"}, {"literal":"u"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}, {"literal":" "}, {"literal":"n"}, {"literal":"u"}, {"literal":"m"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITION", "symbols": ["CONDITION$string$3"]},
    {"name": "CONDITION$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"I"}, {"literal":"D"}, {"literal":" "}, {"literal":"n"}, {"literal":"u"}, {"literal":"m"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITION", "symbols": ["CONDITION$string$4"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"S"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION$string$2", "symbols": [{"literal":" "}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION$string$3", "symbols": [{"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1", "_", "NAME", "ACTION$string$2", "_", "PHONE", "ACTION$string$3"]},
    {"name": "NAME$string$1", "symbols": [{"literal":"A"}, {"literal":"n"}, {"literal":"a"}, {"literal":" "}, {"literal":"B"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$1"]},
    {"name": "NAME$string$2", "symbols": [{"literal":"D"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"A"}, {"literal":"f"}, {"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"r"}, {"literal":"s"}, {"literal":"®"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$2"]},
    {"name": "NAME$string$3", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}, {"literal":"A"}, {"literal":"f"}, {"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"r"}, {"literal":"s"}, {"literal":" "}, {"literal":"("}, {"literal":"S"}, {"literal":"A"}, {"literal":")"}, {"literal":"®"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$3"]},
    {"name": "NAME$string$4", "symbols": [{"literal":"A"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"W"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"a"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$4"]},
    {"name": "NAME$string$5", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"p"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$5"]},
    {"name": "PHONE$string$1", "symbols": [{"literal":"("}, {"literal":"6"}, {"literal":"2"}, {"literal":"6"}, {"literal":")"}, {"literal":" "}, {"literal":"7"}, {"literal":"4"}, {"literal":"1"}, {"literal":" "}, {"literal":"3"}, {"literal":"5"}, {"literal":"9"}, {"literal":"6"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHONE", "symbols": ["PHONE$string$1"]},
    {"name": "PHONE$string$2", "symbols": [{"literal":"("}, {"literal":"1"}, {"literal":"2"}, {"literal":"3"}, {"literal":")"}, {"literal":" "}, {"literal":"4"}, {"literal":"5"}, {"literal":"6"}, {"literal":" "}, {"literal":"7"}, {"literal":"8"}, {"literal":"9"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHONE", "symbols": ["PHONE$string$2"]},
    {"name": "PHONE$string$3", "symbols": [{"literal":"("}, {"literal":"6"}, {"literal":"0"}, {"literal":"8"}, {"literal":")"}, {"literal":" "}, {"literal":"8"}, {"literal":"0"}, {"literal":"0"}, {"literal":" "}, {"literal":"0"}, {"literal":"1"}, {"literal":"7"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHONE", "symbols": ["PHONE$string$3"]},
    {"name": "_", "symbols": [{"literal":" ","pos":162}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
