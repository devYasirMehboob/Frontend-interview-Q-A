class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  startEngine() {
    return `${this.brand} ${this.model} engine started.`;
  }
}

class Car extends Vehicle {
  constructor(brand, model, doors) {
    super(brand, model);
    this.doors = doors;
  }
}

class Truck extends Vehicle {
  constructor(brand, model, capacity) {
    super(brand, model);
    this.capacity = capacity;
  }
}

// Example usage
const myCar = new Car("Toyota", "Corolla", 4);
console.log(myCar.startEngine()); // Toyota Corolla engine started.

const myTruck = new Truck("Ford", "F-150", "2 tons");
console.log(myTruck.startEngine()); // Ford F-150 engine started.
