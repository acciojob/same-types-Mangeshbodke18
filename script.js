function isSameType(value1, value2) {
    // Convert inputs to actual types
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
      return true;
    }
  
    if (typeof value1 === typeof value2) {
      return true;
    }
  
    return false;
  }
  
  // Example test:
  let value1 = prompt("Enter Start of the Range.");
  let value2 = prompt("Enter End Of the Range.");
  
  // Convert to number if possible
  let parsedValue1 = isNaN(Number(value1)) ? value1 : Number(value1);
  let parsedValue2 = isNaN(Number(value2)) ? value2 : Number(value2);
  
  alert(isSameType(parsedValue1, parsedValue2));
  