#include <iostream>
#include <stdio.h>
#include <stack>

using namespace std;

int num, in;
int i, j;

int main(void){
    printf("시작");

    stack<int>s; //스택 생성

    s.push(1);
    s.push(2);
    s.push(3);

    for(j=0; !s.empty(); j++){
        printf("%d", s.top());
        s.pop();
    }

    return 0;
}