const words = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");
const maxLength = Math.max(...words.map((i) => i.length));
let vertical = "";
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < words.length; j++) {
    vertical += words[j][i] || "";
  }
}
console.log(vertical);
