// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["STATEMENT", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["IMP", {"literal":"!","pos":12}]},
    {"name": "STATEMENT", "symbols": ["NOM", "_", "ACTION", "_", "ADD"]},
    {"name": "IMP$string$1", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IMP", "symbols": ["IMP$string$1", "_", "ITEM"]},
    {"name": "NOM", "symbols": [{"literal":"I","pos":42}]},
    {"name": "NOM$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOM", "symbols": ["NOM$string$1"]},
    {"name": "NOM$string$2", "symbols": [{"literal":"w"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOM", "symbols": ["NOM$string$2"]},
    {"name": "NOM$string$3", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOM", "symbols": ["NOM$string$3"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4"]},
    {"name": "ADD$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADD", "symbols": ["ADD$string$1", "_", "ITEM"]},
    {"name": "ADD$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADD", "symbols": ["ADD$string$2", "_", "STATEMENT"]},
    {"name": "ADD$string$3", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADD", "symbols": ["ADD$string$3"]},
    {"name": "ADD$string$4", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADD", "symbols": ["ADD$string$4", "_", "STATEMENT"]},
    {"name": "ADD$string$5", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADD$string$6", "symbols": [{"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADD", "symbols": ["ADD$string$5", "_", "ITEM", "ADD$string$6"]},
    {"name": "ITEM$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEM", "symbols": ["ITEM$string$1"]},
    {"name": "ITEM$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEM", "symbols": ["ITEM$string$2"]},
    {"name": "ITEM$string$3", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"v"}, {"literal":"i"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEM", "symbols": ["ITEM$string$3"]},
    {"name": "_", "symbols": [{"literal":" ","pos":132}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
