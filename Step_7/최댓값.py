# 2566

max_num = -1 
max_row = 0
max_col = 0

for row in range(9):
    temp_arr = list(map(int,input().split()))
    for col in range(9):
        if temp_arr[col] > max_num:
            max_row = row + 1
            max_col = col + 1
            max_num = temp_arr[col]

print(max_num)
print("%d %d"%(max_row, max_col))