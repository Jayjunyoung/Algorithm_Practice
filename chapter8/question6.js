let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map((num) => Number(num));

const X = Number(input);

let limit = 1,
  n = 1;

while (limit < X) {
  limit += n + 1;
  n++;
}

const a = n - (limit - X);

if (n % 2 === 0) {
  console.log(`${a}/${n - a + 1}`);
} else {
  console.log(`${n - a + 1}/${a}`);
}
