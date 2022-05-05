function contarNumeroVogais(str) {

    let contador = 0;
    let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vogais.length; j++) {
            if (str[i] === vogais[j]) {
                contador++
            }
        }
    }
    return contador
}

console.log(contarNumeroVogais("salve"))