function getName() {
  return Promise.resolve("Albert");
}

function getAge() {
  return Promise.resolve(23);
}

async function printNameAndAge() {
  const name = await getName();
  console.log(name);

  const age = await getAge();
  console.log(age);
}

printNameAndAge();
