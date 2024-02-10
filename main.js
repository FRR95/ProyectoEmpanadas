export const fn = (a,b,c) => {
let res=0;
if(a+b+c<40){
res=(((a*12)+(b*14)+(c*16))/3).toFixed(0);
console.log("El resultado es",res);
}
else{
console.log("Lo sentimos,el numero de empanadas no debe superar 40")
}
};


let arrayEmpanadas=[9,10,11]

fn(...arrayEmpanadas);