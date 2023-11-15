/*Question from interview: Create a function that pulls every other element from an array*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const everyOther = () => {
  for (let i = 1; i < arr.length; i += 2) {
    let newArr = arr[i];
    console.log(newArr);
  }
};

everyOther();
