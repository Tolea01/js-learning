const isOutsideRange = () => {
  const age = prompt('Enter age');

  // if (age >= 14 && age <= 90) {
  //     alert('True');
  // } else {
  //     alert('False');
  // }

  if (!(age < 14 || age > 90)) {
    alert('True');
  } else {
    alert('False');
  }
};

isOutsideRange();