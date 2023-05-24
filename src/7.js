class Animal {
  constructor(food, location) {
    this.food = food;
    this.location = location;
  }

  makeNoise() {
    return 'The animal is sleeping';
  }

  eat() {
    return `The animal eat ${this.food}`;
  }

  sleep() {
    return 'The animal is sleeping';
  }
}

class Cat extends Animal {
  makeNoise() {
    return 'cat meows';
  }

  eat() {
    return `cat eat ${this.food}`;
  }
}

class Dog extends Animal {
  makeNoise() {
    return 'dog barking'
  }

  eat() {
    return `dog eat ${this.food}`;
  }
}

class Horse extends Animal {
  makeNoise() {
    return 'horse neighs';
  }

  eat() {
    return `horse eat ${this.food}`;
  }
}

class Veterinar {
  treatAnimal(animal) {
    console.log(`food: ${animal.food}`);
    console.log(`location: ${animal.location}`);
  }
}

const cat = new Cat('fish', 'apartment');
const dog = new Dog('feed', 'house');
const horse = new Horse('hay', 'stall');
const veterinar = new Veterinar();

const animals = [cat, dog, horse];

animals.forEach(animal => veterinar.treatAnimal(animal));