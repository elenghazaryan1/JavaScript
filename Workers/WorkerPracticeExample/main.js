const worker = new Worker("./worker.js");

const buffer = new ArrayBuffer(20);

const numbers = new Uint32Array(buffer);

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

worker.postMessage(buffer, [buffer]);

worker.onmessage = (event) => {
  const numbers = new Uint32Array(event.data);

  for (let number of numbers) {
    console.log(number);
  }
};
