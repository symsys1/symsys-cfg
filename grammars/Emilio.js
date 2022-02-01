// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["RAMBLING", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["SMEAGLEEMERGING", {"literal":"!","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "RAMBLING$string$1", "symbols": [{"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "RAMBLING$subexpression$1", "symbols": ["REASONFORLIVING"]},
    {"name": "RAMBLING$subexpression$1", "symbols": [{"literal":",","pos":44}, "_", "GIBBERISH"]},
    {"name": "RAMBLING", "symbols": ["GIBBERISH", "_", "HATE", "_", "WRONGDOINGSTOGOLLUM", "_", "RAMBLING$string$1", "RAMBLING$subexpression$1"]},
    {"name": "SMEAGLEEMERGING$string$1", "symbols": [{"literal":"S"}, {"literal":"m"}, {"literal":"e"}, {"literal":"a"}, {"literal":"g"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SMEAGLEEMERGING$subexpression$1", "symbols": ["REASONFORLIVING"]},
    {"name": "SMEAGLEEMERGING$subexpression$1$subexpression$1$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SMEAGLEEMERGING$subexpression$1$subexpression$1", "symbols": ["SMEAGLEEMERGING$subexpression$1$subexpression$1$string$1", "SMEAGLEEMERGING"]},
    {"name": "SMEAGLEEMERGING$subexpression$1", "symbols": ["SMEAGLEEMERGING$subexpression$1$subexpression$1"]},
    {"name": "SMEAGLEEMERGING", "symbols": ["SMEAGLEEMERGING$string$1", "GOODDOING", "_", "GOLLUMACTION", "_", "HATE", "_", "SMEAGLEEMERGING$subexpression$1"]},
    {"name": "REASONFORLIVING$string$1", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"P"}, {"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"i"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REASONFORLIVING", "symbols": ["REASONFORLIVING$string$1"]},
    {"name": "REASONFORLIVING$string$2", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"L"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REASONFORLIVING", "symbols": ["REASONFORLIVING$string$2"]},
    {"name": "REASONFORLIVING$string$3", "symbols": [{"literal":","}, {"literal":" "}, {"literal":"M"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "REASONFORLIVING", "symbols": ["REASONFORLIVING$string$3"]},
    {"name": "GIBBERISH$string$1", "symbols": [{"literal":"o"}, {"literal":"h"}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GIBBERISH", "symbols": ["GIBBERISH$string$1"]},
    {"name": "GIBBERISH$string$2", "symbols": [{"literal":"G"}, {"literal":"O"}, {"literal":"L"}, {"literal":"L"}, {"literal":"U"}, {"literal":"M"}, {"literal":","}, {"literal":" "}, {"literal":"G"}, {"literal":"O"}, {"literal":"L"}, {"literal":"L"}, {"literal":"U"}, {"literal":"M"}, {"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GIBBERISH", "symbols": ["GIBBERISH$string$2"]},
    {"name": "GIBBERISH$string$3", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"n"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GIBBERISH", "symbols": ["GIBBERISH$string$3"]},
    {"name": "GIBBERISH$string$4", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"s"}, {"literal":","}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"s"}, {"literal":","}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"s"}, {"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GIBBERISH", "symbols": ["GIBBERISH$string$4"]},
    {"name": "GIBBERISH$string$5", "symbols": [{"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"l"}, {"literal":"t"}, {"literal":"h"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GIBBERISH", "symbols": ["GIBBERISH$string$5"]},
    {"name": "HATE$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"b"}, {"literal":"b"}, {"literal":"i"}, {"literal":"t"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HATE", "symbols": ["HATE$string$1"]},
    {"name": "HATE$string$2", "symbols": [{"literal":"c"}, {"literal":"h"}, {"literal":"i"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HATE", "symbols": ["HATE$string$2"]},
    {"name": "HATE$string$3", "symbols": [{"literal":"o"}, {"literal":"r"}, {"literal":"c"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HATE", "symbols": ["HATE$string$3"]},
    {"name": "HATE$string$4", "symbols": [{"literal":"B"}, {"literal":"a"}, {"literal":"g"}, {"literal":"g"}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "HATE", "symbols": ["HATE$string$4"]},
    {"name": "GOLLUMACTION$string$1", "symbols": [{"literal":"k"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOLLUMACTION", "symbols": ["GOLLUMACTION$string$1"]},
    {"name": "GOLLUMACTION$string$2", "symbols": [{"literal":"e"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOLLUMACTION", "symbols": ["GOLLUMACTION$string$2"]},
    {"name": "GOLLUMACTION$string$3", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"c"}, {"literal":"e"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOLLUMACTION", "symbols": ["GOLLUMACTION$string$3"]},
    {"name": "GOLLUMACTION$string$4", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOLLUMACTION", "symbols": ["GOLLUMACTION$string$4"]},
    {"name": "GOLLUMACTION$string$5", "symbols": [{"literal":"h"}, {"literal":"u"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOLLUMACTION", "symbols": ["GOLLUMACTION$string$5"]},
    {"name": "WRONGDOINGSTOGOLLUM$string$1", "symbols": [{"literal":"h"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WRONGDOINGSTOGOLLUM", "symbols": ["WRONGDOINGSTOGOLLUM$string$1"]},
    {"name": "WRONGDOINGSTOGOLLUM$string$2", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WRONGDOINGSTOGOLLUM", "symbols": ["WRONGDOINGSTOGOLLUM$string$2"]},
    {"name": "WRONGDOINGSTOGOLLUM$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WRONGDOINGSTOGOLLUM", "symbols": ["WRONGDOINGSTOGOLLUM$string$3"]},
    {"name": "WRONGDOINGSTOGOLLUM$string$4", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WRONGDOINGSTOGOLLUM", "symbols": ["WRONGDOINGSTOGOLLUM$string$4"]},
    {"name": "GOODDOING$string$1", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOODDOING", "symbols": ["GOODDOING$string$1"]},
    {"name": "GOODDOING$string$2", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOODDOING", "symbols": ["GOODDOING$string$2"]},
    {"name": "GOODDOING$string$3", "symbols": [{"literal":"w"}, {"literal":"o"}, {"literal":"u"}, {"literal":"l"}, {"literal":"d"}, {"literal":"n"}, {"literal":"'"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOODDOING", "symbols": ["GOODDOING$string$3"]},
    {"name": "GOODDOING$subexpression$1$string$1", "symbols": [{"literal":"s"}, {"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"s"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"i"}, {"literal":"o"}, {"literal":"u"}, {"literal":"s"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GOODDOING$subexpression$1", "symbols": ["GOODDOING$subexpression$1$string$1", "GOODDOING"]},
    {"name": "GOODDOING", "symbols": ["GOODDOING$subexpression$1"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
