def Xor(x, y):
    if (x == True and y == True) or (x == False and y == False):
        print(0)
    else:
        print(1)

arr = list(map(int, input().split()))

Xor(bool(arr[0]), bool(arr[1]))