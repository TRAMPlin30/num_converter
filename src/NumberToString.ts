import { NumberToArray } from "./NumberToArray";
import { NumberListHandler } from "./NumberListHandler";

export class NumberToString {


    static units: string[] = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    static teens: string[] = ["", "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    static tens: string[] = ["", "ten", "twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];


    static transformNumberToString(inputNumber: number){

        if (inputNumber > 0  && inputNumber <= 99) {

            var list: number[] = NumberToArray.numberToArray(inputNumber)
            var size: number = list.length;
            switch (size) {

                case 1:
                    var result: string = NumberListHandler.handlerOneDigit(list, this.units)
                    console.log(result)

                    break;

                case 2:
                    break    

            }


        }


    }



}