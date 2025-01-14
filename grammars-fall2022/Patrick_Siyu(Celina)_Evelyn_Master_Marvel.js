// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["Istatement", {"literal":" ","pos":6}, "marvelSENCTENCE", {"literal":".","pos":10}]},
    {"name": "_", "symbols": [{"literal":" ","pos":16}]},
    {"name": "Istatement$string$1", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Istatement", "symbols": ["Istatement$string$1"]},
    {"name": "Istatement$string$2", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Istatement", "symbols": ["Istatement$string$2"]},
    {"name": "Istatement$string$3", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"m"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Istatement", "symbols": ["Istatement$string$3"]},
    {"name": "Istatement$string$4", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"m"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Istatement", "symbols": ["Istatement$string$4"]},
    {"name": "Istatement$string$5", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"e"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Istatement", "symbols": ["Istatement$string$5"]},
    {"name": "Istatement$string$6", "symbols": [{"literal":"E"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Istatement", "symbols": ["Istatement$string$6"]},
    {"name": "Istatement$string$7", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"s"}, {"literal":"u"}, {"literal":"g"}, {"literal":"g"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Istatement", "symbols": ["Istatement$string$7"]},
    {"name": "marvelSENCTENCE", "symbols": ["mainSENTENCE"]},
    {"name": "marvelSENCTENCE$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "marvelSENCTENCE", "symbols": ["mainSENTENCE", "marvelSENCTENCE$string$1", "subSENTENCE"]},
    {"name": "mainSENTENCE", "symbols": ["PEOPLE", "_", "normalVERB"]},
    {"name": "mainSENTENCE", "symbols": ["HERO", "_", "allyVERB", "_", "HERO"]},
    {"name": "mainSENTENCE", "symbols": ["HERO", "_", "enemyVERB", "_", "VILLAIN"]},
    {"name": "mainSENTENCE", "symbols": ["VILLAIN", "_", "allyVERB", "_", "VILLAIN"]},
    {"name": "mainSENTENCE", "symbols": ["VILLAIN", "_", "enemyVERB", "_", "HERO"]},
    {"name": "subSENTENCE", "symbols": ["randomPronoun", "_", "normalVERB"]},
    {"name": "subSENTENCE", "symbols": ["GERUND"]},
    {"name": "subSENTENCE$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "subSENTENCE", "symbols": ["subSENTENCE", "subSENTENCE$string$1", "subSENTENCE"]},
    {"name": "PEOPLE", "symbols": ["HERO"]},
    {"name": "PEOPLE", "symbols": ["VILLAIN"]},
    {"name": "PEOPLE", "symbols": ["GENERAL"]},
    {"name": "HERO$string$1", "symbols": [{"literal":"I"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"M"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HERO", "symbols": ["HERO$string$1"]},
    {"name": "HERO$string$2", "symbols": [{"literal":"S"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HERO", "symbols": ["HERO$string$2"]},
    {"name": "HERO$string$3", "symbols": [{"literal":"H"}, {"literal":"u"}, {"literal":"l"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HERO", "symbols": ["HERO$string$3"]},
    {"name": "HERO$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HERO", "symbols": ["HERO$string$4"]},
    {"name": "HERO$string$5", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"p"}, {"literal":"t"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"A"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HERO", "symbols": ["HERO$string$5"]},
    {"name": "HERO$string$6", "symbols": [{"literal":"D"}, {"literal":"o"}, {"literal":"c"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"S"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HERO", "symbols": ["HERO$string$6"]},
    {"name": "HERO$string$7", "symbols": [{"literal":"W"}, {"literal":"o"}, {"literal":"l"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HERO", "symbols": ["HERO$string$7"]},
    {"name": "HERO$string$8", "symbols": [{"literal":"P"}, {"literal":"r"}, {"literal":"o"}, {"literal":"f"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"X"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HERO", "symbols": ["HERO$string$8"]},
    {"name": "HERO$string$9", "symbols": [{"literal":"H"}, {"literal":"a"}, {"literal":"w"}, {"literal":"k"}, {"literal":"e"}, {"literal":"y"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HERO", "symbols": ["HERO$string$9"]},
    {"name": "HERO$string$10", "symbols": [{"literal":"B"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":" "}, {"literal":"P"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HERO", "symbols": ["HERO$string$10"]},
    {"name": "HERO$string$11", "symbols": [{"literal":"B"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":" "}, {"literal":"W"}, {"literal":"i"}, {"literal":"d"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HERO", "symbols": ["HERO$string$11"]},
    {"name": "HERO", "symbols": ["goodADJ", "_", "HERO"]},
    {"name": "VILLAIN$string$1", "symbols": [{"literal":"L"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VILLAIN", "symbols": ["VILLAIN$string$1"]},
    {"name": "VILLAIN$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VILLAIN", "symbols": ["VILLAIN$string$2"]},
    {"name": "VILLAIN$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"W"}, {"literal":"i"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VILLAIN", "symbols": ["VILLAIN$string$3"]},
    {"name": "VILLAIN$string$4", "symbols": [{"literal":"M"}, {"literal":"a"}, {"literal":"g"}, {"literal":"n"}, {"literal":"e"}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VILLAIN", "symbols": ["VILLAIN$string$4"]},
    {"name": "VILLAIN$string$5", "symbols": [{"literal":"D"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"a"}, {"literal":"m"}, {"literal":"m"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VILLAIN", "symbols": ["VILLAIN$string$5"]},
    {"name": "VILLAIN$string$6", "symbols": [{"literal":"A"}, {"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"I"}, {"literal":"n"}, {"literal":"v"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VILLAIN", "symbols": ["VILLAIN$string$6"]},
    {"name": "VILLAIN$string$7", "symbols": [{"literal":"H"}, {"literal":"y"}, {"literal":"d"}, {"literal":"r"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VILLAIN", "symbols": ["VILLAIN$string$7"]},
    {"name": "VILLAIN$string$8", "symbols": [{"literal":"R"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"S"}, {"literal":"k"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VILLAIN", "symbols": ["VILLAIN$string$8"]},
    {"name": "VILLAIN", "symbols": ["badADJ", "_", "VILLAIN"]},
    {"name": "GENERAL$string$1", "symbols": [{"literal":"G"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERAL", "symbols": ["GENERAL$string$1"]},
    {"name": "GENERAL$string$2", "symbols": [{"literal":"B"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERAL", "symbols": ["GENERAL$string$2"]},
    {"name": "GENERAL$string$3", "symbols": [{"literal":"P"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERAL", "symbols": ["GENERAL$string$3"]},
    {"name": "GENERAL$string$4", "symbols": [{"literal":"P"}, {"literal":"u"}, {"literal":"n"}, {"literal":"y"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERAL", "symbols": ["GENERAL$string$4"]},
    {"name": "GENERAL$string$5", "symbols": [{"literal":"G"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERAL", "symbols": ["GENERAL$string$5"]},
    {"name": "GENERAL$string$6", "symbols": [{"literal":"B"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERAL", "symbols": ["GENERAL$string$6"]},
    {"name": "GENERAL$string$7", "symbols": [{"literal":"P"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERAL", "symbols": ["GENERAL$string$7"]},
    {"name": "GENERAL$string$8", "symbols": [{"literal":"P"}, {"literal":"u"}, {"literal":"n"}, {"literal":"y"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENERAL", "symbols": ["GENERAL$string$8"]},
    {"name": "goodADJ$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "goodADJ", "symbols": ["goodADJ$string$1"]},
    {"name": "goodADJ$string$2", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "goodADJ", "symbols": ["goodADJ$string$2"]},
    {"name": "goodADJ$string$3", "symbols": [{"literal":"s"}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "goodADJ", "symbols": ["goodADJ$string$3"]},
    {"name": "badADJ$string$1", "symbols": [{"literal":"n"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "badADJ", "symbols": ["badADJ$string$1"]},
    {"name": "badADJ$string$2", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "badADJ", "symbols": ["badADJ$string$2"]},
    {"name": "badADJ$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "badADJ", "symbols": ["badADJ$string$3"]},
    {"name": "normalVERB$string$1", "symbols": [{"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "normalVERB", "symbols": ["normalVERB$string$1"]},
    {"name": "normalVERB$string$2", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "normalVERB", "symbols": ["normalVERB$string$2"]},
    {"name": "normalVERB$string$3", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"m"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "normalVERB", "symbols": ["normalVERB$string$3"]},
    {"name": "normalVERB$string$4", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "normalVERB", "symbols": ["normalVERB$string$4"]},
    {"name": "normalVERB$string$5", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"z"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "normalVERB", "symbols": ["normalVERB$string$5"]},
    {"name": "normalVERB$string$6", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"A"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "normalVERB", "symbols": ["normalVERB$string$6"]},
    {"name": "normalVERB$string$7", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "normalVERB", "symbols": ["normalVERB$string$7"]},
    {"name": "normalVERB$string$8", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"y"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "normalVERB", "symbols": ["normalVERB$string$8"]},
    {"name": "normalVERB$string$9", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"s"}, {"literal":"c"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"l"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "normalVERB", "symbols": ["normalVERB$string$9"]},
    {"name": "normalVERB$string$10", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "normalVERB", "symbols": ["normalVERB$string$10"]},
    {"name": "allyVERB$string$1", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "allyVERB", "symbols": ["allyVERB$string$1"]},
    {"name": "allyVERB$string$2", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "allyVERB", "symbols": ["allyVERB$string$2"]},
    {"name": "allyVERB$string$3", "symbols": [{"literal":"c"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "allyVERB", "symbols": ["allyVERB$string$3"]},
    {"name": "allyVERB$string$4", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "allyVERB", "symbols": ["allyVERB$string$4"]},
    {"name": "allyVERB$string$5", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"f"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "allyVERB", "symbols": ["allyVERB$string$5"]},
    {"name": "allyVERB$string$6", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "allyVERB", "symbols": ["allyVERB$string$6"]},
    {"name": "allyVERB$string$7", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "allyVERB", "symbols": ["allyVERB$string$7"]},
    {"name": "enemyVERB", "symbols": ["SOUNDVERB"]},
    {"name": "enemyVERB$string$1", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "enemyVERB", "symbols": ["enemyVERB$string$1"]},
    {"name": "enemyVERB$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "enemyVERB", "symbols": ["enemyVERB$string$2"]},
    {"name": "enemyVERB$string$3", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "enemyVERB", "symbols": ["enemyVERB$string$3"]},
    {"name": "enemyVERB$string$4", "symbols": [{"literal":"k"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "enemyVERB", "symbols": ["enemyVERB$string$4"]},
    {"name": "enemyVERB$string$5", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "enemyVERB", "symbols": ["enemyVERB$string$5"]},
    {"name": "enemyVERB$string$6", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "enemyVERB", "symbols": ["enemyVERB$string$6"]},
    {"name": "enemyVERB$string$7", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"g"}, {"literal":"u"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "enemyVERB", "symbols": ["enemyVERB$string$7"]},
    {"name": "SOUNDVERB$string$1", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOUNDVERB", "symbols": ["SOUNDVERB$string$1"]},
    {"name": "SOUNDVERB$string$2", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOUNDVERB", "symbols": ["SOUNDVERB$string$2"]},
    {"name": "SOUNDVERB$string$3", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOUNDVERB", "symbols": ["SOUNDVERB$string$3"]},
    {"name": "SOUNDVERB$string$4", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"r"}, {"literal":"r"}, {"literal":"r"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SOUNDVERB", "symbols": ["SOUNDVERB$string$4"]},
    {"name": "randomPronoun$string$1", "symbols": [{"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "randomPronoun", "symbols": ["randomPronoun$string$1"]},
    {"name": "randomPronoun$string$2", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "randomPronoun", "symbols": ["randomPronoun$string$2"]},
    {"name": "randomPronoun$string$3", "symbols": [{"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "randomPronoun", "symbols": ["randomPronoun$string$3"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND$string$2", "symbols": [{"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"e"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1", "randomPronoun", "GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND$string$4", "symbols": [{"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3", "randomPronoun", "GERUND$string$4"]},
    {"name": "GERUND$string$5", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"e"}, {"literal":"e"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND$string$6", "symbols": [{"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$5", "randomPronoun", "GERUND$string$6"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
