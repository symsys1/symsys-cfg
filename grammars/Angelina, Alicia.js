// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["STARTER", {"literal":",","pos":6}, "_", "QUESTION", {"literal":"?","pos":12}]},
    {"name": "MAIN", "symbols": ["STARTER", {"literal":",","pos":18}, "_", "SENTENCE", {"literal":".","pos":24}]},
    {"name": "_", "symbols": [{"literal":" ","pos":30}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"w"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "QUESTION$string$1", "_", "ACTION", "_", "TIME"]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "QUESTIONWORD$string$2", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$2"]},
    {"name": "QUESTIONWORD$string$3", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$3"]},
    {"name": "QUESTIONWORD$string$4", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$4"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"m"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"f"}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4"]},
    {"name": "TIME$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$1"]},
    {"name": "TIME$string$2", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$2"]},
    {"name": "TIME$string$3", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$3"]},
    {"name": "TIME$string$4", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$4"]},
    {"name": "STARTER$string$1", "symbols": [{"literal":"O"}, {"literal":"o"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$1"]},
    {"name": "STARTER$string$2", "symbols": [{"literal":"I"}, {"literal":"'"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER$string$3", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$2", "_", "MOD", "_", "STARTER$string$3"]},
    {"name": "STARTER$string$4", "symbols": [{"literal":"I"}, {"literal":"'"}, {"literal":"m"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$4"]},
    {"name": "STARTER$string$5", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$5"]},
    {"name": "STARTER$string$6", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"b"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$6"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1"]},
    {"name": "MOD", "symbols": ["MOD", "_", "MOD"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":151}]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "DESIRE", "_", "VERB", "_", "SUGGESTION"]},
    {"name": "DESIRE$string$1", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESIRE", "symbols": ["DESIRE$string$1"]},
    {"name": "DESIRE$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESIRE", "symbols": ["DESIRE$string$2"]},
    {"name": "DESIRE$string$3", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESIRE", "symbols": ["DESIRE$string$3"]},
    {"name": "DESIRE$string$4", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESIRE", "symbols": ["DESIRE$string$4"]},
    {"name": "DESIRE$string$5", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESIRE", "symbols": ["DESIRE$string$5"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"m"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"c"}, {"literal":"u"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "SUGGESTION$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUGGESTION", "symbols": ["SUGGESTION$string$1", "_", "TIME"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
