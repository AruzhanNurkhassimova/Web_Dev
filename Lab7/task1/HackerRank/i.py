
def average(array):
    st = set(array)
    
    sum = 0.0
    count = len(st)
    
    for i in st:
        sum += i
    
    avr = sum / count
    
    return avr
        

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    result = average(arr)
    print(result)