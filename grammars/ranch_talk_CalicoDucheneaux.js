// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["STATEMENT", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "_", "symbols": [{"literal":" ","pos":18}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$1", "_", "RANCHTHINGS"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"C"}, {"literal":"a"}, {"literal":"n"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"p"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "ACTIONS"]},
    {"name": "STATEMENT$string$1", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"t"}, {"literal":","}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"I"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"t"}, {"literal":"t"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT", "symbols": ["STATEMENT$string$1", "_", "ACTIONS"]},
    {"name": "STATEMENT$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT$string$3", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT", "symbols": ["STATEMENT$string$2", "_", "THINGS", "_", "STATEMENT$string$3", "_", "ADJTHINGS"]},
    {"name": "STATEMENT$string$4", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT$string$5", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT", "symbols": ["STATEMENT$string$4", "_", "ANIMALS", "_", "STATEMENT$string$5", "_", "ADJANIMALS"]},
    {"name": "STATEMENT$string$6", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT$string$7", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "STATEMENT", "symbols": ["STATEMENT$string$6", "_", "PEOPLE", "_", "STATEMENT$string$7", "_", "ADJPEOPLE"]},
    {"name": "RANCHTHINGS", "symbols": ["THINGS"]},
    {"name": "RANCHTHINGS", "symbols": ["ANIMALS"]},
    {"name": "RANCHTHINGS", "symbols": ["PEOPLE"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"f"}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"g"}, {"literal":"a"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"a"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":" "}, {"literal":"b"}, {"literal":"o"}, {"literal":"t"}, {"literal":"t"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "ADJTHINGS$string$1", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"m"}, {"literal":"n"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJTHINGS", "symbols": ["ADJTHINGS$string$1"]},
    {"name": "ADJTHINGS$string$2", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJTHINGS", "symbols": ["ADJTHINGS$string$2"]},
    {"name": "ADJTHINGS$string$3", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"i"}, {"literal":"p"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJTHINGS", "symbols": ["ADJTHINGS$string$3"]},
    {"name": "ADJTHINGS$string$4", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJTHINGS", "symbols": ["ADJTHINGS$string$4"]},
    {"name": "ADJTHINGS$string$5", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJTHINGS", "symbols": ["ADJTHINGS", "_", "ADJTHINGS$string$5", "_", "ADJTHINGS"]},
    {"name": "ANIMALS$string$1", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"m"}, {"literal":"a"}, {"literal":"-"}, {"literal":"c"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMALS", "symbols": ["ANIMALS$string$1"]},
    {"name": "ANIMALS$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"l"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMALS", "symbols": ["ANIMALS$string$2"]},
    {"name": "ANIMALS$string$3", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"d"}, {"literal":"d"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"r"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMALS", "symbols": ["ANIMALS$string$3"]},
    {"name": "ANIMALS$string$4", "symbols": [{"literal":"f"}, {"literal":"i"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"f"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"f"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMALS", "symbols": ["ANIMALS$string$4"]},
    {"name": "ANIMALS$string$5", "symbols": [{"literal":"y"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMALS", "symbols": ["ANIMALS$string$5"]},
    {"name": "ANIMALS", "symbols": ["MODANIMALS"]},
    {"name": "MODANIMALS", "symbols": ["ADJANIMALS", "_", "ANIMALS"]},
    {"name": "ADJANIMALS$string$1", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJANIMALS", "symbols": ["ADJANIMALS$string$1"]},
    {"name": "ADJANIMALS$string$2", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJANIMALS", "symbols": ["ADJANIMALS$string$2"]},
    {"name": "ADJANIMALS$string$3", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJANIMALS", "symbols": ["ADJANIMALS$string$3"]},
    {"name": "ADJANIMALS$string$4", "symbols": [{"literal":"s"}, {"literal":"p"}, {"literal":"e"}, {"literal":"c"}, {"literal":"k"}, {"literal":"l"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJANIMALS", "symbols": ["ADJANIMALS$string$4"]},
    {"name": "ADJANIMALS$string$5", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJANIMALS", "symbols": ["ADJANIMALS$string$5"]},
    {"name": "ADJANIMALS$string$6", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"i"}, {"literal":"p"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJANIMALS", "symbols": ["ADJANIMALS$string$6"]},
    {"name": "ADJANIMALS$string$7", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"k"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJANIMALS", "symbols": ["ADJANIMALS$string$7"]},
    {"name": "PEOPLE$string$1", "symbols": [{"literal":"h"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}, {"literal":"-"}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$1"]},
    {"name": "PEOPLE$string$2", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$2"]},
    {"name": "PEOPLE$string$3", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$3"]},
    {"name": "PEOPLE", "symbols": ["MODPEOPLE"]},
    {"name": "MODPEOPLE", "symbols": ["ADJPEOPLE", "_", "PEOPLE"]},
    {"name": "ADJPEOPLE$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJPEOPLE", "symbols": ["ADJPEOPLE$string$1"]},
    {"name": "ADJPEOPLE$string$2", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJPEOPLE", "symbols": ["ADJPEOPLE$string$2"]},
    {"name": "ADJPEOPLE$string$3", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"n"}, {"literal":"y"}, {"literal":"o"}, {"literal":"c"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJPEOPLE", "symbols": ["ADJPEOPLE$string$3"]},
    {"name": "ADJPEOPLE$string$4", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"c"}, {"literal":"k"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJPEOPLE", "symbols": ["ADJPEOPLE$string$4"]},
    {"name": "ADJPEOPLE$string$5", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"m"}, {"literal":"n"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJPEOPLE", "symbols": ["ADJPEOPLE$string$5"]},
    {"name": "ADJPEOPLE$string$6", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ADJPEOPLE", "symbols": ["ADJPEOPLE$string$6"]},
    {"name": "ACTIONS$string$1", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"c"}, {"literal":"t"}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$1"]},
    {"name": "ACTIONS$string$2", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$2"]},
    {"name": "ACTIONS$string$3", "symbols": [{"literal":"r"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$3"]},
    {"name": "ACTIONS$string$4", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"g"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$4"]},
    {"name": "ACTIONS$string$5", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$5"]},
    {"name": "ACTIONS$string$6", "symbols": [{"literal":"s"}, {"literal":"a"}, {"literal":"d"}, {"literal":"d"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"m"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$6"]},
    {"name": "ACTIONS$string$7", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"c"}, {"literal":"h"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$7"]},
    {"name": "ACTIONS$string$8", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"i"}, {"literal":"l"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"r"}, {"literal":"o"}, {"literal":"s"}, {"literal":"s"}, {"literal":"-"}, {"literal":"f"}, {"literal":"e"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$8"]},
    {"name": "ACTIONS$string$9", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"t"}, {"literal":"w"}, {"literal":"i"}, {"literal":"r"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$9"]},
    {"name": "ACTIONS$string$10", "symbols": [{"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"w"}, {"literal":"i"}, {"literal":"n"}, {"literal":"d"}, {"literal":"b"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$10"]},
    {"name": "ACTIONS$string$11", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$11"]},
    {"name": "ACTIONS$string$12", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$12"]},
    {"name": "ACTIONS$string$13", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"l"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$13"]},
    {"name": "ACTIONS$string$14", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"m"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$14"]},
    {"name": "ACTIONS$string$15", "symbols": [{"literal":"g"}, {"literal":"o"}, {"literal":" "}, {"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$15"]},
    {"name": "ACTIONS$string$16", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"s"}, {"literal":" "}, {"literal":"r"}, {"literal":"u"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$16"]},
    {"name": "ACTIONS$string$17", "symbols": [{"literal":"c"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$17"]},
    {"name": "ACTIONS$string$18", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"k"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$18"]},
    {"name": "ACTIONS$string$19", "symbols": [{"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"v"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$19"]},
    {"name": "ACTIONS$string$20", "symbols": [{"literal":"h"}, {"literal":"o"}, {"literal":"b"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"h"}, {"literal":"o"}, {"literal":"r"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONS", "symbols": ["ACTIONS$string$20"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
