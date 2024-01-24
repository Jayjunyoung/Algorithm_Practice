# 1316

N = int(input())

result = 0
for _ in range(N):
    arr = list(input())
    _arr = []
    for i in range(len(arr)):
        if i == 0:
            _arr.append(arr[i])
        else:
            if arr[i] != arr[i-1]:
                _arr.append(arr[i])
    if len(_arr) == len(set(_arr)):
        result += 1

print(result)