// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["ONELINER", {"literal":"!","pos":6}]},
    {"name": "MAIN", "symbols": ["SAYINGS", {"literal":".","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "ONELINER", "symbols": ["VERB", "_", "PREPOSITION", "_", "MODIFIERS", "_", "OBJECT"]},
    {"name": "ONELINER$string$1", "symbols": [{"literal":" "}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ONELINER", "symbols": ["MODIFIERS", "_", "SUBJECT", "_", "EXTRAVERBS", "ONELINER$string$1", "ONELINER", {"literal":"'","pos":53}]},
    {"name": "SAYINGS$string$1", "symbols": [{"literal":"N"}, {"literal":"E"}, {"literal":"V"}, {"literal":"E"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SAYINGS", "symbols": ["ADJECTIVE", "_", "SUBJECT", {"literal":"S","pos":65}, "_", "CONDITIONALS", "_", "SAYINGS$string$1", "_", "ACTION"]},
    {"name": "MODIFIERS", "symbols": ["ARTICLE", "_", "ADJECTIVE"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"H"}, {"literal":"A"}, {"literal":"V"}, {"literal":"E"}, {"literal":" "}, {"literal":"F"}, {"literal":"U"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"L"}, {"literal":"A"}, {"literal":"U"}, {"literal":"G"}, {"literal":"H"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"G"}, {"literal":"E"}, {"literal":"T"}, {"literal":" "}, {"literal":"B"}, {"literal":"R"}, {"literal":"E"}, {"literal":"A"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"R"}, {"literal":"E"}, {"literal":"S"}, {"literal":"T"}, {"literal":" "}, {"literal":"I"}, {"literal":"N"}, {"literal":" "}, {"literal":"P"}, {"literal":"E"}, {"literal":"A"}, {"literal":"C"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4"]},
    {"name": "ACTION$string$5", "symbols": [{"literal":"L"}, {"literal":"I"}, {"literal":"V"}, {"literal":"E"}, {"literal":" "}, {"literal":"G"}, {"literal":"O"}, {"literal":"O"}, {"literal":"D"}, {"literal":" "}, {"literal":"L"}, {"literal":"I"}, {"literal":"V"}, {"literal":"E"}, {"literal":"S"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$5"]},
    {"name": "CONDITIONALS$string$1", "symbols": [{"literal":"S"}, {"literal":"H"}, {"literal":"O"}, {"literal":"U"}, {"literal":"L"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITIONALS", "symbols": ["CONDITIONALS$string$1"]},
    {"name": "CONDITIONALS$string$2", "symbols": [{"literal":"C"}, {"literal":"A"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITIONALS", "symbols": ["CONDITIONALS$string$2"]},
    {"name": "CONDITIONALS$string$3", "symbols": [{"literal":"C"}, {"literal":"O"}, {"literal":"U"}, {"literal":"L"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITIONALS", "symbols": ["CONDITIONALS$string$3"]},
    {"name": "CONDITIONALS$string$4", "symbols": [{"literal":"S"}, {"literal":"H"}, {"literal":"A"}, {"literal":"L"}, {"literal":"L"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONDITIONALS", "symbols": ["CONDITIONALS$string$4"]},
    {"name": "EXTRAVERBS$string$1", "symbols": [{"literal":"Y"}, {"literal":"E"}, {"literal":"L"}, {"literal":"L"}, {"literal":"E"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXTRAVERBS", "symbols": ["EXTRAVERBS$string$1"]},
    {"name": "EXTRAVERBS$string$2", "symbols": [{"literal":"S"}, {"literal":"A"}, {"literal":"I"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXTRAVERBS", "symbols": ["EXTRAVERBS$string$2"]},
    {"name": "SUBJECT$string$1", "symbols": [{"literal":"B"}, {"literal":"O"}, {"literal":"Y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$1"]},
    {"name": "SUBJECT$string$2", "symbols": [{"literal":"C"}, {"literal":"L"}, {"literal":"O"}, {"literal":"W"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$2"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"L"}, {"literal":"O"}, {"literal":"O"}, {"literal":"K"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"R"}, {"literal":"U"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "PREPOSITION$string$1", "symbols": [{"literal":"A"}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREPOSITION", "symbols": ["PREPOSITION$string$1"]},
    {"name": "PREPOSITION$string$2", "symbols": [{"literal":"A"}, {"literal":"W"}, {"literal":"A"}, {"literal":"Y"}, {"literal":" "}, {"literal":"F"}, {"literal":"R"}, {"literal":"O"}, {"literal":"M"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREPOSITION", "symbols": ["PREPOSITION$string$2"]},
    {"name": "PREPOSITION$string$3", "symbols": [{"literal":"F"}, {"literal":"O"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREPOSITION", "symbols": ["PREPOSITION$string$3"]},
    {"name": "PREPOSITION$string$4", "symbols": [{"literal":"U"}, {"literal":"N"}, {"literal":"D"}, {"literal":"E"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREPOSITION", "symbols": ["PREPOSITION$string$4"]},
    {"name": "OBJECT$string$1", "symbols": [{"literal":"F"}, {"literal":"R"}, {"literal":"I"}, {"literal":"D"}, {"literal":"G"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$1"]},
    {"name": "OBJECT$string$2", "symbols": [{"literal":"B"}, {"literal":"A"}, {"literal":"G"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$2"]},
    {"name": "OBJECT$string$3", "symbols": [{"literal":"B"}, {"literal":"A"}, {"literal":"N"}, {"literal":"K"}, {"literal":" "}, {"literal":"A"}, {"literal":"C"}, {"literal":"C"}, {"literal":"O"}, {"literal":"U"}, {"literal":"N"}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$3"]},
    {"name": "OBJECT$string$4", "symbols": [{"literal":"M"}, {"literal":"A"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$4"]},
    {"name": "OBJECT$string$5", "symbols": [{"literal":"M"}, {"literal":"U"}, {"literal":"N"}, {"literal":"C"}, {"literal":"H"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$5"]},
    {"name": "ADJECTIVE$string$1", "symbols": [{"literal":"S"}, {"literal":"T"}, {"literal":"A"}, {"literal":"N"}, {"literal":"K"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$1"]},
    {"name": "ADJECTIVE$string$2", "symbols": [{"literal":"C"}, {"literal":"R"}, {"literal":"U"}, {"literal":"S"}, {"literal":"T"}, {"literal":"Y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$2"]},
    {"name": "ADJECTIVE$string$3", "symbols": [{"literal":"J"}, {"literal":"U"}, {"literal":"I"}, {"literal":"C"}, {"literal":"Y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$3"]},
    {"name": "ADJECTIVE$string$4", "symbols": [{"literal":"B"}, {"literal":"R"}, {"literal":"O"}, {"literal":"K"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$4"]},
    {"name": "ADJECTIVE$string$5", "symbols": [{"literal":"P"}, {"literal":"E"}, {"literal":"N"}, {"literal":"N"}, {"literal":"Y"}, {"literal":"W"}, {"literal":"I"}, {"literal":"S"}, {"literal":"E"}, {"literal":"-"}, {"literal":"L"}, {"literal":"O"}, {"literal":"O"}, {"literal":"K"}, {"literal":"I"}, {"literal":"N"}, {"literal":"G"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$5"]},
    {"name": "ADJECTIVE$string$6", "symbols": [{"literal":"C"}, {"literal":"R"}, {"literal":"I"}, {"literal":"M"}, {"literal":"I"}, {"literal":"N"}, {"literal":"A"}, {"literal":"L"}, {"literal":"-"}, {"literal":"L"}, {"literal":"O"}, {"literal":"O"}, {"literal":"K"}, {"literal":"I"}, {"literal":"N"}, {"literal":"G"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$6"]},
    {"name": "ADJECTIVE$string$7", "symbols": [{"literal":"L"}, {"literal":"I"}, {"literal":"T"}, {"literal":"T"}, {"literal":"L"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$7"]},
    {"name": "ADJECTIVE$string$8", "symbols": [{"literal":"S"}, {"literal":"T"}, {"literal":"U"}, {"literal":"P"}, {"literal":"I"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$8"]},
    {"name": "ARTICLE$string$1", "symbols": [{"literal":"T"}, {"literal":"H"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTICLE", "symbols": ["ARTICLE$string$1"]},
    {"name": "ARTICLE$string$2", "symbols": [{"literal":"T"}, {"literal":"H"}, {"literal":"A"}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTICLE", "symbols": ["ARTICLE$string$2"]},
    {"name": "ARTICLE$string$3", "symbols": [{"literal":"T"}, {"literal":"H"}, {"literal":"I"}, {"literal":"S"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTICLE", "symbols": ["ARTICLE$string$3"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();