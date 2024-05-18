function solution(friends, gifts) {
  let answer = 0;
  let dstData = {};

  // dstData 초기화
  friends.forEach((outerName) => {
    dstData[outerName] = {};
    friends.forEach((innerName) => {
      if (outerName !== innerName) {
        dstData[outerName][innerName] = [0, 0]; // [준 개수, 받은 개수]
      } else {
        dstData[outerName][innerName] = 0; // 같은 경우 선물 지수 0
      }
    });
  });

  // dstData 파싱
  gifts.forEach((gift) => {
    let [from, to] = gift.split(" ");
    dstData[from][from] += 1; // 선물 준 사람의 선물 지수 증가
    dstData[to][to] -= 1; // 선물 받은 사람의 선물 지수 감소

    dstData[from][to][0] += 1; // from이 to에게 준 선물 개수 증가
    dstData[to][from][1] += 1; // to가 from에게 받은 선물 개수 증가
  });

  // 각 친구별로 최댓값 계산
  Object.entries(dstData).forEach(([fromName, giftDatas]) => {
    let tempAnswer = 0;
    Object.entries(giftDatas).forEach(([toName, giftData]) => {
      if (fromName !== toName) {
        let [give, receive] = giftData;

        if (give > receive) {
          tempAnswer += 1;
        } else if (give === receive) {
          if (dstData[fromName][fromName] > dstData[toName][toName]) {
            tempAnswer += 1;
          }
        }
      }
    });
    answer = Math.max(answer, tempAnswer);
  });

  return answer;
}
