n = int(input())

bin = 1
count = 0

while bin < n:
    bin *= 2
    count += 1

print(count)