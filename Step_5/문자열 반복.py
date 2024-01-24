# 2675

T = int(input())
for i in range(0,T):
    A,B = (input().split()) # 반복횟수
    A = int(A)
    for j in range(0,len(B)):
        print(B[j]*A,end='')
    print()