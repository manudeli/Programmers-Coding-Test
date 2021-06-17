// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  let answer = [];

  const accumulatorCorrect = [0, 0, 0];

  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const CountCorrect = (pattern, indexInAnswer) =>
    answers.forEach((answer, index) => {
      let matchIndexFirst = index % pattern.length;
      if (answer === pattern[matchIndexFirst])
        accumulatorCorrect[indexInAnswer]++;
    });

  CountCorrect(first, 0);
  CountCorrect(second, 1);
  CountCorrect(third, 2);

  const max = Math.max(...accumulatorCorrect);
  accumulatorCorrect.forEach((item, index) => {
    if (item === max) {
      answer.push(index + 1);
    }
  });

  return answer;
}
