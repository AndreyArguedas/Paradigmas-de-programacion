# Simulates type of windows

import sys

print(sys.argv)

if len(sys.argv) > 1 :
	filename = sys.argv[1]
	f = open(filename,'r')
	for nl,line in enumerate(f.readlines()) :
		print( "%2d) %s" % (nl,line))

