https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
    const items = {}
    let accumulator = 1;

    clothes.forEach(cloth => !items[cloth[1]] ? items[cloth[1]] = 1 : items[cloth[1]] += 1);

    Object.keys(items).forEach(key => {
        accumulator = accumulator * (items[key] + 1)
    })

    return accumulator-1;
}