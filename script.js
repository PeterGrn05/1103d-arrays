// задача №1
function fill(arraySize, value) {
  const newArray = [];
  for (let i = 0; i < arraySize; i++) {
    newArray.push(value);
  }
  return newArray;
}

const val = 3;
const valueToFill = 'a';
console.log(fill(val, valueToFill))

// задача №2
const reverse = (array) => {
  const backwards = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    backwards.push(array[i]);
  }
  return backwards;
};

const nums = [1, 2, 3];
console.log(reverse(nums)); // [3, 2, 1]

// задача №3
function compact(array) {
  return array.filter(Boolean);
  }

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]
