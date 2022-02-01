// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["WARRIORSSENTENCE"]},
    {"name": "WARRIORSSENTENCE", "symbols": ["PLAYER", "MOVE", "FEILDGOAL", "STATS", "GROUNDING"]},
    {"name": "PLAYER$string$1", "symbols": [{"literal":"C"}, {"literal":"u"}, {"literal":"r"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLAYER", "symbols": ["PLAYER$string$1"]},
    {"name": "PLAYER$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLAYER", "symbols": ["PLAYER$string$2"]},
    {"name": "PLAYER$string$3", "symbols": [{"literal":"I"}, {"literal":"g"}, {"literal":"u"}, {"literal":"o"}, {"literal":"d"}, {"literal":"a"}, {"literal":"l"}, {"literal":"a"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLAYER", "symbols": ["PLAYER$string$3"]},
    {"name": "PLAYER$string$4", "symbols": [{"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLAYER", "symbols": ["PLAYER$string$4"]},
    {"name": "MOVE$string$1", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOVE", "symbols": ["MOVE$string$1"]},
    {"name": "MOVE$string$2", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"e"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOVE", "symbols": ["MOVE$string$2"]},
    {"name": "MOVE$string$3", "symbols": [{"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"y"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":"r"}, {"literal":"c"}, {"literal":"h"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOVE", "symbols": ["MOVE$string$3"]},
    {"name": "MOVE$string$4", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"u"}, {"literal":"p"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOVE", "symbols": ["MOVE$string$4"]},
    {"name": "FEILDGOAL$string$1", "symbols": [{"literal":"i"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}, {"literal":"!"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FEILDGOAL", "symbols": ["FEILDGOAL$string$1"]},
    {"name": "FEILDGOAL$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"W"}, {"literal":"A"}, {"literal":"Y"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":"f"}, {"literal":"!"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FEILDGOAL", "symbols": ["FEILDGOAL$string$2"]},
    {"name": "FEILDGOAL$string$3", "symbols": [{"literal":"B"}, {"literal":"A"}, {"literal":"N"}, {"literal":"G"}, {"literal":"!"}, {"literal":" "}, {"literal":"I"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}, {"literal":"!"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FEILDGOAL", "symbols": ["FEILDGOAL$string$3"]},
    {"name": "FEILDGOAL$string$4", "symbols": [{"literal":"B"}, {"literal":"L"}, {"literal":"O"}, {"literal":"C"}, {"literal":"K"}, {"literal":"E"}, {"literal":"D"}, {"literal":" "}, {"literal":"B"}, {"literal":"Y"}, {"literal":" "}, {"literal":"J"}, {"literal":"A"}, {"literal":"M"}, {"literal":"E"}, {"literal":"S"}, {"literal":"!"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "FEILDGOAL", "symbols": ["FEILDGOAL$string$4"]},
    {"name": "STATS$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"f"}, {"literal":"i"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"."}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATS", "symbols": ["STATS$string$1"]},
    {"name": "STATS$string$2", "symbols": [{"literal":"H"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"3"}, {"literal":"6"}, {"literal":"%"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":"."}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATS", "symbols": ["STATS$string$2"]},
    {"name": "GROUNDING$string$1", "symbols": [{"literal":"I"}, {"literal":"n"}, {"literal":" "}, {"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"o"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GROUNDING", "symbols": ["GROUNDING$string$1", "GROUNDING"]},
    {"name": "GROUNDING$string$2", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"y"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GROUNDING", "symbols": ["GROUNDING$string$2"]},
    {"name": "GROUNDING$string$3", "symbols": [{"literal":"I"}, {"literal":" "}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"C"}, {"literal":"o"}, {"literal":"a"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"K"}, {"literal":"e"}, {"literal":"r"}, {"literal":"r"}, {"literal":" "}, {"literal":"b"}, {"literal":"u"}, {"literal":"t"}, {"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GROUNDING", "symbols": ["GROUNDING$string$3", "GROUNDING"]},
    {"name": "GROUNDING", "symbols": ["GROUNDING"]},
    {"name": "GROUNDING", "symbols": ["EVALUATION"]},
    {"name": "EVALUATION$string$1", "symbols": [{"literal":"T"}, {"literal":"H"}, {"literal":"A"}, {"literal":"T"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"s"}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"G"}, {"literal":"R"}, {"literal":"E"}, {"literal":"A"}, {"literal":"T"}, {"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"r"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EVALUATION", "symbols": ["EVALUATION$string$1"]},
    {"name": "EVALUATION$string$2", "symbols": [{"literal":"T"}, {"literal":"H"}, {"literal":"A"}, {"literal":"T"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"D"}, {"literal":"U"}, {"literal":"M"}, {"literal":"B"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EVALUATION", "symbols": ["EVALUATION$string$2"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
