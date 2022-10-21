// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["INT", "SENTENCE", {"literal":".","pos":14}]},
    {"name": "SENTENCE", "symbols": ["SUB", {"literal":" ","pos":22}, "VERB", "MOD"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"d"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"C"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"t"}, {"literal":"y"}, {"literal":"p"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"R"}, {"literal":"e"}, {"literal":"d"}, {"literal":"d"}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "VERB", "symbols": ["ADV", {"literal":" ","pos":48}, "VERB"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"b"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "ADV$string$1", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$1"]},
    {"name": "ADV$string$2", "symbols": [{"literal":"j"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$2"]},
    {"name": "ADV$string$3", "symbols": [{"literal":"a"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$3"]},
    {"name": "MOD$string$1", "symbols": [{"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "OBJ"]},
    {"name": "MOD$string$3", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "SENTENCE"]},
    {"name": "MOD$string$4", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4", "SENTENCE"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"h"}, {"literal":"u"}, {"literal":"g"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"u"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"n"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"e"}, {"literal":"-"}, {"literal":"b"}, {"literal":"o"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "INT$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"o"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INT", "symbols": ["INT$string$1"]},
    {"name": "INT$string$2", "symbols": [{"literal":"L"}, {"literal":"o"}, {"literal":"w"}, {"literal":"k"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INT", "symbols": ["INT$string$2"]},
    {"name": "INT$string$3", "symbols": [{"literal":"S"}, {"literal":"h"}, {"literal":"e"}, {"literal":"e"}, {"literal":"e"}, {"literal":"e"}, {"literal":"e"}, {"literal":"s"}, {"literal":"h"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INT", "symbols": ["INT$string$3"]},
    {"name": "INT$string$4", "symbols": [{"literal":"Y"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"r"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INT", "symbols": ["INT$string$4"]},
    {"name": "INT$string$5", "symbols": [{"literal":"O"}, {"literal":"n"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"d"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INT", "symbols": ["INT$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
