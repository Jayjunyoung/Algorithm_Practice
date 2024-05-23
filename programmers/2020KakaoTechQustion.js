function solution(survey, choices) {
  const choiceMap = new Map();

  choices.forEach((choice, i) => {
    let type;
    if (choice < 4) type = survey[i][0];
    else if (choice > 4) type = survey[i][1];

    let score = 0;
    if (choice === 1 || choice === 7) score = 3;
    else if (choice === 2 || choice === 6) score = 2;
    else if (choice === 3 || choice === 5) score = 1;

    choiceMap.set(type, (choiceMap.get(type) || 0) + score);
  });

  function setIndex(a, b) {
    const countA = choiceMap.get(a) || 0;
    const countB = choiceMap.get(b) || 0;
    return countA >= countB ? a : b;
  }

  let answer = "";
  answer += setIndex("R", "T");
  answer += setIndex("C", "F");
  answer += setIndex("J", "M");
  answer += setIndex("A", "N");

  return answer;
}
