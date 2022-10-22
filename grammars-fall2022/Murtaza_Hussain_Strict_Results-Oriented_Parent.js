// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"b"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "ACTION", "_", "THINGS", "_", "SENTENCE$string$1", "_", "DEADLINE"]},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE", {"literal":",","pos":40}, "_", "SENTENCE$string$2", "_", "SENTENCE"]},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["COMPARISON", "_", "SUCCESSACTION", "_", "SENTENCE$string$3", "_", "THINGS"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":70}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "COMPARISON$string$1", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARISON", "symbols": ["NAME", "COMPARISON$string$1", "_", "LABEL", {"literal":",","pos":88}]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4"]},
    {"name": "SUCCESSACTION$string$1", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUCCESSACTION", "symbols": ["SUCCESSACTION$string$1"]},
    {"name": "SUCCESSACTION$string$2", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"c"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUCCESSACTION", "symbols": ["SUCCESSACTION$string$2"]},
    {"name": "SUCCESSACTION$string$3", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"p"}, {"literal":"p"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUCCESSACTION", "symbols": ["SUCCESSACTION$string$3"]},
    {"name": "SUCCESSACTION$string$4", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"c"}, {"literal":"c"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUCCESSACTION", "symbols": ["SUCCESSACTION$string$4"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"e"}, {"literal":"t"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"a"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "THINGS$string$5", "symbols": [{"literal":"v"}, {"literal":"i"}, {"literal":"o"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$5"]},
    {"name": "DEADLINE$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DEADLINE", "symbols": ["DEADLINE$string$1"]},
    {"name": "DEADLINE$string$2", "symbols": [{"literal":"8"}, {"literal":":"}, {"literal":"3"}, {"literal":"0"}, {"literal":"p"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DEADLINE", "symbols": ["DEADLINE$string$2"]},
    {"name": "DEADLINE$string$3", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DEADLINE", "symbols": ["DEADLINE$string$3"]},
    {"name": "DEADLINE$string$4", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DEADLINE", "symbols": ["DEADLINE$string$4"]},
    {"name": "NAME$string$1", "symbols": [{"literal":"O"}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$1"]},
    {"name": "NAME$string$2", "symbols": [{"literal":"A"}, {"literal":"d"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$2"]},
    {"name": "NAME$string$3", "symbols": [{"literal":"P"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$3"]},
    {"name": "NAME$string$4", "symbols": [{"literal":"S"}, {"literal":"a"}, {"literal":"b"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$4"]},
    {"name": "NAME$string$5", "symbols": [{"literal":"A"}, {"literal":"d"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$5"]},
    {"name": "LABEL$string$1", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LABEL", "symbols": ["LABEL$string$1"]},
    {"name": "LABEL$string$2", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"i"}, {"literal":"u"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LABEL", "symbols": ["LABEL$string$2"]},
    {"name": "LABEL$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"g"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LABEL", "symbols": ["LABEL$string$3"]},
    {"name": "LABEL$string$4", "symbols": [{"literal":"a"}, {"literal":"c"}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"p"}, {"literal":"e"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LABEL", "symbols": ["LABEL$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
