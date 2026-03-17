a = int(input())

if(a % 4 != 0): 
    print("NO")
else:
    if(a % 100 != 0):
        print("YES")
    else:
        if(a % 400 == 0):
            print("YES")
        else:
            print("NO")
