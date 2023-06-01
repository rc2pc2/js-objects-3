/**

Crea un array composto da 15 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati:

nel primo array solo le auto a benzina,  // ciclo for
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

 */

const carModule = (brand, model, fuelType) => {
   return { brand, model, fuelType };
}

const carsList = [
   carModule('Toyota', 'Camry', 'benzina'),
   carModule('Honda', 'Civic', 'electric'),
   carModule('Ford', 'Mustang', 'benzina'),
   carModule('Volkswagen', 'Golf', 'diesel'),
   carModule('Tesla', 'Model S', 'electric'),
   carModule('Fiat', 'Punto', 'LPG'),
   carModule('BMW', 'X5', 'benzina'),
   carModule('Mercedes', 'C-Class', 'diesel'),
   carModule('Audi', 'A4', 'benzina'),
   carModule('Chevrolet', 'Cruze', 'benzina'),
   carModule('Hyundai', 'Elantra', 'electric'),
   carModule('Nissan', 'Sentra', 'benzina'),
   carModule('Kia', 'Sportage', 'benzina'),
   carModule('Mazda', 'CX-5', 'diesel'),
   carModule('Subaru', 'Impreza', 'benzina')
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

// ? carsList.filter(car =>  car.fuelType !== 'diesel' && car.fuelType !== 'benzina' );
const otherCars = carsList.filter((car) => {
   if (car.fuelType !== 'diesel' && car.fuelType !== 'benzina'){
      return true;
   }
   return false;
});

console.log(gasolineCars, dieselCars, otherCars);