document.addEventListener('DOMContentLoaded', function () {
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelect = document.getElementById('unitSelect');
    const convertButton = document.getElementById('convertButton');
    const result = document.getElementById('result');
    const convertedTemperature = document.getElementById('convertedTemperature');
    const convertedUnit = document.getElementById('convertedUnit');

    convertButton.addEventListener('click', function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemp, targetUnit;

        if (isNaN(temperature)) {
            alert('Please enter a valid number.');
            return;
        }

        if (unit === 'celsius') {
            convertedTemp = (temperature * 9/5) + 32;
            targetUnit = 'Fahrenheit';
        } else if (unit === 'fahrenheit') {
            convertedTemp = (temperature - 32) * 5/9;
            targetUnit = 'Celsius';
        } else if (unit === 'kelvin') {
            convertedTemp = temperature - 273.15;
            targetUnit = 'Celsius';
        }

        convertedTemperature.textContent = convertedTemp.toFixed(2);
        convertedUnit.textContent = targetUnit;
    });
});