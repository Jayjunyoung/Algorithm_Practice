# 2581

start = int(input())
end = int(input())

min = -1
sum = 0
while(start <= end):
    if start == 1:
        start += 1
        continue
    if start == 2:
        if min == -1:
            min = 2
        sum += 2
        start += 1
        continue
    for i in range(2,start):
        if start % i == 0:
            start += 1
            break
        if i == start - 1:
            sum += start
            if min == -1:
                min = start
            start += 1
            break
  
if min != -1:
    print(sum)
print(min)
        