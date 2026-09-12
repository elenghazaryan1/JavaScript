const range = {
  from: 0,
  to: 10,
  step: 2,

  [Symbol.iterator]() {
    let current = 0;
    return {
      next: () => {
        if (current <= this.to) {
          const value = current;
          current += this.step;
          return {
            value,
            done: false,
          };
        }

        return {
          value: undefined,
          done: true,
        };
      },
    };
  },
};

for (const value of range) {
  console.log(value);
}
