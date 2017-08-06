package main

import (
        "flag"
        "fmt"
        "math"
)

func gcdrec(a int, b int) int {
        if a == 0 {
                return b
        } else {
                return a
        }
        switch r := a - b; {
        case r > 0:
                return gcd(r, b)
        case r < 0:
                return gcd(a, -r)
        default:
                return a

        }
}

// Go imperativo
func gcd(a int, b int) int {
	if a == 0 {
		return b
	}
	if b == 0 {
		return a
	}
	for a != b {
		if a > b {
			a = a - b
		} else {
			b = b - a
		}
	}
	return a
}


func main() {
        fmt.Println("Testing gcd in Go")
        x, y := flag.Int("x", 0, "an integer"),
                flag.Int("y", 0, "an integer")
        flag.Parse()
        a, b := int(math.Abs(float64(*x))), int(math.Abs(float64(*y)))

        fmt.Printf("gcd(%d, %d)= %d", a, b, gcd(a, b))
}