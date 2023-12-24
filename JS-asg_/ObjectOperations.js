function mergeCars(car1, car2) {
  const mergedCar = {};

  for (let key in car1) {
    if (car1.hasOwnProperty(key)) {
      mergedCar[key] = car1[key];
    }
  }

  for (let key in car2) {
    if (car2.hasOwnProperty(key)) {
      mergedCar[key] = car2[key];
    }
  }

  return mergedCar;
}

const car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

const car2 = {
  brand: "Tata",
  model: "Swift",
  year: 2021,
};

const mergedCar = mergeCars(car1, car2);

console.log(mergedCar);
