// https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    !answer.length ? (answer[i] = x) : (answer[i] = answer[i - 1] + x);
  }

  return answer;
}
