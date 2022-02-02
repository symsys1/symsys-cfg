// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["PROCLAMATION", {"literal":".","pos":6}]},
    {"name": "MAIN$string$1", "symbols": [{"literal":"?"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN", "symbols": ["QUERY", "MAIN$string$1", "EXP"]},
    {"name": "QUERY$string$1", "symbols": [{"literal":"I"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUERY", "symbols": ["QUERY$string$1", "QUERYWORD"]},
    {"name": "QUERYWORD$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":"f"}, {"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUERYWORD", "symbols": ["QUERYWORD$string$1"]},
    {"name": "QUERYWORD$string$2", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"n"}, {"literal":"o"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUERYWORD", "symbols": ["QUERYWORD$string$2"]},
    {"name": "QUERYWORD$string$3", "symbols": [{"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"u"}, {"literal":"g"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUERYWORD", "symbols": ["QUERYWORD$string$3"]},
    {"name": "QUERYWORD$string$4", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUERYWORD", "symbols": ["QUERYWORD$string$4"]},
    {"name": "EXP$string$1", "symbols": [{"literal":"I"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"a"}, {"literal":"g"}, {"literal":"n"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"v"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXP", "symbols": ["EXP$string$1"]},
    {"name": "EXP$string$2", "symbols": [{"literal":"I"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":" "}, {"literal":"g"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"u"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"u"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXP", "symbols": ["EXP$string$2"]},
    {"name": "PROCLAMATION$string$1", "symbols": [{"literal":"I"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROCLAMATION$string$2", "symbols": [{"literal":"."}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROCLAMATION", "symbols": ["PROCLAMATION$string$1", "DISEASE", "PROCLAMATION$string$2", "TREATMENT"]},
    {"name": "PROCLAMATION", "symbols": ["INSULT"]},
    {"name": "PROCLAMATION$string$3", "symbols": [{"literal":"."}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PROCLAMATION", "symbols": ["THEORY", "PROCLAMATION$string$3", "TEST"]},
    {"name": "PROCLAMATION", "symbols": ["DIAGNOSIS", {"literal":" ","pos":79}, "TREATMENT"]},
    {"name": "PROCLAMATION", "symbols": ["PATIENT", {"literal":" ","pos":86}, "PROCLAMATION"]},
    {"name": "TREATMENT$string$1", "symbols": [{"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TREATMENT", "symbols": ["TREATMENT$string$1", "MEDS"]},
    {"name": "TREATMENT$string$2", "symbols": [{"literal":"G"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"i"}, {"literal":"m"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TREATMENT", "symbols": ["TREATMENT$string$2", "MEDS"]},
    {"name": "TREATMENT$string$3", "symbols": [{"literal":"D"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"i"}, {"literal":"m"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TREATMENT", "symbols": ["TREATMENT$string$3", "MEDS"]},
    {"name": "TREATMENT$string$4", "symbols": [{"literal":"T"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TREATMENT", "symbols": ["TREATMENT$string$4", "MEDS"]},
    {"name": "MEDS$string$1", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"a"}, {"literal":"d"}, {"literal":"-"}, {"literal":"s"}, {"literal":"p"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"m"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"b"}, {"literal":"i"}, {"literal":"o"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MEDS", "symbols": ["MEDS$string$1"]},
    {"name": "MEDS$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"i"}, {"literal":"-"}, {"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MEDS", "symbols": ["MEDS$string$2"]},
    {"name": "MEDS$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"o"}, {"literal":"i"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MEDS", "symbols": ["MEDS$string$3"]},
    {"name": "MEDS$string$4", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MEDS", "symbols": ["MEDS$string$4"]},
    {"name": "TEST$string$1", "symbols": [{"literal":"T"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"h"}, {"literal":"i"}, {"literal":"m"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEST", "symbols": ["TEST$string$1", "DISEASE"]},
    {"name": "TEST$string$2", "symbols": [{"literal":"B"}, {"literal":"i"}, {"literal":"o"}, {"literal":"p"}, {"literal":"s"}, {"literal":"y"}, {"literal":" "}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEST", "symbols": ["TEST$string$2", "BODY"]},
    {"name": "TEST$string$3", "symbols": [{"literal":"D"}, {"literal":"o"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"C"}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEST", "symbols": ["TEST$string$3"]},
    {"name": "TEST$string$4", "symbols": [{"literal":"G"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"M"}, {"literal":"R"}, {"literal":"I"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEST", "symbols": ["TEST$string$4"]},
    {"name": "DISEASE$string$1", "symbols": [{"literal":"l"}, {"literal":"u"}, {"literal":"p"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$1"]},
    {"name": "DISEASE$string$2", "symbols": [{"literal":"s"}, {"literal":"y"}, {"literal":"p"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$2"]},
    {"name": "DISEASE$string$3", "symbols": [{"literal":"K"}, {"literal":"a"}, {"literal":"w"}, {"literal":"a"}, {"literal":"s"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$3"]},
    {"name": "DISEASE$string$4", "symbols": [{"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$4"]},
    {"name": "DISEASE$string$5", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"r"}, {"literal":"c"}, {"literal":"o"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$5"]},
    {"name": "DISEASE$string$6", "symbols": [{"literal":"a"}, {"literal":"m"}, {"literal":"y"}, {"literal":"l"}, {"literal":"o"}, {"literal":"i"}, {"literal":"d"}, {"literal":"o"}, {"literal":"s"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$6"]},
    {"name": "DISEASE$string$7", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"u"}, {"literal":"k"}, {"literal":"e"}, {"literal":"m"}, {"literal":"i"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$7"]},
    {"name": "DISEASE$string$8", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"u"}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$8"]},
    {"name": "DISEASE$string$9", "symbols": [{"literal":"W"}, {"literal":"i"}, {"literal":"l"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$9"]},
    {"name": "DISEASE$string$10", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"r"}, {"literal":"g"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$10"]},
    {"name": "DISEASE$string$11", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"x"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$11"]},
    {"name": "DISEASE$string$12", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"c"}, {"literal":"o"}, {"literal":"h"}, {"literal":"o"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$12"]},
    {"name": "DISEASE$string$13", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"e"}, {"literal":"o"}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"s"}, {"literal":"y"}, {"literal":"n"}, {"literal":"d"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$13"]},
    {"name": "DISEASE$string$14", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"t"}, {"literal":"u"}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DISEASE", "symbols": ["DISEASE$string$14"]},
    {"name": "INSULT$string$1", "symbols": [{"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INSULT$string$2", "symbols": [{"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":"."}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INSULT", "symbols": ["CHAR", "INSULT$string$1", "CHAR", "INSULT$string$2", "THOUGHT"]},
    {"name": "THOUGHT", "symbols": ["TEST"]},
    {"name": "THOUGHT$string$1", "symbols": [{"literal":"U"}, {"literal":"n"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":"'"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THOUGHT", "symbols": ["THOUGHT$string$1"]},
    {"name": "CHAR$string$1", "symbols": [{"literal":"C"}, {"literal":"h"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHAR", "symbols": ["CHAR$string$1"]},
    {"name": "CHAR$string$2", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHAR", "symbols": ["CHAR$string$2"]},
    {"name": "CHAR$string$3", "symbols": [{"literal":"F"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHAR", "symbols": ["CHAR$string$3"]},
    {"name": "CHAR$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"i"}, {"literal":"r"}, {"literal":"t"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHAR", "symbols": ["CHAR$string$4"]},
    {"name": "CHAR$string$5", "symbols": [{"literal":"K"}, {"literal":"u"}, {"literal":"t"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHAR", "symbols": ["CHAR$string$5"]},
    {"name": "CHAR$string$6", "symbols": [{"literal":"T"}, {"literal":"a"}, {"literal":"u"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHAR", "symbols": ["CHAR$string$6"]},
    {"name": "CHAR$string$7", "symbols": [{"literal":"P"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHAR", "symbols": ["CHAR$string$7"]},
    {"name": "THEORY$string$1", "symbols": [{"literal":"I"}, {"literal":"f"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THEORY$string$2", "symbols": [{"literal":" "}, {"literal":"i"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THEORY", "symbols": ["THEORY$string$1", "BODY", "THEORY$string$2", "BODY"]},
    {"name": "THEORY$string$3", "symbols": [{"literal":"I"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THEORY", "symbols": ["THEORY$string$3", "DISEASE"]},
    {"name": "THEORY$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THEORY", "symbols": ["THEORY$string$4", "DISEASE"]},
    {"name": "THEORY$string$5", "symbols": [{"literal":"O"}, {"literal":"k"}, {"literal":"a"}, {"literal":"y"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THEORY$string$6", "symbols": [{"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THEORY$string$7", "symbols": [{"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THEORY$string$8", "symbols": [{"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THEORY", "symbols": ["THEORY$string$5", "ISSUE", "THEORY$string$6", "BODY", "THEORY$string$7", "ISSUE", "THEORY$string$8", "BODY"]},
    {"name": "THEORY$string$9", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THEORY", "symbols": ["THEORY$string$9", "DISEASE"]},
    {"name": "THEORY$string$10", "symbols": [{"literal":"E"}, {"literal":"x"}, {"literal":"c"}, {"literal":"e"}, {"literal":"p"}, {"literal":"t"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THEORY$string$11", "symbols": [{"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THEORY", "symbols": ["THEORY$string$10", "DISEASE", "THEORY$string$11", "SYMPTOMS", {"literal":".","pos":324}]},
    {"name": "ISSUE$string$1", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ISSUE", "symbols": ["ISSUE$string$1"]},
    {"name": "ISSUE$string$2", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"v"}, {"literal":"i"}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ISSUE", "symbols": ["ISSUE$string$2"]},
    {"name": "ISSUE$string$3", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"f"}, {"literal":"l"}, {"literal":"a"}, {"literal":"m"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ISSUE", "symbols": ["ISSUE$string$3"]},
    {"name": "ISSUE$string$4", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"o"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ISSUE", "symbols": ["ISSUE$string$4"]},
    {"name": "BODY$string$1", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODY", "symbols": ["BODY$string$1"]},
    {"name": "BODY$string$2", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODY", "symbols": ["BODY$string$2"]},
    {"name": "BODY$string$3", "symbols": [{"literal":"k"}, {"literal":"i"}, {"literal":"d"}, {"literal":"n"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODY", "symbols": ["BODY$string$3"]},
    {"name": "BODY$string$4", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODY", "symbols": ["BODY$string$4"]},
    {"name": "BODY$string$5", "symbols": [{"literal":"s"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODY", "symbols": ["BODY$string$5"]},
    {"name": "BODY$string$6", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODY", "symbols": ["BODY$string$6"]},
    {"name": "BODY$string$7", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODY", "symbols": ["BODY$string$7"]},
    {"name": "BODY$string$8", "symbols": [{"literal":"l"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODY", "symbols": ["BODY$string$8"]},
    {"name": "BODY$string$9", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"c"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BODY", "symbols": ["BODY$string$9"]},
    {"name": "DIAGNOSIS$string$1", "symbols": [{"literal":"S"}, {"literal":"o"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DIAGNOSIS$string$2", "symbols": [{"literal":" "}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DIAGNOSIS$string$3", "symbols": [{"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DIAGNOSIS$string$4", "symbols": [{"literal":" "}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DIAGNOSIS", "symbols": ["DIAGNOSIS$string$1", "DISEASE", "DIAGNOSIS$string$2", "NUM", "TIME", "DIAGNOSIS$string$3", "DESTROY", "DIAGNOSIS$string$4", "BODY", {"literal":".","pos":404}]},
    {"name": "DIAGNOSIS$string$5", "symbols": [{"literal":"T"}, {"literal":"y"}, {"literal":"p"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DIAGNOSIS$string$6", "symbols": [{"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"b"}, {"literal":"i"}, {"literal":"g"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"."}, {"literal":" "}, {"literal":"B"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"o"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DIAGNOSIS$string$7", "symbols": [{"literal":"."}, {"literal":" "}, {"literal":"T"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DIAGNOSIS", "symbols": ["DIAGNOSIS$string$5", "DISEASE", "DIAGNOSIS$string$6", "DISEASE", "DIAGNOSIS$string$7", "DISEASE", {"literal":".","pos":420}]},
    {"name": "DIAGNOSIS$string$8", "symbols": [{"literal":"H"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"d"}, {"literal":"y"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"c"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DIAGNOSIS", "symbols": ["DIAGNOSIS$string$8", "NUTRIENT", {"literal":".","pos":427}]},
    {"name": "DIAGNOSIS$string$9", "symbols": [{"literal":"H"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DIAGNOSIS$string$10", "symbols": [{"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DIAGNOSIS", "symbols": ["DIAGNOSIS$string$9", "BODY", "DIAGNOSIS$string$10"]},
    {"name": "NUTRIENT$string$1", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"b"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUTRIENT", "symbols": ["NUTRIENT$string$1"]},
    {"name": "NUTRIENT$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"p"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUTRIENT", "symbols": ["NUTRIENT$string$2"]},
    {"name": "NUTRIENT$string$3", "symbols": [{"literal":"j"}, {"literal":"o"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUTRIENT", "symbols": ["NUTRIENT$string$3"]},
    {"name": "NUTRIENT$string$4", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"n"}, {"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUTRIENT", "symbols": ["NUTRIENT$string$4"]},
    {"name": "NUTRIENT$string$5", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUTRIENT", "symbols": ["NUTRIENT$string$5"]},
    {"name": "DESTROY$string$1", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"r"}, {"literal":"p"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"m"}, {"literal":"b"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESTROY", "symbols": ["DESTROY$string$1"]},
    {"name": "DESTROY$string$2", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESTROY", "symbols": ["DESTROY$string$2"]},
    {"name": "DESTROY$string$3", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"v"}, {"literal":"a"}, {"literal":"g"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESTROY", "symbols": ["DESTROY$string$3"]},
    {"name": "DESTROY$string$4", "symbols": [{"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"l"}, {"literal":"o"}, {"literal":"a"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESTROY", "symbols": ["DESTROY$string$4"]},
    {"name": "DESTROY$string$5", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESTROY", "symbols": ["DESTROY$string$5"]},
    {"name": "NUM$string$1", "symbols": [{"literal":"5"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUM", "symbols": ["NUM$string$1"]},
    {"name": "NUM", "symbols": [{"literal":"2","pos":488}]},
    {"name": "NUM$string$2", "symbols": [{"literal":"1"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUM", "symbols": ["NUM$string$2"]},
    {"name": "NUM$string$3", "symbols": [{"literal":"4"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUM", "symbols": ["NUM$string$3"]},
    {"name": "NUM$string$4", "symbols": [{"literal":"9"}, {"literal":"9"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NUM", "symbols": ["NUM$string$4"]},
    {"name": "TIME$string$1", "symbols": [{"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$1"]},
    {"name": "TIME$string$2", "symbols": [{"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$2"]},
    {"name": "TIME$string$3", "symbols": [{"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"t"}, {"literal":"h"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$3"]},
    {"name": "PATIENT$string$1", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PATIENT$string$2", "symbols": [{"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"o"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"s"}, {"literal":"u"}, {"literal":"d"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PATIENT", "symbols": ["PATIENT$string$1", "NUM", "PATIENT$string$2", "SYMPTOMS"]},
    {"name": "SYMPTOMS$string$1", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"a"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SYMPTOMS", "symbols": ["SYMPTOMS$string$1", "SYMPTOMS"]},
    {"name": "SYMPTOMS$string$2", "symbols": [{"literal":"n"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":"a"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SYMPTOMS", "symbols": ["SYMPTOMS$string$2", "SYMPTOMS"]},
    {"name": "SYMPTOMS$string$3", "symbols": [{"literal":"j"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SYMPTOMS", "symbols": ["SYMPTOMS$string$3", "SYMPTOMS"]},
    {"name": "SYMPTOMS$string$4", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"e"}, {"literal":"y"}, {"literal":"e"}, {"literal":"s"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SYMPTOMS", "symbols": ["SYMPTOMS$string$4", "SYMPTOMS"]},
    {"name": "SYMPTOMS$string$5", "symbols": [{"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"r"}, {"literal":"o"}, {"literal":"r"}, {"literal":"s"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SYMPTOMS", "symbols": ["SYMPTOMS$string$5", "SYMPTOMS"]},
    {"name": "SYMPTOMS$string$6", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SYMPTOMS", "symbols": ["SYMPTOMS$string$6"]},
    {"name": "SYMPTOMS$string$7", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"g"}, {"literal":"u"}, {"literal":"e"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SYMPTOMS", "symbols": ["SYMPTOMS$string$7"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();