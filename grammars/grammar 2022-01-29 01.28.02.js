// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["UTTERANCE", {"literal":".","pos":6}]},
    {"name": "UTTERANCE$string$1", "symbols": [{"literal":"I"}, {"literal":"'"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "UTTERANCE$string$2", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "UTTERANCE$string$3", "symbols": [{"literal":"I"}, {"literal":"t"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"s"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"i"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "UTTERANCE", "symbols": ["UTTERANCE$string$1", "_", "RLY", "_", "UTTERANCE$string$2", "_", "BADTHING", {"literal":".","pos":26}, "_", {"literal":"I","pos":30}, "_", "DEFO", "_", "EMP", {"literal":".","pos":40}, "_", "UTTERANCE$string$3", "_", "OKAYTHING"]},
    {"name": "_", "symbols": [{"literal":" ","pos":54}]},
    {"name": "RLY$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RLY", "symbols": ["RLY$string$1"]},
    {"name": "RLY$string$2", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RLY", "symbols": ["RLY", "RLY$string$2"]},
    {"name": "BADTHING$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BADTHING", "symbols": ["BADTHING$string$1"]},
    {"name": "BADTHING$string$2", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"p"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BADTHING", "symbols": ["BADTHING$string$2"]},
    {"name": "BADTHING$string$3", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"'"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BADTHING", "symbols": ["BADTHING$string$3"]},
    {"name": "OKAYTHING$string$1", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"B"}, {"literal":"o"}, {"literal":"r"}, {"literal":"a"}, {"literal":" "}, {"literal":"B"}, {"literal":"o"}, {"literal":"r"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OKAYTHING", "symbols": ["OKAYTHING$string$1"]},
    {"name": "OKAYTHING$string$2", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"A"}, {"literal":"i"}, {"literal":"r"}, {"literal":"P"}, {"literal":"o"}, {"literal":"d"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}, {"literal":"p"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OKAYTHING", "symbols": ["OKAYTHING$string$2"]},
    {"name": "OKAYTHING$string$3", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"L"}, {"literal":"e"}, {"literal":"a"}, {"literal":"g"}, {"literal":"u"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"L"}, {"literal":"e"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OKAYTHING", "symbols": ["OKAYTHING$string$3"]},
    {"name": "OKAYTHING$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"S"}, {"literal":"h"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"h"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OKAYTHING", "symbols": ["OKAYTHING$string$4"]},
    {"name": "OKAYTHING$string$5", "symbols": [{"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"u"}, {"literal":"f"}, {"literal":"f"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"s"}, {"literal":"n"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OKAYTHING", "symbols": ["OKAYTHING$string$5"]},
    {"name": "EMP$string$1", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMP", "symbols": ["EMP$string$1"]},
    {"name": "EMP$string$2", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMP", "symbols": ["EMP$string$2"]},
    {"name": "EMP$string$3", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMP", "symbols": ["EMP$string$3"]},
    {"name": "EMP$string$4", "symbols": [{"literal":"e"}, {"literal":"m"}, {"literal":"p"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"z"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMP", "symbols": ["EMP$string$4"]},
    {"name": "EMP$string$5", "symbols": [{"literal":"s"}, {"literal":"y"}, {"literal":"m"}, {"literal":"p"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"z"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMP", "symbols": ["EMP$string$5"]},
    {"name": "DEFO$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DEFO", "symbols": ["DEFO$string$1"]},
    {"name": "DEFO$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DEFO", "symbols": ["DEFO$string$2"]},
    {"name": "DEFO$string$3", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":" "}, {"literal":"%"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DEFO", "symbols": ["DEFO$string$3"]},
    {"name": "DEFO$string$4", "symbols": [{"literal":"a"}, {"literal":"b"}, {"literal":"s"}, {"literal":"o"}, {"literal":"l"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DEFO", "symbols": ["DEFO$string$4"]},
    {"name": "DEFO$string$5", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"o"}, {"literal":"l"}, {"literal":"e"}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DEFO", "symbols": ["DEFO$string$5"]},
    {"name": "DEFO$string$6", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DEFO", "symbols": ["DEFO$string$6"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
