const worker = new Worker("./worker3.js");

const buffer = new ArrayBuffer(5);

const numbers = new Uint8Array(buffer);

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

worker.postMessage(numbers);

worker.onmessage = (event) => {
  const numbers = event.data;

  for (let number of numbers) {
    console.log(number);
  }
};
