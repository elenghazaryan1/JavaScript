function getNumber() {
  return new Promise((resolve) => {
    resolve(10);
  });
}

async function doubled() {
  try {
    const number = await getNumber();
    console.log(number * 2);
  } catch (err) {
    console.log(err);
  }
}

doubled();
