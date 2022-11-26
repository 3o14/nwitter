print("시작")
import copy
import sys
sys.setrecursionlimit(10**6)

dx, dy = [-1, 1, 0, 0], [0, 0, -1, 1]

def dfs_rec(x, y, matrix, visit_T):
    visit_T[x][y] = 1
    for i in range(4):
        a, b = dx[i]+x, dy[i]+y
        if 0 <= a < n and 0 <= b < n and visit_T[a][b] == 0 and matrix[a][b] == matrix[x][y]:
            dfs_rec(a, b, matrix, visit_T)
            
n = int(input())
rgb = [list(sys.stdin.readline().rstrip()) for _ in range(n)]
rgb2 = copy.deepcopy(rgb)
visit = [[0]*n for _ in range(n)]
visit2 = copy.deepcopy(visit)
cnt1, cnt2 = 0, 0

for j in range(n):
    for k in range(n):
        if rgb2[j][k] == 'G':
            rgb2[j][k] = 'R'
        if visit[j][k] == 0:
            dfs_rec(j, k, rgb, visit)
            cnt1 += 1

for j in range(n):
    for k in range(n):
        if visit2[j][k] == 0:
            dfs_rec(j, k, rgb2, visit2)
            cnt2 += 1
print(rgb2)
print(cnt1, cnt2)
