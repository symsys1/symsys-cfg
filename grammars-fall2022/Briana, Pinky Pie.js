// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["EXCLAMATION", {"literal":"!","pos":6}]},
    {"name": "_", "symbols": [{"literal":" ","pos":12}]},
    {"name": "EXCLAMATION$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION$string$2", "symbols": [{"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION$string$3", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION$string$4", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION$string$5", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "EXCLAMATION", "symbols": ["ACTIONSHECANACTOUT", "_", "EXCLAMATION$string$1", "_", "AUDIENCE", "_", "TIMEOFDAY", "_", "EXCLAMATION$string$2", "_", "DAYOFTHEWEEK", "_", "EXCLAMATION$string$3", "_", "ELATEDEMOTION", "_", "MOD", "_", "ACTIONSHECANACTOUT", "_", "EXCLAMATION$string$4", "_", "ELATEDEMOTION", "_", "EXCLAMATION$string$5", "_", "AUDIENCE"]},
    {"name": "ACTIONSHECANACTOUT$string$1", "symbols": [{"literal":"S"}, {"literal":"w"}, {"literal":"i"}, {"literal":"m"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONSHECANACTOUT", "symbols": ["ACTIONSHECANACTOUT$string$1"]},
    {"name": "ACTIONSHECANACTOUT$string$2", "symbols": [{"literal":"E"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONSHECANACTOUT", "symbols": ["ACTIONSHECANACTOUT$string$2"]},
    {"name": "ACTIONSHECANACTOUT$string$3", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONSHECANACTOUT", "symbols": ["ACTIONSHECANACTOUT$string$3"]},
    {"name": "ACTIONSHECANACTOUT$string$4", "symbols": [{"literal":"G"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"p"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONSHECANACTOUT", "symbols": ["ACTIONSHECANACTOUT$string$4"]},
    {"name": "ACTIONSHECANACTOUT$string$5", "symbols": [{"literal":"R"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ACTIONSHECANACTOUT", "symbols": ["ACTIONSHECANACTOUT$string$5"]},
    {"name": "AUDIENCE$string$1", "symbols": [{"literal":"R"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"b"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"D"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AUDIENCE", "symbols": ["AUDIENCE$string$1"]},
    {"name": "AUDIENCE$string$2", "symbols": [{"literal":"F"}, {"literal":"l"}, {"literal":"u"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"h"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AUDIENCE", "symbols": ["AUDIENCE$string$2"]},
    {"name": "AUDIENCE$string$3", "symbols": [{"literal":"T"}, {"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":" "}, {"literal":"S"}, {"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"k"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AUDIENCE", "symbols": ["AUDIENCE$string$3"]},
    {"name": "AUDIENCE$string$4", "symbols": [{"literal":"R"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AUDIENCE", "symbols": ["AUDIENCE$string$4"]},
    {"name": "AUDIENCE$string$5", "symbols": [{"literal":"A"}, {"literal":"p"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"j"}, {"literal":"a"}, {"literal":"c"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "AUDIENCE", "symbols": ["AUDIENCE$string$5"]},
    {"name": "TIMEOFDAY$string$1", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIMEOFDAY", "symbols": ["TIMEOFDAY$string$1"]},
    {"name": "TIMEOFDAY$string$2", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"l"}, {"literal":"o"}, {"literal":"a"}, {"literal":"k"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIMEOFDAY", "symbols": ["TIMEOFDAY$string$2"]},
    {"name": "TIMEOFDAY$string$3", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"s"}, {"literal":"u"}, {"literal":"n"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIMEOFDAY", "symbols": ["TIMEOFDAY$string$3"]},
    {"name": "TIMEOFDAY$string$4", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"3"}, {"literal":":"}, {"literal":"4"}, {"literal":"2"}, {"literal":" "}, {"literal":"p"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIMEOFDAY", "symbols": ["TIMEOFDAY$string$4"]},
    {"name": "DAYOFTHEWEEK$string$1", "symbols": [{"literal":"M"}, {"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAYOFTHEWEEK", "symbols": ["DAYOFTHEWEEK$string$1"]},
    {"name": "DAYOFTHEWEEK$string$2", "symbols": [{"literal":"T"}, {"literal":"u"}, {"literal":"e"}, {"literal":"s"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAYOFTHEWEEK", "symbols": ["DAYOFTHEWEEK$string$2"]},
    {"name": "DAYOFTHEWEEK$string$3", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":"d"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAYOFTHEWEEK", "symbols": ["DAYOFTHEWEEK$string$3"]},
    {"name": "DAYOFTHEWEEK$string$4", "symbols": [{"literal":"F"}, {"literal":"r"}, {"literal":"i"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAYOFTHEWEEK", "symbols": ["DAYOFTHEWEEK$string$4"]},
    {"name": "DAYOFTHEWEEK$string$5", "symbols": [{"literal":"S"}, {"literal":"a"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"d"}, {"literal":"a"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DAYOFTHEWEEK", "symbols": ["DAYOFTHEWEEK$string$5"]},
    {"name": "ELATEDEMOTION$string$1", "symbols": [{"literal":"e"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ELATEDEMOTION", "symbols": ["ELATEDEMOTION$string$1"]},
    {"name": "ELATEDEMOTION$string$2", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"n"}, {"literal":"s"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ELATEDEMOTION", "symbols": ["ELATEDEMOTION$string$2"]},
    {"name": "ELATEDEMOTION$string$3", "symbols": [{"literal":"a"}, {"literal":"m"}, {"literal":"a"}, {"literal":"z"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ELATEDEMOTION", "symbols": ["ELATEDEMOTION$string$3"]},
    {"name": "ELATEDEMOTION$string$4", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"q"}, {"literal":"u"}, {"literal":"i"}, {"literal":"s"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ELATEDEMOTION", "symbols": ["ELATEDEMOTION$string$4"]},
    {"name": "ELATEDEMOTION$string$5", "symbols": [{"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"v"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ELATEDEMOTION", "symbols": ["ELATEDEMOTION$string$5"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"y"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"t"}, {"literal":"h"}, {"literal":"o"}, {"literal":"u"}, {"literal":"g"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
