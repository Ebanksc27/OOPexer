class vechile {
    constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

}

honk() {
    return "Beep.";
}

toString() {
    return `${this.make} ${this.model} (${this.year})`;
}
}

const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.toString()); // "Toyota Corolla (2022)"
console.log(myCar.numWheels); // 4
console.log(myCar.honk()); // "Beep."

class Car extends Vechile {
    constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
}
}

const myBike = new Motorcycle("Harley-Davidson", "Softail", 2021);
console.log(myBike.toString()); // "Harley-Davidson Softail (2021)"
console.log(myBike.numWheels); // 2
console.log(myBike.honk()); // "Beep."
console.log(myBike.revEngine()); // "VROOM!!!"


class Motorcycle extends Vechile {
    constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
}
    revEngine() {
        return "VROOOOM!";
    }
    }

    const myGarage = new Garage(2);
console.log(myGarage.add("Not a vehicle")); // "Only vehicles are allowed in here!"
console.log(myGarage.add(new Car("Toyota", "Corolla", 2022))); // "Vehicle added!"
console.log(myGarage.add(new Motorcycle("Harley-Davidson", "Softail", 2021))); // "Vehicle added!"
console.log(myGarage.add(new Car("Honda", "Civic", 2021))); // "Sorry, we’re full."

class Garage {
    constructor(capacity) {
      this.capacity = capacity;
      this.vehicles = [];
    }
  
    add(vehicle) {
      if (!(vehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we’re full.";
      }
      this.vehicles.push(vehicle);
      return "Vehicle added!";
    }
  }







