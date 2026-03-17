def power(a, n):
    x = 1
    for i in range(n):
        x *= a
    print(x)

arr = list(map(float, input().split()))

power(arr[0], int(arr[1]))