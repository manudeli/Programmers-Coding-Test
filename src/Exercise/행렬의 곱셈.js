// https://programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
  let answer = [];

  const A = arr1;
  const B = arr2;

  for (let yA = 0; yA < A.length; yA++) {
    answer[yA] = [];
    for (let xA = 0; xA < A[yA].length; xA++) {
      const current = A[yA][xA];
      B[xA].forEach(
        (itemB, xB) =>
          (answer[yA][xB] = (answer[yA][xB] || 0) + current * itemB)
      );
    }
  }

  return answer;
}

/*
행렬 A      행렬 B
[2, 3, 2]   [5, 4, 3]
[4, 2, 4]   [2, 4, 1]
[3, 1, 4]   [3, 1, 1]

[
  [10 + 6 + 6, 8 + 12 + 2, 6 + 3 + 2],
  [20 + 4 + 12, 16 + 8 + 4, 12 + 2 + 4],
  [15 + 2 + 12, 12 + 4 + 4, 9 + 1 + 4],
];

A의 행의 개수와 B의 열의 개수가 같아야 곱할 수 있습니다.
행렬의 곱 참고: https://mathbang.net/562
*/
