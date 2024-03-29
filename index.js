#! usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check your balance", "Fast Cash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log(`Insufficient Balance! Your Current Balance Is ${myBalance} `);
        }
        else if ((myBalance -= amountAns.amount)) {
            console.log(`Your remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check your balance") {
        console.log(`Your Balance Is : ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "Cash",
                message: "Please Select How much Money You Want",
                type: "list",
                choices: ["1000", "3000", "5000", "8000"],
            },
        ]);
        if (fastCash.Cash === "1000") {
            if (fastCash.Cash >= myBalance) {
                console.log(`Insufficient Balance! Your Current Balance Is ${myBalance}`);
            }
            else {
                myBalance -= fastCash.Cash;
                console.log(`Your remaining balance is ${myBalance}`);
            }
            if (fastCash.Cash === "3000") {
                if (fastCash.Cash >= myBalance) {
                    console.log(`Insufficient Balance! Your Current Balance Is ${myBalance}`);
                }
                else {
                    myBalance -= fastCash.Cash;
                    console.log(`Your remaining balance is ${myBalance}`);
                }
            }
            if (fastCash.Cash === "5000") {
                if (fastCash.Cash >= myBalance) {
                    console.log(`Insufficient Balance! Your Current Balance Is ${myBalance}`);
                }
                else {
                    myBalance -= fastCash.Cash;
                    console.log(`Your remaining balance is ${myBalance}`);
                }
            }
            if (fastCash.Cash === "8000") {
                if (fastCash.Cash >= myBalance) {
                    console.log(`Insufficient Balance! Your Current Balance Is ${myBalance}`);
                }
                else {
                    myBalance -= fastCash.Cash;
                    console.log(`Your remaining balance is ${myBalance}`);
                }
            }
        }
    }
    else {
        console.log("Incorrect Pin Number!!!");
    }
}
