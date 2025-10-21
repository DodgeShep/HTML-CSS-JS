
// Challenge : Number System Converter
// Dodge Shepard  
//10-20-25


function decimalToBinary(decimal) {
    if (decimal === 0) return "0";
    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

function binaryToDecimal(binary) {
    let decimal = 0;
    let power = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary[i] === "1") {
            decimal += Math.pow(2, power);
        }
        power++;
    }
    return decimal;
}

function decimalToHexadecimal(decimal) {
    if (decimal === 0) return "0";
    const hexChars = "0123456789ABCDEF";
    let hex = "";
    while (decimal > 0) {
        let remainder = decimal % 16;
        hex = hexChars[remainder] + hex;
        decimal = Math.floor(decimal / 16);
    }
    return hex;
}
 // Tests //
console.log(decimalToBinary(10));
console.log(decimalToBinary(25));
console.log(decimalToBinary(0));

console.log(binaryToDecimal("1010"));
console.log(binaryToDecimal("11111"));
console.log(binaryToDecimal("0"));

console.log(decimalToHexadecimal(255));
console.log(decimalToHexadecimal(26));
console.log(decimalToHexadecimal(16));