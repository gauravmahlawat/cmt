document.addEventListener("DOMContentLoaded", function() {
    const convertBtn = document.getElementById("convertBtn");
    const resultElement = document.getElementById("result");
    
    convertBtn.addEventListener("click", function() {
        const value = parseFloat(document.getElementById("value").value);
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;
        
        if (!isNaN(value)) {
            const convertedValue = massConversion(value, fromUnit, toUnit);
            
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

function massConversion(value, fromUnit, toUnit) {
    const conversionTable = {
        pounds: {
            kilograms: value * 0.453592,
            ounces: value * 16,
            metricTons: value * 0.000453592
        },
        ounces: {
            kilograms: value * 0.0283495,
            pounds: value * 0.0625,
            metricTons: value * 2.83495e-5
        },
        metricTons: {
            kilograms: value * 1000,
            pounds: value * 2204.62,
            ounces: value * 35274
        }
    };

    // Convert fromUnit and toUnit to lowercase before using as keys
    const lowercaseFromUnit = fromUnit.toLowerCase();
    const lowercaseToUnit = toUnit.toLowerCase();

    return conversionTable[lowercaseFromUnit] ? conversionTable[lowercaseFromUnit][lowercaseToUnit] : undefined;
}
