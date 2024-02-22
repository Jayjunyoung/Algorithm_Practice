let input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

//13 입력
const n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

//중복된 원소를 제거하기 위해 set, 변환뒤 배열로 변환
const newArr = [...new Set(arr)];

newArr.sort((a, b) => {
  //길이가 짧은것 부터 정렬
  if (a.length != b.length) {
    return a.length - b.length;
  } else {
    //길이가 같은 경우 사전순으로 정렬
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }
});

for (let word of newArr) {
  console.log(word);
}
