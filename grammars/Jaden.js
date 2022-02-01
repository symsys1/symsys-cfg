// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "Main", "symbols": ["DIRECTION", {"literal":".","pos":6}]},
    {"name": "Main", "symbols": ["QUERY", {"literal":"?","pos":12}]},
    {"name": "DIRECTION", "symbols": ["PROMPT", "_", "OBJ", "_", "MOD"]},
    {"name": "DIRECTION", "symbols": ["EXCLAMATIONWORD"]},
    {"name": "DIRECTION$string$1", "symbols": [{"literal":"L"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DIRECTION", "symbols": ["DIRECTION$string$1", "_", "BODYPART"]},
    {"name": "QUERY$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUERY", "symbols": ["QUERY$string$1", "_", "OBJ"]},
    {"name": "QUERY$string$2", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUERY", "symbols": ["QUERY$string$2", "_", "INGWORD", "_", "OBJ"]},
    {"name": "_", "symbols": [{"literal":" ","pos":66}]},
    {"name": "PROMPT$string$1", "symbols": [{"literal":"D"}, {"literal":"r"}, {"literal":"a"}, {"literal":"w"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"p"}, {"literal":"i"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROMPT", "symbols": ["PROMPT$string$1"]},
    {"name": "PROMPT$string$2", "symbols": [{"literal":"R"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"m"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROMPT", "symbols": ["PROMPT$string$2"]},
    {"name": "PROMPT$string$3", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROMPT", "symbols": ["EXCLAMATIONWORD", {"literal":"!","pos":82}, "_", "PROMPT$string$3"]},
    {"name": "INGWORD$string$1", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGWORD", "symbols": ["INGWORD$string$1"]},
    {"name": "INGWORD$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGWORD", "symbols": ["INGWORD$string$2"]},
    {"name": "INGWORD$string$3", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGWORD", "symbols": ["INGWORD$string$3"]},
    {"name": "INGWORD$string$4", "symbols": [{"literal":"g"}, {"literal":"i"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGWORD", "symbols": ["INGWORD$string$4"]},
    {"name": "INGWORD$string$5", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"u"}, {"literal":"n"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGWORD", "symbols": ["INGWORD$string$5"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"e"}, {"literal":"x"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"e"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"u"}, {"literal":"d"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "OBJ$string$9", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$9"]},
    {"name": "BODYPART$string$1", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODYPART", "symbols": ["BODYPART$string$1"]},
    {"name": "BODYPART$string$2", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODYPART", "symbols": ["BODYPART$string$2"]},
    {"name": "BODYPART$string$3", "symbols": [{"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODYPART", "symbols": ["BODYPART$string$3"]},
    {"name": "BODYPART$string$4", "symbols": [{"literal":"e"}, {"literal":"y"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODYPART", "symbols": ["BODYPART$string$4"]},
    {"name": "BODYPART$string$5", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"f"}, {"literal":"t"}, {"literal":" "}, {"literal":"k"}, {"literal":"n"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODYPART", "symbols": ["BODYPART$string$5"]},
    {"name": "BODYPART$string$6", "symbols": [{"literal":"k"}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"c"}, {"literal":"a"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODYPART", "symbols": ["BODYPART$string$6"]},
    {"name": "EXCLAMATIONWORD$string$1", "symbols": [{"literal":"B"}, {"literal":"r"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATIONWORD", "symbols": ["EXCLAMATIONWORD$string$1"]},
    {"name": "EXCLAMATIONWORD$string$2", "symbols": [{"literal":"F"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATIONWORD", "symbols": ["EXCLAMATIONWORD$string$2"]},
    {"name": "EXCLAMATIONWORD$string$3", "symbols": [{"literal":"M"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"o"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATIONWORD", "symbols": ["EXCLAMATIONWORD$string$3"]},
    {"name": "EXCLAMATIONWORD$string$4", "symbols": [{"literal":"B"}, {"literal":"r"}, {"literal":"a"}, {"literal":"v"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATIONWORD", "symbols": ["EXCLAMATIONWORD$string$4"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "BODYPART"]},
    {"name": "MOD", "symbols": [{"literal":" ","pos":204}]},
    {"name": "MOD$string$2", "symbols": [{"literal":"."}, {"literal":" "}, {"literal":"N"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"!"}, {"literal":" "}, {"literal":"T"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "DIRECTION"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"."}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "DIRECTION"]}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
