// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["WHO", {"literal":" ","pos":6}, "QUALIFIER", {"literal":" ","pos":10}, "B"]},
    {"name": "B", "symbols": ["ADJ", {"literal":" ","pos":20}, "A"]},
    {"name": "A", "symbols": ["ACTION", {"literal":" ","pos":30}, "POSSESSIVE", {"literal":" ","pos":34}, "DOG", {"literal":" ","pos":38}, "C", {"literal":".","pos":42}]},
    {"name": "WHO", "symbols": [{"literal":"I","pos":48}]},
    {"name": "WHO$string$1", "symbols": [{"literal":"W"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHO", "symbols": ["WHO$string$1"]},
    {"name": "WHO$string$2", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHO", "symbols": ["WHO$string$2"]},
    {"name": "WHO$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHO", "symbols": ["WHO$string$3"]},
    {"name": "QUALIFIER$string$1", "symbols": [{"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUALIFIER", "symbols": ["QUALIFIER$string$1"]},
    {"name": "QUALIFIER$string$2", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUALIFIER", "symbols": ["QUALIFIER$string$2"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"k"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"h"}, {"literal":"u"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"n"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4", {"literal":" ","pos":102}, "ADJ"]},
    {"name": "C$string$1", "symbols": [{"literal":"T"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}, {"literal":"b"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "C", "symbols": ["C$string$1"]},
    {"name": "C$string$2", "symbols": [{"literal":"F"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"x"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "C", "symbols": ["C$string$2"]},
    {"name": "DOG$string$1", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DOG", "symbols": ["DOG$string$1"]},
    {"name": "POSSESSIVE$string$1", "symbols": [{"literal":"m"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSSESSIVE", "symbols": ["POSSESSIVE$string$1"]},
    {"name": "POSSESSIVE$string$2", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSSESSIVE", "symbols": ["POSSESSIVE$string$2"]},
    {"name": "POSSESSIVE$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSSESSIVE", "symbols": ["POSSESSIVE$string$3"]},
    {"name": "POSSESSIVE$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSSESSIVE", "symbols": ["POSSESSIVE$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
