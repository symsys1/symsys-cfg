// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["JARGON", "END"]},
    {"name": "MAIN$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["JARGON", "PAUSE", "_", "MAIN$string$1", "_", "JARGON"]},
    {"name": "MAIN", "symbols": ["CRY"]},
    {"name": "_", "symbols": [{"literal":" ","pos":30}]},
    {"name": "JARGON", "symbols": ["PEOPLE", "_", "ACTION"]},
    {"name": "JARGON", "symbols": [{"literal":"I","pos":44}, "_", "ACTION"]},
    {"name": "ACTION", "symbols": ["WORK", "_", "CODEPHRASE"]},
    {"name": "ACTION", "symbols": ["NONWORK", "_", "MISC"]},
    {"name": "CRY$string$1", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRY", "symbols": [{"literal":"*","pos":72}, "ADJ", "_", "CRY$string$1"]},
    {"name": "CRY$string$2", "symbols": [{"literal":"*"}, {"literal":"c"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRY", "symbols": ["CRY$string$2", "_", "OBJECTPHRASE", {"literal":"*","pos":88}]},
    {"name": "CRY$string$3", "symbols": [{"literal":"*"}, {"literal":"c"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRY", "symbols": ["CRY$string$3", "_", "TERMS", {"literal":"*","pos":98}]},
    {"name": "WORK", "symbols": ["EMPHASIS", "_", "WORK"]},
    {"name": "WORK$string$1", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WORK", "symbols": ["WORK$string$1"]},
    {"name": "WORK$string$2", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WORK", "symbols": ["WORK$string$2"]},
    {"name": "WORK$string$3", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"i"}, {"literal":"l"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WORK", "symbols": ["WORK$string$3"]},
    {"name": "WORK$string$4", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WORK", "symbols": ["WORK$string$4"]},
    {"name": "WORK$string$5", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"g"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WORK", "symbols": ["WORK$string$5"]},
    {"name": "WORK$string$6", "symbols": [{"literal":"D"}, {"literal":"I"}, {"literal":"D"}, {"literal":" "}, {"literal":"N"}, {"literal":"O"}, {"literal":"T"}, {"literal":" "}, {"literal":"J"}, {"literal":"U"}, {"literal":"S"}, {"literal":"T"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WORK", "symbols": ["WORK$string$6"]},
    {"name": "WORK$string$7", "symbols": [{"literal":"D"}, {"literal":"I"}, {"literal":"D"}, {"literal":" "}, {"literal":"N"}, {"literal":"O"}, {"literal":"T"}, {"literal":" "}, {"literal":"J"}, {"literal":"U"}, {"literal":"S"}, {"literal":"T"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WORK", "symbols": ["WORK$string$7"]},
    {"name": "WORK$string$8", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WORK", "symbols": ["WORK$string$8"]},
    {"name": "WORK$string$9", "symbols": [{"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WORK", "symbols": ["WORK$string$9"]},
    {"name": "WORK$string$10", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WORK", "symbols": ["WORK$string$10"]},
    {"name": "WORK$string$11", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WORK", "symbols": ["WORK$string$11"]},
    {"name": "NONWORK$string$1", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NONWORK", "symbols": ["NONWORK$string$1"]},
    {"name": "NONWORK$string$2", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NONWORK", "symbols": ["NONWORK$string$2"]},
    {"name": "NONWORK$string$3", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NONWORK", "symbols": ["NONWORK$string$3"]},
    {"name": "EMPHASIS$string$1", "symbols": [{"literal":"j"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIS", "symbols": ["EMPHASIS$string$1"]},
    {"name": "EMPHASIS$string$2", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIS", "symbols": ["EMPHASIS$string$2"]},
    {"name": "EMPHASIS$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIS", "symbols": ["EMPHASIS$string$3"]},
    {"name": "EMPHASIS$string$4", "symbols": [{"literal":"r"}, {"literal":"u"}, {"literal":"t"}, {"literal":"h"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIS", "symbols": ["EMPHASIS$string$4"]},
    {"name": "CODEPHRASE", "symbols": ["PROJECTS"]},
    {"name": "CODEPHRASE", "symbols": ["PROJECTS", "_", "RECIPIENTPHRASE"]},
    {"name": "OBJECTPHRASE$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECTPHRASE", "symbols": ["OBJECTPHRASE$string$1", "_", "PLACE"]},
    {"name": "OBJECTPHRASE$string$2", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECTPHRASE", "symbols": ["OBJECTPHRASE$string$2", "_", "TIME"]},
    {"name": "OBJECTPHRASE$string$3", "symbols": [{"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECTPHRASE", "symbols": ["OBJECTPHRASE$string$3", "_", "PLACE"]},
    {"name": "OBJECTPHRASE$string$4", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECTPHRASE", "symbols": ["OBJECTPHRASE$string$4", "_", "PLACE"]},
    {"name": "OBJECTPHRASE$string$5", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECTPHRASE", "symbols": ["OBJECTPHRASE$string$5", "_", "PEOPLE"]},
    {"name": "OBJECTPHRASE$string$6", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECTPHRASE", "symbols": ["OBJECTPHRASE$string$6"]},
    {"name": "OBJECTPHRASE$string$7", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECTPHRASE", "symbols": ["OBJECTPHRASE$string$7", "_", "PEOPLE"]},
    {"name": "OBJECTPHRASE$string$8", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECTPHRASE", "symbols": ["OBJECTPHRASE$string$8"]},
    {"name": "OBJECTPHRASE", "symbols": ["EMPHASIS", "_", "OBJECTPHRASE"]},
    {"name": "RECIPIENTPHRASE$string$1", "symbols": [{"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECIPIENTPHRASE", "symbols": ["RECIPIENTPHRASE$string$1", "_", "PLACE"]},
    {"name": "RECIPIENTPHRASE$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECIPIENTPHRASE", "symbols": ["RECIPIENTPHRASE$string$2", "_", "PLACE"]},
    {"name": "RECIPIENTPHRASE$string$3", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECIPIENTPHRASE", "symbols": ["RECIPIENTPHRASE$string$3", "_", "PEOPLE"]},
    {"name": "RECIPIENTPHRASE$string$4", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECIPIENTPHRASE", "symbols": ["RECIPIENTPHRASE$string$4"]},
    {"name": "RECIPIENTPHRASE$string$5", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECIPIENTPHRASE", "symbols": ["RECIPIENTPHRASE$string$5", "_", "PEOPLE"]},
    {"name": "RECIPIENTPHRASE$string$6", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RECIPIENTPHRASE", "symbols": ["RECIPIENTPHRASE$string$6"]},
    {"name": "PROJECTS$string$1", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"j"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROJECTS", "symbols": ["PROJECTS$string$1"]},
    {"name": "PROJECTS$string$2", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROJECTS", "symbols": ["PROJECTS$string$2"]},
    {"name": "PROJECTS$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"u"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"t"}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROJECTS", "symbols": ["PROJECTS$string$3"]},
    {"name": "PROJECTS$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROJECTS", "symbols": ["PROJECTS$string$4"]},
    {"name": "PROJECTS$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"g"}, {"literal":"n"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROJECTS", "symbols": ["PROJECTS$string$5"]},
    {"name": "PROJECTS$string$6", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROJECTS", "symbols": ["PROJECTS$string$6"]},
    {"name": "TERMS$string$1", "symbols": [{"literal":"C"}, {"literal":"+"}, {"literal":"+"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TERMS", "symbols": ["TERMS$string$1"]},
    {"name": "TERMS$string$2", "symbols": [{"literal":"J"}, {"literal":"a"}, {"literal":"v"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TERMS", "symbols": ["TERMS$string$2"]},
    {"name": "TERMS$string$3", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"p"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"c"}, {"literal":"a"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TERMS", "symbols": ["TERMS$string$3"]},
    {"name": "TERMS$string$4", "symbols": [{"literal":"O"}, {"literal":"("}, {"literal":"N"}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TERMS", "symbols": ["TERMS$string$4"]},
    {"name": "TERMS$string$5", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TERMS", "symbols": ["TERMS$string$5"]},
    {"name": "TERMS$string$6", "symbols": [{"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"x"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TERMS", "symbols": ["TERMS$string$6"]},
    {"name": "MISC$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"B"}, {"literal":"u"}, {"literal":"z"}, {"literal":"z"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MISC", "symbols": ["MISC$string$1", "_", "CLASSES"]},
    {"name": "MISC$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"B"}, {"literal":"u"}, {"literal":"z"}, {"literal":"z"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MISC", "symbols": ["MISC$string$2", "_", "PLACE"]},
    {"name": "MISC$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"R"}, {"literal":"e"}, {"literal":"d"}, {"literal":"d"}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MISC", "symbols": ["MISC$string$3", "_", "PLACE"]},
    {"name": "MISC$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"R"}, {"literal":"e"}, {"literal":"d"}, {"literal":"d"}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MISC", "symbols": ["MISC$string$4", "_", "CLASSES"]},
    {"name": "MISC$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"a"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"v"}, {"literal":"i"}, {"literal":"e"}, {"literal":"w"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MISC", "symbols": ["MISC$string$5", "_", "CLASSES"]},
    {"name": "MISC$string$6", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"r"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MISC", "symbols": ["MISC$string$6"]},
    {"name": "MISC$string$7", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MISC", "symbols": ["MISC$string$7"]},
    {"name": "CLASSES$string$1", "symbols": [{"literal":"M"}, {"literal":"A"}, {"literal":"T"}, {"literal":"H"}, {"literal":"5"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSES", "symbols": ["CLASSES$string$1"]},
    {"name": "CLASSES$string$2", "symbols": [{"literal":"C"}, {"literal":"S"}, {"literal":"1"}, {"literal":"0"}, {"literal":"6"}, {"literal":"B"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSES", "symbols": ["CLASSES$string$2"]},
    {"name": "CLASSES$string$3", "symbols": [{"literal":"C"}, {"literal":"S"}, {"literal":"2"}, {"literal":"2"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSES", "symbols": ["CLASSES$string$3"]},
    {"name": "CLASSES$string$4", "symbols": [{"literal":"C"}, {"literal":"S"}, {"literal":"1"}, {"literal":"0"}, {"literal":"7"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSES", "symbols": ["CLASSES$string$4"]},
    {"name": "CLASSES$string$5", "symbols": [{"literal":"P"}, {"literal":"W"}, {"literal":"R"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLASSES", "symbols": ["CLASSES$string$5"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"e"}, {"literal":"c"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"c"}, {"literal":"h"}, {"literal":"n"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "ADJ$string$5", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"g"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$5"]},
    {"name": "PEOPLE$string$1", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$1"]},
    {"name": "PEOPLE$string$2", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$2"]},
    {"name": "PEOPLE$string$3", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$3"]},
    {"name": "PEOPLE$string$4", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"T"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$4"]},
    {"name": "PEOPLE$string$5", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"j"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$5"]},
    {"name": "PEOPLE$string$6", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$6"]},
    {"name": "PEOPLE$string$7", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$7"]},
    {"name": "PEOPLE$string$8", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"R"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$8"]},
    {"name": "PEOPLE$string$9", "symbols": [{"literal":"M"}, {"literal":"T"}, {"literal":"L"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$9"]},
    {"name": "PEOPLE$string$10", "symbols": [{"literal":"P"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$10"]},
    {"name": "PLACE$string$1", "symbols": [{"literal":"T"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"i"}, {"literal":"d"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$1"]},
    {"name": "PLACE$string$2", "symbols": [{"literal":"e"}, {"literal":"n"}, {"literal":"g"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$2"]},
    {"name": "PLACE$string$3", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"b"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$3"]},
    {"name": "PLACE$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$4"]},
    {"name": "PLACE$string$5", "symbols": [{"literal":"P"}, {"literal":"a"}, {"literal":"l"}, {"literal":"o"}, {"literal":" "}, {"literal":"A"}, {"literal":"l"}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$5"]},
    {"name": "PLACE$string$6", "symbols": [{"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$6"]},
    {"name": "PLACE$string$7", "symbols": [{"literal":"L"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$7"]},
    {"name": "PLACE$string$8", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$8"]},
    {"name": "PLACE$string$9", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$9"]},
    {"name": "PLACE$string$10", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"f"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$10"]},
    {"name": "PLACE$string$11", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"y"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$11"]},
    {"name": "PLACE$string$12", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}, {"literal":"t"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$12"]},
    {"name": "PLACE$string$13", "symbols": [{"literal":"S"}, {"literal":"F"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACE", "symbols": ["PLACE$string$13"]},
    {"name": "TIME$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$1"]},
    {"name": "TIME$string$2", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"l"}, {"literal":"f"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$2"]},
    {"name": "TIME$string$3", "symbols": [{"literal":"2"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$3"]},
    {"name": "END", "symbols": [{"literal":".","pos":567}]},
    {"name": "END$string$1", "symbols": [{"literal":" "}, {"literal":"X"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["END$string$1"]},
    {"name": "END$string$2", "symbols": [{"literal":" "}, {"literal":"L"}, {"literal":"O"}, {"literal":"L"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["END$string$2"]},
    {"name": "END$string$3", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"R"}, {"literal":"Y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "END", "symbols": ["END$string$3"]},
    {"name": "PAUSE", "symbols": [{"literal":"-","pos":585}]},
    {"name": "PAUSE$string$1", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PAUSE", "symbols": ["PAUSE$string$1"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
