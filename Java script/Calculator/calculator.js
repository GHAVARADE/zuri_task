let opr = prompt("operator: ");
let firstNum = prompt("Enter your first nummber :");
let secondNum = prompt("Enter your second nummber :");

if (opr == "+") {
  console.log(firstNum + secondNum);
} else if (opr == "-") {
  console.log(firstNum - secondNum);
} else if (opr == "*") {
  console.log(firstNum * secondNum);
} else if (opr == "/") {
  console.log(firstNum / secondNum);
} else if (opr == "%") {
  console.log(firstNum % secondNum);
}
