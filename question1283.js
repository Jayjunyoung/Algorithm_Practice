const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift(); // 옵션의 개수
let usedKeys = new Set(); // 이미 사용된 단축키들을 저장할 Set
let result = []; // 최종 결과를 저장할 배열

for (let i = 0; i < n; i++) {
  let words = input[i].split(" "); // 현재 옵션을 단어 배열로 분할
  //ex. ["Save", "us"]
  let found = false;

  // 각 단어의 첫 글자를 단축키로 설정하는 루프
  for (let j = 0; j < words.length; j++) {
    let word = words[j];

    let key = word[0].toLocaleLowerCase();
    if (!usedKeys.has(key)) {
      usedKeys.add(key);
      words[j] = `[${word[0]}]` + word.slice(1);
      result.push(words.join(" "));
      found = true;
      break;
    }
  }

  // 첫 글자로 단축키를 설정하지 못한 경우, 문자열 전체를 순회하며 단축키 설정
  if (!found) {
    for (let j = 0; j < words.length; j++) {
      let word = words[j];
      for (let k = 0; k < word.length; k++) {
        let key = word[k].toLocaleLowerCase();
        if (!usedKeys.has(key)) {
          usedKeys.add(key);
          words[j] = word.slice(0, k) + `[${word[k]}]` + word.slice(k + 1);
          result.push(words.join(" "));
          found = true;
          break;
        }
      }
      if (found) break;
    }
  }

  // 단축키를 설정하지 못한 경우, 원래의 단어 그대로 결과에 추가
  if (!found) {
    result.push(words.join(" "));
  }
}

console.log(result.join("\n"));
