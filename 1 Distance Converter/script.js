/*
    ALGORITHM: Distance Converter

    1.  DEFINE THE FUNCTION:
        - Create a function named `convertDistance`.
        - It should accept three parameters: `value` (the number to convert), `fromUnit` (a string like 'km'), and `toUnit` (a string like 'm').

    2.  CONVERSION LOGIC (inside the function):
        - Create a variable to store the value in a base unit (e.g., meters). Initialize it to 0.
        - Use an `if/else if` or a `switch` statement to check the `fromUnit`:
            - If it's 'km', multiply the `value` by 1000 to get meters and store it in your base unit variable.
            - If it's 'cm', divide the `value` by 100 to get meters and store it.
            - If it's 'm', the value is already in meters, so just store it.
        - Create a final result variable.
        - Use another `if/else if` or `switch` statement to check the `toUnit`:
            - If it's 'km', divide the base unit value by 1000.
            - If it's 'cm', multiply the base unit value by 100.
            - If it's 'm', the result is simply the base unit value.
        - Return the final calculated result from the function.

    3.  TESTING THE FUNCTION:
        - To see if your function works, call it with different values and log the output.
        - You can write these test calls at the bottom of your script file.
        - To see the output, open the `index.html` file in a browser and check the developer console.
        - Example tests:
            console.log("10 km to m is:", convertDistance(10, 'km', 'm'));   // Expected output: 10000
            console.log("500 cm to m is:", convertDistance(500, 'cm', 'm')); // Expected output: 5
            console.log("2500 m to km is:", convertDistance(2500, 'm', 'km')); // Expected output: 2.5
*/

// Code - 
function convertDistance(value, fromUnit, toUnit) {
    let baseMeters = 0; 


    switch (fromUnit) {
        case 'km':
            baseMeters = value * 1000;
            break;
        case 'cm':
            baseMeters = value / 100;
            break;
        case 'm':
            baseMeters = value;
            break;
        default:
            console.log("Invalid 'fromUnit' provided");
            return null;
    }


    let result;
    switch (toUnit) {
        case 'km':
            result = baseMeters / 1000;
            break;
        case 'cm':
            result = baseMeters * 100;
            break;
        case 'm':
            result = baseMeters;
            break;
        default:
            console.log("Invalid 'toUnit' provided");
            return null;
    }

    return result;
}

console.log("10 km to m is:", convertDistance(10, 'km', 'm'));       
console.log("500 cm to m is:", convertDistance(500, 'cm', 'm'));   
console.log("2500 m to km is:", convertDistance(2500, 'm', 'km'));  
console.log("120 m to cm is:", convertDistance(120, 'm', 'cm'));   







