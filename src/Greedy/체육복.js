// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  const countCloth = [];
  for (let i = 1; i <= n; i++) {
    countCloth[i - 1] = 1;

    if (lost.includes(i)) {
      countCloth[i - 1]--;
    }
    if (reserve.includes(i)) {
      countCloth[i - 1]++;
    }
  }
  for (let i = 0; i < n; i++) {
    if (!countCloth[i]) {
      if (countCloth[i - 1] === 2) {
        countCloth[i]++;
        countCloth[i - 1]--;
      } else if (countCloth[i + 1] === 2) {
        countCloth[i]++;
        countCloth[i + 1]--;
      }
    }
  }

  return countCloth.filter(item => item !== 0).length;
}
