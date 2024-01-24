# 3003

standard = [1,1,2,2,2,8]

white = list(map(int,input().split()))

for i in range(len(white)):
    print(standard[i] - white[i], end = " ")