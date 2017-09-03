//create let number1 to store value
//create let number 2 to store value
//Create two prompts (userinput and userinput1)
//change datatype (parseInt)
//Check if number 1 is greater than number 2
//Output back to user



alert("This program will check two numbers and see which one is greater!")

let number1 = 0;
let number2 = 0;

let userinput = prompt("Please enter a number", "")
number1 = parseInt(userinput);

let userinput1 = prompt("Please enter a number", "")
number2 = parseInt(userinput1)

if (number1 > number2) {
    alert("Number 1 is greater than number 2")
} else {
    alert("Number 2 is greater than number 1")
}