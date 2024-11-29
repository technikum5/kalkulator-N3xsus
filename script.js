function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    if (isNaN(number1) || isNaN(number2)) {
        alert('Proszę wprowadzić prawidłowe liczby.');
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                alert('Nie można dzielić przez zero.');
                return;
            }
            result = number1 / number2;
            break;
        default:
            alert('Nieznana operacja.');
            return;
    }

    document.getElementById('result').textContent = result;
}
