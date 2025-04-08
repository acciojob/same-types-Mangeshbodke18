function isSameType(value1, value2) {
  const isVal1NaN = typeof value1 === "number" && Number.isNaN(value1);
  const isVal2NaN = typeof value2 === "number" && Number.isNaN(value2);

  if (isVal1NaN && isVal2NaN) {
    return true;
  }

  return typeof value1 === typeof value2;
}

let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert to number if possible
let parsedValue1 = isNaN(Number(value1)) ? value1 : Number(value1);
let parsedValue2 = isNaN(Number(value2)) ? value2 : Number(value2);

alert(isSameType(parsedValue1, parsedValue2));
