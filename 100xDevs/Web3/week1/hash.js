const cryp = require("crypto");
let i = 0;
let a = "100xdevs";
let hash = " ";
while (true) {
  let out = a.concat(i.toString());
  hash = cryp.createHash("sha256").update(out).digest("hex");
  if (hash.startsWith("00000")) break;
  i++;
}
console.log(i);
console.log(hash);
