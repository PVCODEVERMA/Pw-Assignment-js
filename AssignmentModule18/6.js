function reverseString(inputString) {
  
    const reversed = inputString.split('').reverse().join('');
    return reversed;
}

const originalString = "Hello, World!";
const reversedResult = reverseString(originalString);
console.log(`Original string: ${originalString}`);
console.log(`Reversed string: ${reversedResult}`);
