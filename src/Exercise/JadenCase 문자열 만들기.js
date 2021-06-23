// https://programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  let answer = '';

  s.split(' ').forEach((word, indexWords, arrayWords) => {
    word.split('').forEach((char, index) => {
      if (index === 0) {
        if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(+char)) {
          answer += char;
        } else {
          answer += char.toUpperCase();
        }
      } else {
        answer += char.toLowerCase();
      }
    });
    if (!(indexWords === arrayWords.length - 1)) {
      answer += ' ';
    }
  });

  return answer;
}
