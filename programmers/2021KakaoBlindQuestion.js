function solution(new_id) {
  let answer = new_id
    .toLowerCase() // 1단계
    .replace(/[^a-z0-9-_.]/g, "") // 2단계
    .replace(/\.+/g, ".") // 3단계
    .replace(/^\.|\.$/g, "") // 4단계
    .replace(/^$/, "a") // 5단계
    .slice(0, 15)
    .replace(/\.$/, ""); // 6단계

  return answer.length > 2 // 7단계
    ? answer
    : (answer += answer.charAt(answer.length - 1).repeat(3 - answer.length));
}
