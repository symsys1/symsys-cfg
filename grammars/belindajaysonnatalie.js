// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}, {"literal":"e"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"u"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "CONCEPT"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "CONCEPT"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["NAME", {"literal":",","pos":36}, "_", "QUESTION$string$3", "_", "PERSONALACTION", "_", "CLASSWORK", "_", "ACTION", "_", "CONCEPT", "_", "ADVERB"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"a"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["CLASSWORK", "_", "ACTION", "_", {"literal":"a","pos":74}, "_", "ADJECTIVE", "_", "SENTENCE$string$1", "_", "CONCEPT"]},
    {"name": "SENTENCE", "symbols": ["PEOPLE", "_", "ADVERB", "_", "PERSONALACTION", "_", "CLASSWORK", "_", "ACTION", "_", "CONCEPT"]},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"S"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$3", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$4", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$5", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"t"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$6", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$2", "_", "INTERESTING", "_", "SENTENCE$string$3", "_", "CLASSWORK", "_", "SENTENCE$string$4", "_", "COMPARISON", "_", "SENTENCE$string$5", "_", "CONCEPT", "_", "SENTENCE$string$6", "_", "CONCEPT"]},
    {"name": "SENTENCE", "symbols": ["COMPLIMENT", "_", "NAME"]},
    {"name": "SENTENCE", "symbols": ["COMPLIMENT", "_", "NAME", {"literal":",","pos":168}, "_", "CONTRACTION", "_", "SENTENCE"]},
    {"name": "PEOPLE", "symbols": [{"literal":"I","pos":182}]},
    {"name": "PEOPLE$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$1"]},
    {"name": "PEOPLE$string$2", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$2"]},
    {"name": "NAME$string$1", "symbols": [{"literal":"S"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$1"]},
    {"name": "NAME$string$2", "symbols": [{"literal":"E"}, {"literal":"d"}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$2"]},
    {"name": "NAME$string$3", "symbols": [{"literal":"K"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$3"]},
    {"name": "NAME$string$4", "symbols": [{"literal":"B"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$4"]},
    {"name": "NAME$string$5", "symbols": [{"literal":"J"}, {"literal":"e"}, {"literal":"n"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$5"]},
    {"name": "NAME$string$6", "symbols": [{"literal":"D"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$6"]},
    {"name": "NAME$string$7", "symbols": [{"literal":"D"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$7"]},
    {"name": "PERSONALACTION$string$1", "symbols": [{"literal":"a"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSONALACTION", "symbols": ["PERSONALACTION$string$1"]},
    {"name": "PERSONALACTION$string$2", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSONALACTION", "symbols": ["PERSONALACTION$string$2"]},
    {"name": "PERSONALACTION$string$3", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERSONALACTION", "symbols": ["PERSONALACTION$string$3"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"v"}, {"literal":"e"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "CLASSWORK$string$1", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"’"}, {"literal":"s"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSWORK", "symbols": ["CLASSWORK$string$1"]},
    {"name": "CLASSWORK$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"u"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"r"}, {"literal":"’"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSWORK", "symbols": ["CLASSWORK$string$2"]},
    {"name": "CLASSWORK$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"k"}, {"literal":"’"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSWORK", "symbols": ["CLASSWORK$string$3"]},
    {"name": "CLASSWORK$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":" "}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"g"}, {"literal":"n"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSWORK", "symbols": ["CLASSWORK$string$4"]},
    {"name": "CLASSWORK$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSWORK", "symbols": ["CLASSWORK$string$5"]},
    {"name": "INTERESTING$string$1", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERESTING", "symbols": ["INTERESTING$string$1", "_", "ADJECTIVE"]},
    {"name": "INTERESTING$string$2", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":" "}, {"literal":"a"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERESTING", "symbols": ["INTERESTING$string$2"]},
    {"name": "INTERESTING$string$3", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERESTING", "symbols": ["INTERESTING$string$3"]},
    {"name": "COMPARISON$string$1", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"c"}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}, {"literal":"o"}, {"literal":"m"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARISON", "symbols": ["COMPARISON$string$1"]},
    {"name": "COMPARISON$string$2", "symbols": [{"literal":"j"}, {"literal":"u"}, {"literal":"x"}, {"literal":"t"}, {"literal":"a"}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARISON", "symbols": ["COMPARISON$string$2"]},
    {"name": "COMPARISON$string$3", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARISON", "symbols": ["COMPARISON$string$3"]},
    {"name": "COMPARISON$string$4", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARISON", "symbols": ["COMPARISON$string$4"]},
    {"name": "COMPARISON$string$5", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARISON", "symbols": ["COMPARISON$string$5"]},
    {"name": "COMPARISON$string$6", "symbols": [{"literal":"p"}, {"literal":"o"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPARISON", "symbols": ["COMPARISON$string$6"]},
    {"name": "CONTRACTION$string$1", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONTRACTION", "symbols": ["CONTRACTION$string$1"]},
    {"name": "CONTRACTION$string$2", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONTRACTION", "symbols": ["CONTRACTION$string$2"]},
    {"name": "CONTRACTION$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONTRACTION", "symbols": ["CONTRACTION$string$3"]},
    {"name": "CONCEPT$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"R"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"g"}, {"literal":"u"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$1"]},
    {"name": "CONCEPT$string$2", "symbols": [{"literal":"M"}, {"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"’"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$2"]},
    {"name": "CONCEPT$string$3", "symbols": [{"literal":"T"}, {"literal":"u"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$3"]},
    {"name": "CONCEPT$string$4", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"i"}, {"literal":"f"}, {"literal":"i"}, {"literal":"c"}, {"literal":"i"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$4"]},
    {"name": "CONCEPT$string$5", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"-"}, {"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"o"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$5"]},
    {"name": "CONCEPT$string$6", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$6"]},
    {"name": "CONCEPT$string$7", "symbols": [{"literal":"C"}, {"literal":"A"}, {"literal":"P"}, {"literal":"T"}, {"literal":"C"}, {"literal":"H"}, {"literal":"A"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$7"]},
    {"name": "CONCEPT$string$8", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"u"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"t"}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$8"]},
    {"name": "CONCEPT$string$9", "symbols": [{"literal":"C"}, {"literal":"F"}, {"literal":"G"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$9"]},
    {"name": "COMPLIMENT$string$1", "symbols": [{"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPLIMENT", "symbols": ["COMPLIMENT$string$1"]},
    {"name": "COMPLIMENT$string$2", "symbols": [{"literal":"F"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPLIMENT", "symbols": ["COMPLIMENT$string$2"]},
    {"name": "COMPLIMENT$string$3", "symbols": [{"literal":"L"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPLIMENT", "symbols": ["COMPLIMENT$string$3"]},
    {"name": "COMPLIMENT$string$4", "symbols": [{"literal":"q"}, {"literal":"u"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMPLIMENT", "symbols": ["ADJECTIVE", "_", "COMPLIMENT$string$4"]},
    {"name": "_", "symbols": [{"literal":" ","pos":394}]},
    {"name": "ADJECTIVE$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"u"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$1"]},
    {"name": "ADJECTIVE$string$2", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"f"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$2"]},
    {"name": "ADJECTIVE$string$3", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$3"]},
    {"name": "ADJECTIVE$string$4", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"s"}, {"literal":"c"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJECTIVE", "symbols": ["ADJECTIVE$string$4"]},
    {"name": "ADVERB$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$1"]},
    {"name": "ADVERB$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$2"]},
    {"name": "ADVERB$string$3", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$3"]},
    {"name": "ADVERB$string$4", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$4"]},
    {"name": "ADVERB$string$5", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"e"}, {"literal":"c"}, {"literal":"i"}, {"literal":"f"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$5"]},
    {"name": "ADVERB$string$6", "symbols": [{"literal":"a"}, {"literal":"d"}, {"literal":"d"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$6"]},
    {"name": "ADVERB$string$7", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$7"]},
    {"name": "ADVERB$string$8", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"i"}, {"literal":"q"}, {"literal":"u"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADVERB", "symbols": ["ADVERB$string$8"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
