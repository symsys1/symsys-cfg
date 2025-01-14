// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "QUESTION$string$1", "_", "OBJ"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "QUESTION$string$2", "_", "OBJ"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$3", "_", "OBJ", "_", "QUESTION$string$4"]},
    {"name": "QUESTION$string$5", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$6", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$5", "_", "THINGS", "_", "QUESTION$string$6", "_", "GERUND"]},
    {"name": "QUESTION$string$7", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "QUESTION$string$7", "_", "SUB", "_", "GERUND"]},
    {"name": "QUESTION$string$8", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "QUESTION$string$8", "_", "OBJ"]},
    {"name": "QUESTION$string$9", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$10", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$9", "_", "OBJ", "_", "QUESTION$string$10"]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "QUESTIONWORD$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$2"]},
    {"name": "QUESTIONWORD$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$3"]},
    {"name": "QUESTIONWORD$string$4", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$4"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "MOD"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"O"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "OBJ", "_", "SENTENCE$string$2"]},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"Y"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$4", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$3", "_", "OBJ", "_", "SENTENCE$string$4"]},
    {"name": "SENTENCE$string$5", "symbols": [{"literal":"D"}, {"literal":"a"}, {"literal":"m"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$6", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$5", "_", "SUB", "_", "SENTENCE$string$6"]},
    {"name": "SENTENCE$string$7", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "SENTENCE$string$7", "_", "OBJ"]},
    {"name": "SENTENCE$string$8", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "SENTENCE$string$8", "_", "OBJ"]},
    {"name": "SENTENCE$string$9", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}, {"literal":" "}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "SENTENCE$string$9", "_", "OBJ"]},
    {"name": "SENTENCE$string$10", "symbols": [{"literal":"Y"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$11", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$10", "_", "OBJ", "_", "SENTENCE$string$11"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"g"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":"n"}, {"literal":"-"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"j"}, {"literal":"o"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":242}]},
    {"name": "SUB$string$3", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"W"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "SUB$string$5", "symbols": [{"literal":"M"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$5"]},
    {"name": "SUB$string$6", "symbols": [{"literal":"B"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$6"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4", "_", "OBJ"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5", "_", "OBJ"]},
    {"name": "VERB$string$6", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$6"]},
    {"name": "VERB$string$7", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$7"]},
    {"name": "VERB$string$8", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$8"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "GERUND$string$5", "symbols": [{"literal":"r"}, {"literal":"u"}, {"literal":"n"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$5"]},
    {"name": "GERUND$string$6", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$6"]},
    {"name": "GERUND$string$7", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$7"]},
    {"name": "GERUND$string$8", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$8"]},
    {"name": "GERUND$string$9", "symbols": [{"literal":"k"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$9"]},
    {"name": "GERUND$string$10", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$10"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "OBJ"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "OBJ"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4", "_", "SENTENCE"]},
    {"name": "MOD$string$5", "symbols": [{"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$5"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"p"}, {"literal":"h"}, {"literal":"y"}, {"literal":"s"}, {"literal":"i"}, {"literal":"c"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"o"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"m"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"o"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"m"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"f"}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "OBJ$string$9", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$9"]},
    {"name": "OBJ$string$10", "symbols": [{"literal":"v"}, {"literal":"o"}, {"literal":"l"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$10"]},
    {"name": "OBJ$string$11", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"d"}, {"literal":"o"}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$11"]},
    {"name": "OBJ$string$12", "symbols": [{"literal":"o"}, {"literal":"f"}, {"literal":"f"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$12"]},
    {"name": "OBJ$string$13", "symbols": [{"literal":"S"}, {"literal":"T"}, {"literal":"L"}, {"literal":"C"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$13"]},
    {"name": "OBJ$string$14", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"M"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"S"}, {"literal":"c"}, {"literal":"h"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$14"]},
    {"name": "OBJ$string$15", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"S"}, {"literal":"c"}, {"literal":"h"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$15"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"i"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "THINGS$string$5", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$5"]},
    {"name": "THINGS$string$6", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$6"]},
    {"name": "THINGS$string$7", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$7"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
