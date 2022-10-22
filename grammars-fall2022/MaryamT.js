// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["HEADER", "_", "CONDITION", "_", "STARTER", {"literal":".","pos":15}, "_", "SIGNED"]},
    {"name": "MAIN", "symbols": ["HEADER", "_", "STARTER", {"literal":".","pos":29}, "_", "SIGNED"]},
    {"name": "HEADER$string$1", "symbols": [{"literal":"D"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HEADER", "symbols": ["HEADER$string$1"]},
    {"name": "CONDITION$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITION$string$2", "symbols": [{"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITION", "symbols": ["CONDITION$string$1", "_", "SEASON", "_", "CONDITION$string$2"]},
    {"name": "CONDITION$string$3", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"g"}, {"literal":"i"}, {"literal":"n"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITION$string$4", "symbols": [{"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITION", "symbols": ["CONDITION$string$3", "_", "DESCR", "_", "CONDITION$string$4"]},
    {"name": "CONDITION$string$5", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITION$string$6", "symbols": [{"literal":"a"}, {"literal":"c"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"m"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITION", "symbols": ["CONDITION$string$5", "_", "DESCR", "_", "CONDITION$string$6"]},
    {"name": "CONDITION$string$7", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"m"}, {"literal":"p"}, {"literal":"u"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITION$string$8", "symbols": [{"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITION", "symbols": ["CONDITION$string$7", "_", "SEASON", "_", "CONDITION$string$8"]},
    {"name": "STARTER$string$1", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER$string$3", "symbols": [{"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$1", "_", "STATE", "_", "STARTER$string$2", "_", "DESCR", "_", "STARTER$string$3"]},
    {"name": "STARTER$string$4", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"p"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"e"}, {"literal":"n"}, {"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"c"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"m"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER$string$5", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$4", "_", "DESCR", "_", "STARTER$string$5", "_", "CONDITION", "_", "STARTER"]},
    {"name": "STARTER$string$6", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$6", "_", "PURPOSE", "_", "STATE"]},
    {"name": "STATE$string$1", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"f"}, {"literal":"e"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATE", "symbols": ["STATE$string$1"]},
    {"name": "STATE$string$2", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"-"}, {"literal":"b"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATE", "symbols": ["STATE$string$2"]},
    {"name": "STATE$string$3", "symbols": [{"literal":"e"}, {"literal":"d"}, {"literal":"u"}, {"literal":"c"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATE", "symbols": ["STATE$string$3"]},
    {"name": "DESCR$string$1", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCR", "symbols": ["DESCR$string$1"]},
    {"name": "DESCR$string$2", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"e"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCR", "symbols": ["DESCR$string$2"]},
    {"name": "DESCR$string$3", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"n"}, {"literal":"g"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCR", "symbols": ["DESCR$string$3"]},
    {"name": "DESCR$string$4", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCR", "symbols": ["DESCR$string$4"]},
    {"name": "DESCR$string$5", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCR", "symbols": ["DESCR$string$5"]},
    {"name": "DESCR$string$6", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"t"}, {"literal":"h"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCR", "symbols": ["DESCR$string$6"]},
    {"name": "DESCR$string$7", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"c"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCR", "symbols": ["DESCR$string$7"]},
    {"name": "PURPOSE$string$1", "symbols": [{"literal":"c"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PURPOSE", "symbols": ["PURPOSE$string$1"]},
    {"name": "PURPOSE$string$2", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"w"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PURPOSE", "symbols": ["PURPOSE$string$2"]},
    {"name": "PURPOSE$string$3", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PURPOSE", "symbols": ["PURPOSE$string$3"]},
    {"name": "SEASON$string$1", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$1"]},
    {"name": "SEASON$string$2", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$2"]},
    {"name": "SEASON$string$3", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$3"]},
    {"name": "SEASON$string$4", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"m"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$4"]},
    {"name": "SIGNED$string$1", "symbols": [{"literal":"S"}, {"literal":"i"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SIGNED", "symbols": ["SIGNED$string$1", "_", "ADMIN"]},
    {"name": "ADMIN$string$1", "symbols": [{"literal":"M"}, {"literal":"a"}, {"literal":"r"}, {"literal":"c"}, {"literal":" "}, {"literal":"T"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"L"}, {"literal":"a"}, {"literal":"v"}, {"literal":"i"}, {"literal":"g"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADMIN", "symbols": ["ADMIN$string$1"]},
    {"name": "ADMIN$string$2", "symbols": [{"literal":"P"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"D"}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADMIN", "symbols": ["ADMIN$string$2"]},
    {"name": "ADMIN$string$3", "symbols": [{"literal":"S"}, {"literal":"u"}, {"literal":"s"}, {"literal":"i"}, {"literal":"e"}, {"literal":" "}, {"literal":"B"}, {"literal":"r"}, {"literal":"u"}, {"literal":"b"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}, {"literal":"-"}, {"literal":"C"}, {"literal":"o"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADMIN", "symbols": ["ADMIN$string$3"]},
    {"name": "ADMIN$string$4", "symbols": [{"literal":"M"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":" "}, {"literal":"H"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADMIN", "symbols": ["ADMIN$string$4"]},
    {"name": "_", "symbols": [{"literal":" ","pos":250}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
