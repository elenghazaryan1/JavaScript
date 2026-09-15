self.onmessage = (event) => {
  const numbers = event.data;
  const maxNum = Math.max(...numbers);

  self.postMessage(maxNum);
};
