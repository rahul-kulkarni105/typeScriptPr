class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything<string>(['a', 'b', 'c']);

// Type Inference, do not need to mention <string>
// const arr = new ArrayOfAnything(['a', 'b', 'c']);

/* -------- Example of generics with functions -------- */

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

// Type Inference, do not need to mention <string>
// printAnything(['a', 'b', 'c']);

/* -------- Generic Constants -------- */

class Car {
  print() {
    console.log('I am a Car');
  }
}

class House {
  print() {
    console.log('I am a House');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCards<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCards([new Car(), new Car()]);
printHousesOrCards([new House(), new House()]);
// printHousesOrCards([new House(), new Car()]);
