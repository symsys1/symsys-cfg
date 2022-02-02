// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["BIO"]},
    {"name": "_", "symbols": [{"literal":" ","pos":10}]},
    {"name": "BIO", "symbols": ["IDENTIFIER", "_", "VERSE"]},
    {"name": "BIO", "symbols": ["PERSONALITY", "_", "IDENTIFIER", "_", "VERSE"]},
    {"name": "BIO", "symbols": ["PERSONALITY", "_", "THINGS", "_", "VERSE"]},
    {"name": "BIO", "symbols": ["IDENTIFIER", "_", "THINGS", "_", "VERSE"]},
    {"name": "BIO", "symbols": ["PERSONALITY", "_", "IDENTIFIER", "_", "THINGS", "_", "VERSE"]},
    {"name": "VERSE$string$1", "symbols": [{"literal":"P"}, {"literal":"s"}, {"literal":"a"}, {"literal":"l"}, {"literal":"m"}, {"literal":" "}, {"literal":"3"}, {"literal":"0"}, {"literal":":"}, {"literal":"1"}, {"literal":"1"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERSE", "symbols": ["VERSE$string$1"]},
    {"name": "VERSE$string$2", "symbols": [{"literal":"J"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"i"}, {"literal":"a"}, {"literal":"h"}, {"literal":" "}, {"literal":"2"}, {"literal":"9"}, {"literal":":"}, {"literal":"1"}, {"literal":"1"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERSE", "symbols": ["VERSE$string$2"]},
    {"name": "VERSE$string$3", "symbols": [{"literal":"P"}, {"literal":"s"}, {"literal":"a"}, {"literal":"l"}, {"literal":"m"}, {"literal":" "}, {"literal":"2"}, {"literal":"3"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERSE", "symbols": ["VERSE$string$3"]},
    {"name": "VERSE$string$4", "symbols": [{"literal":"1"}, {"literal":" "}, {"literal":"j"}, {"literal":"o"}, {"literal":"h"}, {"literal":"n"}, {"literal":" "}, {"literal":"4"}, {"literal":":"}, {"literal":"1"}, {"literal":"6"}, {"literal":"-"}, {"literal":"1"}, {"literal":"8"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERSE", "symbols": ["VERSE$string$4"]},
    {"name": "VERSE$string$5", "symbols": [{"literal":"p"}, {"literal":"s"}, {"literal":"a"}, {"literal":"l"}, {"literal":"m"}, {"literal":" "}, {"literal":"2"}, {"literal":"3"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERSE", "symbols": ["VERSE$string$5"]},
    {"name": "VERSE$string$6", "symbols": [{"literal":"P"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"i"}, {"literal":"p"}, {"literal":"p"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":"s"}, {"literal":" "}, {"literal":"4"}, {"literal":":"}, {"literal":"1"}, {"literal":"3"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERSE", "symbols": ["VERSE$string$6"]},
    {"name": "GOD$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"L"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOD", "symbols": ["GOD$string$1"]},
    {"name": "GOD$string$2", "symbols": [{"literal":"Y"}, {"literal":"a"}, {"literal":"h"}, {"literal":"w"}, {"literal":"e"}, {"literal":"h"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOD", "symbols": ["GOD$string$2"]},
    {"name": "GOD$string$3", "symbols": [{"literal":"Y"}, {"literal":"e"}, {"literal":"s"}, {"literal":"h"}, {"literal":"u"}, {"literal":"a"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOD", "symbols": ["GOD$string$3"]},
    {"name": "GOD$string$4", "symbols": [{"literal":"J"}, {"literal":"e"}, {"literal":"s"}, {"literal":"u"}, {"literal":"s"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOD", "symbols": ["GOD$string$4"]},
    {"name": "IDENTIFIER$string$1", "symbols": [{"literal":"G"}, {"literal":"o"}, {"literal":"d"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IDENTIFIER", "symbols": ["IDENTIFIER$string$1"]},
    {"name": "IDENTIFIER$string$2", "symbols": [{"literal":"J"}, {"literal":"e"}, {"literal":"s"}, {"literal":"u"}, {"literal":"s"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IDENTIFIER", "symbols": ["IDENTIFIER$string$2"]},
    {"name": "IDENTIFIER$string$3", "symbols": [{"literal":"L"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"d"}, {"literal":"."}, {"literal":" "}, {"literal":"L"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"P"}, {"literal":"e"}, {"literal":"o"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IDENTIFIER", "symbols": ["IDENTIFIER$string$3"]},
    {"name": "IDENTIFIER$string$4", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"z"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"d"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"l"}, {"literal":"d"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IDENTIFIER", "symbols": ["IDENTIFIER$string$4"]},
    {"name": "IDENTIFIER$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IDENTIFIER", "symbols": ["IDENTIFIER$string$5", "_", "GOD"]},
    {"name": "IDENTIFIER$string$6", "symbols": [{"literal":"L"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"d"}, {"literal":"."}, {"literal":" "}, {"literal":"L"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"P"}, {"literal":"e"}, {"literal":"o"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"."}, {"literal":" "}, {"literal":"L"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IDENTIFIER", "symbols": ["IDENTIFIER$string$6", "_", "PERSONALITY"]},
    {"name": "PERSONALITY$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"O"}, {"literal":"f"}, {"literal":"f"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSONALITY", "symbols": ["PERSONALITY$string$1"]},
    {"name": "PERSONALITY$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"E"}, {"literal":"n"}, {"literal":"n"}, {"literal":"e"}, {"literal":"a"}, {"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"m"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSONALITY", "symbols": ["PERSONALITY$string$2"]},
    {"name": "PERSONALITY$string$3", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSONALITY", "symbols": ["PERSONALITY$string$3", "_", "PERSONALITY"]},
    {"name": "PERSONALITY$string$4", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"f"}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSONALITY", "symbols": ["PERSONALITY$string$4"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS", "symbols": ["GOD"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"C"}, {"literal":"F"}, {"literal":"N"}, {"literal":"I"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
