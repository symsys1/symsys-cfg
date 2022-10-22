// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "SENTENCE", "symbols": ["NP", "_", "NPVP"]},
    {"name": "SENTENCE", "symbols": ["PRONOUN", "_", "PVP"]},
    {"name": "_", "symbols": [{"literal":" ","pos":29}]},
    {"name": "NP", "symbols": ["POSSADJ", "_", "NOUN"]},
    {"name": "NP$string$1", "symbols": [{"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NP", "symbols": ["NP", "NP$string$1", "_", "NOUN"]},
    {"name": "POSSADJ$string$1", "symbols": [{"literal":"M"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSSADJ", "symbols": ["POSSADJ$string$1"]},
    {"name": "POSSADJ$string$2", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSSADJ", "symbols": ["POSSADJ$string$2"]},
    {"name": "NOUN$string$1", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$1"]},
    {"name": "NOUN$string$2", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$2"]},
    {"name": "NOUN$string$3", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$3"]},
    {"name": "NOUN$string$4", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"y"}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"d"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$4"]},
    {"name": "PRONOUN", "symbols": [{"literal":"I","pos":83}]},
    {"name": "NPVP", "symbols": ["HV", "_", "VP"]},
    {"name": "VP", "symbols": ["V", "_", "THINGS"]},
    {"name": "HV$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HV", "symbols": ["HV$string$1"]},
    {"name": "PVP", "symbols": ["PHV", "_", "VP"]},
    {"name": "PHV$string$1", "symbols": [{"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHV", "symbols": ["PHV$string$1"]},
    {"name": "V$string$1", "symbols": [{"literal":"m"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"i"}, {"literal":"z"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "V", "symbols": ["V$string$1"]},
    {"name": "V$string$2", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "V", "symbols": ["V$string$2"]},
    {"name": "V$string$3", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"v"}, {"literal":"i"}, {"literal":"e"}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "V", "symbols": ["V$string$3"]},
    {"name": "V$string$4", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "V", "symbols": ["V$string$4"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":" "}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"g"}, {"literal":"n"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"v"}, {"literal":"i"}, {"literal":"e"}, {"literal":"w"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
