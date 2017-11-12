grammar Lists;


program           : main_expr (',' main_expr)*
;

main_expr         : lists_expr
;

lists_expr        : '[' list_expr* ']'
;

list_expr         : pat_expr (',' pat_expr)*
;

pat_expr          : lists_expr | number
;

number            : NUMBER
;

NUMBER: ('-')? [0-9]+ ('.' [0-9])?
;

SLC :   '/*'.*? '*/' -> skip
;
MLC : '//'.*?'\r'?'\n' -> skip
;
WS  : [ \t\r\n]+ -> skip
;