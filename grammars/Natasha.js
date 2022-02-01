// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["EXPLANATION", "_", "REQUEST"]},
    {"name": "MAIN", "symbols": ["REQUEST"]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "EXPLANATION", "symbols": ["SITUATION", "_", "IMPACT", {"literal":".","pos":30}]},
    {"name": "EXPLANATION$string$1", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXPLANATION", "symbols": ["EXPLANATION$string$1", "_", "SITUATION", {"literal":".","pos":40}]},
    {"name": "SITUATION$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$1", "_", "NEGATIVEBEHAVIOR"]},
    {"name": "SITUATION$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION", "_", "SITUATION$string$2", "_", "SITUATION"]},
    {"name": "IMPACT", "symbols": [{"literal":"I","pos":68}, "_", "NEGATIVEIMPACT"]},
    {"name": "IMPACT$string$1", "symbols": [{"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IMPACT", "symbols": ["IMPACT$string$1", "_", "NEGATIVEIMPACT"]},
    {"name": "NEGATIVEBEHAVIOR$string$1", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVEBEHAVIOR", "symbols": ["NEGATIVEBEHAVIOR$string$1"]},
    {"name": "NEGATIVEBEHAVIOR$string$2", "symbols": [{"literal":"i"}, {"literal":"g"}, {"literal":"n"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVEBEHAVIOR", "symbols": ["NEGATIVEBEHAVIOR$string$2", "_", "OBJECT"]},
    {"name": "NEGATIVEBEHAVIOR$string$3", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVEBEHAVIOR", "symbols": ["NEGATIVEBEHAVIOR$string$3", "_", "OBJECT"]},
    {"name": "NEGATIVEBEHAVIOR$string$4", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVEBEHAVIOR", "symbols": ["NEGATIVEBEHAVIOR$string$4", "_", "OBJECT"]},
    {"name": "NEGATIVEBEHAVIOR$string$5", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVEBEHAVIOR", "symbols": ["NEGATIVEBEHAVIOR", "_", "NEGATIVEBEHAVIOR$string$5", "_", "NEGATIVEBEHAVIOR"]},
    {"name": "OBJECT$string$1", "symbols": [{"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$1"]},
    {"name": "OBJECT$string$2", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$2"]},
    {"name": "OBJECT$string$3", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$3"]},
    {"name": "OBJECT$string$4", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"b"}, {"literal":"i"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$4"]},
    {"name": "OBJECT$string$5", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$5"]},
    {"name": "NEGATIVEIMPACT$string$1", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVEIMPACT", "symbols": ["NEGATIVEIMPACT$string$1"]},
    {"name": "NEGATIVEIMPACT$string$2", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVEIMPACT", "symbols": ["NEGATIVEIMPACT$string$2"]},
    {"name": "NEGATIVEIMPACT$string$3", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}, {"literal":" "}, {"literal":"i"}, {"literal":"g"}, {"literal":"n"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVEIMPACT", "symbols": ["NEGATIVEIMPACT$string$3"]},
    {"name": "NEGATIVEIMPACT$string$4", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"i"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVEIMPACT", "symbols": ["NEGATIVEIMPACT$string$4"]},
    {"name": "NEGATIVEIMPACT$string$5", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"p"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEGATIVEIMPACT", "symbols": ["NEGATIVEIMPACT$string$5"]},
    {"name": "REQUEST$string$1", "symbols": [{"literal":"P"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REQUEST", "symbols": ["REQUEST$string$1"]},
    {"name": "REQUEST$string$2", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REQUEST", "symbols": ["REQUEST$string$2"]},
    {"name": "REQUEST$string$3", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REQUEST", "symbols": ["REQUEST$string$3", "_", "POSITIVEBEHAVIOR", {"literal":"?","pos":185}]},
    {"name": "REQUEST$string$4", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REQUEST", "symbols": ["REQUEST$string$4", "_", "NEED", {"literal":"?","pos":195}]},
    {"name": "NEED$string$1", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEED", "symbols": ["NEED$string$1"]},
    {"name": "NEED$string$2", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"h"}, {"literal":"u"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEED", "symbols": ["NEED$string$2"]},
    {"name": "NEED$string$3", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":"p"}, {"literal":"o"}, {"literal":"l"}, {"literal":"o"}, {"literal":"g"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEED", "symbols": ["NEED$string$3"]},
    {"name": "NEED$string$4", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"u"}, {"literal":"p"}, {"literal":"p"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NEED", "symbols": ["NEED$string$4"]},
    {"name": "POSITIVEBEHAVIOR$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSITIVEBEHAVIOR", "symbols": ["POSITIVEBEHAVIOR$string$1"]},
    {"name": "POSITIVEBEHAVIOR$string$2", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSITIVEBEHAVIOR", "symbols": ["POSITIVEBEHAVIOR$string$2"]},
    {"name": "POSITIVEBEHAVIOR$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"u"}, {"literal":"n"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSITIVEBEHAVIOR", "symbols": ["POSITIVEBEHAVIOR$string$3"]},
    {"name": "POSITIVEBEHAVIOR$string$4", "symbols": [{"literal":"a"}, {"literal":"p"}, {"literal":"o"}, {"literal":"l"}, {"literal":"o"}, {"literal":"g"}, {"literal":"i"}, {"literal":"z"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSITIVEBEHAVIOR", "symbols": ["POSITIVEBEHAVIOR$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
