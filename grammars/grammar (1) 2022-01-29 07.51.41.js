// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN$string$1", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["IDEA", "MAIN$string$1"]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "MAIN", "symbols": ["SUSPICION"]},
    {"name": "IDEA", "symbols": ["NOUN", "_", "VERB", "_", "ADDITION"]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"p"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"i"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "NOUN", "_", "QUESTION$string$1", "_", "OBJ"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "NOUN", "_", "QUESTION$string$2", "_", "OBJ"]},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "NOUN", "_", "QUESTION$string$3", "_", "OBJ"]},
    {"name": "NOUN$string$1", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$1"]},
    {"name": "NOUN$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"u"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$2"]},
    {"name": "NOUN$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"w"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$3"]},
    {"name": "NOUN$string$4", "symbols": [{"literal":"j"}, {"literal":"o"}, {"literal":"h"}, {"literal":"n"}, {"literal":" "}, {"literal":"f"}, {"literal":"."}, {"literal":" "}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}, {"literal":"n"}, {"literal":"e"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$4"]},
    {"name": "NOUN$string$5", "symbols": [{"literal":"9"}, {"literal":"/"}, {"literal":"1"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$5"]},
    {"name": "NOUN$string$6", "symbols": [{"literal":"j"}, {"literal":"o"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$6"]},
    {"name": "NOUN$string$7", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"d"}, {"literal":"-"}, {"literal":"1"}, {"literal":"9"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$7"]},
    {"name": "NOUN$string$8", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$8"]},
    {"name": "NOUN$string$9", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$9"]},
    {"name": "NOUN$string$10", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"i"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$10"]},
    {"name": "NOUN$string$11", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"v"}, {"literal":"a"}, {"literal":"c"}, {"literal":"c"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$11"]},
    {"name": "NOUN$string$12", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":"k"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$12"]},
    {"name": "NOUN$string$13", "symbols": [{"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$13"]},
    {"name": "NOUN$string$14", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"m"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$14"]},
    {"name": "NOUN$string$15", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":" "}, {"literal":"z"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}, {"literal":"b"}, {"literal":"u"}, {"literal":"r"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$15"]},
    {"name": "NOUN$string$16", "symbols": [{"literal":"j"}, {"literal":"e"}, {"literal":"f"}, {"literal":"f"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"z"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$16"]},
    {"name": "NOUN$string$17", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$17"]},
    {"name": "NOUN$string$18", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"k"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$18"]},
    {"name": "NOUN$string$19", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"m"}, {"literal":"i"}, {"literal":"l"}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"b"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$19"]},
    {"name": "NOUN$string$20", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"l"}, {"literal":"o"}, {"literal":"g"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$20"]},
    {"name": "NOUN$string$21", "symbols": [{"literal":"n"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"r"}, {"literal":"a"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"d"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NOUN", "symbols": ["NOUN$string$21"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"e"}, {"literal":"s"}, {"literal":"c"}, {"literal":"a"}, {"literal":"p"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"c"}, {"literal":"u"}, {"literal":"b"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"p"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"i"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"i"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"k"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":" "}, {"literal":"'"}, {"literal":"b"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"s"}, {"literal":"'"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"r"}, {"literal":"o"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "VERB$string$6", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$6"]},
    {"name": "VERB$string$7", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"c"}, {"literal":"c"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"t"}, {"literal":"-"}, {"literal":"f"}, {"literal":"a"}, {"literal":"c"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"l"}, {"literal":"a"}, {"literal":"p"}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$7"]},
    {"name": "_", "symbols": [{"literal":" ","pos":202}]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"y"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "QUESTIONWORD$string$2", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$2"]},
    {"name": "QUESTIONWORD$string$3", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$3"]},
    {"name": "DOUBT$string$1", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}, {"literal":"."}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"z"}, {"literal":"y"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DOUBT", "symbols": ["DOUBT$string$1"]},
    {"name": "DOUBT$string$2", "symbols": [{"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"t"}, {"literal":"?"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DOUBT", "symbols": ["DOUBT$string$2"]},
    {"name": "DOUBT$string$3", "symbols": [{"literal":"j"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"."}, {"literal":" "}, {"literal":"i"}, {"literal":"'"}, {"literal":"m"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"g"}, {"literal":"u"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":","}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"d"}, {"literal":"d"}, {"literal":"y"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DOUBT", "symbols": ["DOUBT$string$3"]},
    {"name": "DOUBT$string$4", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"'"}, {"literal":"d"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"a"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":","}, {"literal":" "}, {"literal":"h"}, {"literal":"u"}, {"literal":"h"}, {"literal":"?"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DOUBT", "symbols": ["DOUBT$string$4"]},
    {"name": "DOUBT$string$5", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":","}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"'"}, {"literal":"m"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"s"}, {"literal":","}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DOUBT", "symbols": ["DOUBT$string$5"]},
    {"name": "SUSPICION$string$1", "symbols": [{"literal":"i"}, {"literal":" "}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUSPICION", "symbols": ["SUSPICION$string$1", "_", "IDEA", "_", "DOUBT"]},
    {"name": "SUSPICION$string$2", "symbols": [{"literal":"i"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"w"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUSPICION", "symbols": ["SUSPICION$string$2", "_", "IDEA", "_", "DOUBT"]},
    {"name": "SUSPICION$string$3", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"h"}, {"literal":"o"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"-"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":"f"}, {"literal":"i"}, {"literal":"c"}, {"literal":"i"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUSPICION", "symbols": ["SUSPICION$string$3", "_", "IDEA", "_", "DOUBT"]},
    {"name": "SUSPICION$string$4", "symbols": [{"literal":"i"}, {"literal":" "}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"p"}, {"literal":"i"}, {"literal":"r"}, {"literal":"a"}, {"literal":"c"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"o"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"s"}, {"literal":","}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUSPICION", "symbols": ["SUSPICION$string$4", "_", "IDEA", "_", "DOUBT"]},
    {"name": "SUSPICION$string$5", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"y"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}, {"literal":"b"}, {"literal":"o"}, {"literal":"d"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUSPICION", "symbols": ["SUSPICION$string$5", "_", "IDEA", "_", "DOUBT"]},
    {"name": "ADDITION$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"p"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":","}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"o"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADDITION", "symbols": ["ADDITION$string$1"]},
    {"name": "ADDITION$string$2", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"a"}, {"literal":"d"}, {"literal":"a"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"i"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"j"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"b"}, {"literal":"i"}, {"literal":"e"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADDITION", "symbols": ["ADDITION$string$2"]},
    {"name": "ADDITION$string$3", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"o"}, {"literal":"r"}, {"literal":"w"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADDITION", "symbols": ["ADDITION$string$3"]},
    {"name": "ADDITION$string$4", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"u"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"x"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"s"}, {"literal":","}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"o"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADDITION", "symbols": ["ADDITION$string$4"]},
    {"name": "ADDITION$string$5", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"u"}, {"literal":"p"}, {"literal":"p"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}, {"literal":","}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"o"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADDITION", "symbols": ["ADDITION$string$5"]},
    {"name": "ADDITION$string$6", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"u"}, {"literal":"p"}, {"literal":"p"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"p"}, {"literal":","}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"o"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADDITION", "symbols": ["ADDITION$string$6"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"u"}, {"literal":"l"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"v"}, {"literal":"i"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"e"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"o"}, {"literal":"y"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"x"}, {"literal":" "}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"c"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"d"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"m"}, {"literal":"i"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "OBJ$string$9", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"g"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"i"}, {"literal":"k"}, {"literal":"t"}, {"literal":"o"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$9"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
