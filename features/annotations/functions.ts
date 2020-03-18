const add = (a: number, b: number): number => {
  return a + b;
};

// Arrow function example
const subtract = (a: number, b: number): number => {
  return a - b;
};

// Using function keyword example
function divide(a: number, b: number): number {
  return a / b;
}

// Anonymous function assigned to a variable example
const multiply = function(a: number, b: number): number {
  return a * b;
};

// Not going to return anything in this function
const logger = (message: string): void => {
  console.log(message);
};

// Never going to reach the end of the function and not going to return anything
// Very corner case
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

// Regular JS syntax
// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

// ES2015 syntax
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
