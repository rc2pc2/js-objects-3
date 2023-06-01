/**
 * A function that generates and returns a simple car object given brand, model and fuel type (as strings)
 *
 * @param {string} brand The brand of the car to be created
 * @param {string} model The model of the car to be created
 * @param {string} fuelType The fuel type of the car to be created
 * @returns The car with the details as inserted in the function's arguments
 */
const generateCarObject = (brand, model, fuelType) => {
   return { brand, model, fuelType };
}


const carsList = [
   generateCarObject('Toyota', 'Camry', 'benzina'),
   generateCarObject('Honda', 'Civic', 'electric'),
   generateCarObject('Ford', 'Mustang', 'benzina'),
   generateCarObject('Volkswagen', 'Golf', 'diesel'),
   generateCarObject('Tesla', 'Model S', 'electric'),
   generateCarObject('Fiat', 'Punto', 'LPG'),
   generateCarObject('BMW', 'X5', 'benzina'),
   generateCarObject('Mercedes', 'C-Class', 'diesel'),
   generateCarObject('Audi', 'A4', 'benzina'),
   generateCarObject('Chevrolet', 'Cruze', 'benzina'),
   generateCarObject('Hyundai', 'Elantra', 'electric'),
   generateCarObject('Nissan', 'Sentra', 'benzina'),
   generateCarObject('Kia', 'Sportage', 'benzina'),
   generateCarObject('Mazda', 'CX-5', 'diesel'),
   generateCarObject('Subaru', 'Impreza', 'benzina')
];

const gasolineCars = [];
for (let index = 0; index < carsList.length; index++) {
   const car = carsList[index];

   if (car.fuelType === 'benzina'){
      gasolineCars.push(car);
   }
}

const dieselCars = [];
carsList.forEach((element) => {
   if (element.fuelType === 'diesel'){
      dieselCars.push(element);
   }
});

const otherCars = carsList.filter((car) => {
   if (car.fuelType !== 'diesel' && car.fuelType !== 'benzina'){
      return true;
   }
   return false;
});

console.log(gasolineCars, dieselCars, otherCars);