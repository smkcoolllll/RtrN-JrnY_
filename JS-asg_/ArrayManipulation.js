function getUniqueElements(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    if (result.indexOf(currentElement) === -1) {
      result.push(currentElement);
    }
  }

  return result;
}

const inputArray = [8, 9, 1, 2, 1, 2, 3, 4, 3, 2, 5];
const uniqueArray = getUniqueElements(inputArray);
console.log(uniqueArray);
