document.addEventListener("DOMContentLoaded", function() {
    const convertBtn = document.getElementById("convertBtn");
    const resultElement = document.getElementById("result");
    
    convertBtn.addEventListener("click", function() {
        const value = parseFloat(document.getElementById("value").value);
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;
        
        if (!isNaN(value)) {
            const convertedValue = lengthConversion(value, fromUnit, toUnit);
            resultElement.textContent = `${value} ${fromUnit} is equal to ${convertedValue.toFixed(2)} ${toUnit}`;
        } else {
            resultElement.textContent = "Please enter a valid numeric value.";
        }
    });
});

function lengthConversion(value, fromUnit, toUnit) {
    const conversionTable = {
        inches: {
            centimeters: value * 2.54,
            feet: value / 12,
            miles: value / 63360,
            yards: value / 36
        },
        feet: {
            centimeters: value * 30.48,
            inches: value * 12,
            miles: value / 5280,
            yards: value * 3
        },
        miles: {
            centimeters: value * 160934.4,
            inches: value * 63360,
            feet: value * 5280,
            yards: value * 1760
        },
        yards: {
            centimeters: value * 91.44,
            inches: value * 36,
            feet: value / 3,
            miles: value / 1760
        }
    };

    return conversionTable[fromUnit][toUnit];
}
