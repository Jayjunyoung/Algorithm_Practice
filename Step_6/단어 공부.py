# 1157

s = input()

s = s.upper()

dict = {}

for i in range(len(s)):
    if s[i] not in dict:
        dict[s[i]] = 1
    else:
        dict[s[i]] += 1

result = [k for k,v in dict.items() if max(dict.values()) == v]

if len(result) == 1:
    print(result[0])
else:
    print("?")
    