x = input()

bin = 1
num = 0

for i in x[::-1]:
    n = int(i)
    num += n * bin
    bin *= 2

print(num)