const input = prompt('Introduceti anul, luna, data nasterii');
const currentDate = new Date();
const dateOfBirth = new Date(input);
const days = Math.ceil(Math.abs(dateOfBirth.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
const year = Math.floor(days / 365);
const months = Math.floor(year * 12);

console.log(`${year} ani\n${months} luni\n${days} zile`);