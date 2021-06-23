// https://programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  let answer = 0;
  let isLeastCommonMultiple = false;

  while (!isLeastCommonMultiple) {
    answer++;
    let isAllMultiple = true;
    arr.forEach(item => {
      if (isAllMultiple) answer % item !== 0 && (isAllMultiple = false);
    });
    if (isAllMultiple) isLeastCommonMultiple = true;
  }

  return answer;
}
