const array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

const uniqueSorted = () => {
  const sort = array.sort();
  const unique = Array.from(new Set(sort));

  return sort, unique;
};

console.log(uniqueSorted());