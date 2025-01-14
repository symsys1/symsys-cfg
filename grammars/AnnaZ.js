// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN$string$1", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["BOOKTITLE", {"literal":":","pos":6}, "_", "SENTENCE", {"literal":".","pos":12}, "_", "SECONDSENTENCE", "MAIN$string$1"]},
    {"name": "_", "symbols": [{"literal":" ","pos":24}]},
    {"name": "BOOKTITLE$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOKTITLE$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"I"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOKTITLE", "symbols": ["BOOKTITLE$string$1", "_", "TITLE", "_", "BOOKTITLE$string$2"]},
    {"name": "BOOKTITLE$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOKTITLE", "symbols": ["BOOKTITLE$string$3", "_", "TITLE", "_", {"literal":"I","pos":50}, "_", "VERBED"]},
    {"name": "BOOKTITLE$string$4", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOKTITLE", "symbols": ["BOOKTITLE$string$4", "_", "VERB", "_", {"literal":"a","pos":66}, "_", "TITLE"]},
    {"name": "BOOKTITLE$string$5", "symbols": [{"literal":"N"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOKTITLE", "symbols": ["BOOKTITLE$string$5", "_", "VERB", "_", {"literal":"a","pos":82}, "_", "TITLE", "_"]},
    {"name": "BOOKTITLE$string$6", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOKTITLE", "symbols": ["TITLE", "_", "BOOKTITLE$string$6", "_", "NDESCRIPTOR"]},
    {"name": "BOOKTITLE$string$7", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOKTITLE", "symbols": ["TITLE", "_", "BOOKTITLE$string$7", "_", "NDESCRIPTOR"]},
    {"name": "BOOKTITLE$string$8", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOKTITLE", "symbols": ["BOOKTITLE$string$8", "_", "NDESCRIPTOR", "_", "THINGS"]},
    {"name": "BOOKTITLE$string$9", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOKTITLE$string$10", "symbols": [{"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BOOKTITLE", "symbols": ["BOOKTITLE$string$9", "_", "TITLE", "BOOKTITLE$string$10", "_", "THINGS"]},
    {"name": "PREPPHRASE$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREPPHRASE$string$2", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREPPHRASE$string$3", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PREPPHRASE", "symbols": ["PREPPHRASE$string$1", "_", "CHARACTER", {"literal":",","pos":150}, "_", "TITLE", "_", "PREPPHRASE$string$2", "_", "LOCATION", "PREPPHRASE$string$3", "_", "CHARACTER"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["_", "PREPPHRASE", {"literal":",","pos":178}, "_", "SENTENCE$string$1", "_", "SITUATION"]},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"l"}, {"literal":"e"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["_", "PREPPHRASE", {"literal":",","pos":194}, "_", "SENTENCE$string$2"]},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"g"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"i"}, {"literal":"m"}, {"literal":"p"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"p"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["_", "PREPPHRASE", "_", "SENTENCE$string$3"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "VERBED$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBED", "symbols": ["VERBED$string$1"]},
    {"name": "VERBED$string$2", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBED", "symbols": ["VERBED$string$2"]},
    {"name": "VERBED$string$3", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBED", "symbols": ["VERBED$string$3"]},
    {"name": "VERBED$string$4", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":"u"}, {"literal":"c"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBED", "symbols": ["VERBED$string$4"]},
    {"name": "VERBED$string$5", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERBED", "symbols": ["VERBED$string$5"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"p"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"i"}, {"literal":"r"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "ADJ$string$6", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":"-"}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$6"]},
    {"name": "ADJ$string$7", "symbols": [{"literal":"a"}, {"literal":"m"}, {"literal":"b"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$7"]},
    {"name": "ADJ$string$8", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":"a"}, {"literal":"h"}, {"literal":"o"}, {"literal":"l"}, {"literal":"i"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$8"]},
    {"name": "ADJ$string$9", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"u"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$9"]},
    {"name": "ADJ$string$10", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"d"}, {"literal":"u"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"C"}, {"literal":"a"}, {"literal":"l"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$10"]},
    {"name": "TITLE$string$1", "symbols": [{"literal":"L"}, {"literal":"a"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$1"]},
    {"name": "TITLE$string$2", "symbols": [{"literal":"S"}, {"literal":"c"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$2"]},
    {"name": "TITLE$string$3", "symbols": [{"literal":"P"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$3"]},
    {"name": "TITLE$string$4", "symbols": [{"literal":"D"}, {"literal":"u"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$4"]},
    {"name": "TITLE$string$5", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$5"]},
    {"name": "TITLE$string$6", "symbols": [{"literal":"D"}, {"literal":"e"}, {"literal":"v"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$6"]},
    {"name": "TITLE$string$7", "symbols": [{"literal":"R"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$7"]},
    {"name": "TITLE$string$8", "symbols": [{"literal":"D"}, {"literal":"u"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$8"]},
    {"name": "TITLE$string$9", "symbols": [{"literal":"V"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}, {"literal":" "}, {"literal":"P"}, {"literal":"r"}, {"literal":"o"}, {"literal":"v"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$9"]},
    {"name": "TITLE$string$10", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$10"]},
    {"name": "TITLE$string$11", "symbols": [{"literal":"F"}, {"literal":"u"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"o"}, {"literal":"g"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"E"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"o"}, {"literal":"y"}, {"literal":"e"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$11"]},
    {"name": "TITLE$string$12", "symbols": [{"literal":"R"}, {"literal":"o"}, {"literal":"b"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"B"}, {"literal":"a"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$12"]},
    {"name": "TITLE$string$13", "symbols": [{"literal":"R"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$13"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"h"}, {"literal":"y"}, {"literal":"p"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "THINGS$string$5", "symbols": [{"literal":"2"}, {"literal":"0"}, {"literal":"-"}, {"literal":"u"}, {"literal":"n"}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"d"}, {"literal":"u"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$5"]},
    {"name": "THINGS$string$6", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$6"]},
    {"name": "ROLE$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROLE", "symbols": ["ROLE$string$1"]},
    {"name": "ROLE$string$2", "symbols": [{"literal":"h"}, {"literal":"u"}, {"literal":"s"}, {"literal":"b"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROLE", "symbols": ["ROLE$string$2"]},
    {"name": "ROLE$string$3", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROLE", "symbols": ["ROLE$string$3"]},
    {"name": "ROLE$string$4", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROLE", "symbols": ["ROLE$string$4"]},
    {"name": "ROLE$string$5", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROLE", "symbols": ["ROLE$string$5"]},
    {"name": "NDESCRIPTOR$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NDESCRIPTOR", "symbols": ["NDESCRIPTOR$string$1"]},
    {"name": "NDESCRIPTOR$string$2", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NDESCRIPTOR", "symbols": ["NDESCRIPTOR$string$2"]},
    {"name": "NDESCRIPTOR$string$3", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NDESCRIPTOR", "symbols": ["NDESCRIPTOR$string$3"]},
    {"name": "NDESCRIPTOR$string$4", "symbols": [{"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NDESCRIPTOR", "symbols": ["NDESCRIPTOR$string$4"]},
    {"name": "NDESCRIPTOR$string$5", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NDESCRIPTOR", "symbols": ["NDESCRIPTOR$string$5"]},
    {"name": "NDESCRIPTOR$string$6", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NDESCRIPTOR", "symbols": ["NDESCRIPTOR$string$6"]},
    {"name": "CHARACTER$string$1", "symbols": [{"literal":"L"}, {"literal":"e"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHARACTER", "symbols": ["CHARACTER$string$1"]},
    {"name": "CHARACTER$string$2", "symbols": [{"literal":"J"}, {"literal":"a"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHARACTER", "symbols": ["CHARACTER$string$2"]},
    {"name": "CHARACTER$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"e"}, {"literal":"x"}, {"literal":"-"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHARACTER", "symbols": ["CHARACTER$string$3", "ROLE"]},
    {"name": "CHARACTER$string$4", "symbols": [{"literal":"J"}, {"literal":"o"}, {"literal":"h"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHARACTER", "symbols": ["CHARACTER$string$4"]},
    {"name": "CHARACTER$string$5", "symbols": [{"literal":"C"}, {"literal":"h"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHARACTER", "symbols": ["CHARACTER$string$5"]},
    {"name": "CHARACTER$string$6", "symbols": [{"literal":"K"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHARACTER", "symbols": ["CHARACTER$string$6"]},
    {"name": "CHARACTER$string$7", "symbols": [{"literal":"V"}, {"literal":"i"}, {"literal":"o"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHARACTER", "symbols": ["CHARACTER$string$7"]},
    {"name": "CHARACTER$string$8", "symbols": [{"literal":"J"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"H"}, {"literal":"e"}, {"literal":"n"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"J"}, {"literal":"o"}, {"literal":"h"}, {"literal":"n"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"I"}, {"literal":"I"}, {"literal":"I"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHARACTER", "symbols": ["CHARACTER$string$8"]},
    {"name": "SITUATION$string$1", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"b"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$1"]},
    {"name": "SITUATION$string$2", "symbols": [{"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"C"}, {"literal":"O"}, {"literal":"V"}, {"literal":"I"}, {"literal":"D"}, {"literal":" "}, {"literal":"e"}, {"literal":"x"}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$2"]},
    {"name": "SITUATION$string$3", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"M"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"5"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$3"]},
    {"name": "SITUATION$string$4", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$4", "_", "LOCATION"]},
    {"name": "SITUATION$string$5", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}, {"literal":"d"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$5", "_", "LOCATION"]},
    {"name": "SITUATION$string$6", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"f"}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$6", "_", "LOCATION"]},
    {"name": "SITUATION$string$7", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$7"]},
    {"name": "SITUATION$string$8", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$8"]},
    {"name": "SITUATION$string$9", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$9"]},
    {"name": "SITUATION$string$10", "symbols": [{"literal":"a"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$10"]},
    {"name": "SITUATION$string$11", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":"s"}, {"literal":"c"}, {"literal":"r"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"T"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATION", "symbols": ["SITUATION$string$11"]},
    {"name": "LOCATION$string$1", "symbols": [{"literal":"P"}, {"literal":"a"}, {"literal":"l"}, {"literal":"o"}, {"literal":" "}, {"literal":"A"}, {"literal":"l"}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$1"]},
    {"name": "LOCATION$string$2", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":" "}, {"literal":"D"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"H"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$2"]},
    {"name": "LOCATION$string$3", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"T"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$3"]},
    {"name": "LOCATION$string$4", "symbols": [{"literal":"E"}, {"literal":"n"}, {"literal":"g"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$4"]},
    {"name": "LOCATION$string$5", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"n"}, {"literal":"i"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$5"]},
    {"name": "LOCATION$string$6", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$6"]},
    {"name": "LOCATION$string$7", "symbols": [{"literal":"C"}, {"literal":"O"}, {"literal":"H"}, {"literal":"O"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LOCATION", "symbols": ["LOCATION$string$7"]},
    {"name": "SECONDSENTENCE", "symbols": ["PHRASE", "_", "MOD", "_"]},
    {"name": "SECONDSENTENCE$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SECONDSENTENCE", "symbols": ["CHARACTER", "_", "VERBED", "_", "SECONDSENTENCE$string$1", "_", "THINGS", "_", "MOD"]},
    {"name": "PHRASE$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"f"}, {"literal":"f"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["PHRASE$string$1"]},
    {"name": "PHRASE$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"q"}, {"literal":"u"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["PHRASE$string$2"]},
    {"name": "PHRASE$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE$string$4", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["PHRASE$string$3", "_", "ADJ", {"literal":",","pos":596}, "_", "ADJ", "PHRASE$string$4", "_", "ADJ"]},
    {"name": "MOD$string$1", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "SECONDSENTENCE"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"—"}, {"literal":" "}, {"literal":"a"}, {"literal":"g"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"—"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"."}, {"literal":" "}, {"literal":"W"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD$string$5", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4", "_", "CHARACTER", "_", "MOD$string$5", "_", "CHARACTER", "_", "VERB", "_", "NDESCRIPTOR", {"literal":"?","pos":650}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
