const checkNumber = () => {
  const input = prompt('Enter a number: ');

  if (input > 0) {
    alert(1);
  } else if (input < 0) {
    alert(-1);
  } else if (input == 0) {
    alert(0);
  } else {
    alert('Error');
  }
};

checkNumber();