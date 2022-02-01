// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "Main", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "PREP", "_", "ADJ", "_", "OBJ", "_", "PHRASES"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"m"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "PREP$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREP", "symbols": ["PREP$string$1"]},
    {"name": "PREP$string$2", "symbols": [{"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREP", "symbols": ["PREP$string$2"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"o"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ", "symbols": ["UGLY"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"d"}, {"literal":"u"}, {"literal":"m"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"g"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "PHRASES$string$1", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASES", "symbols": ["PHRASES$string$1"]},
    {"name": "PHRASES$string$2", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASES", "symbols": ["PHRASES$string$2"]},
    {"name": "PHRASES$string$3", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"s"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASES", "symbols": ["PHRASES$string$3"]},
    {"name": "PHRASES$string$4", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"c"}, {"literal":"e"}, {"literal":"r"}, {"literal":"t"}, {"literal":"i"}, {"literal":"f"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":"p"}, {"literal":"o"}, {"literal":"l"}, {"literal":"o"}, {"literal":"g"}, {"literal":"y"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASES", "symbols": ["PHRASES$string$4"]},
    {"name": "PHRASES$string$5", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"c"}, {"literal":"r"}, {"literal":"i"}, {"literal":"p"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"g"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"r"}, {"literal":"r"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASES", "symbols": ["PHRASES$string$5"]},
    {"name": "UGLY$string$1", "symbols": [{"literal":"u"}, {"literal":"g"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "UGLY", "symbols": ["UGLY$string$1"]},
    {"name": "UGLY$string$2", "symbols": [{"literal":"u"}, {"literal":"g"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "UGLY", "symbols": ["UGLY", "_", "UGLY$string$2"]},
    {"name": "_", "symbols": [{"literal":" ","pos":122}]}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
