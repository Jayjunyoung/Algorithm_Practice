const input = require("fs").readFileSync(0, "utf-8").toString();

const result = [];

//아스키코드를 알아야했던 문제
for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));
