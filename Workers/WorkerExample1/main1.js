const worker = new Worker("./worker1.js");

worker.postMessage("Hello from Main thread.");

worker.onmessage = (event) => {
  console.log(event.data);
};
