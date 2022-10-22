// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "START", "symbols": ["START", "_", "SLOGAN", {"literal":"!","pos":10}]},
    {"name": "START", "symbols": ["CHINA", "_", "BADACTION", {"literal":".","pos":20}]},
    {"name": "START", "symbols": ["DESCRIBER", "_", "BADACTION", {"literal":".","pos":30}]},
    {"name": "START", "symbols": ["COUNTRY", "_", "BADACTION", {"literal":".","pos":40}]},
    {"name": "START", "symbols": ["SLOGAN", {"literal":"!","pos":46}]},
    {"name": "_", "symbols": [{"literal":" ","pos":52}]},
    {"name": "WHO$string$1", "symbols": [{"literal":"D"}, {"literal":"e"}, {"literal":"m"}, {"literal":"o"}, {"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHO", "symbols": ["WHO$string$1"]},
    {"name": "WHO$string$2", "symbols": [{"literal":"J"}, {"literal":"o"}, {"literal":"e"}, {"literal":" "}, {"literal":"B"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHO", "symbols": ["WHO$string$2"]},
    {"name": "WHO$string$3", "symbols": [{"literal":"N"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"y"}, {"literal":" "}, {"literal":"P"}, {"literal":"e"}, {"literal":"l"}, {"literal":"o"}, {"literal":"s"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHO", "symbols": ["WHO$string$3"]},
    {"name": "WHO$string$4", "symbols": [{"literal":"I"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"g"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"I"}, {"literal":"m"}, {"literal":"m"}, {"literal":"i"}, {"literal":"g"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHO", "symbols": ["WHO$string$4"]},
    {"name": "WHO$string$5", "symbols": [{"literal":"O"}, {"literal":"b"}, {"literal":"a"}, {"literal":"m"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHO", "symbols": ["WHO$string$5"]},
    {"name": "WHO$string$6", "symbols": [{"literal":"H"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WHO", "symbols": ["WHO$string$6"]},
    {"name": "COUNTRY$string$1", "symbols": [{"literal":"R"}, {"literal":"u"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COUNTRY", "symbols": ["COUNTRY$string$1"]},
    {"name": "COUNTRY$string$2", "symbols": [{"literal":"U"}, {"literal":"k"}, {"literal":"r"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COUNTRY", "symbols": ["COUNTRY$string$2"]},
    {"name": "COUNTRY$string$3", "symbols": [{"literal":"C"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COUNTRY", "symbols": ["COUNTRY$string$3"]},
    {"name": "CHINA$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":" "}, {"literal":"V"}, {"literal":"i"}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHINA", "symbols": ["CHINA$string$1"]},
    {"name": "CHINA$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"C"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":" "}, {"literal":"P"}, {"literal":"l"}, {"literal":"a"}, {"literal":"g"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHINA", "symbols": ["CHINA$string$2"]},
    {"name": "CHINA$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"K"}, {"literal":"u"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"F"}, {"literal":"l"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHINA", "symbols": ["CHINA$string$3"]},
    {"name": "CHINA$string$4", "symbols": [{"literal":"C"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CHINA", "symbols": ["CHINA$string$4"]},
    {"name": "SLOGAN$string$1", "symbols": [{"literal":"F"}, {"literal":"A"}, {"literal":"K"}, {"literal":"E"}, {"literal":" "}, {"literal":"N"}, {"literal":"E"}, {"literal":"W"}, {"literal":"S"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLOGAN", "symbols": ["SLOGAN$string$1"]},
    {"name": "SLOGAN$string$2", "symbols": [{"literal":"A"}, {"literal":"M"}, {"literal":"E"}, {"literal":"R"}, {"literal":"I"}, {"literal":"C"}, {"literal":"A"}, {"literal":" "}, {"literal":"F"}, {"literal":"I"}, {"literal":"R"}, {"literal":"S"}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLOGAN", "symbols": ["SLOGAN$string$2"]},
    {"name": "SLOGAN$string$3", "symbols": [{"literal":"M"}, {"literal":"A"}, {"literal":"K"}, {"literal":"E"}, {"literal":" "}, {"literal":"A"}, {"literal":"M"}, {"literal":"E"}, {"literal":"R"}, {"literal":"I"}, {"literal":"C"}, {"literal":"A"}, {"literal":" "}, {"literal":"G"}, {"literal":"R"}, {"literal":"E"}, {"literal":"A"}, {"literal":"T"}, {"literal":" "}, {"literal":"A"}, {"literal":"G"}, {"literal":"A"}, {"literal":"I"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLOGAN", "symbols": ["SLOGAN$string$3"]},
    {"name": "SLOGAN$string$4", "symbols": [{"literal":"K"}, {"literal":"E"}, {"literal":"E"}, {"literal":"P"}, {"literal":" "}, {"literal":"A"}, {"literal":"M"}, {"literal":"E"}, {"literal":"R"}, {"literal":"I"}, {"literal":"C"}, {"literal":"A"}, {"literal":" "}, {"literal":"G"}, {"literal":"R"}, {"literal":"E"}, {"literal":"A"}, {"literal":"T"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLOGAN", "symbols": ["SLOGAN$string$4"]},
    {"name": "SLOGAN$string$5", "symbols": [{"literal":"B"}, {"literal":"U"}, {"literal":"I"}, {"literal":"L"}, {"literal":"D"}, {"literal":" "}, {"literal":"T"}, {"literal":"H"}, {"literal":"E"}, {"literal":" "}, {"literal":"W"}, {"literal":"A"}, {"literal":"L"}, {"literal":"L"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLOGAN", "symbols": ["SLOGAN$string$5"]},
    {"name": "SLOGAN$string$6", "symbols": [{"literal":"R"}, {"literal":"I"}, {"literal":"G"}, {"literal":"G"}, {"literal":"E"}, {"literal":"D"}, {"literal":" "}, {"literal":"E"}, {"literal":"L"}, {"literal":"E"}, {"literal":"C"}, {"literal":"T"}, {"literal":"I"}, {"literal":"O"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SLOGAN", "symbols": ["SLOGAN$string$6"]},
    {"name": "DESCRIBER$string$1", "symbols": [{"literal":"C"}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIBER", "symbols": ["DESCRIBER$string$1", "_", "WHO"]},
    {"name": "DESCRIBER$string$2", "symbols": [{"literal":"S"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIBER", "symbols": ["DESCRIBER$string$2", "_", "WHO"]},
    {"name": "DESCRIBER$string$3", "symbols": [{"literal":"C"}, {"literal":"r"}, {"literal":"a"}, {"literal":"z"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIBER", "symbols": ["DESCRIBER$string$3", "_", "WHO"]},
    {"name": "DESCRIBER$string$4", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"r"}, {"literal":"r"}, {"literal":"u"}, {"literal":"p"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCRIBER", "symbols": ["DESCRIBER$string$4", "_", "WHO"]},
    {"name": "BADACTION$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BADACTION", "symbols": ["BADACTION$string$1", "_", "USA"]},
    {"name": "BADACTION$string$2", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"r"}, {"literal":"u"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BADACTION", "symbols": ["BADACTION$string$2", "_", "USA"]},
    {"name": "BADACTION$string$3", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"u"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BADACTION", "symbols": ["BADACTION$string$3", "_", "USA"]},
    {"name": "USA$string$1", "symbols": [{"literal":"A"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "USA", "symbols": ["USA$string$1"]},
    {"name": "USA$string$2", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"C"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "USA", "symbols": ["USA$string$2"]},
    {"name": "USA$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"e"}, {"literal":"c"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"A"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "USA", "symbols": ["USA$string$3"]},
    {"name": "USA$string$4", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"R"}, {"literal":"e"}, {"literal":"p"}, {"literal":"u"}, {"literal":"b"}, {"literal":"l"}, {"literal":"i"}, {"literal":"c"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"P"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "USA", "symbols": ["USA$string$4"]}
]
  , ParserStart: "START"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
