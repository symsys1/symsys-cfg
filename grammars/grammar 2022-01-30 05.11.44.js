// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "SENTENCE", "symbols": ["SUB", "VERBPHRASE", "MOD"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"H"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"J"}, {"literal":"e"}, {"literal":"f"}, {"literal":"f"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"p"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"i"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"z"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}, {"literal":" "}, {"literal":"A"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "SUB$string$5", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$5"]},
    {"name": "VERBPHRASE$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$1", "GERUND", {"literal":" ","pos":48}, "OBJ"]},
    {"name": "VERBPHRASE$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$2", "OBJ"]},
    {"name": "VERBPHRASE$string$3", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"n"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$3", "OBJ"]},
    {"name": "VERBPHRASE$string$4", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"j"}, {"literal":"o"}, {"literal":"y"}, {"literal":"s"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$4", "OBJ"]},
    {"name": "VERBPHRASE$string$5", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"b"}, {"literal":"e"}, {"literal":"l"}, {"literal":"s"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$5"]},
    {"name": "VERBPHRASE$string$6", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBPHRASE", "symbols": ["VERBPHRASE$string$6", "OBJ"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"p"}, {"literal":"u"}, {"literal":"r"}, {"literal":"s"}, {"literal":"u"}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "OBJ"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"r"}, {"literal":","}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD$string$4", "symbols": [{"literal":"-"}, {"literal":" "}, {"literal":"u"}, {"literal":"s"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "EPITHET", {"literal":" ","pos":108}, "SUB", "MOD$string$4"]},
    {"name": "MOD$string$5", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$5"]},
    {"name": "MOD$string$6", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$6", "SENTENCE"]},
    {"name": "EPITHET$string$1", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"-"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EPITHET", "symbols": ["EPITHET$string$1"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"u"}, {"literal":"l"}, {"literal":"c"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"k"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"p"}, {"literal":"u"}, {"literal":"b"}, {"literal":"l"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"D"}, {"literal":"e"}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"I"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"p"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"r"}, {"literal":"u"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
