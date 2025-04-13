document.addEventListener("DOMContentLoaded", function() {
    const convertBtn = document.getElementById("convertBtn");
    const resultElement = document.getElementById("result");
    
    convertBtn.addEventListener("click", function() {
        const value = parseFloat(document.getElementById("value").value);
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;
        
        if (!isNaN(value)) {
            const convertedValue = volumeConversion(value, fromUnit, toUnit);
            
            if (convertedValue !== undefined) {
                resultElement.textContent = `${value} ${fromUnit} is equal to ${convertedValue.toFixed(2)} ${toUnit}`;
            } else {
                resultElement.textContent = "Conversion between these units is not supported.";
            }
        } else {
            resultElement.textContent = "Please enter a valid numeric value.";
        }
    });
});

function volumeConversion(value, fromUnit, toUnit) {
    const conversionTable = {
        cubicInches: {
            cubicCentimeters: value * 16.3871,
            liters: value * 0.0163871,
            cubicMeters: value * 0.0000163871
        },
        liters: {
            cubicCentimeters: value * 1000,
            cubicInches: value * 61.0237,
            cubicMeters: value * 0.001
        },
        cubicMeters: {
            cubicCentimeters: value * 1e6,
            cubicInches: value * 61023.7,
            liters: value * 1000
        }
    };

    return conversionTable[fromUnit] ? conversionTable[fromUnit][toUnit] : undefined;
}
