// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"D"}, {"literal":"A"}, {"literal":"H"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "ITEM"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "OBJPHRASE", "_", "ACTPHRASE"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"I"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$3", "_", "SUB", "_", "QUESTION$string$4", "_", "ONGOINGACTION"]},
    {"name": "ACTPHRASE", "symbols": ["ACTION", "_", "ONGOINGACTION"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"k"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "OBJPHRASE", "symbols": ["SUB"]},
    {"name": "OBJPHRASE$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJPHRASE", "symbols": ["OBJPHRASE", "_", "OBJPHRASE$string$1", "_", "SUB"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"b"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"R"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "SUB$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"R"}, {"literal":"F"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$5"]},
    {"name": "ONGOINGACTION$string$1", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ONGOINGACTION", "symbols": ["ONGOINGACTION$string$1"]},
    {"name": "ONGOINGACTION$string$2", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ONGOINGACTION", "symbols": ["ONGOINGACTION$string$2"]},
    {"name": "ONGOINGACTION$string$3", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ONGOINGACTION", "symbols": ["ONGOINGACTION$string$3"]},
    {"name": "ONGOINGACTION$string$4", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"i"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ONGOINGACTION", "symbols": ["ONGOINGACTION$string$4"]},
    {"name": "ONGOINGACTION$string$5", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ONGOINGACTION", "symbols": ["ONGOINGACTION$string$5"]},
    {"name": "ONGOINGACTION$string$6", "symbols": [{"literal":"u"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ONGOINGACTION", "symbols": ["ONGOINGACTION$string$6", "_", "ITEM"]},
    {"name": "ITEM$string$1", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEM", "symbols": ["ITEM$string$1"]},
    {"name": "ITEM$string$2", "symbols": [{"literal":"t"}, {"literal":"y"}, {"literal":"l"}, {"literal":"e"}, {"literal":"n"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEM", "symbols": ["ITEM$string$2"]},
    {"name": "ITEM$string$3", "symbols": [{"literal":"k"}, {"literal":"e"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEM", "symbols": ["ITEM$string$3"]},
    {"name": "ITEM$string$4", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEM", "symbols": ["ITEM$string$4"]},
    {"name": "ITEM$string$5", "symbols": [{"literal":"s"}, {"literal":"n"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEM", "symbols": ["ITEM$string$5"]},
    {"name": "ITEM$string$6", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}, {"literal":"i"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEM", "symbols": ["ITEM$string$6"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
