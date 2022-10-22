// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["MALEMANIPULATOR"]},
    {"name": "_", "symbols": [{"literal":" ","pos":11}]},
    {"name": "MALEMANIPULATOR", "symbols": ["MALEMANIPULATE"]},
    {"name": "MALEMANIPULATOR", "symbols": ["MUBOARDPOSTER"]},
    {"name": "MALEMANIPULATE", "symbols": ["ISOLATE", {"literal":".","pos":29}]},
    {"name": "MALEMANIPULATE", "symbols": ["DISMISSION"]},
    {"name": "ISOLATE", "symbols": ["TARGET", "_", "ACTION", "_", "RECIPIENT"]},
    {"name": "ISOLATE$string$1", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ISOLATE", "symbols": ["TARGET", "_", "ISOLATE$string$1", "_", "STATE"]},
    {"name": "ISOLATE$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ISOLATE", "symbols": ["ISOLATE", "_", "ISOLATE$string$2", "_", "ISOLATE"]},
    {"name": "TARGET$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TARGET", "symbols": ["TARGET$string$1"]},
    {"name": "TARGET$string$2", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TARGET", "symbols": ["TARGET$string$2"]},
    {"name": "TARGET$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TARGET", "symbols": ["TARGET$string$3"]},
    {"name": "TARGET$string$4", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"p"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TARGET", "symbols": ["TARGET$string$4"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"p"}, {"literal":"u"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"l"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"g"}, {"literal":"a"}, {"literal":"s"}, {"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"v"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"z"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4"]},
    {"name": "RECIPIENT$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECIPIENT", "symbols": ["RECIPIENT$string$1"]},
    {"name": "RECIPIENT$string$2", "symbols": [{"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECIPIENT", "symbols": ["RECIPIENT$string$2"]},
    {"name": "RECIPIENT$string$3", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECIPIENT", "symbols": ["RECIPIENT$string$3"]},
    {"name": "RECIPIENT$string$4", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"i"}, {"literal":"t"}, {"literal":"u"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECIPIENT", "symbols": ["RECIPIENT$string$4"]},
    {"name": "STATE$string$1", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"z"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATE", "symbols": ["STATE$string$1"]},
    {"name": "STATE$string$2", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATE", "symbols": ["STATE$string$2"]},
    {"name": "STATE$string$3", "symbols": [{"literal":"["}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":"]"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATE", "symbols": ["STATE$string$3"]},
    {"name": "STATE$string$4", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"o"}, {"literal":" "}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATE", "symbols": ["STATE$string$4"]},
    {"name": "STATE$string$5", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"n"}, {"literal":"o"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATE", "symbols": ["STATE$string$5"]},
    {"name": "STATE$string$6", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"u"}, {"literal":"f"}, {"literal":"f"}, {"literal":"o"}, {"literal":"c"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATE", "symbols": ["STATE$string$6"]},
    {"name": "DISMISSION$string$1", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISMISSION", "symbols": ["DISMISSPHRASE", "DISMISSION$string$1"]},
    {"name": "DISMISSION$string$2", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISMISSION", "symbols": ["DISMISSPHRASE", "DISMISSION$string$2", "MALEMANIPULATE"]},
    {"name": "DISMISSPHRASE$string$1", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISMISSPHRASE", "symbols": ["DISMISSPHRASE$string$1"]},
    {"name": "DISMISSPHRASE$string$2", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"a"}, {"literal":"x"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISMISSPHRASE", "symbols": ["DISMISSPHRASE$string$2"]},
    {"name": "DISMISSPHRASE$string$3", "symbols": [{"literal":"i"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISMISSPHRASE", "symbols": ["DISMISSPHRASE$string$3"]},
    {"name": "DISMISSPHRASE$string$4", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"j"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"j"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISMISSPHRASE", "symbols": ["DISMISSPHRASE$string$4"]},
    {"name": "MUBOARDPOSTER", "symbols": ["MUBOARDRIZZ"]},
    {"name": "MUBOARDPOSTER", "symbols": ["KANYEDEFENDER"]},
    {"name": "MUBOARDRIZZ$string$1", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"n"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"5"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}, {"literal":" "}, {"literal":"b"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDRIZZ", "symbols": ["MUBOARDRIZZ$string$1", "_", "MUBOARDMUSIC", {"literal":"?","pos":206}]},
    {"name": "MUBOARDRIZZ$string$2", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDRIZZ", "symbols": ["MUBOARDRIZZ$string$2", "_", "MUSICACTION", "_", "MUBOARDMUSIC", {"literal":"?","pos":220}]},
    {"name": "MUBOARDRIZZ$string$3", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"b"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDRIZZ$string$4", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDRIZZ", "symbols": ["MUBOARDRIZZ$string$3", "_", "MUSICACTION", "_", "NORMALPPLMUSIC", "MUBOARDRIZZ$string$4", "MUBOARDRIZZ", {"literal":".","pos":238}]},
    {"name": "MUBOARDMUSIC$string$1", "symbols": [{"literal":"T"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"I"}, {"literal":"m"}, {"literal":"p"}, {"literal":"a"}, {"literal":"l"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$1"]},
    {"name": "MUBOARDMUSIC$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"m"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$2"]},
    {"name": "MUBOARDMUSIC$string$3", "symbols": [{"literal":"R"}, {"literal":"a"}, {"literal":"d"}, {"literal":"i"}, {"literal":"o"}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$3"]},
    {"name": "MUBOARDMUSIC$string$4", "symbols": [{"literal":"D"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"G"}, {"literal":"r"}, {"literal":"i"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$4"]},
    {"name": "MUBOARDMUSIC$string$5", "symbols": [{"literal":"D"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"G"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$5"]},
    {"name": "MUBOARDMUSIC$string$6", "symbols": [{"literal":"S"}, {"literal":"l"}, {"literal":"i"}, {"literal":"p"}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$6"]},
    {"name": "MUBOARDMUSIC$string$7", "symbols": [{"literal":"A"}, {"literal":"p"}, {"literal":"h"}, {"literal":"e"}, {"literal":"x"}, {"literal":" "}, {"literal":"T"}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$7"]},
    {"name": "MUBOARDMUSIC$string$8", "symbols": [{"literal":"N"}, {"literal":"e"}, {"literal":"u"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"M"}, {"literal":"i"}, {"literal":"l"}, {"literal":"k"}, {"literal":" "}, {"literal":"H"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$8"]},
    {"name": "MUBOARDMUSIC$string$9", "symbols": [{"literal":"N"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":" "}, {"literal":"D"}, {"literal":"r"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$9"]},
    {"name": "MUBOARDMUSIC$string$10", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"p"}, {"literal":"t"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"B"}, {"literal":"e"}, {"literal":"e"}, {"literal":"f"}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$10"]},
    {"name": "MUBOARDMUSIC$string$11", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":"e"}, {"literal":"z"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$11"]},
    {"name": "MUBOARDMUSIC$string$12", "symbols": [{"literal":"A"}, {"literal":"r"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"M"}, {"literal":"o"}, {"literal":"n"}, {"literal":"k"}, {"literal":"e"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$12"]},
    {"name": "MUBOARDMUSIC$string$13", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"N"}, {"literal":"e"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"h"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$13"]},
    {"name": "MUBOARDMUSIC$string$14", "symbols": [{"literal":"M"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":" "}, {"literal":"B"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$14"]},
    {"name": "MUBOARDMUSIC$string$15", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$15"]},
    {"name": "MUBOARDMUSIC$string$16", "symbols": [{"literal":"M"}, {"literal":"F"}, {"literal":" "}, {"literal":"D"}, {"literal":"O"}, {"literal":"O"}, {"literal":"M"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$16"]},
    {"name": "MUBOARDMUSIC$string$17", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$17"]},
    {"name": "MUBOARDMUSIC$string$18", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$18"]},
    {"name": "MUBOARDMUSIC$string$19", "symbols": [{"literal":"Y"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"L"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$19"]},
    {"name": "MUBOARDMUSIC$string$20", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"S"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"H"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$20"]},
    {"name": "MUBOARDMUSIC$string$21", "symbols": [{"literal":"P"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$21"]},
    {"name": "MUBOARDMUSIC$string$22", "symbols": [{"literal":"T"}, {"literal":"V"}, {"literal":" "}, {"literal":"G"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$22"]},
    {"name": "MUBOARDMUSIC$string$23", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"A"}, {"literal":"n"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$23"]},
    {"name": "MUBOARDMUSIC$string$24", "symbols": [{"literal":"A"}, {"literal":"r"}, {"literal":"c"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"F"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$24"]},
    {"name": "MUBOARDMUSIC$string$25", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"M"}, {"literal":"i"}, {"literal":"c"}, {"literal":"r"}, {"literal":"o"}, {"literal":"p"}, {"literal":"h"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$25"]},
    {"name": "MUBOARDMUSIC$string$26", "symbols": [{"literal":"D"}, {"literal":"a"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$26"]},
    {"name": "MUBOARDMUSIC$string$27", "symbols": [{"literal":"S"}, {"literal":"w"}, {"literal":"a"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$27"]},
    {"name": "MUBOARDMUSIC$string$28", "symbols": [{"literal":"A"}, {"literal":"n"}, {"literal":"d"}, {"literal":"r"}, {"literal":"e"}, {"literal":"w"}, {"literal":" "}, {"literal":"J"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"J"}, {"literal":"i"}, {"literal":"h"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUBOARDMUSIC", "symbols": ["MUBOARDMUSIC$string$28"]},
    {"name": "NORMALPPLMUSIC$string$1", "symbols": [{"literal":"T"}, {"literal":"a"}, {"literal":"y"}, {"literal":"l"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"S"}, {"literal":"w"}, {"literal":"i"}, {"literal":"f"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NORMALPPLMUSIC", "symbols": ["NORMALPPLMUSIC$string$1"]},
    {"name": "NORMALPPLMUSIC$string$2", "symbols": [{"literal":"J"}, {"literal":"o"}, {"literal":"j"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NORMALPPLMUSIC", "symbols": ["NORMALPPLMUSIC$string$2"]},
    {"name": "NORMALPPLMUSIC$string$3", "symbols": [{"literal":"B"}, {"literal":"T"}, {"literal":"S"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NORMALPPLMUSIC", "symbols": ["NORMALPPLMUSIC$string$3"]},
    {"name": "NORMALPPLMUSIC$string$4", "symbols": [{"literal":"B"}, {"literal":"e"}, {"literal":"y"}, {"literal":"o"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NORMALPPLMUSIC", "symbols": ["NORMALPPLMUSIC$string$4"]},
    {"name": "MUSICACTION$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUSICACTION", "symbols": ["MUSICACTION$string$1"]},
    {"name": "MUSICACTION$string$2", "symbols": [{"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUSICACTION", "symbols": ["MUSICACTION$string$2"]},
    {"name": "MUSICACTION$string$3", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"g"}, {"literal":"n"}, {"literal":"i"}, {"literal":"z"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUSICACTION", "symbols": ["MUSICACTION$string$3"]},
    {"name": "MUSICACTION$string$4", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MUSICACTION", "symbols": ["MUSICACTION$string$4"]},
    {"name": "KANYEDEFENDER$string$1", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":","}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"K"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "KANYEDEFENDER", "symbols": ["KANYEDEFENDER$string$1", "_", "OLDKANYE", {"literal":".","pos":400}]},
    {"name": "KANYEDEFENDER$string$2", "symbols": [{"literal":"K"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"e"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"i"}, {"literal":"u"}, {"literal":"s"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "KANYEDEFENDER", "symbols": ["KANYEDEFENDER$string$2", "_", "MALEMANIPULATE"]},
    {"name": "KANYEDEFENDER$string$3", "symbols": [{"literal":"K"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"e"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"j"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"j"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "KANYEDEFENDER", "symbols": ["KANYEDEFENDER$string$3", "_", "MALEMANIPULATE"]},
    {"name": "OLDKANYE$string$1", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"g"}, {"literal":"e"}, {"literal":" "}, {"literal":"D"}, {"literal":"r"}, {"literal":"o"}, {"literal":"p"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OLDKANYE", "symbols": ["OLDKANYE$string$1"]},
    {"name": "OLDKANYE$string$2", "symbols": [{"literal":"G"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}, {"literal":"u"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OLDKANYE", "symbols": ["OLDKANYE$string$2"]},
    {"name": "OLDKANYE$string$3", "symbols": [{"literal":"L"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"R"}, {"literal":"e"}, {"literal":"g"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OLDKANYE", "symbols": ["OLDKANYE$string$3"]},
    {"name": "OLDKANYE$string$4", "symbols": [{"literal":"M"}, {"literal":"B"}, {"literal":"D"}, {"literal":"T"}, {"literal":"F"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OLDKANYE", "symbols": ["OLDKANYE$string$4"]},
    {"name": "OLDKANYE$string$5", "symbols": [{"literal":"8"}, {"literal":"0"}, {"literal":"8"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OLDKANYE", "symbols": ["OLDKANYE$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
