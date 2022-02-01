// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "OBJ", "_", "AVP", "_", "OBJ"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":40}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"u"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4", "_", "OBJ"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "CON$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CON", "symbols": ["CON$string$1"]},
    {"name": "CON$string$2", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CON", "symbols": ["CON$string$2"]},
    {"name": "CON$string$3", "symbols": [{"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CON", "symbols": ["CON$string$3"]},
    {"name": "AVP", "symbols": ["CON", "_", "MOD"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"a"}, {"literal":"g"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "OBJ"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "SENTENCE"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4", "_", "OBJ"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"P"}, {"literal":"a"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"D"}, {"literal":"u"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"p"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":"a"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"M"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"A"}, {"literal":"n"}, {"literal":"n"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"M"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"P"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"y"}, {"literal":"a"}, {"literal":" "}, {"literal":"A"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"M"}, {"literal":"a"}, {"literal":"r"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"u"}, {"literal":"-"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "OBJ$string$9", "symbols": [{"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"M"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$9"]},
    {"name": "OBJ$string$10", "symbols": [{"literal":"S"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$10"]},
    {"name": "OBJ$string$11", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"."}, {"literal":" "}, {"literal":"P"}, {"literal":"a"}, {"literal":"t"}, {"literal":"t"}, {"literal":"y"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"D"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$11"]},
    {"name": "OBJ$string$12", "symbols": [{"literal":"M"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"M"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$12"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
