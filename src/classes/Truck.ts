// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';



  
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow{
  // TODO: Declare properties of the Truck class

  
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];
    towingCapacity: number;

  // TODO: Create a constructor that accepts the properties of the Truck class
    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[],
      towingCapacity: number
    ) {
     
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    super();
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (wheels.length !== 4) {
      wheels = [
        new Wheel(20, 'Default'),
        new Wheel(20, 'Default'),
        new Wheel(20, 'Default'),
        new Wheel(20, 'Default'),
      ];
    }

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;

    }
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
  const v = vehicle as any; // or: as Car | Truck | Motorbike
  const name = `${v.make} ${v.model}`;
  
  if (v.weight <= this.towingCapacity) {
    console.log(`${this.make} ${this.model} is towing ${name}.`);
  } else {
    console.log(`${name} is too heavy to be towed.`);
  }
}


  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
  // TODO: The method should call the printDetails method of the parent class
  super.printDetails();

  // TODO: The method should log the details of the Truck
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  console.log(`VIN: ${this.vin}`);
  console.log(`Make: ${this.make}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`);
  console.log(`Weight: ${this.weight} lbs`);
  console.log(`Top Speed: ${this.topSpeed} mph`);
  console.log(`Color: ${this.color}`);
  console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
  
  this.wheels.forEach((wheel, index) => {
    console.log(`Wheel ${index + 1}: ${wheel.getDiameter}" ${wheel.getTireBrand}`);
  });
}

}

// Export the Truck class as the default export
export default Truck;
