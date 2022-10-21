// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "YODA", "symbols": ["Inspire", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "Inspire", "symbols": ["Modify", "_", "Sub", "_", "PAction"]},
    {"name": "Inspire$string$1", "symbols": [{"literal":"h"}, {"literal":"m"}, {"literal":"m"}, {"literal":"m"}, {"literal":"m"}, {"literal":"m"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Inspire", "symbols": ["AAction", "_", "Sub", "_", "Inspire$string$1"]},
    {"name": "Modify$string$1", "symbols": [{"literal":"P"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"u"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Modify$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Modify", "symbols": ["Modify$string$1", "_", "Modify$string$2", "_", "Modify"]},
    {"name": "Modify$string$3", "symbols": [{"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Modify", "symbols": ["Modify$string$3"]},
    {"name": "Modify$string$4", "symbols": [{"literal":"I"}, {"literal":"n"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Modify", "symbols": ["Modify$string$4"]},
    {"name": "Modify$string$5", "symbols": [{"literal":"K"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}, {"literal":"g"}, {"literal":"e"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Modify", "symbols": ["Modify$string$5"]},
    {"name": "Modify$string$6", "symbols": [{"literal":"W"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Modify", "symbols": ["Modify$string$6"]},
    {"name": "Modify$string$7", "symbols": [{"literal":"M"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Modify", "symbols": ["Modify$string$7"]},
    {"name": "Sub$string$1", "symbols": [{"literal":"L"}, {"literal":"u"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"k"}, {"literal":"y"}, {"literal":"w"}, {"literal":"a"}, {"literal":"l"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sub", "symbols": ["Sub$string$1"]},
    {"name": "Sub$string$2", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sub", "symbols": ["Sub$string$2"]},
    {"name": "Sub$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sub", "symbols": ["Sub$string$3"]},
    {"name": "Sub$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sub", "symbols": ["Sub$string$4"]},
    {"name": "Sub$string$5", "symbols": [{"literal":"w"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sub", "symbols": ["Sub$string$5"]},
    {"name": "Sub$string$6", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sub", "symbols": ["Sub$string$6"]},
    {"name": "Sub$string$7", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"F"}, {"literal":"o"}, {"literal":"r"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sub", "symbols": ["Sub$string$7"]},
    {"name": "Sub$string$8", "symbols": [{"literal":"D"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"V"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sub", "symbols": ["Sub$string$8"]},
    {"name": "Sub$string$9", "symbols": [{"literal":"A"}, {"literal":" "}, {"literal":"J"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sub", "symbols": ["Sub$string$9"]},
    {"name": "Sub$string$10", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":" "}, {"literal":"s"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Sub", "symbols": ["Sub$string$10"]},
    {"name": "PAction$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PAction", "symbols": ["PAction$string$1"]},
    {"name": "PAction$string$2", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PAction", "symbols": ["PAction$string$2"]},
    {"name": "PAction$string$3", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PAction", "symbols": ["PAction$string$3", "_", "Sub"]},
    {"name": "PAction$string$4", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PAction", "symbols": ["PAction$string$4"]},
    {"name": "PAction$string$5", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PAction", "symbols": ["PAction$string$5", "_", "Sub"]},
    {"name": "PAction$string$6", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PAction", "symbols": ["PAction$string$6", "_", "Sub"]},
    {"name": "AAction$string$1", "symbols": [{"literal":"F"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AAction", "symbols": ["AAction$string$1"]},
    {"name": "AAction$string$2", "symbols": [{"literal":"T"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AAction", "symbols": ["AAction$string$2"]},
    {"name": "AAction$string$3", "symbols": [{"literal":"J"}, {"literal":"u"}, {"literal":"d"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AAction", "symbols": ["AAction$string$3"]}
]
  , ParserStart: "YODA"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
