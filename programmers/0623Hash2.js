function solution(clothes) {
  //2번째 풀이방법
  let combiClothes = new Map();
  let answer = 1;
  clothes.forEach((cloth, index) => {
    const [type, name] = cloth.split;
    if (combiClothes.has(name)) {
      combiClothes.set(name, combiClothes.get(name) + 1);
    } else {
      combiClothes.set(name, 1);
    }
  });

  //반복문 사용 할 거고
  for (let item of combiClothes.values()) {
    answer *= item + 1;
  }

  return answer - 1;
}
