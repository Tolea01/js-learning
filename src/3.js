const styles = ['Джаз', 'Блюз'];

console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

styles.splice(Math.floor(styles.length / 2), 1, 'Классика')
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift('Рэп', 'Регги')
console.log(styles);