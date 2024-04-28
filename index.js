#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber)
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },]);
if (answer.userGuessedNumber === "randomNumber") {
    console.log("congratulations! you guessed a right number.");
}
else {
    console.log("you guessed a wrong number.");
}
