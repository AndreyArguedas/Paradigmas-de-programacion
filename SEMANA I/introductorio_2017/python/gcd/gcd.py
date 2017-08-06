import sys

def gcd(a, b) :
   if a == 0 : return b;
   if b == 0 : return a;
   while a != b :
     if a > b :
        a = a - b
     else :
        b = b - a
   return a

def main():
     a, b =  (0, 0)
     if len(sys.argv) >= 2 :
         a = int(sys.argv[1])
     if len(sys.argv)  >= 3 :
         b = int(sys.argv[2])
     print("gcd(%d, %d)= %d" % (a, b, gcd(a, b))) # Estilo 2.x
     print(f"gcd({a}, {b})= {gcd(a, b)}")         # Estilo 3.x
#     
main()

 