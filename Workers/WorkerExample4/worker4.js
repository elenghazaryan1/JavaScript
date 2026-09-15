self.onmessage = (event) => {
  const numbers = new Uint32Array(event.data);

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 1;
  }
};
