print("시작")

import sys
from collections import deque

dx, dy = [-1, 1, 0, 0], [0, 0, -1, 1]

def bfs(x, y) :
    queue = deque([])
    queue.append([x, y])
    while queue:
        a, b = queue.popleft()
        visit[a][b] = 1
        for l in range(4):
            nx, ny = a + dx[l], b + dy[l]
            if 0 <= nx < n and 0 <= ny < n and visit[a][b] != 1 and rgb[a][b] == rgb[nx][ny]:
                queue.append([nx, ny])

n = int(input())
rgb = [list(sys.stdin.readline().rstrip()) for _ in range(n)]
visit = [[0]*n for _ in range(n)]
cnt = 0

for i in range(n):
    for j in range(n):
        if visit[i][j] == 0:
            bfs(i, j)
            cnt += 1

print(cnt)
# print(rgb)