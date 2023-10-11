const multiplication = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "an error";
  }
  return a * b;
};

// test("the number shoudl be 6", () => {
//   expect(multiplication(2, 3).toBe(6));
// });

const testMultip = () => {
  //Expect multiplication(2,3) to be a number
  console.log(`return ${typeof multiplication(2, 3)}`);
  //Expect multiplication(2,3) to be equal to 6
  console.log(multiplication(2, 3));
  // Expect multiplication('a',3) to be an error
  console.log(multiplication("a", 3));
  // Expect multiplication(2,'b') to be an error
  console.log(multiplication("a", 3));
  // Expect multiplication() to be error
  console.log(multiplication());
};

testMultip();

const concatOdds = (arr1, arr2) => {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    arr1 = arr1.filter((arr) => arr % 2 !== 0);
    arr2 = arr2.filter((arr) => arr % 2 !== 0);
    set = new Set([...arr1, ...arr2]);
  } else {
    return "an error";
  }
  return [...set].sort((a, b) => a - b);
};

const testConcatOdds = () => {
  //Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])is Array to be true
  console.log(Array.isArray(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])));
  //Expect concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to be equal to [-1,1,3,9,15]
  console.log(
    concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]),
    "should be [-1,1,3,9,15]"
  );
  // Expect multiplication('a',3) to be an error
  console.log(concatOdds("a", 3));
  // Expect multiplication(2,'b') to be an error
  console.log(concatOdds("a", 3));
  // Expect multiplication() to be error
  console.log(concatOdds());
};

testConcatOdds();
doc;
