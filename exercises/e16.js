// see e16.md

export function find(array, callback) {
  let returnElement = undefined;
  let found = false;

  for (let element of array) {
    if(callback(element) && !found) {
      returnElement = element;
      found = true;
    }
  }
  return returnElement;
}
