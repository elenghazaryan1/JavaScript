const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.from <= this.to) {
          return {
            value: this.from++,
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
