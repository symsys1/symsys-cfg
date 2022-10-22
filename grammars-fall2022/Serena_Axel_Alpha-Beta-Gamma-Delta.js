// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "SENTENCE", "symbols": ["SENTENCE1"]},
    {"name": "SENTENCE", "symbols": ["SENTENCE2"]},
    {"name": "SENTENCE", "symbols": ["SENTENCE3"]},
    {"name": "SENTENCE", "symbols": ["SENTENCE4"]},
    {"name": "SENTENCE1$string$1", "symbols": [{"literal":"-"}, {"literal":"-"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE1$string$2", "symbols": [{"literal":"-"}, {"literal":"-"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE1", "symbols": ["BROPENING", {"literal":"!","pos":38}, "_", "BRONAME", {"literal":",","pos":44}, "_", "BROPHRASE", "_", "SENTENCE1$string$1", "_", "INJ", "_", "SENTENCE1$string$2", "_", "PREBROWAY", "_", "BROPHRASE"]},
    {"name": "SENTENCE2", "symbols": ["BRONAME", "_", "FRATACTS", "_", "POSTBROWAY"]},
    {"name": "SENTENCE3", "symbols": ["BROPENING", {"literal":"!","pos":90}, "_", "PRON", "_", "PPLACTS", "_", "BRO", "_", "BROACTSOBJ", "_", "POSTBROWAY"]},
    {"name": "SENTENCE4$string$1", "symbols": [{"literal":"j"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE4", "symbols": ["BROPENING", {"literal":"!","pos":118}, "_", "PRON", "_", "SENTENCE4$string$1", "_", "PPLACTS", "_", "BRO", "_", "BROSAID"]},
    {"name": "BROPENING$string$1", "symbols": [{"literal":"B"}, {"literal":"r"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPENING", "symbols": ["BROPENING$string$1"]},
    {"name": "BROPENING$string$2", "symbols": [{"literal":"D"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPENING", "symbols": ["BROPENING$string$2"]},
    {"name": "BROPENING$string$3", "symbols": [{"literal":"N"}, {"literal":"a"}, {"literal":"h"}, {"literal":"h"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPENING", "symbols": ["BROPENING$string$3"]},
    {"name": "BROPENING$string$4", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPENING", "symbols": ["BROPENING$string$4"]},
    {"name": "BROPENING$string$5", "symbols": [{"literal":"B"}, {"literal":"r"}, {"literal":"a"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPENING", "symbols": ["BROPENING$string$5"]},
    {"name": "BROPENING$string$6", "symbols": [{"literal":"D"}, {"literal":"a"}, {"literal":"w"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPENING", "symbols": ["BROPENING$string$6"]},
    {"name": "BROPENING$string$7", "symbols": [{"literal":"F"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPENING", "symbols": ["BROPENING$string$7"]},
    {"name": "BRONAME$string$1", "symbols": [{"literal":"C"}, {"literal":"h"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BRONAME", "symbols": ["BRONAME$string$1"]},
    {"name": "BRONAME$string$2", "symbols": [{"literal":"B"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BRONAME", "symbols": ["BRONAME$string$2"]},
    {"name": "BRONAME$string$3", "symbols": [{"literal":"K"}, {"literal":"y"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BRONAME", "symbols": ["BRONAME$string$3"]},
    {"name": "BRONAME$string$4", "symbols": [{"literal":"J"}, {"literal":"o"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BRONAME", "symbols": ["BRONAME$string$4"]},
    {"name": "BRO", "symbols": ["BROIS", "_", "BRONAME"]},
    {"name": "PRON", "symbols": [{"literal":"I","pos":202}]},
    {"name": "PRON$string$1", "symbols": [{"literal":"H"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRON", "symbols": ["PRON$string$1"]},
    {"name": "PRON$string$2", "symbols": [{"literal":"S"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRON", "symbols": ["PRON$string$2"]},
    {"name": "PRON$string$3", "symbols": [{"literal":"W"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRON", "symbols": ["PRON$string$3"]},
    {"name": "BROACTSOBJ$string$1", "symbols": [{"literal":"p"}, {"literal":"u"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROACTSOBJ", "symbols": ["BROACTSOBJ$string$1", "_", "BRONAME"]},
    {"name": "BROACTSOBJ$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROACTSOBJ", "symbols": ["BROACTSOBJ$string$2", "_", "BRONAME"]},
    {"name": "BROACTSOBJ$string$3", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROACTSOBJ", "symbols": ["BROACTSOBJ$string$3", "_", "BRONAME"]},
    {"name": "BROACTSOBJ$string$4", "symbols": [{"literal":"s"}, {"literal":"n"}, {"literal":"i"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROACTSOBJ", "symbols": ["BROACTSOBJ$string$4", "_", "BRONAME"]},
    {"name": "FRATACTS$string$1", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"u"}, {"literal":"n"}, {"literal":"k"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FRATACTS", "symbols": ["FRATACTS$string$1"]},
    {"name": "FRATACTS$string$2", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FRATACTS", "symbols": ["FRATACTS$string$2"]},
    {"name": "FRATACTS$string$3", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"p"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"u"}, {"literal":"p"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FRATACTS", "symbols": ["FRATACTS$string$3"]},
    {"name": "FRATACTS$string$4", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"s"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":"-"}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FRATACTS", "symbols": ["FRATACTS$string$4"]},
    {"name": "FRATACTS$string$5", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"w"}, {"literal":"o"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FRATACTS", "symbols": ["FRATACTS$string$5"]},
    {"name": "FRATACTS$string$6", "symbols": [{"literal":"s"}, {"literal":"k"}, {"literal":"i"}, {"literal":"p"}, {"literal":"s"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"g"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FRATACTS", "symbols": ["FRATACTS$string$6"]},
    {"name": "FRATACTS", "symbols": ["PREBROWAY", "_", "FRATACTS"]},
    {"name": "BROSAID$string$1", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}, {"literal":","}, {"literal":" "}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROSAID", "symbols": ["BROSAID$string$1", "BROPHRASEQUOTE", {"literal":"'","pos":294}]},
    {"name": "BROSAID$string$2", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":","}, {"literal":" "}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROSAID$string$3", "symbols": [{"literal":","}, {"literal":"'"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROSAID", "symbols": ["BROSAID$string$2", "BROPHRASEQUOTE", "BROSAID$string$3"]},
    {"name": "BROSAID$string$4", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}, {"literal":","}, {"literal":" "}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROSAID$string$5", "symbols": [{"literal":","}, {"literal":"'"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROSAID", "symbols": ["BROSAID$string$4", "BROPHRASEQUOTE", "BROSAID$string$5"]},
    {"name": "PPLACTS$string$1", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PPLACTS", "symbols": ["PPLACTS$string$1"]},
    {"name": "PPLACTS$string$2", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PPLACTS", "symbols": ["PPLACTS$string$2"]},
    {"name": "PPLACTS$string$3", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PPLACTS", "symbols": ["PPLACTS$string$3"]},
    {"name": "INJ$string$1", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"a"}, {"literal":"h"}, {"literal":"h"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INJ", "symbols": ["INJ$string$1"]},
    {"name": "INJ$string$2", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INJ", "symbols": ["INJ$string$2"]},
    {"name": "INJ$string$3", "symbols": [{"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INJ", "symbols": ["INJ$string$3"]},
    {"name": "INJ$string$4", "symbols": [{"literal":"u"}, {"literal":"h"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INJ", "symbols": ["INJ$string$4"]},
    {"name": "INJ$string$5", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INJ", "symbols": ["INJ$string$5"]},
    {"name": "INJ$string$6", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INJ", "symbols": ["INJ$string$6"]},
    {"name": "INJ$string$7", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INJ", "symbols": ["INJ$string$7"]},
    {"name": "INJ$string$8", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"u"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INJ", "symbols": ["INJ$string$8"]},
    {"name": "INJ$string$9", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INJ", "symbols": ["INJ$string$9"]},
    {"name": "BROPHRASE$string$1", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"k"}, {"literal":"i"}, {"literal":"p"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"g"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASE", "symbols": ["BROPHRASE$string$1"]},
    {"name": "BROPHRASE$string$2", "symbols": [{"literal":"T"}, {"literal":"O"}, {"literal":"G"}, {"literal":"A"}, {"literal":" "}, {"literal":"T"}, {"literal":"O"}, {"literal":"G"}, {"literal":"A"}, {"literal":" "}, {"literal":"T"}, {"literal":"O"}, {"literal":"G"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASE", "symbols": ["BROPHRASE$string$2"]},
    {"name": "BROPHRASE$string$3", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"x"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASE", "symbols": ["BROPHRASE$string$3"]},
    {"name": "BROPHRASE$string$4", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"g"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASE", "symbols": ["BROPHRASE$string$4"]},
    {"name": "BROPHRASE$string$5", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASE", "symbols": ["BROPHRASE$string$5"]},
    {"name": "BROPHRASE$string$6", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASE", "symbols": ["BROPHRASE$string$6"]},
    {"name": "BROPHRASE$string$7", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASE", "symbols": ["BROPHRASE$string$7"]},
    {"name": "BROPHRASEQUOTE$string$1", "symbols": [{"literal":"N"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"k"}, {"literal":"i"}, {"literal":"p"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"g"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASEQUOTE", "symbols": ["BROPHRASEQUOTE$string$1"]},
    {"name": "BROPHRASEQUOTE$string$2", "symbols": [{"literal":"T"}, {"literal":"O"}, {"literal":"G"}, {"literal":"A"}, {"literal":" "}, {"literal":"T"}, {"literal":"O"}, {"literal":"G"}, {"literal":"A"}, {"literal":" "}, {"literal":"T"}, {"literal":"O"}, {"literal":"G"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASEQUOTE", "symbols": ["BROPHRASEQUOTE$string$2"]},
    {"name": "BROPHRASEQUOTE$string$3", "symbols": [{"literal":"C"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"x"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASEQUOTE", "symbols": ["BROPHRASEQUOTE$string$3"]},
    {"name": "BROPHRASEQUOTE$string$4", "symbols": [{"literal":"W"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"g"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASEQUOTE", "symbols": ["BROPHRASEQUOTE$string$4"]},
    {"name": "BROPHRASEQUOTE$string$5", "symbols": [{"literal":"D"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASEQUOTE", "symbols": ["BROPHRASEQUOTE$string$5"]},
    {"name": "BROPHRASEQUOTE$string$6", "symbols": [{"literal":"D"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASEQUOTE", "symbols": ["BROPHRASEQUOTE$string$6"]},
    {"name": "BROPHRASEQUOTE$string$7", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":"e"}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROPHRASEQUOTE", "symbols": ["BROPHRASEQUOTE$string$7"]},
    {"name": "BROIS$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"w"}, {"literal":"e"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROIS", "symbols": ["BROIS$string$1"]},
    {"name": "BROIS$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"n"}, {"literal":"o"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROIS", "symbols": ["BROIS$string$2"]},
    {"name": "BROIS$string$3", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROIS", "symbols": ["BROIS$string$3"]},
    {"name": "BROIS$string$4", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"p"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROIS", "symbols": ["BROIS$string$4"]},
    {"name": "BROIS$string$5", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"a"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROIS", "symbols": ["BROIS$string$5"]},
    {"name": "BROIS$string$6", "symbols": [{"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROIS", "symbols": ["BROIS$string$6"]},
    {"name": "BROIS$string$7", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"l"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROIS", "symbols": ["BROIS$string$7"]},
    {"name": "BROIS$string$8", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"m"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BROIS", "symbols": ["BROIS$string$8"]},
    {"name": "PREBROWAY$string$1", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"g"}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREBROWAY", "symbols": ["PREBROWAY$string$1"]},
    {"name": "PREBROWAY$string$2", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREBROWAY", "symbols": ["PREBROWAY$string$2"]},
    {"name": "POSTBROWAY$string$1", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"d"}, {"literal":"r"}, {"literal":"u"}, {"literal":"n"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSTBROWAY", "symbols": ["POSTBROWAY$string$1"]},
    {"name": "POSTBROWAY$string$2", "symbols": [{"literal":"S"}, {"literal":"O"}, {"literal":" "}, {"literal":"L"}, {"literal":"O"}, {"literal":"U"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSTBROWAY", "symbols": ["POSTBROWAY$string$2"]},
    {"name": "POSTBROWAY$string$3", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSTBROWAY", "symbols": ["POSTBROWAY$string$3"]},
    {"name": "POSTBROWAY$string$4", "symbols": [{"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSTBROWAY", "symbols": ["POSTBROWAY$string$4"]},
    {"name": "POSTBROWAY$string$5", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"q"}, {"literal":"u"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSTBROWAY", "symbols": ["POSTBROWAY$string$5"]},
    {"name": "POSTBROWAY$string$6", "symbols": [{"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSTBROWAY", "symbols": ["POSTBROWAY$string$6"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
