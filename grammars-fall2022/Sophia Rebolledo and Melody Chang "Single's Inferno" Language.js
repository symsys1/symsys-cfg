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
    {"name": "QUESTION$string$1", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "QUESTION$string$1", "_", "OBJ"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "OBJ"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$3", "_", "GERUND", "_", "QUESTION$string$4", "_", "PLACES"]},
    {"name": "QUESTION$string$5", "symbols": [{"literal":"O"}, {"literal":"h"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"."}, {"literal":" "}, {"literal":"A"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"t"}, {"literal":"r"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$6", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$5", "_", "OBJ", "_", "QUESTION$string$6", "_", "INGFORM"]},
    {"name": "QUESTION$string$7", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"o"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$7", "_", "GERUND", "_", "PLACES"]},
    {"name": "QUESTION$string$8", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"o"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$8", "_", "PEOPLE"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "MOD"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"u"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "OBJ", "_", "SENTENCE$string$2"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "ADVERB", "_", "VERB", "_", "PEOPLE"]},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "SENTENCE$string$3", "_", "INGFORM", "_", "GERUND", "_", "SENTENCE$string$4", "_", "PLACES"]},
    {"name": "SENTENCE$string$5", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$5", "_", "OBJ"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "OBJ"]},
    {"name": "SENTENCE$string$6", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["PEOPLE", {"literal":",","pos":184}, "_", "RECURSIONPEOPLE", {"literal":",","pos":190}, "_", "SENTENCE$string$6", "_", "OBJ", "_", "RECOBJ"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "OBJ"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"a"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4"]},
    {"name": "MOD$string$5", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$5", "_", "SENTENCE"]},
    {"name": "INGFORM$string$1", "symbols": [{"literal":"a"}, {"literal":"b"}, {"literal":"s"}, {"literal":"o"}, {"literal":"l"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$1"]},
    {"name": "INGFORM$string$2", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$2"]},
    {"name": "INGFORM$string$3", "symbols": [{"literal":"o"}, {"literal":"b"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$3"]},
    {"name": "INGFORM$string$4", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$4"]},
    {"name": "PEOPLE$string$1", "symbols": [{"literal":"C"}, {"literal":"h"}, {"literal":"o"}, {"literal":"i"}, {"literal":" "}, {"literal":"S"}, {"literal":"i"}, {"literal":"-"}, {"literal":"h"}, {"literal":"u"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$1"]},
    {"name": "PEOPLE$string$2", "symbols": [{"literal":"O"}, {"literal":"h"}, {"literal":" "}, {"literal":"J"}, {"literal":"i"}, {"literal":"n"}, {"literal":"-"}, {"literal":"t"}, {"literal":"a"}, {"literal":"e"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$2"]},
    {"name": "PEOPLE$string$3", "symbols": [{"literal":"M"}, {"literal":"o"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"S"}, {"literal":"e"}, {"literal":"-"}, {"literal":"h"}, {"literal":"o"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$3"]},
    {"name": "PEOPLE$string$4", "symbols": [{"literal":"S"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"J"}, {"literal":"i"}, {"literal":"-"}, {"literal":"a"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$4"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"y"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"n"}, {"literal":"a"}, {"literal":"p"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "PLACES$string$1", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$1"]},
    {"name": "PLACES$string$2", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$2"]},
    {"name": "PLACES$string$3", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"'"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$3"]},
    {"name": "PLACES$string$4", "symbols": [{"literal":"k"}, {"literal":"i"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$4"]},
    {"name": "PLACES$string$5", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":"r"}, {"literal":"g"}, {"literal":"e"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"a"}, {"literal":"c"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$5"]},
    {"name": "ADVERB$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"u"}, {"literal":"d"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$1"]},
    {"name": "ADVERB$string$2", "symbols": [{"literal":"q"}, {"literal":"u"}, {"literal":"i"}, {"literal":"e"}, {"literal":"t"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$2"]},
    {"name": "ADVERB$string$3", "symbols": [{"literal":"o"}, {"literal":"b"}, {"literal":"n"}, {"literal":"o"}, {"literal":"x"}, {"literal":"i"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$3"]},
    {"name": "ADVERB$string$4", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$4"]},
    {"name": "ADVERB$string$5", "symbols": [{"literal":"h"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}, {"literal":"r"}, {"literal":"i"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$5"]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "QUESTIONWORD$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$2"]},
    {"name": "QUESTIONWORD$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$3"]},
    {"name": "SUB$string$1", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"A"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "SUB$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$4"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":"u"}, {"literal":"c"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "VERB$string$6", "symbols": [{"literal":"e"}, {"literal":"s"}, {"literal":"c"}, {"literal":"a"}, {"literal":"p"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$6"]},
    {"name": "VERB$string$7", "symbols": [{"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"u"}, {"literal":"n"}, {"literal":"s"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$7"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"a"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"g"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"r"}, {"literal":"i"}, {"literal":"p"}, {"literal":"p"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"g"}, {"literal":"u"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"g"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":" "}, {"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "RECOBJ$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"p"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECOBJ", "symbols": ["RECOBJ$string$1"]},
    {"name": "RECOBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"s"}, {"literal":"o"}, {"literal":"l"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECOBJ", "symbols": ["RECOBJ$string$2"]},
    {"name": "RECOBJ$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECOBJ", "symbols": ["RECOBJ$string$3"]},
    {"name": "RECOBJ$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"e"}, {"literal":"n"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECOBJ", "symbols": ["RECOBJ$string$4"]},
    {"name": "RECURSIONPEOPLE$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECURSIONPEOPLE", "symbols": ["RECURSIONPEOPLE$string$1"]},
    {"name": "RECURSIONPEOPLE$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"n"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"a"}, {"literal":"c"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECURSIONPEOPLE", "symbols": ["RECURSIONPEOPLE$string$2"]},
    {"name": "RECURSIONPEOPLE$string$3", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"o"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"s"}, {"literal":" "}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"u"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECURSIONPEOPLE", "symbols": ["RECURSIONPEOPLE$string$3"]},
    {"name": "RECURSIONPEOPLE$string$4", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"o"}, {"literal":" "}, {"literal":"k"}, {"literal":"e"}, {"literal":"p"}, {"literal":"p"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"l"}, {"literal":"f"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECURSIONPEOPLE", "symbols": ["RECURSIONPEOPLE$string$4"]},
    {"name": "RECURSIONPEOPLE$string$5", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"o"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"n"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECURSIONPEOPLE", "symbols": ["RECURSIONPEOPLE$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
