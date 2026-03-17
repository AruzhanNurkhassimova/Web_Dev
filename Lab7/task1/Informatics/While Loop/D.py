n = int(input())

bin = 1

while bin <= n:
    if bin == n:
        print("YES")
        exit()
    bin *= 2

print("NO")