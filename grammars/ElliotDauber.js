// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUOTE", {"literal":".","pos":12}]},
    {"name": "MAIN", "symbols": ["EXCLAMATION", {"literal":"!","pos":18}]},
    {"name": "_", "symbols": [{"literal":" ","pos":24}]},
    {"name": "SENTENCE", "symbols": ["SUBVERB", "_", "OBJ"]},
    {"name": "EXCLAMATION$string$1", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION$string$2", "symbols": [{"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$1", "ADJ", "_", "OBJ_PLURAL", "EXCLAMATION$string$2"]},
    {"name": "QUOTE", "symbols": ["SUB", "_", "QUOTE_ACTION", "_", "SENTENCE"]},
    {"name": "QUOTE$string$1", "symbols": [{"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"\""}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUOTE", "symbols": ["SUB", "QUOTE$string$1", "SENTENCE", {"literal":"\"","pos":72}]},
    {"name": "QUOTE_ACTION$string$1", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUOTE_ACTION", "symbols": ["QUOTE_ACTION$string$1"]},
    {"name": "QUOTE_ACTION$string$2", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUOTE_ACTION", "symbols": ["QUOTE_ACTION$string$2"]},
    {"name": "QUOTE_ACTION$string$3", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUOTE_ACTION", "symbols": ["QUOTE_ACTION$string$3"]},
    {"name": "SUB", "symbols": ["SUB_SINGULAR"]},
    {"name": "SUB", "symbols": ["SUB_PLURAL"]},
    {"name": "SUBVERB", "symbols": ["SUB_SINGULAR", "_", "VERB_SINGULAR"]},
    {"name": "SUBVERB", "symbols": ["SUB_PLURAL", "_", "VERB_PLURAL"]},
    {"name": "SUB_SINGULAR$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"w"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB_SINGULAR", "symbols": ["SUB_SINGULAR$string$1"]},
    {"name": "SUB_SINGULAR$string$2", "symbols": [{"literal":"A"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"f"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB_SINGULAR", "symbols": ["SUB_SINGULAR$string$2"]},
    {"name": "SUB_SINGULAR", "symbols": ["PERSON"]},
    {"name": "SUB_PLURAL$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB_PLURAL", "symbols": ["SUB_PLURAL$string$1"]},
    {"name": "SUB_PLURAL$string$2", "symbols": [{"literal":"w"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB_PLURAL", "symbols": ["SUB_PLURAL$string$2"]},
    {"name": "SUB_PLURAL", "symbols": [{"literal":"I","pos":142}]},
    {"name": "PERSON$string$1", "symbols": [{"literal":"C"}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"H"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"C"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSON", "symbols": ["PERSON$string$1"]},
    {"name": "PERSON$string$2", "symbols": [{"literal":"N"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"y"}, {"literal":" "}, {"literal":"P"}, {"literal":"e"}, {"literal":"l"}, {"literal":"o"}, {"literal":"s"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSON", "symbols": ["PERSON$string$2"]},
    {"name": "PERSON$string$3", "symbols": [{"literal":"S"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":"y"}, {"literal":" "}, {"literal":"J"}, {"literal":"o"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSON", "symbols": ["PERSON$string$3"]},
    {"name": "PERSON$string$4", "symbols": [{"literal":"K"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSON", "symbols": ["PERSON$string$4"]},
    {"name": "VERB_SINGULAR", "symbols": ["VERB_PLURAL", {"literal":"s","pos":168}]},
    {"name": "VERB_PLURAL$string$1", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"i"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB_PLURAL", "symbols": ["VERB_PLURAL$string$1"]},
    {"name": "VERB_PLURAL$string$2", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"p"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB_PLURAL", "symbols": ["VERB_PLURAL$string$2"]},
    {"name": "VERB_PLURAL$string$3", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB_PLURAL", "symbols": ["VERB_PLURAL$string$3"]},
    {"name": "VERB_PLURAL$string$4", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB_PLURAL", "symbols": ["VERB_PLURAL$string$4"]},
    {"name": "VERB_PLURAL$string$5", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB_PLURAL", "symbols": ["VERB_PLURAL$string$5"]},
    {"name": "VERB_PLURAL$string$6", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB_PLURAL", "symbols": ["VERB_PLURAL$string$6"]},
    {"name": "OBJ", "symbols": ["OBJ_PLURAL"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1", "_", "OBJ_SINGULAR"]},
    {"name": "OBJ_PLURAL$string$1", "symbols": [{"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_PLURAL", "symbols": ["OBJ_PLURAL", "OBJ_PLURAL$string$1", "OBJ_PLURAL"]},
    {"name": "OBJ_PLURAL", "symbols": ["PERSON"]},
    {"name": "OBJ_PLURAL$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"v"}, {"literal":"a"}, {"literal":"c"}, {"literal":"c"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_PLURAL", "symbols": ["OBJ_PLURAL$string$2"]},
    {"name": "OBJ_PLURAL$string$3", "symbols": [{"literal":"F"}, {"literal":"o"}, {"literal":"x"}, {"literal":" "}, {"literal":"N"}, {"literal":"e"}, {"literal":"w"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_PLURAL", "symbols": ["OBJ_PLURAL$string$3"]},
    {"name": "OBJ_PLURAL$string$4", "symbols": [{"literal":"I"}, {"literal":"Q"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_PLURAL", "symbols": ["OBJ_PLURAL$string$4"]},
    {"name": "OBJ_PLURAL$string$5", "symbols": [{"literal":"A"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"f"}, {"literal":"l"}, {"literal":"a"}, {"literal":"g"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_PLURAL", "symbols": ["OBJ_PLURAL$string$5"]},
    {"name": "OBJ_PLURAL$string$6", "symbols": [{"literal":"p"}, {"literal":"o"}, {"literal":"l"}, {"literal":"i"}, {"literal":"c"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_PLURAL", "symbols": ["OBJ_PLURAL$string$6"]},
    {"name": "OBJ_PLURAL$string$7", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_PLURAL", "symbols": ["OBJ_PLURAL$string$7"]},
    {"name": "OBJ_PLURAL$string$8", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"o"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_PLURAL", "symbols": ["OBJ_PLURAL$string$8"]},
    {"name": "OBJ_PLURAL$string$9", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"i"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_PLURAL", "symbols": ["OBJ_PLURAL$string$9"]},
    {"name": "OBJ_SINGULAR$string$1", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_SINGULAR", "symbols": ["OBJ_SINGULAR$string$1"]},
    {"name": "OBJ_SINGULAR$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"v"}, {"literal":"a"}, {"literal":"c"}, {"literal":"c"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_SINGULAR", "symbols": ["OBJ_SINGULAR$string$2"]},
    {"name": "OBJ_SINGULAR$string$3", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_SINGULAR", "symbols": ["OBJ_SINGULAR$string$3"]},
    {"name": "OBJ_SINGULAR$string$4", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_SINGULAR", "symbols": ["OBJ_SINGULAR$string$4"]},
    {"name": "OBJ_SINGULAR$string$5", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"H"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_SINGULAR", "symbols": ["OBJ_SINGULAR$string$5"]},
    {"name": "OBJ_SINGULAR$string$6", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ_SINGULAR", "symbols": ["OBJ_SINGULAR$string$6"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"h"}, {"literal":"u"}, {"literal":"u"}, {"literal":"u"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"r"}, {"literal":"r"}, {"literal":"u"}, {"literal":"p"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"i"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"n"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "ADJ$string$6", "symbols": [{"literal":"B"}, {"literal":"I"}, {"literal":"G"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$6"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
