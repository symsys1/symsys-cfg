// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["MISSEDCONNECTIONSENTENCE"]},
    {"name": "MISSEDCONNECTIONSENTENCE$string$1", "symbols": [{"literal":"M"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"n"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MISSEDCONNECTIONSENTENCE", "symbols": ["MISSEDCONNECTIONSENTENCE$string$1", "_", "ENTITY"]},
    {"name": "ENTITY", "symbols": ["SOMEONE"]},
    {"name": "ENTITY", "symbols": ["SOMETHING"]},
    {"name": "SOMEONE$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOMEONE", "symbols": ["SOMEONE$string$1"]},
    {"name": "SOMEONE$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"y"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"o"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOMEONE", "symbols": ["SOMEONE$string$2"]},
    {"name": "SOMEONE$string$3", "symbols": [{"literal":"M"}, {"literal":"T"}, {"literal":"L"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOMEONE", "symbols": ["SOMEONE$string$3"]},
    {"name": "SOMETHING$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"E"}, {"literal":"V"}, {"literal":"G"}, {"literal":"R"}, {"literal":" "}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"v"}, {"literal":"a"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOMETHING", "symbols": ["SOMETHING$string$1"]},
    {"name": "SOMETHING$string$2", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"u"}, {"literal":"b"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"n"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOMETHING", "symbols": ["SOMETHING$string$2"]},
    {"name": "_", "symbols": [{"literal":" ","pos":54}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
