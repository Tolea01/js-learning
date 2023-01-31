const a = 1500;
const b = 200;
const c = 100;

if (a > b && a > c) {
  console.log('Numarul mai mare este ' + a);
} else if (b > a && b > c) {
  console.log('Numarul mai mare este ' + b);
} else if (c > a && c > b) {
  console.log('Numarul mai mare este ' + c);
}

if (a < b && a < c) {
  console.log('Numarul mai mic este ' + a);
} else if (b < a && b < c) {
  console.log('Numarul mai mic este ' + b);
} else if (c < a && c < b) {
  console.log('Numarul mai mic este ' + c);
}

// console.log(`Numarul mai mare este: ${Math.max(a, b, c)}\nNumarul mai mic este: ${Math.min(a, b, c)}`);