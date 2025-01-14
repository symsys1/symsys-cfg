// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["PREMEDPHRASES", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["INQUIRY", {"literal":"?","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "INQUIRY$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY", "symbols": ["POSEINQUIRY", "_", "INQUIRY$string$1", "_", "DAILY"]},
    {"name": "INQUIRY$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY", "symbols": ["POSEINQUIRY", "_", "INQUIRY$string$2", "_", "DAILY"]},
    {"name": "INQUIRY$string$3", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY", "symbols": ["INQUIRY$string$3", "_", "DAILY", "_"]},
    {"name": "INQUIRY$string$4", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY$string$5", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY", "symbols": ["INQUIRY$string$4", "_", "ITEMS", "_", "INQUIRY$string$5", "_", "INGS"]},
    {"name": "INQUIRY$string$6", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY", "symbols": ["POSEINQUIRY", "_", "INQUIRY$string$6", "_", "TOPIC", "_", "INGS"]},
    {"name": "INQUIRY$string$7", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY", "symbols": ["POSEINQUIRY", "_", "INQUIRY$string$7", "_", "DAILY"]},
    {"name": "INQUIRY$string$8", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY$string$9", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY", "symbols": ["INQUIRY$string$8", "_", "DAILY", "_", "INQUIRY$string$9"]},
    {"name": "POSEINQUIRY$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSEINQUIRY", "symbols": ["POSEINQUIRY$string$1"]},
    {"name": "POSEINQUIRY$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSEINQUIRY", "symbols": ["POSEINQUIRY$string$2"]},
    {"name": "POSEINQUIRY$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSEINQUIRY", "symbols": ["POSEINQUIRY$string$3"]},
    {"name": "POSEINQUIRY$string$4", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSEINQUIRY", "symbols": ["POSEINQUIRY$string$4"]},
    {"name": "PREMEDPHRASES", "symbols": ["TOPIC", "_", "ACTION", "_", "SYNGS"]},
    {"name": "PREMEDPHRASES$string$1", "symbols": [{"literal":"O"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES$string$2", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES", "symbols": ["PREMEDPHRASES$string$1", "_", "DAILY", "_", "PREMEDPHRASES$string$2"]},
    {"name": "PREMEDPHRASES$string$3", "symbols": [{"literal":"Y"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES$string$4", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES", "symbols": ["PREMEDPHRASES$string$3", "_", "DAILY", "_", "PREMEDPHRASES$string$4"]},
    {"name": "PREMEDPHRASES$string$5", "symbols": [{"literal":"D"}, {"literal":"a"}, {"literal":"m"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES$string$6", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES", "symbols": ["PREMEDPHRASES$string$5", "_", "TOPIC", "_", "PREMEDPHRASES$string$6"]},
    {"name": "PREMEDPHRASES$string$7", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES", "symbols": ["TOPIC", "_", "PREMEDPHRASES$string$7", "_", "DAILY"]},
    {"name": "PREMEDPHRASES$string$8", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES", "symbols": ["TOPIC", "_", "PREMEDPHRASES$string$8", "_", "DAILY"]},
    {"name": "PREMEDPHRASES$string$9", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}, {"literal":" "}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES", "symbols": ["TOPIC", "_", "PREMEDPHRASES$string$9", "_", "DAILY"]},
    {"name": "PREMEDPHRASES$string$10", "symbols": [{"literal":"Y"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES$string$11", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES", "symbols": ["PREMEDPHRASES$string$10", "_", "DAILY", "_", "PREMEDPHRASES$string$11"]},
    {"name": "PREMEDPHRASES$string$12", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"m"}, {"literal":"b"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES", "symbols": ["PREMEDPHRASES$string$12", "_", "ITEMS"]},
    {"name": "PREMEDPHRASES$string$13", "symbols": [{"literal":"A"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES", "symbols": ["PREMEDPHRASES$string$13", "_", "ACTION"]},
    {"name": "PREMEDPHRASES$string$14", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES$string$15", "symbols": [{"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREMEDPHRASES", "symbols": ["PREMEDPHRASES$string$14", "_", "DAILY", "_", "PREMEDPHRASES$string$15"]},
    {"name": "TOPIC$string$1", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"g"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$1"]},
    {"name": "TOPIC$string$2", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":"n"}, {"literal":"-"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"j"}, {"literal":"o"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$2"]},
    {"name": "TOPIC", "symbols": [{"literal":"I","pos":268}]},
    {"name": "TOPIC$string$3", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$3"]},
    {"name": "TOPIC$string$4", "symbols": [{"literal":"W"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$4"]},
    {"name": "TOPIC$string$5", "symbols": [{"literal":"M"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$5"]},
    {"name": "TOPIC$string$6", "symbols": [{"literal":"B"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$6"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4", "_", "DAILY"]},
    {"name": "ACTION$string$5", "symbols": [{"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$5", "_", "DAILY"]},
    {"name": "ACTION$string$6", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$6"]},
    {"name": "ACTION$string$7", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$7"]},
    {"name": "ACTION$string$8", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$8"]},
    {"name": "INGS$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGS", "symbols": ["INGS$string$1"]},
    {"name": "INGS$string$2", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGS", "symbols": ["INGS$string$2"]},
    {"name": "INGS$string$3", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGS", "symbols": ["INGS$string$3"]},
    {"name": "INGS$string$4", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGS", "symbols": ["INGS$string$4"]},
    {"name": "INGS$string$5", "symbols": [{"literal":"r"}, {"literal":"u"}, {"literal":"n"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGS", "symbols": ["INGS$string$5"]},
    {"name": "INGS$string$6", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGS", "symbols": ["INGS$string$6"]},
    {"name": "INGS$string$7", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGS", "symbols": ["INGS$string$7"]},
    {"name": "INGS$string$8", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGS", "symbols": ["INGS$string$8"]},
    {"name": "INGS$string$9", "symbols": [{"literal":"k"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGS", "symbols": ["INGS$string$9"]},
    {"name": "INGS$string$10", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGS", "symbols": ["INGS$string$10"]},
    {"name": "SYNGS$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SYNGS", "symbols": ["SYNGS$string$1", "_", "DAILY"]},
    {"name": "SYNGS$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SYNGS", "symbols": ["SYNGS$string$2", "_", "DAILY"]},
    {"name": "SYNGS$string$3", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SYNGS", "symbols": ["SYNGS$string$3", "_", "DAILY"]},
    {"name": "SYNGS$string$4", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SYNGS", "symbols": ["SYNGS$string$4", "_", "PREMEDPHRASES"]},
    {"name": "SYNGS$string$5", "symbols": [{"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SYNGS", "symbols": ["SYNGS$string$5"]},
    {"name": "DAILY$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$1"]},
    {"name": "DAILY$string$2", "symbols": [{"literal":"p"}, {"literal":"h"}, {"literal":"y"}, {"literal":"s"}, {"literal":"i"}, {"literal":"c"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$2"]},
    {"name": "DAILY$string$3", "symbols": [{"literal":"o"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"m"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$3"]},
    {"name": "DAILY$string$4", "symbols": [{"literal":"o"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"m"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$4"]},
    {"name": "DAILY$string$5", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$5"]},
    {"name": "DAILY$string$6", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"f"}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$6"]},
    {"name": "DAILY$string$7", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$7"]},
    {"name": "DAILY$string$8", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$8"]},
    {"name": "DAILY$string$9", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$9"]},
    {"name": "DAILY$string$10", "symbols": [{"literal":"v"}, {"literal":"o"}, {"literal":"l"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$10"]},
    {"name": "DAILY$string$11", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"a"}, {"literal":"d"}, {"literal":"o"}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$11"]},
    {"name": "DAILY$string$12", "symbols": [{"literal":"o"}, {"literal":"f"}, {"literal":"f"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$12"]},
    {"name": "DAILY$string$13", "symbols": [{"literal":"S"}, {"literal":"T"}, {"literal":"L"}, {"literal":"C"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$13"]},
    {"name": "DAILY$string$14", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"M"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"S"}, {"literal":"c"}, {"literal":"h"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$14"]},
    {"name": "DAILY$string$15", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"S"}, {"literal":"c"}, {"literal":"h"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$15"]},
    {"name": "DAILY$string$16", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAILY", "symbols": ["DAILY$string$16"]},
    {"name": "ITEMS$string$1", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEMS", "symbols": ["ITEMS$string$1"]},
    {"name": "ITEMS$string$2", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"i"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEMS", "symbols": ["ITEMS$string$2"]},
    {"name": "ITEMS$string$3", "symbols": [{"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEMS", "symbols": ["ITEMS$string$3"]},
    {"name": "ITEMS$string$4", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEMS", "symbols": ["ITEMS$string$4"]},
    {"name": "ITEMS$string$5", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEMS", "symbols": ["ITEMS$string$5"]},
    {"name": "ITEMS$string$6", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEMS", "symbols": ["ITEMS$string$6"]},
    {"name": "ITEMS$string$7", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ITEMS", "symbols": ["ITEMS$string$7"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
