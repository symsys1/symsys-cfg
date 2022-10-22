// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QWORD", "_", "QUESTION$string$1", "_", "QOBJ", "_", "QUESTION$string$2", "_", "QUESTION"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$3", "_", "SUB", "_", "VERB", "_", "PLACES"]},
    {"name": "QWORD$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QWORD", "symbols": ["QWORD$string$1"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":62}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"w"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "POSS$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSS", "symbols": ["POSS$string$1"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"n"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"j"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"t"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "QOBJ", "symbols": ["POSS", "_", "OBJ"]},
    {"name": "PLACES$string$1", "symbols": [{"literal":"N"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$1"]},
    {"name": "PLACES$string$2", "symbols": [{"literal":"F"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$2"]},
    {"name": "PLACES$string$3", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"m"}, {"literal":"C"}, {"literal":"h"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$3"]},
    {"name": "PLACES$string$4", "symbols": [{"literal":"Y"}, {"literal":"2"}, {"literal":"E"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$4"]},
    {"name": "PLACES$string$5", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"H"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$5"]},
    {"name": "PLACES$string$6", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"u"}, {"literal":"p"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$6"]},
    {"name": "PLACES$string$7", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"y"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$7"]},
    {"name": "PLACES$string$8", "symbols": [{"literal":"F"}, {"literal":"r"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$8"]},
    {"name": "_", "symbols": [{"literal":" ","pos":166}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
