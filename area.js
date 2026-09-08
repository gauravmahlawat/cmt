document.addEventListener("DOMContentLoaded", function() {
    const convertBtn = document.getElementById("convertBtn");
    const resultElement = document.getElementById("result");
    
    convertBtn.addEventListener("click", function() {
        const value = parseFloat(document.getElementById("value").value);
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;
        
        if (!isNaN(value)) {
            const convertedValue = areaConversion(value, fromUnit, toUnit);
            resultElement.textContent = `${value} ${fromUnit} is equal to ${convertedValue.toFixed(2)} ${toUnit}`;
        } else {
            resultElement.textContent = "Please enter a valid numeric value.";
        }
    });
});

function areaConversion(value, fromUnit, toUnit) {
    const conversionTable = {
        squareFeet: {
            squareMeters: value * 0.092903,
            squareKilometers: value * 9.2903e-8,
            acres: value / 43560,
            hectares: value / 107639
        },
        squareKilometers: {
            squareMeters: value * 1e6,
            squareFeet: value * 1.076e7,
            acres: value * 247.105,
            hectares: value * 100
        },
        acres: {
            squareMeters: value * 4046.86,
            squareFeet: value * 43560,
            squareKilometers: value / 247.105,
            hectares: value * 0.404686
        },
        hectares: {
            squareMeters: value * 10000,
            squareFeet: value * 107639,
            squareKilometers: value * 0.01,
            acres: value * 2.47105
        }
    };

    return conversionTable[fromUnit][toUnit];
}
