const colors = ['red', 'green', 'blue',];

const checkColor = (color) => {
  return colors.findIndex((elem) => {
    if (elem === color) {
      return elem;
    };
  });
};

console.log(checkColor('blue'));