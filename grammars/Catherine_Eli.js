// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "Main", "symbols": ["Statement", {"literal":"!","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "Statement", "symbols": ["ARTIST", "_", "ADJ"]},
    {"name": "Statement", "symbols": ["SUB", "_", "OPINION", "_", "ARTIST"]},
    {"name": "Statement$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Statement", "symbols": ["SUB", "_", "Statement$string$1", "_", "MOO"]},
    {"name": "MOO$string$1", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOO", "symbols": ["MOO$string$1", "_", "TIME"]},
    {"name": "MOO$string$2", "symbols": [{"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOO", "symbols": ["MOO$string$2", "_", "ARTIST"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":70}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"W"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "OPINION$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPINION", "symbols": ["OPINION$string$1"]},
    {"name": "OPINION$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPINION", "symbols": ["OPINION$string$2"]},
    {"name": "OPINION$string$3", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPINION", "symbols": ["OPINION$string$3"]},
    {"name": "OPINION$string$4", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPINION", "symbols": ["OPINION$string$4"]},
    {"name": "OPINION$string$5", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPINION", "symbols": ["OPINION$string$5"]},
    {"name": "ARTIST$string$1", "symbols": [{"literal":"D"}, {"literal":"r"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTIST", "symbols": ["ARTIST$string$1"]},
    {"name": "ARTIST$string$2", "symbols": [{"literal":"T"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"I"}, {"literal":"m"}, {"literal":"p"}, {"literal":"a"}, {"literal":"l"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTIST", "symbols": ["ARTIST$string$2"]},
    {"name": "ARTIST$string$3", "symbols": [{"literal":"B"}, {"literal":"R"}, {"literal":"O"}, {"literal":"C"}, {"literal":"K"}, {"literal":"H"}, {"literal":"A"}, {"literal":"M"}, {"literal":"P"}, {"literal":"T"}, {"literal":"O"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTIST", "symbols": ["ARTIST$string$3"]},
    {"name": "ARTIST$string$4", "symbols": [{"literal":"2"}, {"literal":"P"}, {"literal":"a"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTIST", "symbols": ["ARTIST$string$4"]},
    {"name": "ARTIST$string$5", "symbols": [{"literal":"K"}, {"literal":"o"}, {"literal":"d"}, {"literal":"a"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTIST", "symbols": ["ARTIST$string$5"]},
    {"name": "ARTIST$string$6", "symbols": [{"literal":"K"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTIST", "symbols": ["ARTIST$string$6"]},
    {"name": "ARTIST$string$7", "symbols": [{"literal":"L"}, {"literal":"a"}, {"literal":"d"}, {"literal":"y"}, {"literal":" "}, {"literal":"G"}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTIST", "symbols": ["ARTIST$string$7"]},
    {"name": "ARTIST$string$8", "symbols": [{"literal":"T"}, {"literal":"r"}, {"literal":"i"}, {"literal":"p"}, {"literal":"p"}, {"literal":"i"}, {"literal":"e"}, {"literal":" "}, {"literal":"R"}, {"literal":"e"}, {"literal":"d"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTIST", "symbols": ["ARTIST$string$8"]},
    {"name": "TIME$string$1", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":","}, {"literal":"0"}, {"literal":"0"}, {"literal":"0"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$1"]},
    {"name": "TIME$string$2", "symbols": [{"literal":"1"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$2"]},
    {"name": "TIME$string$3", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":","}, {"literal":"0"}, {"literal":"0"}, {"literal":"0"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$3"]},
    {"name": "TIME$string$4", "symbols": [{"literal":"2"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$4"]},
    {"name": "TIME$string$5", "symbols": [{"literal":"5"}, {"literal":"0"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$5"]},
    {"name": "TIME$string$6", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$6"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"w"}, {"literal":"e"}, {"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
