# 10988

s = input()

start = 0
end = len(s) - 1

while(start < end):
    if s[start] != s[end]:
        print(0)
        exit()
    start += 1
    end -= 1

print(1)