function subtract(temp1, number1) {
	return temp1 - number1;
}

function multiply(sum, fraction) {
	return sum * fraction;
}

const temp1 = parseInt(prompt("Enter a temperature:"))
const number1 = 32;
const sum = subtract(temp1, number1);
const fraction = 5/9;
const temp2 = multiply(sum, fraction);

window.alert("The temperature in Fahrenheit is: " + temp1 + ". " + "The temperature in Celsius is: " + temp2);

