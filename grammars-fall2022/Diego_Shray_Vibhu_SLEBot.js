// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":",","pos":7}, "_", "VALIDATION", {"literal":".","pos":13}]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":";"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE", "SENTENCE$string$1", "SENTENCE"]},
    {"name": "SENTENCE", "symbols": ["TEXT", "_", "SLADJECTIVEPHRASE"]},
    {"name": "SENTENCE", "symbols": ["SLWORD", "_", "SLADJECTIVEPHRASE"]},
    {"name": "TEXT$string$1", "symbols": [{"literal":"P"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"o"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"R"}, {"literal":"e"}, {"literal":"p"}, {"literal":"u"}, {"literal":"b"}, {"literal":"l"}, {"literal":"i"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$1"]},
    {"name": "TEXT$string$2", "symbols": [{"literal":"A"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$2"]},
    {"name": "TEXT$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"O"}, {"literal":"d"}, {"literal":"y"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$3"]},
    {"name": "TEXT$string$4", "symbols": [{"literal":"D"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"("}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"e"}, {"literal":"t"}, {"literal":")"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"I"}, {"literal":"n"}, {"literal":"f"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$4"]},
    {"name": "TEXT$string$5", "symbols": [{"literal":"E"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"d"}, {"literal":"u"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"G"}, {"literal":"i"}, {"literal":"l"}, {"literal":"g"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$5"]},
    {"name": "TEXT$string$6", "symbols": [{"literal":"R"}, {"literal":"O"}, {"literal":"B"}, {"literal":" "}, {"literal":"R"}, {"literal":"E"}, {"literal":"I"}, {"literal":"C"}, {"literal":"H"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$6"]},
    {"name": "TEXT$string$7", "symbols": [{"literal":"S"}, {"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"h"}, {"literal":"o"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"e"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$7"]},
    {"name": "TEXT$string$8", "symbols": [{"literal":"P"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"o"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"C"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$8"]},
    {"name": "TEXT$string$9", "symbols": [{"literal":"A"}, {"literal":"u"}, {"literal":"g"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"C"}, {"literal":"o"}, {"literal":"n"}, {"literal":"f"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$9"]},
    {"name": "TEXT$string$10", "symbols": [{"literal":"B"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"N"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$10"]},
    {"name": "TEXT$string$11", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"S"}, {"literal":"e"}, {"literal":"x"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$11"]},
    {"name": "TEXT$string$12", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"K"}, {"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$12"]},
    {"name": "TEXT$string$13", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"y"}, {"literal":"m"}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"i"}, {"literal":"u"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXT", "symbols": ["TEXT$string$13"]},
    {"name": "SLADJECTIVEPHRASE", "symbols": ["SLADJECTIVE"]},
    {"name": "SLADJECTIVEPHRASE", "symbols": ["MOD", "_", "SLWORD", "_", "SLADJECTIVE"]},
    {"name": "SLADJECTIVE$string$1", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$1"]},
    {"name": "SLADJECTIVE$string$2", "symbols": [{"literal":"k"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$2"]},
    {"name": "SLADJECTIVE$string$3", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$3"]},
    {"name": "SLADJECTIVE$string$4", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"y"}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$4"]},
    {"name": "SLADJECTIVE$string$5", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$5"]},
    {"name": "SLADJECTIVE$string$6", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"l"}, {"literal":"f"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$6"]},
    {"name": "SLADJECTIVE$string$7", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$7"]},
    {"name": "SLADJECTIVE$string$8", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"e"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$8"]},
    {"name": "SLADJECTIVE$string$9", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$9"]},
    {"name": "SLADJECTIVE$string$10", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"a"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$10"]},
    {"name": "SLADJECTIVE$string$11", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$11"]},
    {"name": "SLADJECTIVE$string$12", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$12"]},
    {"name": "SLADJECTIVE$string$13", "symbols": [{"literal":"p"}, {"literal":"u"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"S"}, {"literal":"L"}, {"literal":"E"}, {"literal":"e"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLADJECTIVE", "symbols": ["SLADJECTIVE$string$13"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"a"}, {"literal":"f"}, {"literal":"f"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3"]},
    {"name": "SLWORD$string$1", "symbols": [{"literal":"S"}, {"literal":"L"}, {"literal":"E"}, {"literal":"c"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLWORD", "symbols": ["SLWORD$string$1"]},
    {"name": "SLWORD$string$2", "symbols": [{"literal":"S"}, {"literal":"L"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLWORD", "symbols": ["SLWORD$string$2"]},
    {"name": "SLWORD$string$3", "symbols": [{"literal":"S"}, {"literal":"L"}, {"literal":"E"}, {"literal":"o"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLWORD", "symbols": ["SLWORD$string$3"]},
    {"name": "SLWORD$string$4", "symbols": [{"literal":"S"}, {"literal":"L"}, {"literal":"E"}, {"literal":"u"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":" "}, {"literal":"S"}, {"literal":"a"}, {"literal":"l"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLWORD", "symbols": ["SLWORD$string$4"]},
    {"name": "SLWORD$string$5", "symbols": [{"literal":"S"}, {"literal":"L"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLWORD", "symbols": ["SLWORD$string$5"]},
    {"name": "SLWORD$string$6", "symbols": [{"literal":"S"}, {"literal":"L"}, {"literal":"E"}, {"literal":"c"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLWORD", "symbols": ["SLWORD$string$6"]},
    {"name": "VALIDATION$string$1", "symbols": [{"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":" "}, {"literal":"g"}, {"literal":"u"}, {"literal":"y"}, {"literal":"s"}, {"literal":"?"}, {"literal":"?"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VALIDATION", "symbols": ["VALIDATION$string$1"]},
    {"name": "VALIDATION$string$2", "symbols": [{"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"?"}, {"literal":" "}, {"literal":"R"}, {"literal":"I"}, {"literal":"G"}, {"literal":"H"}, {"literal":"T"}, {"literal":"?"}, {"literal":"?"}, {"literal":"?"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VALIDATION", "symbols": ["VALIDATION$string$2"]},
    {"name": "VALIDATION$string$3", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"?"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VALIDATION", "symbols": ["VALIDATION$string$3"]},
    {"name": "VALIDATION$string$4", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"d"}, {"literal":"k"}, {"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VALIDATION", "symbols": ["VALIDATION$string$4"]},
    {"name": "VALIDATION$string$5", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VALIDATION", "symbols": ["VALIDATION$string$5"]},
    {"name": "_", "symbols": [{"literal":" ","pos":232}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
