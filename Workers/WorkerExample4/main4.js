const worker = new Worker("./worker4.js");

const buffer = new SharedArrayBuffer(16);

const numbers = new Uint32Array(buffer);

numbers[0] = 0;
numbers[1] = 1;
numbers[2] = 2;
numbers[3] = 3;

worker.postMessage(buffer);

setTimeout(() => {
  for (const number of numbers) {
    console.log(number);
  }
}, 100);
