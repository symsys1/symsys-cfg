// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "START", "symbols": ["SENTENCE", {"literal":"!","pos":6}]},
    {"name": "START", "symbols": ["SENTENCE", {"literal":".","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"h"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$subexpression$1", "symbols": ["A"]},
    {"name": "SENTENCE$subexpression$1", "symbols": ["B"]},
    {"name": "SENTENCE$subexpression$1", "symbols": ["X"]},
    {"name": "SENTENCE", "symbols": ["FILLER", "_", "SENTENCE$string$1", "_", "SENTENCE$subexpression$1"]},
    {"name": "SENTENCE", "symbols": ["A"]},
    {"name": "SENTENCE", "symbols": ["B"]},
    {"name": "SENTENCE", "symbols": ["X"]},
    {"name": "A", "symbols": ["SSUBJ", "_", "ADV", "_", "SVERB", "_", "C"]},
    {"name": "B", "symbols": ["PSUBJ", "_", "PVERB", "_", "C"]},
    {"name": "C", "symbols": ["ARTICLE", "_", "DWORD", "_", "NOUN"]},
    {"name": "C", "symbols": ["D"]},
    {"name": "C$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "C", "symbols": ["D", "_", "C$string$1", "_", "SENTENCE"]},
    {"name": "D", "symbols": ["ARTICLE", "_", "NOUN"]},
    {"name": "X", "symbols": ["D", "_", "PVERB", "_", "C"]},
    {"name": "PSUBJ", "symbols": ["D"]},
    {"name": "PSUBJ$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PSUBJ", "symbols": ["PSUBJ$string$1"]},
    {"name": "PSUBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PSUBJ", "symbols": ["PSUBJ$string$2"]},
    {"name": "PSUBJ$string$3", "symbols": [{"literal":"w"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PSUBJ", "symbols": ["PSUBJ$string$3"]},
    {"name": "PSUBJ$string$4", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"p"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PSUBJ", "symbols": ["PSUBJ$string$4"]},
    {"name": "SSUBJ$string$1", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SSUBJ", "symbols": ["SSUBJ$string$1"]},
    {"name": "SSUBJ$string$2", "symbols": [{"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SSUBJ", "symbols": ["SSUBJ$string$2"]},
    {"name": "SSUBJ$string$3", "symbols": [{"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SSUBJ", "symbols": ["SSUBJ$string$3"]},
    {"name": "SVERB$string$1", "symbols": [{"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SVERB", "symbols": ["SVERB$string$1"]},
    {"name": "SVERB$string$2", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SVERB", "symbols": ["SVERB$string$2"]},
    {"name": "SVERB$string$3", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SVERB", "symbols": ["SVERB$string$3"]},
    {"name": "SVERB$string$4", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SVERB", "symbols": ["SVERB$string$4"]},
    {"name": "SVERB$string$5", "symbols": [{"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SVERB", "symbols": ["SVERB$string$5"]},
    {"name": "PVERB$string$1", "symbols": [{"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PVERB", "symbols": ["PVERB$string$1"]},
    {"name": "PVERB$string$2", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PVERB", "symbols": ["PVERB$string$2"]},
    {"name": "PVERB$string$3", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PVERB", "symbols": ["PVERB$string$3"]},
    {"name": "PVERB$string$4", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PVERB", "symbols": ["PVERB$string$4"]},
    {"name": "PVERB$string$5", "symbols": [{"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PVERB", "symbols": ["PVERB$string$5"]},
    {"name": "PVERB$string$6", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"u"}, {"literal":"b"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"e"}, {"literal":"x"}, {"literal":"c"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PVERB", "symbols": ["PVERB$string$6"]},
    {"name": "FILLER$string$1", "symbols": [{"literal":"P"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FILLER", "symbols": ["FILLER$string$1"]},
    {"name": "FILLER$string$2", "symbols": [{"literal":"F"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FILLER", "symbols": ["FILLER$string$2"]},
    {"name": "FILLER$string$3", "symbols": [{"literal":"Y"}, {"literal":"e"}, {"literal":"s"}, {"literal":","}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"s"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FILLER", "symbols": ["FILLER$string$3"]},
    {"name": "FILLER$string$4", "symbols": [{"literal":"B"}, {"literal":"y"}, {"literal":"e"}, {"literal":"-"}, {"literal":"b"}, {"literal":"y"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FILLER", "symbols": ["FILLER$string$4"]},
    {"name": "FILLER$string$5", "symbols": [{"literal":"O"}, {"literal":"k"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FILLER", "symbols": ["FILLER$string$5"]},
    {"name": "FILLER$string$6", "symbols": [{"literal":"G"}, {"literal":"o"}, {"literal":"b"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":","}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"b"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":","}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"b"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FILLER", "symbols": ["FILLER$string$6"]},
    {"name": "FILLER$string$7", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"h"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FILLER", "symbols": ["FILLER$string$7"]},
    {"name": "DWORD$string$1", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DWORD", "symbols": ["DWORD$string$1"]},
    {"name": "DWORD$string$2", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DWORD", "symbols": ["DWORD$string$2"]},
    {"name": "DWORD$string$3", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DWORD", "symbols": ["DWORD$string$3"]},
    {"name": "DWORD$string$4", "symbols": [{"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DWORD", "symbols": ["DWORD$string$4"]},
    {"name": "DWORD$string$5", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"u"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DWORD", "symbols": ["DWORD$string$5"]},
    {"name": "DWORD$string$6", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DWORD", "symbols": ["DWORD$string$6"]},
    {"name": "DWORD$string$7", "symbols": [{"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DWORD", "symbols": ["DWORD$string$7"]},
    {"name": "ARTICLE$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTICLE", "symbols": ["ARTICLE$string$1"]},
    {"name": "ARTICLE$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTICLE", "symbols": ["ARTICLE$string$2"]},
    {"name": "ARTICLE$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTICLE", "symbols": ["ARTICLE$string$3"]},
    {"name": "ARTICLE$string$4", "symbols": [{"literal":"m"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTICLE", "symbols": ["ARTICLE$string$4"]},
    {"name": "NOUN$string$1", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"i"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$1"]},
    {"name": "NOUN$string$2", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"p"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$2"]},
    {"name": "NOUN$string$3", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"p"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$3"]},
    {"name": "NOUN$string$4", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"j"}, {"literal":"a"}, {"literal":"m"}, {"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$4"]},
    {"name": "NOUN$string$5", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$5"]},
    {"name": "NOUN$string$6", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"-"}, {"literal":"s"}, {"literal":"u"}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$6"]},
    {"name": "ADV$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$1"]},
    {"name": "ADV$string$2", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$2"]},
    {"name": "ADV$string$3", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"u"}, {"literal":"b"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$3"]},
    {"name": "ADV$string$4", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$4"]}
]
  , ParserStart: "START"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
