// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["EXCLAMATION", {"literal":"!","pos":12}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":18}]},
    {"name": "_", "symbols": [{"literal":" ","pos":24}]},
    {"name": "SENTENCE", "symbols": ["INTERJECTION", "_", "SUB", "_", "VERB", "_", "THINGS", "_", "MOD"]},
    {"name": "EXCLAMATION", "symbols": ["INTERJECTION", "_", "SUB", "_", "VERB", "_", "THINGS"]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["INTERJECTION", "_", "QUESTIONWORD", "_", "QUESTION$string$1", "_", "OBJ"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "OBJ", "_", "QUESTION$string$3"]},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$4", "_", "VERB", "_", "THINGS", "_", "MOD"]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "QUESTIONWORD$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$2"]},
    {"name": "INTERJECTION$string$1", "symbols": [{"literal":"O"}, {"literal":"M"}, {"literal":"G"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$1"]},
    {"name": "INTERJECTION$string$2", "symbols": [{"literal":"U"}, {"literal":"g"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$2"]},
    {"name": "INTERJECTION$string$3", "symbols": [{"literal":"W"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$3"]},
    {"name": "INTERJECTION$string$4", "symbols": [{"literal":"H"}, {"literal":"m"}, {"literal":"p"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$4"]},
    {"name": "INTERJECTION$string$5", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"’"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$5"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":148}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"w"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"p"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4", "_", "POSSESSIVEPRONOUN"]},
    {"name": "POSSESSIVEPRONOUN$string$1", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSSESSIVEPRONOUN", "symbols": ["POSSESSIVEPRONOUN$string$1"]},
    {"name": "POSSESSIVEPRONOUN$string$2", "symbols": [{"literal":"J"}, {"literal":"e"}, {"literal":"n"}, {"literal":"n"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}, {"literal":"r"}, {"literal":"’"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSSESSIVEPRONOUN", "symbols": ["POSSESSIVEPRONOUN$string$2"]},
    {"name": "POSSESSIVEPRONOUN$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"w"}, {"literal":" "}, {"literal":"g"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}, {"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSSESSIVEPRONOUN", "symbols": ["POSSESSIVEPRONOUN$string$3"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "POSSESSIVEPRONOUN", "_", "THINGS"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "SENTENCE"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":" "}, {"literal":"s"}, {"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"P"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}, {"literal":"a"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"a"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"c"}, {"literal":"k"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"B"}, {"literal":"r"}, {"literal":"a"}, {"literal":"z"}, {"literal":"i"}, {"literal":"l"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"b"}, {"literal":"i"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"g"}, {"literal":"y"}, {"literal":"m"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"n"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"C"}, {"literal":"h"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
