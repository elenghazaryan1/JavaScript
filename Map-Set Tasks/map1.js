const users = new Map([
  [101, "admin"],
  [205, "user"],
  [307, "moderator"],
  [412, "user"],
]);

console.log(users.get(307));

console.log(users.has(500));

users.set(205, "moderator");

console.log(users.get(205));
users.delete(412);

console.log(users.size);

for (let [key, value] of users) {
  console.log(key, value);
}
