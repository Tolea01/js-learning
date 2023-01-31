const printNumberSequence = (limit) => {
  for (let i = 0; i < limit; i++) {
    if (i % 2 === 0) {
      console.log(i);
    } else {
      console.log(100 - i);
    }
  }
};

printNumberSequence(100);