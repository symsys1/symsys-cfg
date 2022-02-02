// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "MAIN$string$1", "symbols": [{"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["STATEMENT", "MAIN$string$1"]},
    {"name": "_", "symbols": [{"literal":" ","pos":23}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "QUESTION$string$1", "_", "OBJ"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"P"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"e"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"l"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"a"}, {"literal":"w"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}, {"literal":"?"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "SUB", "_", "QUESTION$string$3"]},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"l"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$5", "symbols": [{"literal":"b"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$4", "_", "OBJ", "_", "QUESTION$string$5", "_", "VERB"]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"P"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "QUESTIONWORD$string$2", "symbols": [{"literal":"F"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$2"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"h"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "_", "VERB", "_", "OBJ", "_", "SENTENCE$string$1", "_", "SENTENCE$string$2", "_", "ADJECTIVES", "_", "SENTENCE$string$3"]},
    {"name": "STATEMENT$string$1", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"r"}, {"literal":"a"}, {"literal":"g"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"a"}, {"literal":"d"}, {"literal":"y"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT", "symbols": ["SUB", "_", "STATEMENT$string$1", "_", "VERB", "_", "STATEMENT$string$2", "_", "CONJUNCTION", "_", "VERB", "_", "STATEMENT$string$3"]},
    {"name": "CONJUNCTION$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONJUNCTION", "symbols": ["CONJUNCTION$string$1"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"l"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"l"}, {"literal":"a"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"S"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"K"}, {"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"m"}, {"literal":"s"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "SUB$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"v"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$5"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"s"}, {"literal":"m"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"c"}, {"literal":"u"}, {"literal":"r"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"y"}, {"literal":"e"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"E"}, {"literal":"x"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"b"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"l"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "ADJECTIVES$string$1", "symbols": [{"literal":"d"}, {"literal":"u"}, {"literal":"t"}, {"literal":"i"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVES", "symbols": ["ADJECTIVES$string$1"]},
    {"name": "ADJECTIVES$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVES", "symbols": ["ADJECTIVES$string$2"]},
    {"name": "ADJECTIVES$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVES", "symbols": ["ADJECTIVES$string$3"]},
    {"name": "ADJECTIVES$string$4", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"g"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVES", "symbols": ["ADJECTIVES$string$4"]},
    {"name": "ADJECTIVES$string$5", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVES", "symbols": ["ADJECTIVES$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
