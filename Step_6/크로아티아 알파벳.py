# 2941

_pattern = ["c","=","d","-","z","l","j","n","s"]
pattern = ["c=","c-","dz=","d-","lj","nj","s=","z="]
s = input()

idx = 0
cnt = 0

while(idx < len(s)):
    temp = s[idx]
    if temp in _pattern and idx + 1 < len(s):
        temp += s[idx + 1]
        if temp == "dz" and idx + 2 < len(s):
            temp += s[idx + 2]
            if temp == "dz=":
                cnt += 1
                idx += 3
                continue
        else:
            if temp in pattern:
                cnt += 1
                idx += 2
                continue
    
    cnt += 1
    idx += 1


print(cnt)