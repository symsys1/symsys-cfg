// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["EXCLAMATION", {"literal":"!","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "OBJ", "_", "VERB2", "_", "SITUATION"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "OBJ", "_", "QUESTION$string$3", "_", "MOD_Q"]},
    {"name": "EXCLAMATION", "symbols": ["SUB", "_", "VERB"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"e"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"A"}, {"literal":"O"}, {"literal":"C"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"S"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":"y"}, {"literal":" "}, {"literal":"J"}, {"literal":"o"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"H"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "SUB$string$5", "symbols": [{"literal":"F"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"N"}, {"literal":"e"}, {"literal":"w"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$5"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1", "_", "SITUATION", "_", "MOD_E"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2", "_", "OBJ"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3", "_", "VERB2", "_", "SITUATION"]},
    {"name": "VERB2$string$1", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$1"]},
    {"name": "VERB2$string$2", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$2"]},
    {"name": "VERB2$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$3"]},
    {"name": "VERB2$string$4", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"p"}, {"literal":"u"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$4"]},
    {"name": "VERB2$string$5", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$5"]},
    {"name": "VERB2$string$6", "symbols": [{"literal":"t"}, {"literal":"w"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$6"]},
    {"name": "VERB2$string$7", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB2", "symbols": ["VERB2$string$7"]},
    {"name": "SITUATION$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$1"]},
    {"name": "SITUATION$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$2"]},
    {"name": "SITUATION$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$3"]},
    {"name": "SITUATION$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"n"}, {"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$4"]},
    {"name": "SITUATION2$string$1", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION2", "symbols": ["SITUATION2$string$1"]},
    {"name": "SITUATION2$string$2", "symbols": [{"literal":"n"}, {"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION2", "symbols": ["SITUATION2$string$2"]},
    {"name": "SITUATION2$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION2", "symbols": ["SITUATION2$string$3"]},
    {"name": "SITUATION2$string$4", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION2", "symbols": ["SITUATION2$string$4"]},
    {"name": "SITUATION2$string$5", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION2", "symbols": ["SITUATION2$string$5"]},
    {"name": "MOD_Q$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD_Q", "symbols": ["MOD_Q$string$1", "_", "THINGS"]},
    {"name": "MOD_Q$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD_Q", "symbols": ["MOD_Q$string$2", "_", "THINGS"]},
    {"name": "MOD_Q$string$3", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD_Q", "symbols": ["MOD_Q$string$3"]},
    {"name": "MOD_E$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD_E", "symbols": ["MOD_E$string$1", "_", "THINGS"]},
    {"name": "MOD_E$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD_E", "symbols": ["MOD_E$string$2", "_", "THINGS"]},
    {"name": "MOD_E$string$3", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD_E", "symbols": ["MOD_E$string$3", "_", "SHOUT"]},
    {"name": "MOD_E$string$4", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD_E", "symbols": ["MOD_E$string$4", "_", "EXCLAMATION"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"F"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"N"}, {"literal":"e"}, {"literal":"w"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"C"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"S"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":"y"}, {"literal":" "}, {"literal":"J"}, {"literal":"o"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":"y"}, {"literal":" "}, {"literal":"K"}, {"literal":"a"}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"A"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"o"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"A"}, {"literal":"N"}, {"literal":"T"}, {"literal":"I"}, {"literal":"F"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"B"}, {"literal":"L"}, {"literal":"M"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "OBJ$string$9", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$9"]},
    {"name": "OBJ$string$10", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"D"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$10"]},
    {"name": "OBJ$string$11", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"F"}, {"literal":"B"}, {"literal":"I"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$11"]},
    {"name": "OBJ$string$12", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"U"}, {"literal":"n"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$12"]},
    {"name": "OBJ$string$13", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$13"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"C"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"l"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"v"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "SHOUT$string$1", "symbols": [{"literal":"S"}, {"literal":"H"}, {"literal":"A"}, {"literal":"M"}, {"literal":"E"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SHOUT", "symbols": ["SHOUT$string$1"]},
    {"name": "SHOUT$string$2", "symbols": [{"literal":"L"}, {"literal":"O"}, {"literal":"S"}, {"literal":"E"}, {"literal":"R"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SHOUT", "symbols": ["SHOUT$string$2"]},
    {"name": "SHOUT$string$3", "symbols": [{"literal":"H"}, {"literal":"O"}, {"literal":"A"}, {"literal":"X"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SHOUT", "symbols": ["SHOUT$string$3"]},
    {"name": "SHOUT$string$4", "symbols": [{"literal":"F"}, {"literal":"A"}, {"literal":"K"}, {"literal":"E"}, {"literal":" "}, {"literal":"N"}, {"literal":"E"}, {"literal":"W"}, {"literal":"S"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SHOUT", "symbols": ["SHOUT$string$4"]},
    {"name": "SHOUT$string$5", "symbols": [{"literal":"F"}, {"literal":"A"}, {"literal":"K"}, {"literal":"E"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SHOUT", "symbols": ["SHOUT$string$5"]},
    {"name": "SHOUT$string$6", "symbols": [{"literal":"W"}, {"literal":"I"}, {"literal":"T"}, {"literal":"C"}, {"literal":"H"}, {"literal":" "}, {"literal":"H"}, {"literal":"U"}, {"literal":"N"}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SHOUT", "symbols": ["SHOUT$string$6"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();