// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["ULTIMATESPEAK", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "ULTIMATESPEAK$string$1", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ULTIMATESPEAK", "symbols": ["ROLES", "_", "ULTIMATESPEAK$string$1", "_", "COMMAND", "_", "SITUATIONS"]},
    {"name": "ROLES$string$1", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROLES", "symbols": ["ROLES$string$1"]},
    {"name": "ROLES$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROLES", "symbols": ["ROLES$string$2"]},
    {"name": "ROLES$string$3", "symbols": [{"literal":"O"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"m"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ROLES", "symbols": ["ROLES$string$3"]},
    {"name": "COMMAND$string$1", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMMAND", "symbols": ["COMMAND$string$1", "_", "THROW"]},
    {"name": "COMMAND$string$2", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMMAND", "symbols": ["COMMAND$string$2", "_", "POSITION"]},
    {"name": "COMMAND$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMMAND", "symbols": ["COMMAND$string$3", "_", "POSITION"]},
    {"name": "COMMAND$string$4", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COMMAND", "symbols": ["COMMAND$string$4", "_", "THROW"]},
    {"name": "THROW$string$1", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THROW", "symbols": ["RELEASEPOINT", "_", "THROW$string$1"]},
    {"name": "THROW$string$2", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THROW", "symbols": ["RELEASEPOINT", "_", "THROW$string$2"]},
    {"name": "THROW$string$3", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"m"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THROW", "symbols": ["THROW$string$3"]},
    {"name": "THROW$string$4", "symbols": [{"literal":"s"}, {"literal":"c"}, {"literal":"o"}, {"literal":"o"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THROW", "symbols": ["THROW$string$4"]},
    {"name": "POSITION$string$1", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"c"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSITION", "symbols": ["POSITION$string$1"]},
    {"name": "POSITION$string$2", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}, {"literal":" "}, {"literal":"s"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSITION", "symbols": ["POSITION$string$2"]},
    {"name": "POSITION$string$3", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSITION", "symbols": ["POSITION$string$3"]},
    {"name": "POSITION$string$4", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSITION", "symbols": ["POSITION$string$4"]},
    {"name": "POSITION$string$5", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"l"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSITION", "symbols": ["POSITION$string$5"]},
    {"name": "POSITION$string$6", "symbols": [{"literal":"c"}, {"literal":"u"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSITION", "symbols": ["POSITION$string$6"]},
    {"name": "RELEASEPOINT$string$1", "symbols": [{"literal":"h"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"-"}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RELEASEPOINT", "symbols": ["RELEASEPOINT$string$1"]},
    {"name": "RELEASEPOINT$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":"-"}, {"literal":"r"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RELEASEPOINT", "symbols": ["RELEASEPOINT$string$2"]},
    {"name": "RELEASEPOINT$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RELEASEPOINT", "symbols": ["RELEASEPOINT$string$3"]},
    {"name": "RELEASEPOINT$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RELEASEPOINT", "symbols": ["RELEASEPOINT$string$4"]},
    {"name": "SITUATIONS$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":"f"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"n"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATIONS", "symbols": ["SITUATIONS$string$1", "_", "COMMAND"]},
    {"name": "SITUATIONS$string$2", "symbols": [{"literal":"a"}, {"literal":"f"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"h"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATIONS", "symbols": ["SITUATIONS$string$2"]},
    {"name": "SITUATIONS$string$3", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"e"}, {"literal":"s"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SITUATIONS", "symbols": ["SITUATIONS$string$3", "_", "ULTIMATESPEAK"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
