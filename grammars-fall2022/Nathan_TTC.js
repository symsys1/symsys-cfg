// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["CONJUNCT", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["MULT", "_", "CONJUNCTION", "_", "CONJUNCT", {"literal":".","pos":20}]},
    {"name": "CONJUNCTION$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJUNCTION", "symbols": ["CONJUNCTION$string$1"]},
    {"name": "MULT", "symbols": ["CONJUNCT"]},
    {"name": "MULT$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MULT", "symbols": ["CONJUNCT", "MULT$string$1", "MULT"]},
    {"name": "CONJUNCT", "symbols": ["NP", "_", "VP", "_", "MOD"]},
    {"name": "NP", "symbols": ["DET", "_", "NOUN"]},
    {"name": "DET$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DET", "symbols": ["DET$string$1"]},
    {"name": "NOUN", "symbols": ["NUMBER", "_", "MODE"]},
    {"name": "NUMBER$string$1", "symbols": [{"literal":"6"}, {"literal":"3"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUMBER", "symbols": ["NUMBER$string$1"]},
    {"name": "NUMBER$string$2", "symbols": [{"literal":"9"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUMBER", "symbols": ["NUMBER$string$2"]},
    {"name": "NUMBER$string$3", "symbols": [{"literal":"4"}, {"literal":":"}, {"literal":"3"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUMBER", "symbols": ["NUMBER$string$3"]},
    {"name": "NUMBER$string$4", "symbols": [{"literal":"1"}, {"literal":"1"}, {"literal":" "}, {"literal":"a"}, {"literal":"."}, {"literal":"m"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUMBER", "symbols": ["NUMBER$string$4"]},
    {"name": "MODE$string$1", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MODE", "symbols": ["MODE$string$1"]},
    {"name": "MODE$string$2", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MODE", "symbols": ["MODE$string$2"]},
    {"name": "MODE$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":"c"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MODE", "symbols": ["MODE$string$3"]},
    {"name": "MODE$string$4", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":" "}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MODE", "symbols": ["MODE$string$4"]},
    {"name": "VP$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VP", "symbols": ["VP$string$1"]},
    {"name": "VP$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VP", "symbols": ["VP$string$2"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"1"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"1"}, {"literal":"0"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"1"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"l"}, {"literal":"f"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4"]},
    {"name": "_", "symbols": [{"literal":" ","pos":150}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
