import { test } from "vitest";

export const fn = (a, b, c) => {
   // )||(a < 0 || b < 0 || c < 0)||((a + b + c) % 3 != 0
    let res = 0;//Declaring the result of the operation
    if (((a + b + c) > 39)||(a < 0 || b < 0 || c < 0)||((a + b + c) % 3 != 0)) { ///If the Sum of the three values is more than 39 or one of the three values is negative (less than zero) or the sum of the three numbers is not divisible by three (module 3 is not equal 0)
      console.log("Lo sentimos,el numero de empanadas no debe superar 39");///Print Error message via console
        throw error();/////Throwing error to vitest
    }
  
    else {//////////If none of the previous conditions are true the operation can be done 
        res = Math.ceil(((a * 12) + (b * 14) + (c * 16)) / 3); ////Math.ceil method in case of decimal number result,round that one,each number of meals with their own prize added together and divided by the number of values (arithmetic average)
       console.log(res);///Print Result via console
        return res;///Print Result to vitest
    }
};

let arrayEmpanadas = [1, 1, 1]; /////Declaring the array with the values

fn(...arrayEmpanadas);//Calling the action with rest parameter