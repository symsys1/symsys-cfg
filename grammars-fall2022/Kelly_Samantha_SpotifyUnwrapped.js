// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "PRESENT", "_", "ADJ", "_", "TYPES", "_", "QUESTION$string$1"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"b"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "PRESENT", "_", "ADJ", "_", "TYPES", "_", "QUESTION$string$2"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["PRESENT", "_", "ADJ", "_", "SENTENCE$string$1", "_", "VERB", "_", "ARTISTS"]},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"o"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$2", "_", "PAST", "_", "OTHER", "_", "MUSIC"]},
    {"name": "SENTENCE", "symbols": ["PAST", "_", "GERUND", "_", "MUSIC"]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"o"}, {"literal":" "}, {"literal":"h"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "PRESENT$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PRESENT", "symbols": ["PRESENT$string$1"]},
    {"name": "PAST$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PAST", "symbols": ["PAST$string$1"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1", "_", "GERUND"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"m"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "GERUND$string$5", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$5"]},
    {"name": "GERUND$string$6", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"m"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$6"]},
    {"name": "OTHER$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}, {"literal":" "}, {"literal":"0"}, {"literal":"."}, {"literal":"5"}, {"literal":"%"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OTHER", "symbols": ["OTHER$string$1"]},
    {"name": "OTHER$string$2", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OTHER", "symbols": ["OTHER$string$2"]},
    {"name": "OTHER$string$3", "symbols": [{"literal":"a"}, {"literal":"g"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OTHER", "symbols": ["OTHER$string$3"]},
    {"name": "OTHER$string$4", "symbols": [{"literal":"o"}, {"literal":"b"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OTHER", "symbols": ["OTHER$string$4"]},
    {"name": "OTHER$string$5", "symbols": [{"literal":"o"}, {"literal":"n"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}, {"literal":" "}, {"literal":"p"}, {"literal":"e"}, {"literal":"o"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OTHER", "symbols": ["OTHER$string$5", "_", "VERB"]},
    {"name": "ADJ$string$1", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$1"]},
    {"name": "ADJ$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"v"}, {"literal":"o"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$2"]},
    {"name": "ADJ$string$3", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"p"}, {"literal":"u"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$3"]},
    {"name": "ADJ$string$4", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJ", "symbols": ["ADJ$string$4"]},
    {"name": "MUSIC", "symbols": ["GENRE", "_", "EXTRA"]},
    {"name": "MUSIC", "symbols": ["ARTISTS", "_", "EXTRA"]},
    {"name": "TYPES$string$1", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TYPES", "symbols": ["TYPES$string$1"]},
    {"name": "TYPES$string$2", "symbols": [{"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TYPES", "symbols": ["TYPES$string$2"]},
    {"name": "TYPES$string$3", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TYPES", "symbols": ["TYPES$string$3"]},
    {"name": "TYPES$string$4", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"i"}, {"literal":"c"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TYPES", "symbols": ["TYPES$string$4"]},
    {"name": "GENRE$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENRE", "symbols": ["GENRE$string$1"]},
    {"name": "GENRE$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"i"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENRE", "symbols": ["GENRE$string$2"]},
    {"name": "GENRE$string$3", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"g"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENRE", "symbols": ["GENRE$string$3"]},
    {"name": "GENRE$string$4", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"y"}, {"literal":" "}, {"literal":"v"}, {"literal":"i"}, {"literal":"b"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"l"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENRE", "symbols": ["GENRE$string$4"]},
    {"name": "GENRE$string$5", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GENRE", "symbols": ["GENRE$string$5"]},
    {"name": "ARTISTS$string$1", "symbols": [{"literal":"J"}, {"literal":"."}, {"literal":" "}, {"literal":"C"}, {"literal":"o"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTISTS", "symbols": ["ARTISTS$string$1"]},
    {"name": "ARTISTS$string$2", "symbols": [{"literal":"S"}, {"literal":"Z"}, {"literal":"A"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTISTS", "symbols": ["ARTISTS$string$2"]},
    {"name": "ARTISTS$string$3", "symbols": [{"literal":"D"}, {"literal":"r"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTISTS", "symbols": ["ARTISTS$string$3"]},
    {"name": "ARTISTS$string$4", "symbols": [{"literal":"M"}, {"literal":"o"}, {"literal":"r"}, {"literal":"g"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"W"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTISTS", "symbols": ["ARTISTS$string$4"]},
    {"name": "ARTISTS$string$5", "symbols": [{"literal":"A"}, {"literal":"d"}, {"literal":"e"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ARTISTS", "symbols": ["ARTISTS$string$5"]},
    {"name": "EXTRA$string$1", "symbols": [{"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXTRA", "symbols": ["EXTRA$string$1", "_", "EXTRA"]},
    {"name": "EXTRA$string$2", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXTRA", "symbols": ["EXTRA$string$2"]},
    {"name": "EXTRA$string$3", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXTRA", "symbols": ["EXTRA$string$3"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
