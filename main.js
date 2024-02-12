import { test } from "vitest";

export const fn = (a, b, c) => {

    let res = 0;
    if ((a + b + c) > 39) {
        console.log("Lo sentimos,el numero de empanadas no debe superar 39");
        throw error();
    }
    else if (a < 0 || b < 0 || c < 0) {
        console.log("Todos los numeros deben de ser positivos");
        throw error();
    }

    else if ((a + b + c) % 3 != 0) {
        console.log("Lo sentimos,el numero de empanadas debe de ser divisible entre 3");
        throw error();
    }

    else {
        res = Math.ceil(((a * 12) + (b * 14) + (c * 16)) / 3);
        console.log(res);
        return res;
    }
};


let arrayEmpanadas = [1, 1, 1];

fn(...arrayEmpanadas);