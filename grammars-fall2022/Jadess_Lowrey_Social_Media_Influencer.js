// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["INFLUENCE", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "INFLUENCE", "symbols": ["TARGETAUD", "_", "PROMOTE", "_", "ITEM"]},
    {"name": "INFLUENCE", "symbols": ["SELF", "_", "ACTION", "_", "ITEM"]},
    {"name": "INFLUENCE", "symbols": ["BESUBTLE", "_", "PROMOTESELF"]},
    {"name": "SELF", "symbols": [{"literal":"I","pos":52}]},
    {"name": "BESUBTLE$string$1", "symbols": [{"literal":"I"}, {"literal":"f"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"e"}, {"literal":"n"}, {"literal":"j"}, {"literal":"o"}, {"literal":"y"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BESUBTLE", "symbols": ["BESUBTLE$string$1"]},
    {"name": "BESUBTLE$string$2", "symbols": [{"literal":"I"}, {"literal":"f"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BESUBTLE", "symbols": ["BESUBTLE$string$2"]},
    {"name": "BESUBTLE$string$3", "symbols": [{"literal":"I"}, {"literal":"f"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}, {"literal":"d"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"s"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BESUBTLE", "symbols": ["BESUBTLE$string$3"]},
    {"name": "PROMOTESELF$string$1", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROMOTESELF", "symbols": ["PROMOTESELF$string$1", "_", "GAINFAME", "_", "ACC"]},
    {"name": "GAINFAME$string$1", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GAINFAME", "symbols": ["GAINFAME$string$1"]},
    {"name": "ACC$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"u"}, {"literal":"b"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACC", "symbols": ["ACC$string$1"]},
    {"name": "ACC$string$2", "symbols": [{"literal":"T"}, {"literal":"i"}, {"literal":"k"}, {"literal":"t"}, {"literal":"o"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACC", "symbols": ["ACC$string$2"]},
    {"name": "ACC$string$3", "symbols": [{"literal":"I"}, {"literal":"n"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACC", "symbols": ["ACC$string$3"]},
    {"name": "ACC$string$4", "symbols": [{"literal":"S"}, {"literal":"n"}, {"literal":"a"}, {"literal":"p"}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACC", "symbols": ["ACC$string$4"]},
    {"name": "ACC$string$5", "symbols": [{"literal":"T"}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACC", "symbols": ["ACC$string$5"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"i"}, {"literal":"m"}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"p"}, {"literal":"u"}, {"literal":"r"}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"T"}, {"literal":"i"}, {"literal":"k"}, {"literal":"T"}, {"literal":"o"}, {"literal":"k"}, {"literal":","}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4"]},
    {"name": "ACTION$string$5", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$5"]},
    {"name": "TARGETAUD$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TARGETAUD", "symbols": ["TARGETAUD$string$1"]},
    {"name": "PROMOTE$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROMOTE", "symbols": ["PROMOTE$string$1"]},
    {"name": "PROMOTE$string$2", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"s"}, {"literal":"e"}, {"literal":"l"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROMOTE", "symbols": ["PROMOTE$string$2"]},
    {"name": "PROMOTE$string$3", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROMOTE", "symbols": ["PROMOTE$string$3"]},
    {"name": "PROMOTE$string$4", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROMOTE", "symbols": ["PROMOTE$string$4"]},
    {"name": "PROMOTE$string$5", "symbols": [{"literal":"a"}, {"literal":"b"}, {"literal":"s"}, {"literal":"o"}, {"literal":"l"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROMOTE", "symbols": ["PROMOTE$string$5"]},
    {"name": "ITEM$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEM", "symbols": ["ITEM$string$1", "_", "CONVINCE", "_", "THING"]},
    {"name": "ITEM$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEM", "symbols": ["ITEM$string$2", "_", "EMPHASIS", "_", "CONVINCE", "_", "THINGS"]},
    {"name": "ITEM$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEM", "symbols": ["ITEM$string$3", "_", "INFLUENCE"]},
    {"name": "EMPHASIS$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIS", "symbols": ["EMPHASIS$string$1"]},
    {"name": "EMPHASIS$string$2", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIS", "symbols": ["EMPHASIS$string$2"]},
    {"name": "EMPHASIS$string$3", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIS", "symbols": ["EMPHASIS$string$3"]},
    {"name": "CONVINCE$string$1", "symbols": [{"literal":"c"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONVINCE", "symbols": ["CONVINCE$string$1"]},
    {"name": "CONVINCE$string$2", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONVINCE", "symbols": ["CONVINCE$string$2"]},
    {"name": "CONVINCE$string$3", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONVINCE", "symbols": ["CONVINCE$string$3"]},
    {"name": "CONVINCE$string$4", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":"r"}, {"literal":"g"}, {"literal":"e"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONVINCE", "symbols": ["CONVINCE$string$4"]},
    {"name": "CONVINCE$string$5", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"a"}, {"literal":"u"}, {"literal":"t"}, {"literal":"i"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONVINCE", "symbols": ["CONVINCE$string$5"]},
    {"name": "CONVINCE$string$6", "symbols": [{"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONVINCE", "symbols": ["CONVINCE$string$6"]},
    {"name": "THING$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"p"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$1"]},
    {"name": "THING$string$2", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$2"]},
    {"name": "THING$string$3", "symbols": [{"literal":"s"}, {"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$3"]},
    {"name": "THING$string$4", "symbols": [{"literal":"M"}, {"literal":"a"}, {"literal":"r"}, {"literal":"c"}, {"literal":" "}, {"literal":"J"}, {"literal":"a"}, {"literal":"c"}, {"literal":"o"}, {"literal":"b"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$4"]},
    {"name": "THING$string$5", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"u"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$5"]},
    {"name": "THING$string$6", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$6"]},
    {"name": "THING$string$7", "symbols": [{"literal":"M"}, {"literal":"i"}, {"literal":"u"}, {"literal":" "}, {"literal":"M"}, {"literal":"i"}, {"literal":"u"}, {"literal":" "}, {"literal":"s"}, {"literal":"k"}, {"literal":"i"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$7"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"A"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"z"}, {"literal":"a"}, {"literal":" "}, {"literal":"j"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"L"}, {"literal":"u"}, {"literal":"l"}, {"literal":"u"}, {"literal":"l"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"g"}, {"literal":"g"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"A"}, {"literal":"i"}, {"literal":"r"}, {"literal":"F"}, {"literal":"o"}, {"literal":"r"}, {"literal":"c"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"n"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"c"}, {"literal":"k"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "THINGS$string$5", "symbols": [{"literal":"U"}, {"literal":"g"}, {"literal":"g"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"c"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
