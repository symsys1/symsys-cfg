// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["JOKE"]},
    {"name": "MAIN", "symbols": ["JOKE", "_", "MOD"]},
    {"name": "JOKE", "symbols": ["QUESTION", {"literal":"?","pos":20}, "_", "PUNCHLINE", {"literal":".","pos":26}]},
    {"name": "JOKE", "symbols": ["QUESTION", {"literal":"?","pos":32}, "_", "MOD"]},
    {"name": "_", "symbols": [{"literal":" ","pos":42}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "NOUN", "_", "QUESTION$string$2"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"o"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$3", "_", "NOUN", "_", "QUESTION$string$4"]},
    {"name": "QUESTION$string$5", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"d"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$6", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$5", "_", "NOUN", "_", "QUESTION$string$6"]},
    {"name": "QUESTION$string$7", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$8", "symbols": [{"literal":"v"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$7", "_", "NOUN", "_", "QUESTION$string$8"]},
    {"name": "QUESTION$string$9", "symbols": [{"literal":"I"}, {"literal":"f"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$10", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"p"}, {"literal":"i"}, {"literal":"z"}, {"literal":"z"}, {"literal":"a"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"p"}, {"literal":"i"}, {"literal":"z"}, {"literal":"z"}, {"literal":"a"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$9", "_", "NOUN", "_", "QUESTION$string$10"]},
    {"name": "PUNCHLINE$string$1", "symbols": [{"literal":"H"}, {"literal":"e"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"f"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PUNCHLINE", "symbols": ["PUNCHLINE$string$1"]},
    {"name": "PUNCHLINE$string$2", "symbols": [{"literal":"N"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":","}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"z"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"r"}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"p"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PUNCHLINE", "symbols": ["PUNCHLINE$string$2"]},
    {"name": "PUNCHLINE$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"N"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"P"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PUNCHLINE", "symbols": ["PUNCHLINE$string$3"]},
    {"name": "PUNCHLINE$string$4", "symbols": [{"literal":"T"}, {"literal":"o"}, {"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PUNCHLINE", "symbols": ["PUNCHLINE$string$4"]},
    {"name": "PUNCHLINE$string$5", "symbols": [{"literal":"P"}, {"literal":"u"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PUNCHLINE", "symbols": ["PUNCHLINE$string$5"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"W"}, {"literal":"a"}, {"literal":"i"}, {"literal":"t"}, {"literal":"."}, {"literal":"."}, {"literal":"."}, {"literal":"I"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}, {"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "JOKE"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"S"}, {"literal":"o"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}, {"literal":","}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"s"}, {"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "PUNCHLINE", {"literal":".","pos":145}]},
    {"name": "NOUN$string$1", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"p"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$1"]},
    {"name": "NOUN$string$2", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$2"]},
    {"name": "NOUN$string$3", "symbols": [{"literal":"a"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$3"]},
    {"name": "NOUN$string$4", "symbols": [{"literal":"p"}, {"literal":"o"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$4"]},
    {"name": "NOUN$string$5", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$5"]},
    {"name": "NOUN$string$6", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$6"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
