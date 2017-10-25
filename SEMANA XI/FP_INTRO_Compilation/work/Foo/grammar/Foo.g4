
// Foo = {V, P} V = NT U T
grammar Foo;
// NT = {a, b, t} (no terminales)
// T = {NUMBER, TRUE}

// P PARSER RULES (PRODUCTIONS)
a : b+      // ParserRule 
;
b : d | t | f
;

d: NUMBER
;

t: TRUE
;

f: FALSE
;

// LEXER (TOKENIZER)
NUMBER : ('-')? [0-9]+ ('.' [0-9]+)? 
;

TRUE : 'true'
;

FALSE : 'false'
;

WS  :   [ \t\r\n]+ -> skip
;


	