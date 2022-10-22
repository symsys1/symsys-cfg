// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["Victim"]},
    {"name": "MAIN", "symbols": ["Call"]},
    {"name": "_", "symbols": [{"literal":" ","pos":14}]},
    {"name": "Victim$string$1", "symbols": [{"literal":"T"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim$string$2", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim$string$3", "symbols": [{"literal":"v"}, {"literal":"i"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim", "symbols": ["Victim$string$1", "_", "Victim$string$2", "_", "Victim_word", "_", "Victim$string$3", "End"]},
    {"name": "Victim$string$4", "symbols": [{"literal":"T"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim$string$5", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim$string$6", "symbols": [{"literal":"v"}, {"literal":"i"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim", "symbols": ["Victim$string$4", "_", "Victim$string$5", "_", "Victim_word", "_", "Victim$string$6", "End"]},
    {"name": "Victim_word$string$1", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim_word", "symbols": ["Victim_word$string$1"]},
    {"name": "Victim_word$string$2", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"j"}, {"literal":"u"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim_word", "symbols": ["Victim_word$string$2"]},
    {"name": "Victim_word$string$3", "symbols": [{"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim_word", "symbols": ["Victim_word$string$3"]},
    {"name": "Victim_word$string$4", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}, {"literal":"t"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim_word", "symbols": ["Victim_word$string$4"]},
    {"name": "Victim_word$string$5", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim_word", "symbols": ["Victim_word$string$5"]},
    {"name": "Victim_word$string$6", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim_word", "symbols": ["Victim_word$string$6"]},
    {"name": "Victim_word$string$7", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":"y"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim_word", "symbols": ["Victim_word$string$7"]},
    {"name": "Victim_word$string$8", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Victim_word", "symbols": ["Victim_word$string$8"]},
    {"name": "Call", "symbols": ["Need"]},
    {"name": "Call", "symbols": ["Command"]},
    {"name": "Need$string$1", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Need", "symbols": ["Need$string$1", "_", "Sup", "End"]},
    {"name": "Command$string$1", "symbols": [{"literal":"G"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Command", "symbols": ["Command$string$1", "_", "Action", "End"]},
    {"name": "Action$string$1", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Action", "symbols": ["Action$string$1", "_", "Sup"]},
    {"name": "Action$string$2", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Action", "symbols": ["Action$string$2", "_", "Sup"]},
    {"name": "Action$string$3", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Action", "symbols": ["Action$string$3", "_", "Person"]},
    {"name": "Action$string$4", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Action", "symbols": ["Action$string$4", "_", "Person"]},
    {"name": "Sup$string$1", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":"b"}, {"literal":"o"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sup", "symbols": ["Sup$string$1"]},
    {"name": "Sup$string$2", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":"b"}, {"literal":"o"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sup", "symbols": ["Sup$string$2"]},
    {"name": "Sup$string$3", "symbols": [{"literal":"A"}, {"literal":"E"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sup", "symbols": ["Sup$string$3"]},
    {"name": "Sup$string$4", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sup", "symbols": ["Sup$string$4"]},
    {"name": "Sup$string$5", "symbols": [{"literal":"F"}, {"literal":"i"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"A"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"K"}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sup", "symbols": ["Sup$string$5"]},
    {"name": "Sup$string$6", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sup", "symbols": ["Sup", "_", "Sup$string$6", "_", "Sup"]},
    {"name": "Person$string$1", "symbols": [{"literal":"9"}, {"literal":"1"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Person", "symbols": ["Person$string$1"]},
    {"name": "Person$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"e"}, {"literal":"m"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Person", "symbols": ["Person$string$2"]},
    {"name": "Person$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"c"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Person", "symbols": ["Person$string$3"]},
    {"name": "Person$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Person", "symbols": ["Person$string$4"]},
    {"name": "Person$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Person", "symbols": ["Person$string$5"]},
    {"name": "End", "symbols": [{"literal":"!","pos":216}]},
    {"name": "End", "symbols": [{"literal":"!","pos":219}, "_", "Call"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
