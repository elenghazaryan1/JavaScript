const words = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "kiwi",
  "orange",
];

const res = new Map();

for (let value of words) {
  if (res.has(value)) {
    res.set(value, res.get(value) + 1);
  } else {
    res.set(value, 1);
  }
}

console.log(res);
