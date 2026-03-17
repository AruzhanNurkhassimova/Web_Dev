x = input()

string = ''
flag = 0

for i in x[::-1]:
    if(i == '0' and flag == 0):
        continue
    else:
        flag = 1
    string += i

print(string)