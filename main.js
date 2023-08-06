let name = "kim seong eun";
const name2 = "siwon";
console.log(`hello world ${name}`);
let names = ["seong eun", "si won"];
// console.log(names[0]);
// console.log(names[1]);

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

names.forEach(function (v) {
  console.log(v);
});

let newNames = names.map(function (v) {
  return `kim ${v}`;
});

console.log(newNames);
