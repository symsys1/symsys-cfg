// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUERY", {"literal":"?","pos":12}]},
    {"name": "MAIN", "symbols": ["PITCH", {"literal":"!","pos":18}]},
    {"name": "_", "symbols": [{"literal":" ","pos":24}]},
    {"name": "PITCH$string$1", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PITCH$string$2", "symbols": [{"literal":" "}, {"literal":"o"}, {"literal":"r"}, {"literal":" "}, {"literal":"e"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PITCH", "symbols": ["PITCH$string$1", "VERB", "_", "CRYPTO", "_", "DESCR", "PITCH$string$2"]},
    {"name": "PITCH$string$3", "symbols": [{"literal":"Y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PITCH$string$4", "symbols": [{"literal":" "}, {"literal":"b"}, {"literal":"e"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PITCH", "symbols": ["PITCH$string$3", "VERB", "_", "CRYPTO", "_", "DESCR", "PITCH$string$4", "OTHER_PHENOMENA"]},
    {"name": "OTHER_PHENOMENA", "symbols": ["CRYPTO", "_", "CRYPTO_VERB"]},
    {"name": "OTHER_PHENOMENA$string$1", "symbols": [{"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OTHER_PHENOMENA", "symbols": ["CRYPTO", "_", "CRYPTO_VERB", "OTHER_PHENOMENA$string$1", "OTHER_PHENOMENA"]},
    {"name": "CRYPTO_VERB$string$1", "symbols": [{"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRYPTO_VERB", "symbols": ["CRYPTO_VERB$string$1"]},
    {"name": "CRYPTO_VERB$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"s"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRYPTO_VERB", "symbols": ["CRYPTO_VERB$string$2"]},
    {"name": "CRYPTO_VERB$string$3", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRYPTO_VERB", "symbols": ["CRYPTO_VERB$string$3"]},
    {"name": "CRYPTO_VERB$string$4", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRYPTO_VERB", "symbols": ["CRYPTO_VERB$string$4"]},
    {"name": "CRYPTO_VERB$string$5", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"r"}, {"literal":"g"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRYPTO_VERB", "symbols": ["CRYPTO_VERB$string$5"]},
    {"name": "MARKET_STATE$string$1", "symbols": [{"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MARKET_STATE", "symbols": ["MARKET_STATE$string$1"]},
    {"name": "MARKET_STATE$string$2", "symbols": [{"literal":"d"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MARKET_STATE", "symbols": ["MARKET_STATE$string$2"]},
    {"name": "MARKET_STATE$string$3", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"f"}, {"literal":"i"}, {"literal":"t"}, {"literal":"a"}, {"literal":"b"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MARKET_STATE", "symbols": ["MARKET_STATE$string$3"]},
    {"name": "MARKET_STATE$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}, {"literal":" "}, {"literal":"b"}, {"literal":"i"}, {"literal":"t"}, {"literal":"c"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MARKET_STATE", "symbols": ["MARKET_STATE$string$4"]},
    {"name": "QUERY$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUERY", "symbols": ["QUESTIONWORD", "_", "QUERY$string$1", "_", "CRYPTO", "_", "MARKET_STATE"]},
    {"name": "QUERY$string$2", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUERY$string$3", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUERY", "symbols": ["QUERY$string$2", "_", "CRYPTO", {"literal":"s","pos":150}, "_", "QUERY$string$3", "_", "GERUND"]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "QUESTIONWORD$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$2"]},
    {"name": "QUESTIONWORD$string$3", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"y"}, {"literal":","}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$3"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "CRYPTO", "_", "DESCR", "_", "MOD"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "QUANTITY", "_", "CRYPTO", {"literal":"s","pos":212}]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":218}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "SUB$string$2", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"m"}, {"literal":"u"}, {"literal":"s"}, {"literal":"k"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"A"}, {"literal":"m"}, {"literal":"a"}, {"literal":"z"}, {"literal":"o"}, {"literal":"n"}, {"literal":" "}, {"literal":"A"}, {"literal":"l"}, {"literal":"e"}, {"literal":"x"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$2"]},
    {"name": "SUB$string$3", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}, {"literal":"p"}, {"literal":"t"}, {"literal":"o"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"1"}, {"literal":"3"}, {"literal":"1"}, {"literal":" "}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"N"}, {"literal":"F"}, {"literal":"T"}, {"literal":"b"}, {"literal":"a"}, {"literal":"e"}, {"literal":"3"}, {"literal":"9"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$3"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"p"}, {"literal":"u"}, {"literal":"m"}, {"literal":"p"}, {"literal":" "}, {"literal":"n"}, {"literal":"'"}, {"literal":" "}, {"literal":"d"}, {"literal":"u"}, {"literal":"m"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"t"}, {"literal":"c"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"h"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "GERUND$string$5", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"y"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"h"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$5"]},
    {"name": "GERUND$string$6", "symbols": [{"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"f"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"f"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$6"]},
    {"name": "QUANTITY", "symbols": [{"literal":"2","pos":280}]},
    {"name": "QUANTITY", "symbols": [{"literal":"5","pos":284}]},
    {"name": "QUANTITY$string$1", "symbols": [{"literal":"2"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUANTITY", "symbols": ["QUANTITY$string$1"]},
    {"name": "QUANTITY$string$2", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUANTITY", "symbols": ["QUANTITY$string$2"]},
    {"name": "QUANTITY$string$3", "symbols": [{"literal":"$"}, {"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUANTITY", "symbols": ["QUANTITY$string$3"]},
    {"name": "QUANTITY$string$4", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":"0"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"s"}, {"literal":" "}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUANTITY", "symbols": ["QUANTITY$string$4"]},
    {"name": "DESCR$string$1", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCR", "symbols": ["DESCR$string$1"]},
    {"name": "DESCR$string$2", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"h"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":" "}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCR", "symbols": ["DESCR$string$2"]},
    {"name": "DESCR$string$3", "symbols": [{"literal":"r"}, {"literal":"a"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCR", "symbols": ["DESCR$string$3"]},
    {"name": "DESCR$string$4", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "DESCR", "symbols": ["DESCR$string$4"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "PLATFORMS"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "CRYPTO"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "SENTENCE"]},
    {"name": "CRYPTO$string$1", "symbols": [{"literal":"b"}, {"literal":"i"}, {"literal":"t"}, {"literal":"c"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRYPTO", "symbols": ["CRYPTO$string$1"]},
    {"name": "CRYPTO$string$2", "symbols": [{"literal":"d"}, {"literal":"u"}, {"literal":"m"}, {"literal":"b"}, {"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}, {"literal":"i"}, {"literal":"d"}, {"literal":"i"}, {"literal":"o"}, {"literal":"t"}, {"literal":"c"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRYPTO", "symbols": ["CRYPTO$string$2"]},
    {"name": "CRYPTO$string$3", "symbols": [{"literal":"N"}, {"literal":"F"}, {"literal":"T"}, {"literal":"c"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRYPTO", "symbols": ["CRYPTO$string$3"]},
    {"name": "CRYPTO$string$4", "symbols": [{"literal":"n"}, {"literal":"e"}, {"literal":"o"}, {"literal":"-"}, {"literal":"r"}, {"literal":"e"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"-"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"-"}, {"literal":"m"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":"-"}, {"literal":"s"}, {"literal":"e"}, {"literal":"l"}, {"literal":"f"}, {"literal":"-"}, {"literal":"a"}, {"literal":"b"}, {"literal":"s"}, {"literal":"o"}, {"literal":"r"}, {"literal":"b"}, {"literal":"e"}, {"literal":"d"}, {"literal":"-"}, {"literal":"b"}, {"literal":"i"}, {"literal":"g"}, {"literal":"-"}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":"-"}, {"literal":"c"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRYPTO", "symbols": ["CRYPTO$string$4"]},
    {"name": "CRYPTO$string$5", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"b"}, {"literal":"3"}, {"literal":"c"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CRYPTO", "symbols": ["CRYPTO$string$5"]},
    {"name": "PLATFORMS$string$1", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"c"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"e"}, {"literal":"x"}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLATFORMS", "symbols": ["PLATFORMS$string$1"]},
    {"name": "PLATFORMS$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"i"}, {"literal":"n"}, {"literal":"b"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLATFORMS", "symbols": ["PLATFORMS$string$2"]},
    {"name": "PLATFORMS$string$3", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"d"}, {"literal":"i"}, {"literal":"g"}, {"literal":"i"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"w"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLATFORMS", "symbols": ["PLATFORMS$string$3"]},
    {"name": "PLATFORMS$string$4", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}, {"literal":"p"}, {"literal":"t"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}, {"literal":"a"}, {"literal":"l"}, {"literal":"e"}, {"literal":"r"}, {"literal":"."}, {"literal":"n"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLATFORMS", "symbols": ["PLATFORMS$string$4"]},
    {"name": "PLATFORMS$string$5", "symbols": [{"literal":"r"}, {"literal":"/"}, {"literal":"w"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":"b"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PLATFORMS", "symbols": ["PLATFORMS$string$5"]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();