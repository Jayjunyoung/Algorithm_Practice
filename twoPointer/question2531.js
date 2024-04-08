const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

//슬라이딩 윈도우 개념 사용

let [N, d, k, c] = input.shift().split(" ").map(Number);
// 접시의수 , 초밥의 가짓 수 , 연속해서먹는 접시의 수  , 쿠폰 번호
// 차례대로 8 30 4 40

let check = Array(d + 1).fill(0); //d=30 의미
let sushi = Array(N).fill(0); //스시 접시의 수

for (let i = 0; i < N; i++) {
  sushi[i] = Number(input.shift()); //초밥의 종류를 번호로 표현
}

let cnt = 0; //현재 먹은 초밥의 가짓수
let ans = 0; //최대로 먹을 수 있는 초밥의 가짓수

for (let i = 0; i < k; i++) {
  if (check[sushi[i]] == 0) {
    //
    //안먹은거니까 먹을수 있으므로 cnt++이 됌
    cnt++; //먹을 수 있는 가짓 수
  }

  check[sushi[i]]++; // 먹었으므로 0->1이됌
}

ans = cnt;

for (let s = 0; s < N; s++) {
  let end = (s + k) % N; //end = 4

  //내가 원래 썼던 방식처럼 쓰면 cnt가 ++로 갱신되잖아 그니까 그럼 이제 여기서 연산할 때 문제가 되는거지
  if (cnt >= ans) {
    if (check[c] == 0) {
      //check[30] = 0
      //쿠폰에 해당하는 초밥을 아직 먹지 않았다면
      ans = cnt + 1;
      //ans = cnt+!
    } else {
      ans = cnt;
    }
  }

  check[sushi[s]]--;
  //1 2 3 4
  //2 3 4 5  -> 1 이 빠지고 6이 들어옴
  if (check[sushi[s]] == 0) cnt--;
  if (check[sushi[end]] == 0) cnt++; //안 먹은거니까 cnt추가해주기

  check[sushi[end]]++;
}

console.log(ans);
