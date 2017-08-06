def nats(start = 0):
   n0 = start
   while True:
      yield n0
      n0 += 1

S = ((2*y + 1) ** 2 for y in nats())

def show(max) :
   for (i, val) in enumerate(S):
      if i > max : break
      print("%3d --> %3d" % (i, val))

show(10)

