// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["STATEMENT", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["INQUIRY", {"literal":"?","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "INQUIRY$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY", "symbols": ["INQUIRY$string$1", "_", "IMPORTANT"]},
    {"name": "INQUIRY$string$2", "symbols": [{"literal":"d"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRY", "symbols": ["INQUIRYWORD", "_", "STUFF", "_", "IMPORTANT", "_", "INQUIRY$string$2"]},
    {"name": "INQUIRYWORD$string$1", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRYWORD", "symbols": ["INQUIRYWORD$string$1"]},
    {"name": "INQUIRYWORD$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INQUIRYWORD", "symbols": ["INQUIRYWORD$string$2"]},
    {"name": "STATEMENT", "symbols": ["COOLSTUFF", "_", "IMPORTANT", "_", "ACTIONING", "_", "PLACES"]},
    {"name": "STUFF$string$1", "symbols": [{"literal":"I"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STUFF", "symbols": ["STUFF$string$1"]},
    {"name": "STUFF$string$2", "symbols": [{"literal":"S"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STUFF", "symbols": ["STUFF$string$2"]},
    {"name": "STUFF$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STUFF", "symbols": ["STUFF$string$3"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2", "_", "IMPORTANT"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"i"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "ACTION$string$4", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$4"]},
    {"name": "ACTION$string$5", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"f"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$5"]},
    {"name": "ACTIONING$string$1", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONING", "symbols": ["ACTIONING$string$1"]},
    {"name": "ACTIONING$string$2", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONING", "symbols": ["ACTIONING$string$2"]},
    {"name": "ACTIONING$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONING", "symbols": ["ACTIONING$string$3"]},
    {"name": "ACTIONING$string$4", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONING", "symbols": ["ACTIONING$string$4"]},
    {"name": "COOLSTUFF$string$1", "symbols": [{"literal":"I"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COOLSTUFF", "symbols": ["COOLSTUFF$string$1", "_", "IMPORTANT"]},
    {"name": "COOLSTUFF$string$2", "symbols": [{"literal":"Y"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COOLSTUFF", "symbols": ["COOLSTUFF$string$2", "_", "COOLSTUFF"]},
    {"name": "COOLSTUFF$string$3", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"o"}, {"literal":" "}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COOLSTUFF", "symbols": ["COOLSTUFF$string$3"]},
    {"name": "COOLSTUFF$string$4", "symbols": [{"literal":"A"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COOLSTUFF", "symbols": ["COOLSTUFF$string$4", "_", "COOLSTUFF"]},
    {"name": "COOLSTUFF$string$5", "symbols": [{"literal":"F"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COOLSTUFF", "symbols": ["COOLSTUFF$string$5", "_", "COOLSTUFF"]},
    {"name": "IMPORTANT$string$1", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"g"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IMPORTANT", "symbols": ["IMPORTANT$string$1"]},
    {"name": "IMPORTANT$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"f"}, {"literal":"c"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IMPORTANT", "symbols": ["IMPORTANT$string$2"]},
    {"name": "IMPORTANT$string$3", "symbols": [{"literal":"T"}, {"literal":"H"}, {"literal":"E"}, {"literal":" "}, {"literal":"B"}, {"literal":"O"}, {"literal":"O"}, {"literal":"K"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IMPORTANT", "symbols": ["IMPORTANT$string$3"]},
    {"name": "IMPORTANT$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"c"}, {"literal":"i"}, {"literal":"e"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "IMPORTANT", "symbols": ["IMPORTANT$string$4"]},
    {"name": "PLACES$string$1", "symbols": [{"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$1"]},
    {"name": "PLACES$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"c"}, {"literal":"r"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$2"]},
    {"name": "PLACES$string$3", "symbols": [{"literal":"g"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$3"]},
    {"name": "PLACES$string$4", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"1"}, {"literal":"0"}, {"literal":"1"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLACES", "symbols": ["PLACES$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
