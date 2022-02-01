// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["VERB", "SENTENCE$string$1", "SOMETHING", "SENTENCE$string$2", "EVENT", "REASON"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"P"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"D"}, {"literal":"o"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"p"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"G"}, {"literal":"o"}, {"literal":" "}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "SOMETHING$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOMETHING", "symbols": ["SOMETHING$string$1"]},
    {"name": "SOMETHING$string$2", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"i"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOMETHING", "symbols": ["SOMETHING$string$2"]},
    {"name": "SOMETHING$string$3", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"o"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOMETHING", "symbols": ["SOMETHING$string$3"]},
    {"name": "SOMETHING$string$4", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOMETHING", "symbols": ["SOMETHING$string$4"]},
    {"name": "WHEN$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHEN", "symbols": ["WHEN$string$1"]},
    {"name": "WHEN$string$2", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHEN", "symbols": ["WHEN$string$2"]},
    {"name": "WHEN$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHEN", "symbols": ["WHEN$string$3"]},
    {"name": "WHEN$string$4", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHEN", "symbols": ["WHEN$string$4"]},
    {"name": "EVENT$string$1", "symbols": [{"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EVENT", "symbols": ["EVENT$string$1"]},
    {"name": "EVENT$string$2", "symbols": [{"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EVENT", "symbols": ["EVENT$string$2"]},
    {"name": "EVENT$string$3", "symbols": [{"literal":" "}, {"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EVENT", "symbols": ["EVENT$string$3"]},
    {"name": "EVENT$string$4", "symbols": [{"literal":" "}, {"literal":"v"}, {"literal":"a"}, {"literal":"u"}, {"literal":"l"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EVENT", "symbols": ["EVENT$string$4"]},
    {"name": "REASON$string$1", "symbols": [{"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REASON", "symbols": ["REASON$string$1", "WHEN", "PUNCTUATION"]},
    {"name": "REASON$string$2", "symbols": [{"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"g"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"m"}, {"literal":" "}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REASON", "symbols": ["REASON$string$2", "REASON"]},
    {"name": "REASON$string$3", "symbols": [{"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"m"}, {"literal":"p"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REASON", "symbols": ["REASON$string$3", "PUNCTUATION"]},
    {"name": "REASON$string$4", "symbols": [{"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REASON", "symbols": ["REASON$string$4"]},
    {"name": "PUNCTUATION", "symbols": [{"literal":".","pos":106}]},
    {"name": "PUNCTUATION", "symbols": [{"literal":"!","pos":108}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
