const name = "Cauan";
const grade01 = 10;
const grade02 = 8;
const grade03 = 7;
const averageStudent = (grade01 + grade02 + grade03) / 3
const averageRequired = 8;

if (averageStudent >= averageRequired) {
    console.log(`${name} \n Média: ${averageStudent.toFixed(1)} \n Parabéns, você foi aprovado.`)
} else {
    console.log(`${name} \n Média: ${averageStudent.toFixed(1)} \n Infelizmente, você foi reprovado.`)
}