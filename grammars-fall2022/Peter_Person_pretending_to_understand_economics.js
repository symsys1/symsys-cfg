// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["STATEMENT"]},
    {"name": "MAIN", "symbols": ["CONDESCENSION"]},
    {"name": "MAIN", "symbols": ["SHOWOFF"]},
    {"name": "STATEMENT", "symbols": ["SENTENCE", {"literal":".","pos":20}, "_", "REMARK"]},
    {"name": "CONDESCENSION", "symbols": ["OPENER", "_", "SENTENCE", {"literal":"?","pos":36}, "_", "CLOSER"]},
    {"name": "SHOWOFF$string$1", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SHOWOFF$string$2", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SHOWOFF", "symbols": ["SHOWOFF$string$1", "_", "SENTENCE", "_", "SHOWOFF$string$2", "_", "STATEMENT"]},
    {"name": "SENTENCE", "symbols": ["CONCEPT", "_", "ACTION"]},
    {"name": "OPENER$string$1", "symbols": [{"literal":"O"}, {"literal":"h"}, {"literal":","}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"d"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"k"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPENER", "symbols": ["OPENER$string$1"]},
    {"name": "OPENER$string$2", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"a"}, {"literal":"w"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPENER", "symbols": ["OPENER$string$2"]},
    {"name": "OPENER$string$3", "symbols": [{"literal":"I"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPENER", "symbols": ["OPENER$string$3"]},
    {"name": "OPENER$string$4", "symbols": [{"literal":"A"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPENER", "symbols": ["OPENER$string$4"]},
    {"name": "CLOSER$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"o"}, {"literal":"l"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOSER", "symbols": ["CLOSER$string$1"]},
    {"name": "CLOSER$string$2", "symbols": [{"literal":"P"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOSER", "symbols": ["CLOSER$string$2"]},
    {"name": "CLOSER$string$3", "symbols": [{"literal":"I"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"k"}, {"literal":"a"}, {"literal":"y"}, {"literal":","}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"e"}, {"literal":"o"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOSER", "symbols": ["CLOSER$string$3"]},
    {"name": "CLOSER$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"s"}, {"literal":"i"}, {"literal":"c"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"f"}, {"literal":"f"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOSER", "symbols": ["CLOSER$string$4"]},
    {"name": "CLOSER$string$5", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"d"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"M"}, {"literal":"B"}, {"literal":"A"}, {"literal":" "}, {"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"?"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOSER", "symbols": ["CLOSER$string$5"]},
    {"name": "CLOSER$string$6", "symbols": [{"literal":"I"}, {"literal":"'"}, {"literal":"m"}, {"literal":" "}, {"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOSER$string$7", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"o"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOSER", "symbols": ["CLOSER$string$6", "_", "CONCEPT", "_", "CLOSER$string$7"]},
    {"name": "CONCEPT$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$1"]},
    {"name": "CONCEPT$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"l"}, {"literal":"i"}, {"literal":"c"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$2"]},
    {"name": "CONCEPT$string$3", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"w"}, {"literal":" "}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"f"}, {"literal":"f"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$3"]},
    {"name": "CONCEPT$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"G"}, {"literal":"D"}, {"literal":"P"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$4"]},
    {"name": "CONCEPT$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"o"}, {"literal":"m"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$5"]},
    {"name": "CONCEPT$string$6", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$6"]},
    {"name": "CONCEPT$string$7", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"s"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"v"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"s"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$7"]},
    {"name": "CONCEPT$string$8", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"s"}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$8"]},
    {"name": "CONCEPT$string$9", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"i"}, {"literal":"g"}, {"literal":"n"}, {"literal":" "}, {"literal":"i"}, {"literal":"m"}, {"literal":"p"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONCEPT", "symbols": ["CONCEPT$string$9"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"b"}, {"literal":"i"}, {"literal":"g"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION$string$4", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3", "_", "PERFORMANCE", "_", "ACTION$string$4"]},
    {"name": "ACTION$string$5", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"g"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$5"]},
    {"name": "ACTION$string$6", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$6", "_", "CONCEPT"]},
    {"name": "ACTION$string$7", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$7", "_", "CONCEPT"]},
    {"name": "ACTION$string$8", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"p"}, {"literal":"p"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$8"]},
    {"name": "REMARK$string$1", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"W"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"S"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"J"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REMARK", "symbols": ["REMARK$string$1"]},
    {"name": "REMARK$string$2", "symbols": [{"literal":"M"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"p"}, {"literal":"p"}, {"literal":"y"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REMARK", "symbols": ["REMARK$string$2"]},
    {"name": "REMARK$string$3", "symbols": [{"literal":"O"}, {"literal":"h"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":","}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REMARK", "symbols": ["REMARK$string$3"]},
    {"name": "REMARK$string$4", "symbols": [{"literal":"T"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"p"}, {"literal":"u"}, {"literal":"m"}, {"literal":"p"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"d"}, {"literal":"u"}, {"literal":"m"}, {"literal":"p"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REMARK", "symbols": ["REMARK$string$4"]},
    {"name": "REMARK$string$5", "symbols": [{"literal":"A"}, {"literal":"l"}, {"literal":"s"}, {"literal":"o"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REMARK", "symbols": ["REMARK$string$5", "STATEMENT"]},
    {"name": "REMARK$string$6", "symbols": [{"literal":"U"}, {"literal":"n"}, {"literal":"l"}, {"literal":"i"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REMARK$string$7", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REMARK", "symbols": ["REMARK$string$6", "_", "CONCEPT", "_", "REMARK$string$7"]},
    {"name": "REMARK$string$8", "symbols": [{"literal":"S"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"u"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"'"}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REMARK$string$9", "symbols": [{"literal":"!"}, {"literal":"'"}, {"literal":"'"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REMARK", "symbols": ["REMARK$string$8", "CONCEPT", "REMARK$string$9"]},
    {"name": "PERFORMANCE$string$1", "symbols": [{"literal":"2"}, {"literal":"0"}, {"literal":"0"}, {"literal":" "}, {"literal":"b"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERFORMANCE", "symbols": ["PERFORMANCE$string$1"]},
    {"name": "PERFORMANCE$string$2", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"a"}, {"literal":"c"}, {"literal":"t"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"e"}, {"literal":"x"}, {"literal":"p"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERFORMANCE", "symbols": ["PERFORMANCE$string$2"]},
    {"name": "PERFORMANCE$string$3", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"f"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERFORMANCE", "symbols": ["PERFORMANCE$string$3"]},
    {"name": "PERFORMANCE$string$4", "symbols": [{"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"e"}, {"literal":"n"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PERFORMANCE", "symbols": ["PERFORMANCE$string$4"]},
    {"name": "_", "symbols": [{"literal":" ","pos":271}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
