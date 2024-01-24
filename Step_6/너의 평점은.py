# 25206

'''
1. 입력받음. 학점 x 과목평점을 total_major에 합산.
1.1 학점의 합도 total_score에 합산
2. P가 입력되면 무시
3. total_major / total_score 출력
'''

total_score = 0.0
total_major = 0.0
for _ in range(20):
    sub,score,grade = map(str,input().split())
    if grade == "P":
        continue

    _grade = 0
    if grade == "A+":
        _grade = 4.5
    elif grade == "A0":
        _grade = 4.0
    elif grade == "B+":
        _grade = 3.5
    elif grade == "B0":
        _grade = 3.0
    elif grade == "C+":
        _grade = 2.5
    elif grade == "C0":
        _grade = 2.0
    elif grade == "D+":
        _grade = 1.5
    elif grade == "D0":
        _grade = 1.0
    else:
        _grade = 0.0
    
    total_score += float(score)
    total_major += (_grade * float(score))

print(total_major / total_score)