// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["PERSONALENCOURAGEMENT"]},
    {"name": "MAIN", "symbols": ["GENERALENCOURAGEMENT"]},
    {"name": "_", "symbols": [{"literal":" ","pos":14}]},
    {"name": "PERSONALENCOURAGEMENT$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSONALENCOURAGEMENT", "symbols": ["CLASSMEMBER", "_", "PERSONALENCOURAGEMENT$string$1", "_", "PERSONALWORD"]},
    {"name": "GENERALENCOURAGEMENT$string$1", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERALENCOURAGEMENT", "symbols": ["GENERALENCOURAGEMENT$string$1", "_", "GENERALWORDS"]},
    {"name": "CLASSMEMBER$string$1", "symbols": [{"literal":"S"}, {"literal":"u"}, {"literal":"s"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSMEMBER", "symbols": ["CLASSMEMBER$string$1"]},
    {"name": "CLASSMEMBER$string$2", "symbols": [{"literal":"G"}, {"literal":"e"}, {"literal":"o"}, {"literal":"r"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSMEMBER", "symbols": ["CLASSMEMBER$string$2"]},
    {"name": "CLASSMEMBER$string$3", "symbols": [{"literal":"A"}, {"literal":"q"}, {"literal":"i"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSMEMBER", "symbols": ["CLASSMEMBER$string$3"]},
    {"name": "CLASSMEMBER$string$4", "symbols": [{"literal":"J"}, {"literal":"e"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSMEMBER", "symbols": ["CLASSMEMBER$string$4"]},
    {"name": "PERSONALWORD$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSONALWORD", "symbols": ["PERSONALWORD$string$1"]},
    {"name": "PERSONALWORD$string$2", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSONALWORD", "symbols": ["PERSONALWORD$string$2"]},
    {"name": "PERSONALWORD$string$3", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSONALWORD", "symbols": ["PERSONALWORD$string$3"]},
    {"name": "PERSONALWORD$string$4", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"a"}, {"literal":"u"}, {"literal":"t"}, {"literal":"i"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}, {"literal":" "}, {"literal":"-"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSONALWORD", "symbols": ["PERSONALWORD$string$4", "_", "GENERALENCOURAGEMENT"]},
    {"name": "GENERALWORDS$string$1", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"b"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"i"}, {"literal":"v"}, {"literal":"i"}, {"literal":"d"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERALWORDS", "symbols": ["GENERALWORDS$string$1"]},
    {"name": "GENERALWORDS$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"p"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERALWORDS", "symbols": ["GENERALWORDS$string$2"]},
    {"name": "GENERALWORDS$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"a"}, {"literal":"u"}, {"literal":"t"}, {"literal":"i"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERALWORDS", "symbols": ["GENERALWORDS$string$3"]},
    {"name": "GENERALWORDS$string$4", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERALWORDS", "symbols": ["GENERALWORDS$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
