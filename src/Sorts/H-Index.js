1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  let answer = 0;
  const citationsSorted = citations.sort((a, b) => b - a);
  for (let i = 0; i < citationsSorted.length; i++) {
    const h = citationsSorted[i];
    const CountHOrMore = citations.filter(citation => citation >= h).length;
    if (CountHOrMore <= h) {
      answer = i + 1;
    }
  }

  return answer;
}
