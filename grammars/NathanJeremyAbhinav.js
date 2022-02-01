// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["PHRASE", {"literal":".","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "PHRASE", "symbols": ["STARTER", "_", "PACTION", "_", "ACTIONITEM", "_", "TIME"]},
    {"name": "PHRASE$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PHRASE", "symbols": ["PHRASE", "PHRASE$string$1", "PHRASE$string$2", "_", "PHRASE"]},
    {"name": "PHRASE", "symbols": ["NAMEPHRASE", "_", "PACTION", "_", "ACTIONITEM"]},
    {"name": "NAMEPHRASE$string$1", "symbols": [{"literal":","}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAMEPHRASE", "symbols": ["NAME", "NAMEPHRASE$string$1", "DESC", {"literal":",","pos":66}]},
    {"name": "NAMEPHRASE$string$2", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAMEPHRASE", "symbols": ["NAMEPHRASE$string$2", "_", "TITLE", {"literal":",","pos":76}, "_", "NAME", {"literal":",","pos":82}]},
    {"name": "DESC$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"m"}, {"literal":"p"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESC", "symbols": ["DESC$string$1"]},
    {"name": "DESC$string$2", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESC", "symbols": ["DESC$string$2"]},
    {"name": "DESC$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"l"}, {"literal":"d"}, {"literal":"-"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"p"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESC", "symbols": ["DESC$string$3"]},
    {"name": "DESC$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"w"}, {"literal":"l"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESC", "symbols": ["DESC$string$4"]},
    {"name": "ACTION$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$1"]},
    {"name": "ACTION$string$2", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$2"]},
    {"name": "ACTION$string$3", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTION", "symbols": ["ACTION$string$3"]},
    {"name": "PACTION$string$1", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PACTION", "symbols": ["PACTION$string$1"]},
    {"name": "PACTION$string$2", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PACTION", "symbols": ["PACTION$string$2"]},
    {"name": "PACTION$string$3", "symbols": [{"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PACTION", "symbols": ["PACTION$string$3"]},
    {"name": "ACTIONITEM$string$1", "symbols": [{"literal":"v"}, {"literal":"i"}, {"literal":"d"}, {"literal":"e"}, {"literal":"o"}, {"literal":" "}, {"literal":"g"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONITEM", "symbols": ["ACTIONITEM$string$1"]},
    {"name": "ACTIONITEM$string$2", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONITEM", "symbols": ["ACTIONITEM$string$2"]},
    {"name": "ACTIONITEM$string$3", "symbols": [{"literal":"p"}, {"literal":"i"}, {"literal":"a"}, {"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"l"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONITEM", "symbols": ["ACTIONITEM$string$3"]},
    {"name": "ACTIONITEM$string$4", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONITEM", "symbols": ["ACTIONITEM$string$4"]},
    {"name": "TIME$string$1", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$1"]},
    {"name": "TIME$string$2", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"6"}, {"literal":" "}, {"literal":"P"}, {"literal":"M"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$2"]},
    {"name": "TIME$string$3", "symbols": [{"literal":"t"}, {"literal":"o"}, {"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIME", "symbols": ["TIME$string$3"]},
    {"name": "STARTER", "symbols": [{"literal":"I","pos":165}]},
    {"name": "STARTER$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STARTER", "symbols": ["STARTER$string$1"]},
    {"name": "NAME$string$1", "symbols": [{"literal":"S"}, {"literal":"r"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$1"]},
    {"name": "NAME$string$2", "symbols": [{"literal":"K"}, {"literal":"e"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$2"]},
    {"name": "NAME$string$3", "symbols": [{"literal":"B"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$3"]},
    {"name": "NAME$string$4", "symbols": [{"literal":"K"}, {"literal":"e"}, {"literal":"n"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$4"]},
    {"name": "NAME$string$5", "symbols": [{"literal":"J"}, {"literal":"e"}, {"literal":"n"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$5"]},
    {"name": "NAME$string$6", "symbols": [{"literal":"R"}, {"literal":"a"}, {"literal":"j"}, {"literal":"e"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$6"]},
    {"name": "NAME$string$7", "symbols": [{"literal":"S"}, {"literal":"h"}, {"literal":"r"}, {"literal":"e"}, {"literal":"y"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "NAME", "symbols": ["NAME$string$7"]},
    {"name": "TITLE$string$1", "symbols": [{"literal":"t"}, {"literal":"u"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$1"]},
    {"name": "TITLE$string$2", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$2"]},
    {"name": "TITLE$string$3", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TITLE", "symbols": ["TITLE$string$3"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
