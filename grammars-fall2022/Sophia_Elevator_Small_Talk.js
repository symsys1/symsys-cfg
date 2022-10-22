// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE"]},
    {"name": "MAIN", "symbols": ["UNSURE", {"literal":"?","pos":10}]},
    {"name": "MAIN", "symbols": ["RECQUES", {"literal":"?","pos":16}]},
    {"name": "_", "symbols": [{"literal":" ","pos":22}]},
    {"name": "SENTENCE", "symbols": ["FILLER", "_", "OBJ", "_", "PROB", "_", "AUX", "_", "ADJ", "_", "SENTENCEEND"]},
    {"name": "FILLER$string$1", "symbols": [{"literal":"S"}, {"literal":"o"}, {"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FILLER", "symbols": ["FILLER$string$1"]},
    {"name": "FILLER$string$2", "symbols": [{"literal":"A"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FILLER", "symbols": ["FILLER$string$2"]},
    {"name": "FILLER$string$3", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FILLER", "symbols": ["FILLER$string$3"]},
    {"name": "FILLER$string$4", "symbols": [{"literal":"A"}, {"literal":"n"}, {"literal":"y"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FILLER", "symbols": ["FILLER$string$4"]},
    {"name": "FILLER$string$5", "symbols": [{"literal":"G"}, {"literal":"o"}, {"literal":"s"}, {"literal":"h"}, {"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FILLER", "symbols": ["FILLER$string$5"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "PROB$string$1", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROB", "symbols": ["PROB$string$1"]},
    {"name": "PROB$string$2", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROB", "symbols": ["PROB$string$2"]},
    {"name": "PROB$string$3", "symbols": [{"literal":"o"}, {"literal":"f"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROB", "symbols": ["PROB$string$3"]},
    {"name": "AUX$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AUX", "symbols": ["AUX$string$1"]},
    {"name": "AUX$string$2", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AUX", "symbols": ["AUX$string$2"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"n"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"a"}, {"literal":"w"}, {"literal":"e"}, {"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "SENTENCEEND", "symbols": [{"literal":".","pos":136}]},
    {"name": "SENTENCEEND", "symbols": [{"literal":"!","pos":140}]},
    {"name": "UNSURE$string$1", "symbols": [{"literal":"D"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "UNSURE", "symbols": ["UNSURE$string$1", "_", "SUB", "_", "VERB", "_", "OBJ2", "_", "PROB2"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"o"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":"c"}, {"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "SUB$string$5", "symbols": [{"literal":"k"}, {"literal":"i"}, {"literal":"d"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$5"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"s"}, {"literal":"y"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "OBJ2$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ2", "symbols": ["OBJ2$string$1"]},
    {"name": "OBJ2$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ2", "symbols": ["OBJ2$string$2"]},
    {"name": "OBJ2$string$3", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ2", "symbols": ["OBJ2$string$3"]},
    {"name": "OBJ2$string$4", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ2", "symbols": ["OBJ2$string$4"]},
    {"name": "PROB2$string$1", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROB2", "symbols": ["PROB2$string$1"]},
    {"name": "PROB2$string$2", "symbols": [{"literal":"o"}, {"literal":"f"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROB2", "symbols": ["PROB2$string$2"]},
    {"name": "PROB2$string$3", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROB2", "symbols": ["PROB2$string$3"]},
    {"name": "PROB2$string$4", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"u"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROB2", "symbols": ["PROB2$string$4"]},
    {"name": "RECQUES$string$1", "symbols": [{"literal":"D"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECQUES$string$2", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECQUES", "symbols": ["RECQUES$string$1", "_", "SUB", "_", "RECQUES$string$2", "_", "SUB", "_", "VERB", "_", "OBJ2", "_", "PROB2"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
