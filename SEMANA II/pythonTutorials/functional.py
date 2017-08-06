def foo(x = 666) : return x + 1;

#rest se comporta como una tupla que tiene el resto de argumentos
def f(x , y , *rest) :
	print(x, y, rest);

#kargs recoge lo que venga en variable igual valor y lo mete en diccionario
def f2(x, y, **kargs) :
	print(x, y, kargs)

def a(x, y) : 
	return x + y;

def b(x, y, z = 666) :
	return x + y;

def bypass(*args, **kargs) :
	print('a is being called')
	return a(*args,**kargs) 

"""
	GENERADORES
"""

def nats(n = 0) :
	while True :
		yield n
		n += 1

Nats = nats()
next(Nats)

def gen(m) :
	while True :
		n = yield m
		print('me enviaron', n)

g = gen(100)
next(g)
g.send(99) #corutinas

"""
	Listas por comprension
"""

s = [2, -3, 10, 5, 0, 1, 3]

[x * x for x in s if x > 1]

# Expresiones generadoras
(x * x for x in s if x > 1)

next(g)

[x for x in g]