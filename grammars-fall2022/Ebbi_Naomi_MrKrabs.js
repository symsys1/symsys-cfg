// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["INTERJECTION", {"literal":"!","pos":6}, "_", "MAIN"]},
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":16}]},
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":"!","pos":22}]},
    {"name": "MAIN", "symbols": ["MAIN", "_", "EMOJI"]},
    {"name": "EMOJI", "symbols": ["EMOJI", "EMOJI"]},
    {"name": "EMOJI$string$1", "symbols": [{"literal":"\ud83d"}, {"literal":"\udcb5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMOJI", "symbols": ["EMOJI$string$1"]},
    {"name": "EMOJI$string$2", "symbols": [{"literal":"\ud83d"}, {"literal":"\udcb0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMOJI", "symbols": ["EMOJI$string$2"]},
    {"name": "EMOJI$string$3", "symbols": [{"literal":"\ud83d"}, {"literal":"\udcb8"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMOJI", "symbols": ["EMOJI$string$3"]},
    {"name": "EMOJI$string$4", "symbols": [{"literal":"\ud83e"}, {"literal":"\udd11"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMOJI", "symbols": ["EMOJI$string$4"]},
    {"name": "EMOJI$string$5", "symbols": [{"literal":"\ud83c"}, {"literal":"\udf54"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EMOJI", "symbols": ["EMOJI$string$5"]},
    {"name": "_", "symbols": [{"literal":" ","pos":64}]},
    {"name": "INTERJECTION$string$1", "symbols": [{"literal":"A"}, {"literal":"h"}, {"literal":"o"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$1"]},
    {"name": "INTERJECTION$string$2", "symbols": [{"literal":"S"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"P"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$2"]},
    {"name": "INTERJECTION$string$3", "symbols": [{"literal":"M"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$3"]},
    {"name": "INTERJECTION$string$4", "symbols": [{"literal":"B"}, {"literal":"o"}, {"literal":"y"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$4"]},
    {"name": "INTERJECTION$string$5", "symbols": [{"literal":"H"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$5"]},
    {"name": "INTERJECTION$string$6", "symbols": [{"literal":"S"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"D"}, {"literal":"a"}, {"literal":"v"}, {"literal":"y"}, {"literal":" "}, {"literal":"J"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$6"]},
    {"name": "INTERJECTION$string$7", "symbols": [{"literal":"L"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$7", "_", "INSULT"]},
    {"name": "INTERJECTION$string$8", "symbols": [{"literal":"M"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"y"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"y"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"y"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"y"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$8"]},
    {"name": "INTERJECTION$string$9", "symbols": [{"literal":"T"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"u"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$9"]},
    {"name": "INTERJECTION$string$10", "symbols": [{"literal":"B"}, {"literal":"a"}, {"literal":"r"}, {"literal":"n"}, {"literal":"a"}, {"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$10"]},
    {"name": "INTERJECTION$string$11", "symbols": [{"literal":"F"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$11"]},
    {"name": "INTERJECTION$string$12", "symbols": [{"literal":"D"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":" "}, {"literal":"N"}, {"literal":"e"}, {"literal":"p"}, {"literal":"t"}, {"literal":"u"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$12"]},
    {"name": "INTERJECTION$string$13", "symbols": [{"literal":"F"}, {"literal":"l"}, {"literal":"i"}, {"literal":"p"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"'"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$13"]},
    {"name": "INTERJECTION$string$14", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"D"}, {"literal":"a"}, {"literal":"v"}, {"literal":"y"}, {"literal":" "}, {"literal":"J"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"'"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$14"]},
    {"name": "INTERJECTION$string$15", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"c"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$15"]},
    {"name": "INTERJECTION$string$16", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"r"}, {"literal":"n"}, {"literal":"a"}, {"literal":"c"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INTERJECTION", "symbols": ["INTERJECTION$string$16"]},
    {"name": "SENTENCE", "symbols": ["PRONOUNVERBPAIR", "_", "INGFORM", "_", "ARTICLE", "_", "OBJECT"]},
    {"name": "SENTENCE", "symbols": ["INTERJECTION", "_", {"literal":"—","pos":160}, "_", "VERB", "_", "ARTICLE", "_", "OBJECT", {"literal":",","pos":174}, "_", "SUBJECT"]},
    {"name": "PRONOUNVERBPAIR$string$1", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"a"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUNVERBPAIR", "symbols": ["PRONOUNVERBPAIR$string$1"]},
    {"name": "PRONOUNVERBPAIR$string$2", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUNVERBPAIR", "symbols": ["PRONOUNVERBPAIR$string$2"]},
    {"name": "PRONOUNVERBPAIR$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUNVERBPAIR", "symbols": ["PRONOUNVERBPAIR$string$3"]},
    {"name": "PRONOUNVERBPAIR$string$4", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRONOUNVERBPAIR", "symbols": ["PRONOUNVERBPAIR$string$4"]},
    {"name": "SUBJECT", "symbols": ["INSULT"]},
    {"name": "SUBJECT$string$1", "symbols": [{"literal":"S"}, {"literal":"p"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"b"}, {"literal":"o"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$1"]},
    {"name": "SUBJECT$string$2", "symbols": [{"literal":"S"}, {"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"J"}, {"literal":"."}, {"literal":" "}, {"literal":"P"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"k"}, {"literal":"t"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$2"]},
    {"name": "SUBJECT$string$3", "symbols": [{"literal":"P"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$3"]},
    {"name": "SUBJECT$string$4", "symbols": [{"literal":"S"}, {"literal":"p"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"b"}, {"literal":"o"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$4"]},
    {"name": "SUBJECT$string$5", "symbols": [{"literal":"L"}, {"literal":"a"}, {"literal":"z"}, {"literal":"y"}, {"literal":"P"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$5"]},
    {"name": "SUBJECT$string$6", "symbols": [{"literal":"S"}, {"literal":"q"}, {"literal":"u"}, {"literal":"i"}, {"literal":"d"}, {"literal":"w"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$6"]},
    {"name": "SUBJECT$string$7", "symbols": [{"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"v"}, {"literal":"o"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"y"}, {"literal":"c"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUBJECT", "symbols": ["SUBJECT$string$7"]},
    {"name": "INSULT$string$1", "symbols": [{"literal":"y"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INSULT", "symbols": ["INSULT$string$1", "_", "INSULT"]},
    {"name": "INSULT$string$2", "symbols": [{"literal":"k"}, {"literal":"e"}, {"literal":"l"}, {"literal":"p"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INSULT", "symbols": ["INSULT$string$2"]},
    {"name": "INSULT$string$3", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"r"}, {"literal":"n"}, {"literal":"a"}, {"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INSULT", "symbols": ["INSULT$string$3"]},
    {"name": "INSULT$string$4", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"t"}, {"literal":"t"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INSULT", "symbols": ["INSULT$string$4"]},
    {"name": "INSULT$string$5", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"t"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"r"}, {"literal":"n"}, {"literal":"a"}, {"literal":"c"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INSULT", "symbols": ["INSULT$string$5"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5"]},
    {"name": "ARTICLE$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTICLE", "symbols": ["ARTICLE$string$1"]},
    {"name": "ARTICLE$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTICLE", "symbols": ["ARTICLE$string$2"]},
    {"name": "ARTICLE$string$3", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTICLE", "symbols": ["ARTICLE$string$3"]},
    {"name": "ARTICLE$string$4", "symbols": [{"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTICLE", "symbols": ["ARTICLE$string$4"]},
    {"name": "OBJECT$string$1", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$1"]},
    {"name": "OBJECT$string$2", "symbols": [{"literal":"K"}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"y"}, {"literal":" "}, {"literal":"K"}, {"literal":"r"}, {"literal":"a"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$2"]},
    {"name": "OBJECT$string$3", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"u"}, {"literal":"l"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$3"]},
    {"name": "OBJECT$string$4", "symbols": [{"literal":"K"}, {"literal":"r"}, {"literal":"a"}, {"literal":"b"}, {"literal":"b"}, {"literal":"y"}, {"literal":" "}, {"literal":"P"}, {"literal":"a"}, {"literal":"t"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$4"]},
    {"name": "OBJECT$string$5", "symbols": [{"literal":"C"}, {"literal":"h"}, {"literal":"u"}, {"literal":"m"}, {"literal":" "}, {"literal":"B"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$5"]},
    {"name": "INGFORM$string$1", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$1"]},
    {"name": "INGFORM$string$2", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$2"]},
    {"name": "INGFORM$string$3", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$3"]},
    {"name": "INGFORM$string$4", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$4"]},
    {"name": "INGFORM$string$5", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INGFORM", "symbols": ["INGFORM$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
