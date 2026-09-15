function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello!");
    }, 1000);
  });
}

async function printMessage() {
  try {
    const message = await getMessage();
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

printMessage();
