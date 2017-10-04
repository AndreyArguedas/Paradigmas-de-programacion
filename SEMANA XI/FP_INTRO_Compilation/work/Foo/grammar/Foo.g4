
// Foo = {V, P} V = NT U T
grammar Foo;
// NT = {a, b, t} (no terminales)
// T = {NUMBER, TRUE}

// P PARSER RULES (PRODUCTIONS)
a : b+      // ParserRule 
;
b : d | t
;

d: NUMBER
;
t: TRUE
;
// LEXER (TOKENIZER)
NUMBER : ('-')? [0-9]+ ('.' [0-9]+)? 
;
TRUE : 'true'
;
WS  :   [ \t\r\n]+ -> skip
;


	