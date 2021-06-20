// https://programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  const numbersSorted = numbers.sort(
    (a, b) => +(`${b}` + `${a}`) - +(`${a}` + `${b}`)
  );
  return numbersSorted.reduce(
    (a, current) => (a === '0' && current === 0 ? a : a + current),
    ''
  );
}
