// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["LINE", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "LINE", "symbols": ["CLUB", "_", "ACTION", "_", "DETAIL"]},
    {"name": "CLUB$string$1", "symbols": [{"literal":"S"}, {"literal":"W"}, {"literal":"I"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLUB$string$2", "symbols": [{"literal":"g"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLUB", "symbols": ["CLUB$string$1", "SPEC", "_", "CLUB$string$2"]},
    {"name": "CLUB$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"w"}, {"literal":"o"}, {"literal":" "}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"h"}, {"literal":"u"}, {"literal":"s"}, {"literal":"i"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"S"}, {"literal":"W"}, {"literal":"I"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLUB$string$4", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLUB", "symbols": ["CLUB$string$3", "SPEC", "_", "CLUB$string$4"]},
    {"name": "CLUB$string$5", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLUB", "symbols": ["CLUB$string$5"]},
    {"name": "CLUB$string$6", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"u"}, {"literal":"b"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"-"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLUB", "symbols": ["CLUB$string$6"]},
    {"name": "SPEC", "symbols": [{"literal":"B","pos":62}]},
    {"name": "SPEC", "symbols": [{"literal":"P","pos":66}]},
    {"name": "SPEC", "symbols": [{"literal":"M","pos":70}]},
    {"name": "SPEC", "symbols": [{"literal":"D","pos":74}]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"b"}, {"literal":"a"}, {"literal":" "}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"r"}, {"literal":"u"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"w"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"m"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"C"}, {"literal":"o"}, {"literal":"u"}, {"literal":"p"}, {"literal":"a"}, {"literal":" "}, {"literal":"D"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"I"}, {"literal":"n"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"m"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"p"}, {"literal":"h"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4", "_", "ITEMS"]},
    {"name": "DETAIL$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"c"}, {"literal":"u"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DETAIL", "symbols": ["DETAIL$string$1", "_", "ITEMS"]},
    {"name": "DETAIL$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DETAIL", "symbols": ["DETAIL$string$2", "_", "ITEMS"]},
    {"name": "DETAIL$string$3", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DETAIL", "symbols": ["DETAIL$string$3"]},
    {"name": "DETAIL$string$4", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DETAIL", "symbols": ["DETAIL$string$4", "_", "LINE"]},
    {"name": "DETAIL$string$5", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DETAIL", "symbols": ["DETAIL$string$5", "_", "ITEMS"]},
    {"name": "ITEMS$string$1", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"o"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"l"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEMS", "symbols": ["ITEMS$string$1"]},
    {"name": "ITEMS$string$2", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEMS", "symbols": ["ITEMS$string$2"]},
    {"name": "ITEMS$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"f"}, {"literal":"u"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"S"}, {"literal":" "}, {"literal":"x"}, {"literal":" "}, {"literal":"S"}, {"literal":"o"}, {"literal":"c"}, {"literal":"i"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEMS", "symbols": ["ITEMS$string$3"]},
    {"name": "ITEMS$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"W"}, {"literal":"e"}, {"literal":"e"}, {"literal":"k"}, {"literal":" "}, {"literal":"1"}, {"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":"-"}, {"literal":"t"}, {"literal":"o"}, {"literal":"-"}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":"-"}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"n"}, {"literal":"f"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEMS", "symbols": ["ITEMS$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
