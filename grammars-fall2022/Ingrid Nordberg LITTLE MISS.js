// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"L"}, {"literal":"I"}, {"literal":"T"}, {"literal":"T"}, {"literal":"L"}, {"literal":"E"}, {"literal":" "}, {"literal":"M"}, {"literal":"I"}, {"literal":"S"}, {"literal":"S"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "IDEA"]},
    {"name": "IDEA", "symbols": ["TRAIT"]},
    {"name": "IDEA", "symbols": ["NOUN"]},
    {"name": "IDEA", "symbols": ["ACTION"]},
    {"name": "TRAIT$string$1", "symbols": [{"literal":"P"}, {"literal":"I"}, {"literal":"C"}, {"literal":"K"}, {"literal":"Y"}, {"literal":" "}, {"literal":"E"}, {"literal":"A"}, {"literal":"T"}, {"literal":"E"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TRAIT", "symbols": ["TRAIT$string$1"]},
    {"name": "TRAIT$string$2", "symbols": [{"literal":"O"}, {"literal":"V"}, {"literal":"E"}, {"literal":"R"}, {"literal":"T"}, {"literal":"H"}, {"literal":"I"}, {"literal":"N"}, {"literal":"K"}, {"literal":"E"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TRAIT", "symbols": ["TRAIT$string$2"]},
    {"name": "TRAIT$string$3", "symbols": [{"literal":"D"}, {"literal":"E"}, {"literal":"L"}, {"literal":"U"}, {"literal":"S"}, {"literal":"I"}, {"literal":"O"}, {"literal":"N"}, {"literal":"A"}, {"literal":"L"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TRAIT", "symbols": ["TRAIT$string$3"]},
    {"name": "TRAIT$string$4", "symbols": [{"literal":"V"}, {"literal":"U"}, {"literal":"L"}, {"literal":"N"}, {"literal":"E"}, {"literal":"R"}, {"literal":"A"}, {"literal":"B"}, {"literal":"L"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TRAIT", "symbols": ["TRAIT$string$4"]},
    {"name": "TRAIT$string$5", "symbols": [{"literal":"5"}, {"literal":" "}, {"literal":"F"}, {"literal":"O"}, {"literal":"O"}, {"literal":"T"}, {"literal":" "}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TRAIT", "symbols": ["TRAIT$string$5"]},
    {"name": "TRAIT$string$6", "symbols": [{"literal":"P"}, {"literal":"E"}, {"literal":"O"}, {"literal":"P"}, {"literal":"L"}, {"literal":"E"}, {"literal":" "}, {"literal":"P"}, {"literal":"L"}, {"literal":"E"}, {"literal":"A"}, {"literal":"S"}, {"literal":"E"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TRAIT", "symbols": ["TRAIT$string$6"]},
    {"name": "TRAIT$string$7", "symbols": [{"literal":"A"}, {"literal":"N"}, {"literal":"G"}, {"literal":"R"}, {"literal":"Y"}, {"literal":" "}, {"literal":"B"}, {"literal":"U"}, {"literal":"T"}, {"literal":" "}, {"literal":"A"}, {"literal":"L"}, {"literal":"S"}, {"literal":"O"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TRAIT", "symbols": ["TRAIT$string$7", "_", "TRAIT"]},
    {"name": "TRAIT$string$8", "symbols": [{"literal":"I"}, {"literal":"N"}, {"literal":"D"}, {"literal":"E"}, {"literal":"C"}, {"literal":"I"}, {"literal":"S"}, {"literal":"I"}, {"literal":"V"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TRAIT", "symbols": ["ADV", "_", "TRAIT$string$8"]},
    {"name": "NOUN$string$1", "symbols": [{"literal":"M"}, {"literal":"A"}, {"literal":"I"}, {"literal":"N"}, {"literal":" "}, {"literal":"C"}, {"literal":"H"}, {"literal":"A"}, {"literal":"R"}, {"literal":"A"}, {"literal":"C"}, {"literal":"T"}, {"literal":"E"}, {"literal":"R"}, {"literal":" "}, {"literal":"E"}, {"literal":"N"}, {"literal":"E"}, {"literal":"R"}, {"literal":"G"}, {"literal":"Y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$1"]},
    {"name": "NOUN$string$2", "symbols": [{"literal":"D"}, {"literal":"E"}, {"literal":"P"}, {"literal":"R"}, {"literal":"E"}, {"literal":"S"}, {"literal":"S"}, {"literal":"I"}, {"literal":"O"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$2"]},
    {"name": "NOUN$string$3", "symbols": [{"literal":"M"}, {"literal":"A"}, {"literal":"T"}, {"literal":"C"}, {"literal":"H"}, {"literal":"A"}, {"literal":" "}, {"literal":"L"}, {"literal":"A"}, {"literal":"T"}, {"literal":"T"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$3"]},
    {"name": "NOUN$string$4", "symbols": [{"literal":"A"}, {"literal":"C"}, {"literal":"R"}, {"literal":"Y"}, {"literal":"L"}, {"literal":"I"}, {"literal":"C"}, {"literal":"S"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$4"]},
    {"name": "NOUN$string$5", "symbols": [{"literal":"S"}, {"literal":"U"}, {"literal":"N"}, {"literal":"S"}, {"literal":"C"}, {"literal":"R"}, {"literal":"E"}, {"literal":"E"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$5"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"H"}, {"literal":"A"}, {"literal":"S"}, {"literal":" "}, {"literal":"T"}, {"literal":"O"}, {"literal":"O"}, {"literal":" "}, {"literal":"M"}, {"literal":"U"}, {"literal":"C"}, {"literal":"H"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION$string$2", "symbols": [{"literal":"F"}, {"literal":"O"}, {"literal":"R"}, {"literal":" "}, {"literal":"H"}, {"literal":"E"}, {"literal":"R"}, {"literal":" "}, {"literal":"O"}, {"literal":"W"}, {"literal":"N"}, {"literal":" "}, {"literal":"G"}, {"literal":"O"}, {"literal":"O"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1", "_", "NOUN", "_", "ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"T"}, {"literal":"H"}, {"literal":"I"}, {"literal":"N"}, {"literal":"K"}, {"literal":"S"}, {"literal":" "}, {"literal":"B"}, {"literal":"E"}, {"literal":"I"}, {"literal":"N"}, {"literal":"G"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION$string$4", "symbols": [{"literal":"I"}, {"literal":"S"}, {"literal":" "}, {"literal":"F"}, {"literal":"U"}, {"literal":"N"}, {"literal":"N"}, {"literal":"Y"}, {"literal":" "}, {"literal":"A"}, {"literal":"N"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3", "_", "TRAIT", "_", "ACTION$string$4", "_", "ACTION"]},
    {"name": "ACTION$string$5", "symbols": [{"literal":"C"}, {"literal":"A"}, {"literal":"N"}, {"literal":"'"}, {"literal":"T"}, {"literal":" "}, {"literal":"S"}, {"literal":"T"}, {"literal":"O"}, {"literal":"P"}, {"literal":" "}, {"literal":"O"}, {"literal":"V"}, {"literal":"E"}, {"literal":"R"}, {"literal":"S"}, {"literal":"H"}, {"literal":"A"}, {"literal":"R"}, {"literal":"I"}, {"literal":"N"}, {"literal":"G"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$5"]},
    {"name": "ACTION$string$6", "symbols": [{"literal":"L"}, {"literal":"I"}, {"literal":"K"}, {"literal":"E"}, {"literal":"S"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION$string$7", "symbols": [{"literal":"M"}, {"literal":"E"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$6", "_", "TRAIT", "_", "ACTION$string$7"]},
    {"name": "ACTION$string$8", "symbols": [{"literal":"L"}, {"literal":"I"}, {"literal":"S"}, {"literal":"T"}, {"literal":"E"}, {"literal":"N"}, {"literal":"I"}, {"literal":"N"}, {"literal":"G"}, {"literal":" "}, {"literal":"T"}, {"literal":"O"}, {"literal":" "}, {"literal":"T"}, {"literal":"A"}, {"literal":"Y"}, {"literal":"L"}, {"literal":"O"}, {"literal":"R"}, {"literal":" "}, {"literal":"S"}, {"literal":"W"}, {"literal":"I"}, {"literal":"F"}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$8"]},
    {"name": "_", "symbols": [{"literal":" ","pos":149}]},
    {"name": "ADV$string$1", "symbols": [{"literal":"E"}, {"literal":"X"}, {"literal":"T"}, {"literal":"R"}, {"literal":"E"}, {"literal":"M"}, {"literal":"E"}, {"literal":"L"}, {"literal":"Y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$1"]},
    {"name": "ADV$string$2", "symbols": [{"literal":"F"}, {"literal":"R"}, {"literal":"I"}, {"literal":"G"}, {"literal":"H"}, {"literal":"T"}, {"literal":"F"}, {"literal":"U"}, {"literal":"L"}, {"literal":"L"}, {"literal":"Y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$2"]},
    {"name": "ADV$string$3", "symbols": [{"literal":"P"}, {"literal":"O"}, {"literal":"W"}, {"literal":"E"}, {"literal":"R"}, {"literal":"F"}, {"literal":"U"}, {"literal":"L"}, {"literal":"L"}, {"literal":"Y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$3"]},
    {"name": "ADV$string$4", "symbols": [{"literal":"A"}, {"literal":"L"}, {"literal":"W"}, {"literal":"A"}, {"literal":"Y"}, {"literal":"S"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$4"]},
    {"name": "ADV$string$5", "symbols": [{"literal":"A"}, {"literal":"B"}, {"literal":"N"}, {"literal":"O"}, {"literal":"R"}, {"literal":"M"}, {"literal":"A"}, {"literal":"L"}, {"literal":"L"}, {"literal":"Y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADV", "symbols": ["ADV$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
