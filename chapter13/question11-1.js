let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const numArr = input[1].split(" ").map(Number);
let sortedArr = Array.from(new Set(numArr)).sort((a, b) => a - b);

function binarySearch(arr, target) {
  //arr: 중복이 제거되고 오름차순 정렬된 배열 , target: 찾고자 하는 숫자
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}

console.log(numArr.map((num) => binarySearch(sortedArr, num)).join(" "));
