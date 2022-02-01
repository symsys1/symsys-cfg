// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "MOD"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"O"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"C"}, {"literal":"O"}, {"literal":"V"}, {"literal":"I"}, {"literal":"D"}, {"literal":"-"}, {"literal":"1"}, {"literal":"9"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"l"}, {"literal":"i"}, {"literal":"c"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"O"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"c"}, {"literal":"o"}, {"literal":"h"}, {"literal":"o"}, {"literal":"l"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"l"}, {"literal":"i"}, {"literal":"c"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"T"}, {"literal":"A"}, {"literal":"N"}, {"literal":"F"}, {"literal":"O"}, {"literal":"R"}, {"literal":"D"}, {"literal":" "}, {"literal":"N"}, {"literal":"e"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"b"}, {"literal":"o"}, {"literal":"r"}, {"literal":"h"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":" "}, {"literal":"P"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"W"}, {"literal":"A"}, {"literal":"Y"}, {"literal":"S"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"y"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"d"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"c"}, {"literal":"h"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":" "}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"e"}, {"literal":"f"}, {"literal":"f"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "SENTENCE"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"k"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "SUB2", "_", "VERB2", "_", "OBJ"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "SUB2", "_", "VERB2", "_", "OBJ"]},
    {"name": "SUB2$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"m"}, {"literal":"i"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$1"]},
    {"name": "SUB2$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":"d"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$2"]},
    {"name": "SUB2$string$3", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"U"}, {"literal":"n"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$3"]},
    {"name": "VERB2$string$1", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$1"]},
    {"name": "VERB2$string$2", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$2"]},
    {"name": "VERB2$string$3", "symbols": [{"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$3"]},
    {"name": "VERB2$string$4", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$4"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"f"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ$string$2", "symbols": [{"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1", "_", "SUB", "OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"l"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "_", "symbols": [{"literal":" ","pos":156}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
