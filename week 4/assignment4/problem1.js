
// Problem 1 : Temp converter suite
// Dodge Shepard  
//10-20-25




function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
function getTemperatureDescription(fahrenheit) {
    if (fahrenheit < 32) {
        return "Freezing";
    } else if (fahrenheit >= 32 && fahrenheit < 50) {
        return "Cold";
    } else if (fahrenheit >= 51 && fahrenheit < 70) {
        return "Cool"; 
    } else if (fahrenheit >= 71 && fahrenheit < 85) {
        return "Warm";
    } else (fahrenheit >= 86) ;
    {
        return "Hot";
    }
}

// testy test test //
console.log(celsiusToFahrenheit(0)); 
console.log(celsiusToFahrenheit(100));
console.log(fahrenheitToCelsius(-40));
console.log(fahrenheitToCelsius(68));
console.log(fahrenheitToCelsius(212));
console.log(getTemperatureDescription(25));
console.log(getTemperatureDescription(75));
console.log(getTemperatureDescription(95));
