# 4803
import sys
input = sys.stdin.readline

def isCycle(now_v): 
    for next_v in graph[now_v]:
        if parent[now_v] == next_v:
            continue
        
        # 다음 노드가 부모 노드가 아닌데 방문한 적이 있음
        # => 사이클임을 의미
        if visited[next_v]:
            return True

        # 다음 노드의 부모 노드를 현재 노드로 지정함.
        parent[next_v] = now_v
        visited[next_v] = True

        # 다음 노드를 루트 노드로 하는 서브트리에서
        # 사이클이 존재한다면 전체 트리가 사이클이 존재한다는 의미
        if isCycle(next_v):
            return True
    
    # 문제 없이 로직이 수행된다면 사이클 없음 -> False를 return
    return False

def isTree():
    cnt = 0
    # 1번째 정점에서부터 dfs 탐색 시작
    for v in range(1, len(graph)):
        if visited[v] == True:
            continue
        else:
            visited[v] = True
            parent[v] = v
            if not isCycle(v):
                cnt += 1
        return cnt
    


if __name__ == "__main__":
    case = 1
    n, m = map(int, input().split())
    while n != 0 or m != 0:
        graph = [[] for _ in range(n + 1)]
        parent = [-1] * (n + 1)
        visited = [False] * (n + 1)
        for _ in range(m):
            v, e = map(int, input().split())
            graph[v].append(e)
            graph[e].append(v)
        
        result = isTree()
    
        if result > 1:
            print(f"Case {case}: A forest of {result} trees.")
        elif result == 1:
            print(f"Case {case}: There is one tree.")
        else:
            print(f"Case {case}: No trees.")

        case += 1
        n, m = map(int, input().split())
