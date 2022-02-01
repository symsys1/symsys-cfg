// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["PHRASE"]},
    {"name": "MAIN", "symbols": ["PHRASE"]},
    {"name": "MAIN", "symbols": ["PHRASE", "END"]},
    {"name": "MAIN", "symbols": ["PHRASE", "END", "END"]},
    {"name": "MAIN", "symbols": ["SENTENCE"]},
    {"name": "MAIN", "symbols": ["SENTENCE"]},
    {"name": "MAIN", "symbols": ["SENTENCE", "END"]},
    {"name": "MAIN", "symbols": ["SENTENCE", "END"]},
    {"name": "MAIN", "symbols": ["SENTENCE", "END"]},
    {"name": "MAIN", "symbols": ["SENTENCE", "END", "END"]},
    {"name": "MAIN", "symbols": ["START", "_", "SENTENCE"]},
    {"name": "MAIN", "symbols": ["START", "_", "SENTENCE"]},
    {"name": "MAIN", "symbols": ["START", "_", "SENTENCE", "END"]},
    {"name": "MAIN", "symbols": ["START", "_", "SENTENCE", "END"]},
    {"name": "MAIN", "symbols": ["START", "_", "SENTENCE", "END", "END"]},
    {"name": "MAIN", "symbols": ["START", "END"]},
    {"name": "_", "symbols": [{"literal":" ","pos":116}]},
    {"name": "PHRASE", "symbols": ["QUOTE"]},
    {"name": "PHRASE$string$1", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE$string$2", "symbols": [{"literal":"f"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["PHRASE$string$1", "_", "SENTENCE", "_", "PHRASE$string$2"]},
    {"name": "PHRASE$string$3", "symbols": [{"literal":"<"}, {"literal":"<"}, {"literal":"<"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["SUB", "_", "PHRASE$string$3", "_", "SUB"]},
    {"name": "PHRASE$string$4", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE$string$5", "symbols": [{"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["PHRASE$string$4", "_", "ADJ", "_", "PHRASE$string$5", "_", "SENTENCE"]},
    {"name": "PHRASE$string$6", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["START", "_", "PHRASE$string$6", "_", "ADJ"]},
    {"name": "QUOTE$string$1", "symbols": [{"literal":"n"}, {"literal":"a"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUOTE", "symbols": ["QUOTE$string$1"]},
    {"name": "QUOTE$string$2", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUOTE", "symbols": ["QUOTE$string$2"]},
    {"name": "QUOTE$string$3", "symbols": [{"literal":"n"}, {"literal":"a"}, {"literal":"u"}, {"literal":"r"}, {"literal":"r"}, {"literal":"r"}, {"literal":"r"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUOTE", "symbols": ["QUOTE$string$3"]},
    {"name": "QUOTE$string$4", "symbols": [{"literal":"o"}, {"literal":"m"}, {"literal":"g"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUOTE", "symbols": ["QUOTE$string$4"]},
    {"name": "END$string$1", "symbols": [{"literal":"L"}, {"literal":"M"}, {"literal":"A"}, {"literal":"O"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$1"]},
    {"name": "END$string$2", "symbols": [{"literal":"n"}, {"literal":"g"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$2"]},
    {"name": "END$string$3", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"e"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["END$string$3"]},
    {"name": "END$string$4", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["END$string$4"]},
    {"name": "END$string$5", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"j"}, {"literal":"k"}, {"literal":" "}, {"literal":"l"}, {"literal":"m"}, {"literal":"a"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["END$string$5"]},
    {"name": "END$string$6", "symbols": [{"literal":"l"}, {"literal":"m"}, {"literal":"a"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$6"]},
    {"name": "END$string$7", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$7"]},
    {"name": "END$string$8", "symbols": [{"literal":"l"}, {"literal":"m"}, {"literal":"a"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$8"]},
    {"name": "END$string$9", "symbols": [{"literal":"d"}, {"literal":"h"}, {"literal":"s"}, {"literal":"a"}, {"literal":"f"}, {"literal":"k"}, {"literal":"j"}, {"literal":"a"}, {"literal":"s"}, {"literal":"g"}, {"literal":"h"}, {"literal":"d"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$9"]},
    {"name": "END$string$10", "symbols": [{"literal":"f"}, {"literal":"j"}, {"literal":"h"}, {"literal":"s"}, {"literal":"d"}, {"literal":"k"}, {"literal":"g"}, {"literal":"h"}, {"literal":"d"}, {"literal":"s"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$10"]},
    {"name": "END$string$11", "symbols": [{"literal":"u"}, {"literal":"w"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$11"]},
    {"name": "END$string$12", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$12"]},
    {"name": "END$string$13", "symbols": [{"literal":"\ud83e"}, {"literal":"\udd7a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$13"]},
    {"name": "END$string$14", "symbols": [{"literal":"\ud83d"}, {"literal":"\udc49"}, {"literal":"\ud83d"}, {"literal":"\udc48"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$14"]},
    {"name": "END$string$15", "symbols": [{"literal":"\ud83d"}, {"literal":"\ude2d"}, {"literal":"\ud83d"}, {"literal":"\ude2d"}, {"literal":"\ud83d"}, {"literal":"\ude2d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$15"]},
    {"name": "END$string$16", "symbols": [{"literal":"\ud83d"}, {"literal":"\ude2d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$16"]},
    {"name": "END$string$17", "symbols": [{"literal":"\ud83d"}, {"literal":"\udc80"}, {"literal":"\ud83d"}, {"literal":"\udc80"}, {"literal":"\ud83d"}, {"literal":"\udc80"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$17"]},
    {"name": "END$string$18", "symbols": [{"literal":"\ud83d"}, {"literal":"\udc80"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$18"]},
    {"name": "END$string$19", "symbols": [{"literal":"\ud83d"}, {"literal":"\udc40"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$19"]},
    {"name": "END$string$20", "symbols": [{"literal":"\ud83d"}, {"literal":"\ude3e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$20"]},
    {"name": "END$string$21", "symbols": [{"literal":"\ud83e"}, {"literal":"\udd70"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$21"]},
    {"name": "END$string$22", "symbols": [{"literal":"\ud83d"}, {"literal":"\ude0e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$22"]},
    {"name": "END$string$23", "symbols": [{"literal":"\ud83c"}, {"literal":"\udf89"}, {"literal":"\ud83c"}, {"literal":"\udf8a"}, {"literal":"\ud83e"}, {"literal":"\udd73"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["_", "END$string$23"]},
    {"name": "START$string$1", "symbols": [{"literal":"n"}, {"literal":"a"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$1"]},
    {"name": "START$string$2", "symbols": [{"literal":"n"}, {"literal":"a"}, {"literal":"u"}, {"literal":"r"}, {"literal":"r"}, {"literal":"r"}, {"literal":"r"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$2"]},
    {"name": "START$string$3", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$3"]},
    {"name": "START$string$4", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$4"]},
    {"name": "START$string$5", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"b"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$5"]},
    {"name": "START$string$6", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$6"]},
    {"name": "START$string$7", "symbols": [{"literal":"u"}, {"literal":"g"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$7"]},
    {"name": "START$string$8", "symbols": [{"literal":"o"}, {"literal":"m"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$8"]},
    {"name": "START$string$9", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}, {"literal":"p"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$9"]},
    {"name": "START$string$10", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"h"}, {"literal":"h"}, {"literal":"p"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$10"]},
    {"name": "START$string$11", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$11"]},
    {"name": "START$string$12", "symbols": [{"literal":"b"}, {"literal":"t"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$12"]},
    {"name": "START$string$13", "symbols": [{"literal":"o"}, {"literal":"k"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$13"]},
    {"name": "START$string$14", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":" "}, {"literal":"+"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$14"]},
    {"name": "START$string$15", "symbols": [{"literal":"i"}, {"literal":"d"}, {"literal":"k"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$15"]},
    {"name": "START$string$16", "symbols": [{"literal":"i"}, {"literal":"d"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$16"]},
    {"name": "START$string$17", "symbols": [{"literal":"h"}, {"literal":"m"}, {"literal":"m"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "START", "symbols": ["START$string$17"]},
    {"name": "SENTENCE", "symbols": ["MOD", "_", "ACTION", "_", "SUB"]},
    {"name": "SENTENCE", "symbols": ["ACTION", "_", "SUB"]},
    {"name": "SUB", "symbols": ["ADJ", "_", "SUB2"]},
    {"name": "SUB", "symbols": ["ADJ", "_", "SUB2"]},
    {"name": "SUB", "symbols": ["ADJ", "_", "SUB2"]},
    {"name": "SUB", "symbols": ["ADJ", "_", "SUB2"]},
    {"name": "SUB", "symbols": ["ADJ", "_", "SUB2"]},
    {"name": "SUB", "symbols": ["ADJ", "_", "SUB2"]},
    {"name": "SUB", "symbols": ["ADJ", "_", "SUB2"]},
    {"name": "SUB", "symbols": ["SUB2"]},
    {"name": "SUB", "symbols": ["SUB2"]},
    {"name": "SUB", "symbols": ["SUB2"]},
    {"name": "SUB", "symbols": ["SUB2"]},
    {"name": "SUB", "symbols": ["SUB2"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"m"}, {"literal":"u"}, {"literal":"t"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "SUB$string$5", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"o"}, {"literal":"c"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$5"]},
    {"name": "SUB$string$6", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$6"]},
    {"name": "SUB2", "symbols": ["SUB3"]},
    {"name": "SUB2", "symbols": ["SUB3"]},
    {"name": "SUB2$string$1", "symbols": [{"literal":"N"}, {"literal":"F"}, {"literal":"T"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$1"]},
    {"name": "SUB2$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$2"]},
    {"name": "SUB2$string$3", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"n"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$3"]},
    {"name": "SUB2$string$4", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"g"}, {"literal":"i"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$4"]},
    {"name": "SUB2$string$5", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$5"]},
    {"name": "SUB2$string$6", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$6"]},
    {"name": "SUB2$string$7", "symbols": [{"literal":"m"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$7"]},
    {"name": "SUB2$string$8", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$8"]},
    {"name": "SUB2$string$9", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"l"}, {"literal":"f"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$9"]},
    {"name": "SUB2$string$10", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$10"]},
    {"name": "SUB2$string$11", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"t"}, {"literal":"t"}, {"literal":"o"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$11"]},
    {"name": "SUB2$string$12", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB2", "symbols": ["SUB2$string$12"]},
    {"name": "SUB3$string$1", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"p"}, {"literal":"i"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB3", "symbols": ["SUB3$string$1"]},
    {"name": "SUB3$string$2", "symbols": [{"literal":"p"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB3", "symbols": ["SUB3$string$2"]},
    {"name": "SUB3$string$3", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"a"}, {"literal":"m"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB3", "symbols": ["SUB3$string$3"]},
    {"name": "SUB3$string$4", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB3", "symbols": ["SUB3$string$4"]},
    {"name": "ADJ", "symbols": ["ADJ2"]},
    {"name": "ADJ", "symbols": ["ADJ2"]},
    {"name": "ADJ", "symbols": ["AMOUNT", "_", "ADJ"]},
    {"name": "ADJ", "symbols": ["ADJ", "_", "ADJ"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"u"}, {"literal":"g"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"y"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"f"}, {"literal":"i"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "ADJ$string$6", "symbols": [{"literal":"g"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$6"]},
    {"name": "ADJ$string$7", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$7"]},
    {"name": "ADJ$string$8", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$8"]},
    {"name": "ADJ$string$9", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$9"]},
    {"name": "ADJ$string$10", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$10"]},
    {"name": "ADJ$string$11", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$11"]},
    {"name": "ADJ$string$12", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"v"}, {"literal":"o"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$12"]},
    {"name": "ADJ2$string$1", "symbols": [{"literal":"p"}, {"literal":"o"}, {"literal":"g"}, {"literal":"g"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ2", "symbols": ["ADJ2$string$1"]},
    {"name": "ADJ2$string$2", "symbols": [{"literal":"p"}, {"literal":"o"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ2", "symbols": ["ADJ2$string$2"]},
    {"name": "ADJ2$string$3", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"s"}, {"literal":"s"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ2", "symbols": ["ADJ2$string$3"]},
    {"name": "ADJ2$string$4", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"r"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ2", "symbols": ["ADJ2$string$4"]},
    {"name": "ADJ2$string$5", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"r"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ2", "symbols": ["ADJ2$string$5"]},
    {"name": "ADJ2$string$6", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"b"}, {"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ2", "symbols": ["ADJ2$string$6"]},
    {"name": "AMOUNT$string$1", "symbols": [{"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AMOUNT", "symbols": ["AMOUNT$string$1"]},
    {"name": "AMOUNT$string$2", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AMOUNT", "symbols": ["AMOUNT$string$2"]},
    {"name": "ACTION", "symbols": [{"literal":"I","pos":711}, "_", "ACTION2"]},
    {"name": "ACTION", "symbols": [{"literal":"I","pos":719}, "_", "ACTION2"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"I"}, {"literal":"'"}, {"literal":"m"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"n"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1", "_", "ACTION2"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2", "_", "ACTION2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3", "_", "ACTION2"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4", "_", "ACTION2"]},
    {"name": "ACTION$string$5", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$5", "_", "ACTION2"]},
    {"name": "ACTION$string$6", "symbols": [{"literal":"I"}, {"literal":"'"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION$string$7", "symbols": [{"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$6", "_", "GERUND", "_", "ACTION$string$7"]},
    {"name": "ACTION$string$8", "symbols": [{"literal":"I"}, {"literal":"'"}, {"literal":"m"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION$string$9", "symbols": [{"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$8", "_", "GERUND", "_", "ACTION$string$9"]},
    {"name": "ACTION", "symbols": [{"literal":"I","pos":790}, "_", "OPINION"]},
    {"name": "ACTION$string$10", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$10", "_", "OPINION"]},
    {"name": "OPINION$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPINION", "symbols": ["OPINION$string$1"]},
    {"name": "OPINION$string$2", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPINION", "symbols": ["OPINION$string$2"]},
    {"name": "OPINION$string$3", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPINION", "symbols": ["OPINION$string$3"]},
    {"name": "OPINION$string$4", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPINION", "symbols": ["OPINION$string$4"]},
    {"name": "OPINION$string$5", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPINION", "symbols": ["OPINION$string$5"]},
    {"name": "ACTION2$string$1", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION2", "symbols": ["ACTION2$string$1"]},
    {"name": "ACTION2$string$2", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"a"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION2", "symbols": ["ACTION2$string$2"]},
    {"name": "ACTION2$string$3", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION2", "symbols": ["ACTION2$string$3"]},
    {"name": "ACTION2$string$4", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION2", "symbols": ["ACTION2$string$4"]},
    {"name": "ACTION2$string$5", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION2", "symbols": ["ACTION2$string$5"]},
    {"name": "ACTION2$string$6", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION2", "symbols": ["ACTION2$string$6"]},
    {"name": "ACTION2$string$7", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION2", "symbols": ["ACTION2$string$7"]},
    {"name": "ACTION2$string$8", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION2", "symbols": ["ACTION2$string$8"]},
    {"name": "ACTION2$string$9", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION2", "symbols": ["ACTION2$string$9"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"t"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"b"}, {"literal":"b"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "GERUND$string$5", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$5"]},
    {"name": "GERUND$string$6", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$6"]},
    {"name": "GERUND$string$7", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$7"]},
    {"name": "GERUND$string$8", "symbols": [{"literal":"u"}, {"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$8"]},
    {"name": "GERUND", "symbols": ["GERUND2"]},
    {"name": "GERUND2$string$1", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND2", "symbols": ["GERUND2$string$1"]},
    {"name": "GERUND2$string$2", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"s"}, {"literal":"s"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND2", "symbols": ["GERUND2$string$2"]},
    {"name": "GERUND2$string$3", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"r"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND2", "symbols": ["GERUND2$string$3"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "SUB"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"o"}, {"literal":"m"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "MOD"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "MOD"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4"]},
    {"name": "MOD$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$5"]},
    {"name": "MOD$string$6", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"I"}, {"literal":"'"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$6", "_", "GERUND"]},
    {"name": "MOD$string$7", "symbols": [{"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$7"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
