const  students = [
  {name: "Caio", note:4},
  {name: "Aline", note:7},
  {name: "Jose", note:8},
  {name: "Maria", note:4.9},
  {name: "Fabiana", note:5.9},
  {name: "Welligton", note:5},
  {name: "washigton", note:6},
  {name: "Messias", note:6.1},
  {name: "Carlos", note:5.95},
  {name: "Luzia", note:5.99},
  {name: "Manoel", note:10}
]

const minimumNote = 6;
const studentsAproved = students.filter(students => students.note >= minimumNote);
console.log(studentsAproved);

console.log('----------------------------------------------------------------------');

const potentialCars = [
  {Model: "Fusca", motor:1.4 },
  {Model: "Gol", motor: 1.0},
  {Model: "Jetta", motor: 2.4},
  {Model: "A30", motor: 3.0},
  {Model: "Cl300", motor: 2.8},
  {Model: "X6", motor: 4.2},
  {Model: "A5", motor: 3.0},
  {Model: "Elantra", motor: 2.2},
  {Model: "Hb20", motor: 1.8},
  {Model: "I30", motor: 2.0},
  {Model: "Mazda", motor: 2.2}
]

const PotencialMinumum = 2.0;
const carsPotent = [];

for (let i = 0; i < potentialCars.length; i++) {
  if(potentialCars[i].motor >= PotencialMinumum) {
    carsPotent.push(potentialCars[i])
  }
}

console.log(carsPotent);

console.log('----------------------------------------------------------------------');

const supermarket = [
  {item: "Rice", price: 3.5},
  {item: "Beans", price: 7.2},
  {item: "Oil", price: 1.2},
  {item: "Pasta", price: 2.0},
  {item: "Salt", price: 4.1},
  {item: "Sugar", price: 2.7},
  {item: "Flour", price: 3.2},
  {item: "Meat", price: 12.3},
  {item: "Fish", price: 17.45},
  {item: "Cheese", price: 8.7},
  {item: "Coffee", price: 21.2},
  {item: "Cake", price: 6.5},
  {item: "Water", price: 1},
]

const lowPriceItems = 10;
const ItemAproved = supermarket.reduce((acc, itens) => {
  if(itens.price <= lowPriceItems) {
    acc.push(itens);
  }
  return acc;
}, []);

console.log(ItemAproved);