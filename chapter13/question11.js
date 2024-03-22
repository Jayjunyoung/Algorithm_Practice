const fs = require("fs");

const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
input.shift();
var arr = input[0].split(" ").map((item) => Number(item));
// 5 5 3 4 4

//중복을 제거한 배열 생성
var uniq = [...new Set([...arr])];
//ex 5 5 3 4 4 일 경우 5 4 3 으로 중복 제거하고 3개가 될 것
var object = {};

//내림차순 정렬..큰 숫자부터 확인 가능 ex 즉 5 4 3으로 정렬 될 것
uniq.sort((a, b) => b - a);

//543 이니까 uniq.length는 3이고 uni1[0] = -10, uniq[1] = -9, uniq[2] = 2
for (let i = 0; i < uniq.length; i++) {
  object[uniq[i]] = uniq.length - i - 1;
  //해당 키에 해당하는 숫자가 몇번째로 큰지 의미함
}

var str = "";

arr.forEach((item) => {
  //arr요소에 하나씩 접근한다
  str += object[item] + " ";
});
//str에 누적으로 더해주기!
console.log(str);
