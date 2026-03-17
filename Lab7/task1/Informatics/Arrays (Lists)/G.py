n = int(input())

arr = list(map(int, input().split()))

for i in range(int(n / 2)):
    arr[i] , arr[n - i - 1] = arr[n - i - 1] , arr[i]

print(*arr[::1])