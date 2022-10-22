// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["EXC", {"literal":",","pos":6}, "_", "MAIN"]},
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":16}]},
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":",","pos":21}, "_", "EXC", {"literal":".","pos":27}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":32}]},
    {"name": "_", "symbols": [{"literal":" ","pos":38}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "VERB"]},
    {"name": "QUESTION", "symbols": ["HELPV", "_", "SUB", "_", "VERB"]},
    {"name": "QUESTION", "symbols": ["HELPV", "_", "SUB", "_", "VERB", "_", "MOD"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "POSD", "_", "THING"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"c"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$3", "_", "DESC", "_", "QUESTION$string$4", "_", "GERUND"]},
    {"name": "QUESTION$string$5", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$6", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["HELPV", "_", "SUB", "_", "VERB", "_", "QUESTION$string$5", "_", "DESC", "_", "QUESTION$string$6", "_", "GERUND"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "HELPV", "_", "VERB"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "HELPV", "_", "VERB", "_", "MOD"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "DESC", "_", "SENTENCE$string$2", "_", "GERUND"]},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE", "_", "SENTENCE$string$3", "_", "SENTENCE"]},
    {"name": "EXC$string$1", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXC", "symbols": ["EXC$string$1"]},
    {"name": "EXC$string$2", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXC", "symbols": ["EXC$string$2"]},
    {"name": "EXC$string$3", "symbols": [{"literal":"a"}, {"literal":"k"}, {"literal":"a"}, {"literal":"a"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXC", "symbols": ["EXC$string$3"]},
    {"name": "EXC$string$4", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"a"}, {"literal":"a"}, {"literal":"k"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXC", "symbols": ["EXC$string$4"]},
    {"name": "EXC$string$5", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"k"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXC", "symbols": ["EXC$string$5"]},
    {"name": "EXC$string$6", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXC", "symbols": ["EXC$string$6"]},
    {"name": "EXC$string$7", "symbols": [{"literal":"d"}, {"literal":"u"}, {"literal":"u"}, {"literal":"u"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXC", "symbols": ["EXC$string$7"]},
    {"name": "POSD$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSD", "symbols": ["POSD$string$1"]},
    {"name": "POSD$string$2", "symbols": [{"literal":"m"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSD", "symbols": ["POSD$string$2"]},
    {"name": "POSD$string$3", "symbols": [{"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSD", "symbols": [{"literal":"a","pos":233}, "_", "DESC", "POSD$string$3"]},
    {"name": "DESC$string$1", "symbols": [{"literal":"d"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESC", "symbols": ["DESC$string$1"]},
    {"name": "DESC$string$2", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"s"}, {"literal":"k"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESC", "symbols": ["DESC$string$2"]},
    {"name": "DESC$string$3", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESC", "symbols": ["DESC$string$3"]},
    {"name": "DESC$string$4", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"f"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESC", "symbols": ["DESC$string$4"]},
    {"name": "DESC$string$5", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"s"}, {"literal":"k"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESC", "symbols": ["DESC$string$5"]},
    {"name": "DESC$string$6", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":"-"}, {"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESC", "symbols": ["DESC$string$6"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":271}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2", "_", "DESC"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3", "_", "ADJ", "_", "DESC"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"a"}, {"literal":"a"}, {"literal":"a"}, {"literal":"z"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"s"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"e"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"g"}, {"literal":"n"}, {"literal":"a"}, {"literal":"r"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"a"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "ADJ$string$6", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"t"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$6"]},
    {"name": "ADJ$string$7", "symbols": [{"literal":"t"}, {"literal":"u"}, {"literal":"b"}, {"literal":"u"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$7"]},
    {"name": "HELPV$string$1", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HELPV", "symbols": ["HELPV$string$1"]},
    {"name": "HELPV$string$2", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HELPV", "symbols": ["HELPV$string$2"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"n"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "VERB$string$6", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"c"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$6"]},
    {"name": "VERB$string$7", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$7"]},
    {"name": "VERB$string$8", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"o"}, {"literal":"p"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$8"]},
    {"name": "VERB$string$9", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB", "_", "VERB$string$9", "_", "VERB"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"u"}, {"literal":"b"}, {"literal":"b"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "GERUND$string$5", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":"b"}, {"literal":"o"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$5"]},
    {"name": "GERUND$string$6", "symbols": [{"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$6"]},
    {"name": "GERUND$string$7", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$7"]},
    {"name": "GERUND$string$8", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND", "_", "GERUND$string$8", "_", "GERUND"]},
    {"name": "GERUND$string$9", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$9", "_", "GERUND"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "THING"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "DESC"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "DESC"]},
    {"name": "THING", "symbols": ["ADJ", "_", "THING"]},
    {"name": "THING$string$1", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"f"}, {"literal":"b"}, {"literal":"o"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$1"]},
    {"name": "THING$string$2", "symbols": [{"literal":"q"}, {"literal":"u"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}, {"literal":"i"}, {"literal":"l"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$2"]},
    {"name": "THING$string$3", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$3"]},
    {"name": "THING$string$4", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$4"]},
    {"name": "THING$string$5", "symbols": [{"literal":"k"}, {"literal":"e"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THING", "symbols": ["THING$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();