# 2531

import sys

input = sys.stdin.readline

if __name__ == "__main__":
    '''
    N : 벨트에 놓은 초밥 접시 수
    d : 초밥 가지 수
    k : 연속해서 먹는 접시의 수
    c : 쿠폰 번호
    '''
    N, d, k, c = map(int, input().split())

    belt = []

    for _ in range(N):
        belt.append(int(input()))
    