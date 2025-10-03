import * as readline from "readline-sync";

export class InputNumber {

    numberList (number: string) {

        const userInput = readline.question(number);
        return userInput;

    }

}