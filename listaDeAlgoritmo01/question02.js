const name = "Cauan";
let salary = 3000;
let taxReturn;

if (salary > 3000) {
    salary = salary + (salary * 0.18)
    taxReturn = "Sim"
} else {
    taxReturn = "Não"
}
console.log(`${name} \n ${salary} \n Deverá declarar o imposto de renda: ${taxReturn}`)