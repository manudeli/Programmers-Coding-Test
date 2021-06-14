function solution(priorities, location) {
  var answer = 0;
  let inputQueue = [];
  let priorityQueue = [];
  let result = null;

  for (let i = 0; i < priorities.length; i++)
    inputQueue.push({ location: i, priority: priorities[i] });

  while (inputQueue.length) {
    let current = inputQueue.shift();
    let isThereBigger = false;
    let length = inputQueue.length;
    for (let input of inputQueue)
      if (input.priority > current.priority) {
        inputQueue.push(current);
        isThereBigger = true;
        break;
      }
    if (!isThereBigger) priorityQueue.push(current);
  }

  priorityQueue.forEach(
    (priorityInput, index) =>
      priorityInput.location === location && (result = index + 1)
  );

  return result;
}
