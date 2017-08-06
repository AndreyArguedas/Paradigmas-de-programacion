# La linea con triple comilla se llama doc string

def hw(who) :
    """
        Documentacion
    """
    print('Hello ' + who)

hw('world')

def foo(x) :
    return x + \
           x

def foo2(x) :
    y = x + x; return y

print(foo(555))
print(foo2(555))

# En el interprete se pueden usar modulos con import archivo
# Se llamaran en el archivo que los importa de la forma archivo.foo(333)
# Si solo se quiere importar una funcion se hace de la manera
# from archivo import foo
# python genera __pycache__ ahi esta el codigo compilado
# todo lo que empieza con __ tiene que ver con python

def goo() :
    return

# Un return vacio retorna un None, similar a undefined de JS

# Imperativo

def vabs(x) :
	if x == 0 :
		return 0
	elif x > 0 :
		return x
	else :
		return - x

def vabsf(x) :
	return x if x >= 0 else -x