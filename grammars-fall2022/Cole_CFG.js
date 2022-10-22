// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["MAIN_C", {"literal":"\n","pos":6}, "ANY_CP"]},
    {"name": "MAIN_C$string$1", "symbols": [{"literal":"M"}, {"literal":"A"}, {"literal":"I"}, {"literal":"N"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MAIN_C", "symbols": ["MAIN_C$string$1", "CG"]},
    {"name": "ANY_CP", "symbols": ["CP"]},
    {"name": "ANY_CP", "symbols": ["CP", {"literal":"\n","pos":28}, "ANY_CP"]},
    {"name": "CP", "symbols": ["PRE", "CG"]},
    {"name": "CG$string$1", "symbols": [{"literal":" "}, {"literal":"-"}, {"literal":">"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CG", "symbols": ["CG$string$1", "CGH"]},
    {"name": "CGH", "symbols": ["PRE"]},
    {"name": "CGH", "symbols": ["CW"]},
    {"name": "CGH$string$1", "symbols": [{"literal":" "}, {"literal":"|"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CGH", "symbols": ["PRE", "CGH$string$1", "CGH"]},
    {"name": "CGH", "symbols": ["PRE", {"literal":" ","pos":70}, "CGH"]},
    {"name": "CGH$string$2", "symbols": [{"literal":" "}, {"literal":"|"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CGH", "symbols": ["CW", "CGH$string$2", "CGH"]},
    {"name": "CGH", "symbols": ["CW", {"literal":" ","pos":86}, "CGH"]},
    {"name": "PRE", "symbols": ["D2"]},
    {"name": "CW", "symbols": [{"literal":"\"","pos":100}, "D", {"literal":"\"","pos":104}]},
    {"name": "D", "symbols": ["A"]},
    {"name": "D", "symbols": ["A", "D"]},
    {"name": "D2", "symbols": ["A2"]},
    {"name": "D2", "symbols": ["A2", "D2"]},
    {"name": "A", "symbols": [{"literal":"a","pos":134}]},
    {"name": "A", "symbols": [{"literal":"b","pos":136}]},
    {"name": "A", "symbols": [{"literal":"c","pos":138}]},
    {"name": "A", "symbols": [{"literal":"d","pos":140}]},
    {"name": "A", "symbols": [{"literal":"e","pos":142}]},
    {"name": "A", "symbols": [{"literal":"f","pos":144}]},
    {"name": "A", "symbols": [{"literal":"g","pos":146}]},
    {"name": "A", "symbols": [{"literal":"h","pos":148}]},
    {"name": "A", "symbols": [{"literal":"i","pos":150}]},
    {"name": "A", "symbols": [{"literal":"j","pos":152}]},
    {"name": "A", "symbols": [{"literal":"k","pos":154}]},
    {"name": "A", "symbols": [{"literal":"l","pos":156}]},
    {"name": "A", "symbols": [{"literal":"m","pos":158}]},
    {"name": "A", "symbols": [{"literal":"n","pos":160}]},
    {"name": "A", "symbols": [{"literal":"o","pos":162}]},
    {"name": "A", "symbols": [{"literal":"p","pos":164}]},
    {"name": "A", "symbols": [{"literal":"q","pos":166}]},
    {"name": "A", "symbols": [{"literal":"r","pos":168}]},
    {"name": "A", "symbols": [{"literal":"s","pos":170}]},
    {"name": "A", "symbols": [{"literal":"t","pos":172}]},
    {"name": "A", "symbols": [{"literal":"u","pos":174}]},
    {"name": "A", "symbols": [{"literal":"v","pos":176}]},
    {"name": "A", "symbols": [{"literal":"w","pos":178}]},
    {"name": "A", "symbols": [{"literal":"x","pos":180}]},
    {"name": "A", "symbols": [{"literal":"y","pos":182}]},
    {"name": "A", "symbols": [{"literal":"z","pos":184}]},
    {"name": "A2", "symbols": [{"literal":"A","pos":190}]},
    {"name": "A2", "symbols": [{"literal":"B","pos":192}]},
    {"name": "A2", "symbols": [{"literal":"C","pos":194}]},
    {"name": "A2", "symbols": [{"literal":"D","pos":196}]},
    {"name": "A2", "symbols": [{"literal":"E","pos":198}]},
    {"name": "A2", "symbols": [{"literal":"F","pos":200}]},
    {"name": "A2", "symbols": [{"literal":"G","pos":202}]},
    {"name": "A2", "symbols": [{"literal":"H","pos":204}]},
    {"name": "A2", "symbols": [{"literal":"I","pos":206}]},
    {"name": "A2", "symbols": [{"literal":"J","pos":208}]},
    {"name": "A2", "symbols": [{"literal":"K","pos":210}]},
    {"name": "A2", "symbols": [{"literal":"L","pos":212}]},
    {"name": "A2", "symbols": [{"literal":"M","pos":214}]},
    {"name": "A2", "symbols": [{"literal":"N","pos":216}]},
    {"name": "A2", "symbols": [{"literal":"O","pos":218}]},
    {"name": "A2", "symbols": [{"literal":"P","pos":220}]},
    {"name": "A2", "symbols": [{"literal":"Q","pos":222}]},
    {"name": "A2", "symbols": [{"literal":"R","pos":224}]},
    {"name": "A2", "symbols": [{"literal":"S","pos":226}]},
    {"name": "A2", "symbols": [{"literal":"T","pos":228}]},
    {"name": "A2", "symbols": [{"literal":"U","pos":230}]},
    {"name": "A2", "symbols": [{"literal":"V","pos":232}]},
    {"name": "A2", "symbols": [{"literal":"W","pos":234}]},
    {"name": "A2", "symbols": [{"literal":"X","pos":236}]},
    {"name": "A2", "symbols": [{"literal":"Y","pos":238}]},
    {"name": "A2", "symbols": [{"literal":"Z","pos":240}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
