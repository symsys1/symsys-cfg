// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["GREET", "_", "SENTENCE", {"literal":".","pos":10}]},
    {"name": "SENTENCE", "symbols": ["WHO", "_", "PROPOSITION", "_", "HASHTAG", "_", "ACTION", "_", "ABVERB", "_", "INTERJECTION", "_", "ADJECTIVE"]},
    {"name": "GREET$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GREET", "symbols": ["GREET$string$1"]},
    {"name": "GREET$string$2", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"w"}, {"literal":"g"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GREET", "symbols": ["GREET$string$2"]},
    {"name": "WHO", "symbols": [{"literal":"I","pos":56}]},
    {"name": "HASHTAG$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}, {"literal":"t"}, {"literal":"a"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HASHTAG", "symbols": ["HASHTAG$string$1"]},
    {"name": "PROPOSITION$string$1", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROPOSITION", "symbols": ["PROPOSITION$string$1"]},
    {"name": "PROPOSITION$string$2", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROPOSITION", "symbols": ["PROPOSITION$string$2"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"i"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4"]},
    {"name": "ACTION$string$5", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$5"]},
    {"name": "ACTION$string$6", "symbols": [{"literal":"g"}, {"literal":"i"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$6"]},
    {"name": "ABVERB$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ABVERB", "symbols": ["ABVERB$string$1", "_", "PEOPLE"]},
    {"name": "ABVERB$string$2", "symbols": [{"literal":"J"}, {"literal":"K"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ABVERB", "symbols": ["ABVERB$string$2", "_", "SENTENCE"]},
    {"name": "INTERJECTION$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$1"]},
    {"name": "INTERJECTION$string$2", "symbols": [{"literal":"a"}, {"literal":"y"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$2"]},
    {"name": "ADJECTIVE$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"l"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$1"]},
    {"name": "ADJECTIVE$string$2", "symbols": [{"literal":"s"}, {"literal":"w"}, {"literal":"a"}, {"literal":"g"}, {"literal":"g"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$2"]},
    {"name": "ADJECTIVE$string$3", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$3"]},
    {"name": "ADJECTIVE$string$4", "symbols": [{"literal":"s"}, {"literal":"w"}, {"literal":"a"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$4"]},
    {"name": "ADJECTIVE$string$5", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"m"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$5"]},
    {"name": "ADJECTIVE$string$6", "symbols": [{"literal":"o"}, {"literal":"f"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$6"]},
    {"name": "ADJECTIVE$string$7", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}, {"literal":"."}, {"literal":" "}, {"literal":"P"}, {"literal":"O"}, {"literal":"P"}, {"literal":" "}, {"literal":"Q"}, {"literal":"U"}, {"literal":"I"}, {"literal":"Z"}, {"literal":" "}, {"literal":"T"}, {"literal":"I"}, {"literal":"M"}, {"literal":"E"}, {"literal":" "}, {"literal":"S"}, {"literal":"H"}, {"literal":"E"}, {"literal":"E"}, {"literal":"E"}, {"literal":"S"}, {"literal":"H"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$7"]},
    {"name": "PEOPLE$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$1"]},
    {"name": "PEOPLE$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$2"]},
    {"name": "PEOPLE$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"c"}, {"literal":"i"}, {"literal":"p"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$3"]},
    {"name": "PEOPLE$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"h"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":"c"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$4"]},
    {"name": "_", "symbols": [{"literal":" ","pos":178}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
