/**
 * 3 modifiers
 * Public, Private and Protected
 * Public: can be accessed/called anywhere anytime
 * Private: can be accessed/called only by other methods in the same (this) class
 * Protected: can be accessed/called by other methods in this class or by other methods in the child classes.
 */

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.honk(); // Doesn't work because of protected

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
// car.honk();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
