// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["S", {"literal":".","pos":6}, "_", "EX", {"literal":"!","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "EX$string$1", "symbols": [{"literal":"H"}, {"literal":"U"}, {"literal":"L"}, {"literal":"K"}, {"literal":"!"}, {"literal":" "}, {"literal":"S"}, {"literal":"M"}, {"literal":"A"}, {"literal":"S"}, {"literal":"H"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EX", "symbols": ["EX$string$1"]},
    {"name": "EX$string$2", "symbols": [{"literal":"T"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"f"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EX", "symbols": ["EX$string$2"]},
    {"name": "EX$string$3", "symbols": [{"literal":"I"}, {"literal":"'"}, {"literal":"m"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EX", "symbols": ["EX$string$3"]},
    {"name": "EX$string$4", "symbols": [{"literal":"L"}, {"literal":"e"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EX", "symbols": ["EX$string$4"]},
    {"name": "EX$string$5", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"s"}, {"literal":"o"}, {"literal":"l"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EX", "symbols": ["EX$string$5"]},
    {"name": "EX$string$6", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"p"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"w"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"."}, {"literal":" "}, {"literal":"A"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"."}, {"literal":" "}, {"literal":"B"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"l"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EX", "symbols": ["EX$string$6"]},
    {"name": "EX$string$7", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"d"}, {"literal":"u"}, {"literal":"m"}, {"literal":"b"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}, {"literal":"f"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EX", "symbols": ["EX$string$7"]},
    {"name": "SJ$string$1", "symbols": [{"literal":"H"}, {"literal":"u"}, {"literal":"l"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SJ", "symbols": ["SJ$string$1"]},
    {"name": "SJ$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"l"}, {"literal":"i"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SJ", "symbols": ["SJ$string$2"]},
    {"name": "SJ$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"J"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"T"}, {"literal":"i"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SJ", "symbols": ["SJ$string$3"]},
    {"name": "SJ$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"O"}, {"literal":"l"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"O"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SJ", "symbols": ["SJ$string$4"]},
    {"name": "S", "symbols": ["SJ", "_", "V"]},
    {"name": "S", "symbols": ["SJ", "_", "V", "_", "MN"]},
    {"name": "S", "symbols": ["SJ", "_", "V", "_", "C", "_", "S"]},
    {"name": "V$string$1", "symbols": [{"literal":"s"}, {"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "V", "symbols": ["V$string$1"]},
    {"name": "V$string$2", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "V", "symbols": ["V$string$2"]},
    {"name": "V$string$3", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "V", "symbols": ["V$string$3"]},
    {"name": "V$string$4", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "V", "symbols": ["V$string$4"]},
    {"name": "C$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "C", "symbols": ["C$string$1"]},
    {"name": "C$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "C", "symbols": ["C$string$2"]},
    {"name": "C$string$3", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "C", "symbols": ["C$string$3"]},
    {"name": "C$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "C", "symbols": ["C$string$4"]},
    {"name": "MN$string$1", "symbols": [{"literal":"p"}, {"literal":"u"}, {"literal":"n"}, {"literal":"y"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MN", "symbols": ["MN$string$1"]},
    {"name": "MN$string$2", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MN", "symbols": ["MN$string$2"]},
    {"name": "MN$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"f"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MN", "symbols": ["MN$string$3"]},
    {"name": "MN$string$4", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"h"}, {"literal":"u"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MN", "symbols": ["MN$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
