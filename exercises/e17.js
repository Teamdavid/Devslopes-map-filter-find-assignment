export function minBy(array, cb) {
  const justNums = array.map(cb);
  let minNum = 200;
  let arrayItem = undefined;
  let indexCount = 0;

  for (let element of justNums) {
    if (element < minNum) {
      minNum = element;
      arrayItem = array[indexCount];
    }
    indexCount ++;
  }
  return arrayItem;
}

export function maxBy(array, cb) {
  const justNums = array.map(cb);
  let maxNum = 0;
  let arrayItem = undefined;
  let indexCount = 0;

  for (let element of justNums) {
    if (element > maxNum) {
      maxNum = element;
      arrayItem = array[indexCount];
    }
    indexCount++;
  }
  return arrayItem;
}
