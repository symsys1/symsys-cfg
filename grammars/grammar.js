// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["STATEMENT", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"D"}, {"literal":"A"}, {"literal":"H"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "OBJ"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"A"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":" "}, {"literal":"R"}, {"literal":"A"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"v"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["SITUATION", "_", {"literal":".","pos":36}, "QUESTION$string$2"]},
    {"name": "STATEMENT$string$1", "symbols": [{"literal":"I"}, {"literal":"f"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT$string$2", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"m"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT", "symbols": ["STATEMENT$string$1", "_", "THINGS", {"literal":",","pos":50}, "_", "STATEMENT$string$2", "_", "SITUATION"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":64}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"S"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SITUATION", "symbols": ["SUB", "_", "VERB"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1", "_", "THINGS"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3", "_", "THINGS"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4", "_", "THINGS"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"’"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5", "_", "THINGS"]},
    {"name": "VERB$string$6", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"C"}, {"literal":"O"}, {"literal":"V"}, {"literal":"I"}, {"literal":"D"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$6", "_", "SITUATION"]},
    {"name": "VERB$string$7", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"e"}, {"literal":"w"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$7"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"t"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"p"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"C"}, {"literal":"O"}, {"literal":"V"}, {"literal":"I"}, {"literal":"D"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"w"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"t"}, {"literal":"y"}, {"literal":"l"}, {"literal":"e"}, {"literal":"n"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"k"}, {"literal":"e"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"I"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"p"}, {"literal":"p"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "THINGS$string$5", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
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
