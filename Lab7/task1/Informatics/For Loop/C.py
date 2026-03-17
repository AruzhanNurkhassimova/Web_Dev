import math

a = int(input())
b = int(input())

for i in range(a, b + 1, 1):
    sq = int(math.sqrt(i))
    if(sq * sq == i):
        print(i, end = " ")