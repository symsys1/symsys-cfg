// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["EXCLAMATION", {"literal":"!","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "EXCLAMATION$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATIONWORD", "_", "EXCLAMATION$string$1", "_", "GERUND"]},
    {"name": "EXCLAMATION$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION$string$3", "symbols": [{"literal":"F"}, {"literal":"x"}, {"literal":"x"}, {"literal":"x"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATIONWORD", "_", "EXCLAMATION$string$2", "_", "EXCLAMATION$string$3"]},
    {"name": "EXCLAMATION$string$4", "symbols": [{"literal":"L"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION$string$5", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$4", "_", "EXCLAMATION$string$5", "_", "OBJ"]},
    {"name": "EXCLAMATION", "symbols": ["VERB1", "_", "OBJ", "_"]},
    {"name": "EXCLAMATION$string$6", "symbols": [{"literal":"C"}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$6", "_", "OBJ", "_", "MOD"]},
    {"name": "EXCLAMATION$string$7", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["EXCLAMATION$string$7"]},
    {"name": "EXCLAMATIONWORD$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATIONWORD", "symbols": ["EXCLAMATIONWORD$string$1"]},
    {"name": "EXCLAMATIONWORD$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATIONWORD", "symbols": ["EXCLAMATIONWORD$string$2"]},
    {"name": "SENTENCE", "symbols": ["SUB1", "_", "VERB1", "_", "MOD"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"O"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "OBJ", "_", "SENTENCE$string$2"]},
    {"name": "SENTENCE", "symbols": ["SUB2", "_", "VERB2", "_", "MOD"]},
    {"name": "SUB1", "symbols": [{"literal":"I","pos":136}]},
    {"name": "SUB1$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB1", "symbols": ["SUB1$string$1"]},
    {"name": "SUB2$string$1", "symbols": [{"literal":"B"}, {"literal":"e"}, {"literal":"r"}, {"literal":"k"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$1"]},
    {"name": "SUB2$string$2", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$2"]},
    {"name": "VERB1$string$1", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB1", "symbols": ["VERB1$string$1"]},
    {"name": "VERB1$string$2", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB1", "symbols": ["VERB1$string$2"]},
    {"name": "VERB1$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB1", "symbols": ["VERB1$string$3"]},
    {"name": "VERB1$string$4", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB1", "symbols": ["VERB1$string$4"]},
    {"name": "VERB1$string$5", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB1", "symbols": ["VERB1$string$5"]},
    {"name": "VERB1$string$6", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB1", "symbols": ["VERB1$string$6"]},
    {"name": "VERB2$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$1"]},
    {"name": "VERB2$string$2", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$2"]},
    {"name": "VERB2$string$3", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$3"]},
    {"name": "VERB2$string$4", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$4"]},
    {"name": "VERB2$string$5", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"y"}, {"literal":"d"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$5"]},
    {"name": "VERB2$string$6", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$6"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"r"}, {"literal":"u"}, {"literal":"n"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"F"}, {"literal":"@"}, {"literal":"#"}, {"literal":"K"}, {"literal":"I"}, {"literal":"N"}, {"literal":"G"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "OBJ"]},
    {"name": "MOD", "symbols": [{"literal":"I","pos":242}, "_", "VERB1", "_", "OBJ"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"r"}, {"literal":"i"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4"]},
    {"name": "MOD$string$5", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$5", "_", "SENTENCE"]},
    {"name": "MOD$string$6", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$6"]},
    {"name": "MOD$string$7", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$7", "_", "EXCLAMATION"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"b"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"M"}, {"literal":"a"}, {"literal":"r"}, {"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"B"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"b"}, {"literal":"o"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"e"}, {"literal":"r"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"T"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "OBJ$string$9", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"g"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"B"}, {"literal":"e"}, {"literal":"r"}, {"literal":"k"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$9"]},
    {"name": "OBJ$string$10", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"o"}, {"literal":"t"}, {"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"B"}, {"literal":"e"}, {"literal":"r"}, {"literal":"k"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$10"]},
    {"name": "OBJ$string$11", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$11"]},
    {"name": "OBJ$string$12", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$12"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
