// Hope Squires
// May 10, 2024
// JS Arrow Functions Practice

// View the markdown (.md) file in VS Code for instructions

// FUNCTION 1
// const nameAndSchool = (firstName, schoolName) => {
//     return [firstName, schoolName]
// }

// const firstName = prompt("Please enter your first name:");
// const schoolName = prompt(`What school do you attend, ${firstName}?:`);

// console.log(`Hello ${firstName} from ${schoolName}!`);


// FUNCTION 2
// const calculate = (cost1, cost2, cost3) => {
//     const addition = cost1 + cost2 + cost3;
//     return addition;
// }
// const cost1 = 11;
// const cost2 = 7;
// const cost3 = 13;

// const totalCost = calculate(cost1, cost2, cost3);
// console.log(totalCost);


// FUNCTION 3
const sqValue = (num = 4) => {
    const squared = num * num;
    alert(`${num} squared is '${squared}.'`);
}

const ask = prompt('Please enter a number:');

sqValue(ask);