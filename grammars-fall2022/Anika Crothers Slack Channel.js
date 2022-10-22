// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["DAHA"]},
    {"name": "MAIN", "symbols": ["DOOR_OPEN"]},
    {"name": "_", "symbols": [{"literal":" ","pos":14}]},
    {"name": "DAHA$string$1", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"h"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAHA", "symbols": ["DAHA$string$1", "_", "OBJ"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"a"}, {"literal":"l"}, {"literal":"y"}, {"literal":"t"}, {"literal":"e"}, {"literal":"/"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"l"}, {"literal":"y"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"h"}, {"literal":"d"}, {"literal":"m"}, {"literal":"i"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"v"}, {"literal":"a"}, {"literal":"c"}, {"literal":"u"}, {"literal":"u"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"m"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"c"}, {"literal":"u"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"3"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"p"}, {"literal":"u"}, {"literal":"s"}, {"literal":"h"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"p"}, {"literal":"2"}, {"literal":" "}, {"literal":"p"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"o"}, {"literal":"b"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"w"}, {"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"T"}, {"literal":"I"}, {"literal":"-"}, {"literal":"8"}, {"literal":"4"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"g"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "OBJ$string$9", "symbols": [{"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ", "_", "OBJ$string$9", "_", "OBJ"]},
    {"name": "DOOR_OPEN", "symbols": ["QUESTION_WORD", "_", "SUB", "PLEASE", "REQUEST", {"literal":"?","pos":86}]},
    {"name": "QUESTION_WORD$string$1", "symbols": [{"literal":"W"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION_WORD", "symbols": ["QUESTION_WORD$string$1"]},
    {"name": "QUESTION_WORD$string$2", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION_WORD", "symbols": ["QUESTION_WORD$string$2"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"R"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "PLEASE$string$1", "symbols": [{"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLEASE", "symbols": ["_", "PLEASE$string$1", "_"]},
    {"name": "PLEASE", "symbols": ["_"]},
    {"name": "REQUEST$string$1", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"v"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"l"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REQUEST", "symbols": ["REQUEST$string$1", "_", "ROOM_NUM"]},
    {"name": "REQUEST$string$2", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REQUEST", "symbols": ["REQUEST$string$2"]},
    {"name": "REQUEST$string$3", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"p"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"l"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REQUEST", "symbols": ["REQUEST$string$3", "_", "ROOM_NUM"]},
    {"name": "REQUEST$string$4", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REQUEST", "symbols": ["REQUEST$string$4", "_", "ROOM_NUM"]},
    {"name": "ROOM_NUM$string$1", "symbols": [{"literal":"3"}, {"literal":"3"}, {"literal":"7"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROOM_NUM", "symbols": ["ROOM_NUM$string$1"]},
    {"name": "ROOM_NUM$string$2", "symbols": [{"literal":"2"}, {"literal":"0"}, {"literal":"7"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROOM_NUM", "symbols": ["ROOM_NUM$string$2"]},
    {"name": "ROOM_NUM$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROOM_NUM", "symbols": ["ROOM_NUM$string$3"]},
    {"name": "ROOM_NUM$string$4", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROOM_NUM", "symbols": ["ROOM_NUM$string$4"]},
    {"name": "ROOM_NUM$string$5", "symbols": [{"literal":"2"}, {"literal":"0"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROOM_NUM", "symbols": ["ROOM_NUM$string$5"]},
    {"name": "ROOM_NUM$string$6", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROOM_NUM", "symbols": ["ROOM_NUM$string$6"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
