def min(a, b, c, d):
    if a <= b and a <= c and a <= d:
        print(a)
    elif b <= a and b <= c and b <= d:
        print(b)
    elif c <= a and c <= b and c <= d:
        print(c)
    else:
        print(d)

arr = list(map(int, input().split()))

min(arr[0], arr[1], arr[2], arr[3])