//The forecast today is 293 Kelvin
const kelvin = 293;

//Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

//equation to calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32

// round down the result using a method of the Math class
fahrenheith = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahreinheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`)