// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "SENTENCE", "symbols": ["ADVERB", "_", "ADJ", "_", "SUB", "_", "VERB", "_", "OBJ"]},
    {"name": "ADVERB$string$1", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$1"]},
    {"name": "ADVERB$string$2", "symbols": [{"literal":"H"}, {"literal":"e"}, {"literal":"y"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$2"]},
    {"name": "ADVERB$string$3", "symbols": [{"literal":"J"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$3"]},
    {"name": "ADVERB$string$4", "symbols": [{"literal":"Y"}, {"literal":"e"}, {"literal":"s"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$4"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"N"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"M"}, {"literal":"a"}, {"literal":"r"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"S"}, {"literal":"q"}, {"literal":"u"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"s"}, {"literal":"w"}, {"literal":"i"}, {"literal":"m"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"h"}, {"literal":"u"}, {"literal":"r"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"c"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"4"}, {"literal":"2"}, {"literal":" "}, {"literal":"W"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"b"}, {"literal":"y"}, {"literal":" "}, {"literal":"W"}, {"literal":"a"}, {"literal":"y"}, {"literal":","}, {"literal":" "}, {"literal":"S"}, {"literal":"y"}, {"literal":"d"}, {"literal":"n"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"c"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"o"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"n"}, {"literal":"y"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4", "_", "ADJ"]},
    {"name": "_", "symbols": [{"literal":" ","pos":140}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
