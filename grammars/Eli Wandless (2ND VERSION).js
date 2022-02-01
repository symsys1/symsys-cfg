// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "MOD"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"W"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"E"}, {"literal":"l"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"I"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"L"}, {"literal":"u"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "SUB$string$5", "symbols": [{"literal":"V"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$5"]},
    {"name": "SUB$string$6", "symbols": [{"literal":"R"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$6"]},
    {"name": "SUB$string$7", "symbols": [{"literal":"A"}, {"literal":"s"}, {"literal":"h"}, {"literal":"l"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$7"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"r"}, {"literal":"u"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3", "SUB"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4", "_", "OBJ"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "VERB$string$6", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$6", "VERB"]},
    {"name": "VERB$string$7", "symbols": [{"literal":"s"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$7"]},
    {"name": "VERB$string$8", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$8"]},
    {"name": "VERB$string$9", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB", "_", "VERB$string$9", "_", "VERB"]},
    {"name": "PLACE$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$1"]},
    {"name": "PLACE$string$2", "symbols": [{"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"3"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$2"]},
    {"name": "PLACE$string$3", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"W"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$3"]},
    {"name": "MOD", "symbols": ["PLACE", "_", "CONJ", "_", "OBJ"]},
    {"name": "MOD", "symbols": ["PLACE"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD$string$2", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "SUB", "_", "MOD$string$2"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3"]},
    {"name": "MOD", "symbols": ["CONJ", "_", "SENTENCE"]},
    {"name": "CONJ$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJ", "symbols": ["CONJ$string$1"]},
    {"name": "CONJ$string$2", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJ", "symbols": ["CONJ$string$2"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"c"}, {"literal":"c"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "_", "symbols": [{"literal":" ","pos":189}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
