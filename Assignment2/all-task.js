let arr = [1, 2, 3, 5];

/**
 * Check value inside Array
 * @param {*} Array
 * @param {*} callBack function
 * @returns {boolean}
 */

console.log("Assignment2-a");

function all(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && arr[0]) {
      continue;
    } else {
      return func(false);
    }
  }
  return func(true);
}
let testValue = all(arr, function (value) {
  return value;
});

console.log(testValue);
console.log("End Of Assignment2-a");
