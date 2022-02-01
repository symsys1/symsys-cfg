// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["EVENT", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["OPPORTUNITY", {"literal":".","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "EVENT", "symbols": ["TOPIC", "_", "TYPE"]},
    {"name": "TOPIC$string$1", "symbols": [{"literal":"C"}, {"literal":"S"}, {"literal":" "}, {"literal":"D"}, {"literal":"e"}, {"literal":"s"}, {"literal":"i"}, {"literal":"g"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$1"]},
    {"name": "TOPIC$string$2", "symbols": [{"literal":"E"}, {"literal":"n"}, {"literal":"v"}, {"literal":"i"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"E"}, {"literal":"n"}, {"literal":"g"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"F"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$2"]},
    {"name": "TOPIC$string$3", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"c"}, {"literal":"h"}, {"literal":"E"}, {"literal":" "}, {"literal":"M"}, {"literal":"a"}, {"literal":"j"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$3"]},
    {"name": "TOPIC$string$4", "symbols": [{"literal":"G"}, {"literal":"S"}, {"literal":"B"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$4"]},
    {"name": "TOPIC$string$5", "symbols": [{"literal":"F"}, {"literal":"L"}, {"literal":"I"}, {"literal":"P"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$5"]},
    {"name": "TOPIC$string$6", "symbols": [{"literal":"L"}, {"literal":"e"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"S"}, {"literal":"c"}, {"literal":"h"}, {"literal":"o"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"s"}, {"literal":" "}, {"literal":"P"}, {"literal":"r"}, {"literal":"o"}, {"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TOPIC", "symbols": ["TOPIC$string$6"]},
    {"name": "TYPE$string$1", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":"b"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TYPE", "symbols": ["TYPE$string$1"]},
    {"name": "TYPE$string$2", "symbols": [{"literal":"I"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"S"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TYPE", "symbols": ["TYPE$string$2"]},
    {"name": "TYPE$string$3", "symbols": [{"literal":"S"}, {"literal":"p"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"S"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TYPE", "symbols": ["TYPE$string$3"]},
    {"name": "TYPE$string$4", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TYPE", "symbols": ["TYPE$string$4"]},
    {"name": "TYPE$string$5", "symbols": [{"literal":"W"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TYPE", "symbols": ["TYPE$string$5"]},
    {"name": "TYPE$string$6", "symbols": [{"literal":"P"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":"d"}, {"literal":"o"}, {"literal":"c"}, {"literal":" "}, {"literal":"P"}, {"literal":"a"}, {"literal":"n"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TYPE", "symbols": ["TYPE$string$6"]},
    {"name": "OPPORTUNITY", "symbols": ["EMPHASIS", "_", "ACTION", "_", "ACTIVITY"]},
    {"name": "OPPORTUNITY", "symbols": ["ACTION", "_", "ACTIVITY"]},
    {"name": "ACTIVITY", "symbols": ["ORG", "_", "OPTYPE"]},
    {"name": "ORG$string$1", "symbols": [{"literal":"B"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"C"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"u"}, {"literal":"l"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"G"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"p"}, {"literal":"’"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ORG", "symbols": ["ORG$string$1"]},
    {"name": "ORG$string$2", "symbols": [{"literal":"A"}, {"literal":"S"}, {"literal":"E"}, {"literal":"S"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ORG", "symbols": ["ORG$string$2"]},
    {"name": "ORG$string$3", "symbols": [{"literal":"C"}, {"literal":"S"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"S"}, {"literal":"o"}, {"literal":"c"}, {"literal":"i"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ORG", "symbols": ["ORG$string$3"]},
    {"name": "ORG$string$4", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"V"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"”"}, {"literal":" "}, {"literal":"|"}, {"literal":" "}, {"literal":"O"}, {"literal":"R"}, {"literal":"G"}, {"literal":" "}, {"literal":"_"}, {"literal":" "}, {"literal":"“"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ORG", "symbols": ["ORG$string$4", "_", "ORG"]},
    {"name": "EMPHASIS$string$1", "symbols": [{"literal":"["}, {"literal":"A"}, {"literal":"C"}, {"literal":"T"}, {"literal":"I"}, {"literal":"O"}, {"literal":"N"}, {"literal":" "}, {"literal":"R"}, {"literal":"E"}, {"literal":"Q"}, {"literal":"U"}, {"literal":"E"}, {"literal":"S"}, {"literal":"T"}, {"literal":"E"}, {"literal":"D"}, {"literal":"]"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIS", "symbols": ["EMPHASIS$string$1"]},
    {"name": "EMPHASIS$string$2", "symbols": [{"literal":"["}, {"literal":"A"}, {"literal":"C"}, {"literal":"T"}, {"literal":"I"}, {"literal":"O"}, {"literal":"N"}, {"literal":" "}, {"literal":"R"}, {"literal":"E"}, {"literal":"Q"}, {"literal":"U"}, {"literal":"I"}, {"literal":"R"}, {"literal":"E"}, {"literal":"D"}, {"literal":"]"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIS", "symbols": ["EMPHASIS$string$2"]},
    {"name": "EMPHASIS$string$3", "symbols": [{"literal":"["}, {"literal":"I"}, {"literal":"M"}, {"literal":"P"}, {"literal":"O"}, {"literal":"R"}, {"literal":"T"}, {"literal":"A"}, {"literal":"N"}, {"literal":"T"}, {"literal":"]"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIS", "symbols": ["EMPHASIS$string$3"]},
    {"name": "EMPHASIS$string$4", "symbols": [{"literal":"["}, {"literal":"3"}, {"literal":" "}, {"literal":"D"}, {"literal":"A"}, {"literal":"Y"}, {"literal":"S"}, {"literal":" "}, {"literal":"L"}, {"literal":"E"}, {"literal":"F"}, {"literal":"T"}, {"literal":"]"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMPHASIS", "symbols": ["EMPHASIS$string$4"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"A"}, {"literal":"p"}, {"literal":"p"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"A"}, {"literal":"p"}, {"literal":"p"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"D"}, {"literal":"r"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":","}, {"literal":" "}, {"literal":"I"}, {"literal":"m"}, {"literal":"p"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"H"}, {"literal":"e"}, {"literal":"l"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"E"}, {"literal":"n"}, {"literal":"r"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4"]},
    {"name": "ACTION$string$5", "symbols": [{"literal":"T"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$5"]},
    {"name": "ACTION$string$6", "symbols": [{"literal":"S"}, {"literal":"i"}, {"literal":"g"}, {"literal":"n"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$6"]},
    {"name": "OPTYPE$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPTYPE", "symbols": ["OPTYPE$string$1"]},
    {"name": "OPTYPE$string$2", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPTYPE", "symbols": ["OPTYPE$string$2"]},
    {"name": "OPTYPE$string$3", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"m"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPTYPE", "symbols": ["OPTYPE$string$3"]},
    {"name": "OPTYPE$string$4", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPTYPE", "symbols": ["OPTYPE$string$4"]},
    {"name": "OPTYPE$string$5", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"S"}, {"literal":"e"}, {"literal":"r"}, {"literal":"v"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPTYPE", "symbols": ["OPTYPE$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
