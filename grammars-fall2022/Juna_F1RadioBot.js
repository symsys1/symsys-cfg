// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "Main$string$1", "symbols": [{"literal":"!"}, {"literal":"!"}, {"literal":"!"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Main", "symbols": ["Win", "Main$string$1"]},
    {"name": "Main", "symbols": ["Crash"]},
    {"name": "_", "symbols": [{"literal":" ","pos":16}]},
    {"name": "Win$string$1", "symbols": [{"literal":"!"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Win", "symbols": ["Verb", "_", "Subj", "Win$string$1", "_", "Excl"]},
    {"name": "Win", "symbols": ["Excl", "_", "Verb", "_", "Subj"]},
    {"name": "Verb$string$1", "symbols": [{"literal":"L"}, {"literal":"e"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb", "symbols": ["Verb$string$1"]},
    {"name": "Verb$string$2", "symbols": [{"literal":"C"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb", "symbols": ["Verb$string$2"]},
    {"name": "Verb$string$3", "symbols": [{"literal":"W"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"d"}, {"literal":"o"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb", "symbols": ["Verb$string$3"]},
    {"name": "Verb$string$4", "symbols": [{"literal":"L"}, {"literal":"e"}, {"literal":"t"}, {"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb$string$5", "symbols": [{"literal":"g"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb", "symbols": ["Verb$string$4", "_", "Expl", "_", "Verb$string$5"]},
    {"name": "Verb$string$6", "symbols": [{"literal":"F"}, {"literal":"e"}, {"literal":"e"}, {"literal":"l"}, {"literal":"s"}, {"literal":" "}, {"literal":"g"}, {"literal":"o"}, {"literal":"o"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb", "symbols": ["Verb$string$6"]},
    {"name": "Excl$string$1", "symbols": [{"literal":"Y"}, {"literal":"E"}, {"literal":"E"}, {"literal":"E"}, {"literal":"E"}, {"literal":"S"}, {"literal":"S"}, {"literal":"S"}, {"literal":"S"}, {"literal":"S"}, {"literal":"!"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Excl", "symbols": ["Excl$string$1"]},
    {"name": "Excl$string$2", "symbols": [{"literal":"W"}, {"literal":"O"}, {"literal":"O"}, {"literal":"O"}, {"literal":"O"}, {"literal":"O"}, {"literal":"O"}, {"literal":"!"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Excl", "symbols": ["Excl$string$2"]},
    {"name": "Excl$string$3", "symbols": [{"literal":"A"}, {"literal":"H"}, {"literal":"A"}, {"literal":"H"}, {"literal":"A"}, {"literal":"H"}, {"literal":"A"}, {"literal":"!"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Excl", "symbols": ["Excl$string$3"]},
    {"name": "Excl$string$4", "symbols": [{"literal":"Y"}, {"literal":"E"}, {"literal":"E"}, {"literal":"E"}, {"literal":"A"}, {"literal":"A"}, {"literal":"A"}, {"literal":"H"}, {"literal":"H"}, {"literal":"!"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Excl", "symbols": ["Excl$string$4"]},
    {"name": "Excl$string$5", "symbols": [{"literal":"W"}, {"literal":"O"}, {"literal":"O"}, {"literal":"O"}, {"literal":"W"}, {"literal":"W"}, {"literal":"W"}, {"literal":"A"}, {"literal":"A"}, {"literal":"A"}, {"literal":"H"}, {"literal":"H"}, {"literal":"!"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Excl", "symbols": ["Excl$string$5"]},
    {"name": "Subj$string$1", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Subj", "symbols": ["Subj$string$1"]},
    {"name": "Subj$string$2", "symbols": [{"literal":"g"}, {"literal":"u"}, {"literal":"y"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Subj", "symbols": ["Subj$string$2"]},
    {"name": "Subj$string$3", "symbols": [{"literal":"e"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"y"}, {"literal":"b"}, {"literal":"o"}, {"literal":"d"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Subj", "symbols": ["Subj$string$3"]},
    {"name": "Expl$string$1", "symbols": [{"literal":"*"}, {"literal":"*"}, {"literal":"*"}, {"literal":"*"}, {"literal":"*"}, {"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Expl", "symbols": ["Expl$string$1"]},
    {"name": "Crash", "symbols": ["Blame"]},
    {"name": "Crash", "symbols": ["Failure"]},
    {"name": "Verb2$string$1", "symbols": [{"literal":"h"}, {"literal":"i"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb2", "symbols": ["Verb2$string$1"]},
    {"name": "Verb2$string$2", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"o"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb2", "symbols": ["Verb2$string$2"]},
    {"name": "Verb2$string$3", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb2", "symbols": ["Verb2$string$3"]},
    {"name": "Verb2$string$4", "symbols": [{"literal":"l"}, {"literal":"e"}, {"literal":"f"}, {"literal":"t"}, {"literal":" "}, {"literal":"m"}, {"literal":"e"}, {"literal":" "}, {"literal":"n"}, {"literal":"o"}, {"literal":" "}, {"literal":"s"}, {"literal":"p"}, {"literal":"a"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb2", "symbols": ["Verb2$string$4"]},
    {"name": "Mod$string$1", "symbols": [{"literal":"a"}, {"literal":"g"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Mod", "symbols": ["Mod$string$1"]},
    {"name": "Mod$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"m"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"l"}, {"literal":"y"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Mod", "symbols": ["Mod$string$2"]},
    {"name": "Failure", "symbols": ["Subj2", "_", "Verb3"]},
    {"name": "Verb3$string$1", "symbols": [{"literal":"h"}, {"literal":"a"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"p"}, {"literal":"u"}, {"literal":"n"}, {"literal":"c"}, {"literal":"t"}, {"literal":"u"}, {"literal":"r"}, {"literal":"e"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb3", "symbols": ["Verb3$string$1"]},
    {"name": "Verb3$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb3$string$3", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"o"}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Verb3", "symbols": ["Verb3$string$2", "_", "Expl", "_", "Verb3$string$3"]},
    {"name": "Subj2$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Subj2", "symbols": ["Subj2$string$1"]},
    {"name": "Person$string$1", "symbols": [{"literal":"W"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"i"}, {"literal":"a"}, {"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Person", "symbols": ["Person$string$1"]},
    {"name": "Person$string$2", "symbols": [{"literal":"g"}, {"literal":"u"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Person", "symbols": ["Person$string$2"]},
    {"name": "Subj3$string$1", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Subj3", "symbols": ["Subj3$string$1", "_", "Person"]},
    {"name": "Subj3$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Subj3", "symbols": ["Subj3$string$2", "_", "Mod2"]},
    {"name": "Mod2", "symbols": ["Mod3", "_", "Person"]},
    {"name": "Mod2", "symbols": ["Mod3", "_", "Mod2"]},
    {"name": "Mod3$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Mod3", "symbols": ["Mod3$string$1"]},
    {"name": "Mod3$string$2", "symbols": [{"literal":"i"}, {"literal":"d"}, {"literal":"i"}, {"literal":"o"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Mod3", "symbols": ["Mod3$string$2"]},
    {"name": "Blame$string$1", "symbols": [{"literal":"!"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Blame", "symbols": ["Subj3", "_", "Expl", "_", "Verb2", "Blame$string$1"]},
    {"name": "Blame", "symbols": ["Subj3", "_", "Expl", "_", "Verb2", {"literal":",","pos":274}, "_", "Mod"]},
    {"name": "Blame$string$2", "symbols": [{"literal":"!"}, {"literal":"!"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Blame", "symbols": ["Subj3", "_", "Verb2", "Blame$string$2"]},
    {"name": "Blame", "symbols": ["Subj3", "_", "Verb2", "_", "Mod"]}
]
  , ParserStart: "Main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
