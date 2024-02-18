let input = require("fs").readFileSync(0, "utf-8").trim().toString();

const N = Number(input); //256

let result = [];

for (let i = 1; i <= N; i++) {
  // 각 자릿수 숫자로 분해하기 위해서 문자열로 만들어줌
  let M = String(i);

  // 자연수 M의 각 자릿수를 추출
  // 연산을 위해 숫자형으로 변경해줌
  let digit = M.split("").map((x) => Number(x));

  let sum = 0;

  for (let j = 0; j < digit.length; j++) {
    // 자연수 M의 각 자릿수의 합
    sum += digit[j];
  }

  // sum과 M을 더하여 자연수 M에 대한 분해합을 얻음
  // 위에서 M을 String으로 만들었으므로
  // 문자열 연결 연산이 되버릴 수 있으므로 Number로 변환해줌
  sum += Number(M); //sum에는 각 자리 숫자 더한게 들어가있음

  // sum이 N과 같으면
  // 자연수 M은 분해합 N의 생성자이므로 빈 배열에 넣음
  if (sum === N) {
    result.push(M);
  }
}

if (result.length === 0) {
  console.log(0);
} else {
  // 생성자 중 가장 작은 숫자를 출력
  console.log(Math.min(...result));
}
