const testArray = [
  {
    name: 'John',
    id: 1,
  },
  {
    name: 'Mary',
    id: 2,
  },
  {
    name: 'Terry',
    id: 3,
  },
].map((e) => e.id);

console.log(testArray);

//in the console we will see the ids of elements.
/**
 * 0: 1
 * 1: 2
 * 2: 3
 */

const numberChecker = (num) => {
  //if statement (first way)
  /*if (num < 10) {
    return false;
  } else {
    return true;
  }*/

  //ternary operator (second and short way -ecmascript6)
  return num < 10 ? false : true;
};
console.log(numberChecker(10));
