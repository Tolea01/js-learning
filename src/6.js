class Transport {
  constructor(model, price, year) {
    this.model = model;
    this.price = price;
    this.year = year;
  }

  getModel() {
    return this.model;
  }

  getYear() {
    return new Date().getFullYear() - this.year;
  }

  move() {
    return 'Transport is moving.';
  }
}

class Car extends Transport {
  move() {
    return 'The car is moving along the road.';
  }
}

class Truck extends Car {
  move() {
    return 'The truck transports cargo on the road.';
  }
}

class Man extends Truck {
  move() {
    return 'Man is moving along the road.'
  }
}

class Mercedes extends Car {
  move() {
    return 'Mercedes is driving down the road.';
  }
}

class Airplane extends Transport {
  move() {
    return 'The plane flies in the sky.';
  }
}

class Boeing extends Airplane {
  move() {
    return 'Boeing flies through the air.';
  }
}

class Airbus extends Airplane {
  move() {
    return 'Airbus flies through the air.';
  }
}

const mercedes = new Mercedes('E class', 30000, 2018);
console.log(mercedes.getModel());
console.log(mercedes.getYear());
console.log(mercedes.move());

const truck = new Truck('Iveco', 100000, 2015);
console.log(truck.getModel());
console.log(truck.getYear());
console.log(truck.move());