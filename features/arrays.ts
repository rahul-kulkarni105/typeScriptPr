const carMakers: string[] = ['ford', 'toyotya', 'chevy'];
const dates = [new Date(), new Date()];

// 2d arrays
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference while extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-11');
importantDates.push(new Date());
