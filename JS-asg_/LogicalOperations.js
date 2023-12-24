function findCommonElements(arr1, arr2) {
  const commonElements = [];

  for (let i = 0; i < arr1.length; i++) {
    const currentElement = arr1[i];

    if (arr2.indexOf(currentElement) !== -1) {
      commonElements.push(currentElement);
    }
  }

  return commonElements;
}

const array1 = [1, 2, 3, 4, 5, 12, 11];
const array2 = [3, 4, 5, 6, 7, 11];
const result = findCommonElements(array1, array2);

console.log(result);
