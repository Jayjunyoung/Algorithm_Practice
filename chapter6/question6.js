const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("");

let croatiaWordCount = 0;

for (let i = 0; i < input.length; i++) {
  let nowWord = input[i];
  let rightWord = input[i + 1];
  let leftword = input[i - 1];
  let rrWord = input[i + 2];

  if (nowWord === "c") {
    if (rightWord === "=" || rightWord === "-") {
      croatiaWordCount--;
    }
  }

  if (nowWord === "d") {
    if (rightWord === "-") {
      croatiaWordCount--;
    }
    if (rightWord === "z" && rrWord === "=") {
      croatiaWordCount -= 2;
    }
  }

  if (nowWord === "l" || nowWord === "n") {
    if (rightWord === "j") {
      croatiaWordCount--;
    }
  }

  if (nowWord === "s") {
    if (rightWord === "=") {
      croatiaWordCount--;
    }
  }

  if (nowWord === "z") {
    //앞에 d가 아닌 반례 해주기
    if (leftword !== "d" && rightWord === "=") {
      croatiaWordCount--;
    }
  }

  //알파벳 한글자는 count 추가해주기
  croatiaWordCount++;
}

console.log(croatiaWordCount);
