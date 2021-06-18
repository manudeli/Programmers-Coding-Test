// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

function solution(array, commands) {
  let result = [];
  commands.forEach(x => {
    let temp = array.slice(x[0] - 1, x[1]).sort((a, b) => a - b);
    result.push(temp[x[2] - 1]);
  });
  return result;
}
