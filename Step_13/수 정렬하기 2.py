# 2751
import sys
input = sys.stdin.readline

N = int(input())
arr = []
for _ in range(N):
    arr.append(int(input()))

for n in sorted(arr):
    print(n)