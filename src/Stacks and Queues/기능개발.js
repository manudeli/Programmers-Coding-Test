// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  let answer = [];
  let dayCountMax = 0;
  for (let i = 0; i < progresses.length; i++) {
    let dayCount = Math.ceil((100 - progresses[i]) / speeds[i]);
    if (dayCountMax >= dayCount) answer[answer.length - 1]++;
    else answer.push(1), (dayCountMax = dayCount);
  }
  return answer;
}
