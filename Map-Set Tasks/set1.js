const ids = [101, 205, 101, 307, 205, 412, 307, 500, 101, 412];

const set = new Set(ids);

console.log(set);
console.log(set.size);
console.log(set.has(307));
console.log(set.has(999));
set.add(600);
set.delete(205);

console.log(set);
