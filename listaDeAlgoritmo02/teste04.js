function fazerRelatorio(str) {

    const relatorio = [`A palavra invertida será: ${inverter(str)}`,
        ` O número de vogais dessa palavra é: ${contarNumeroVogais(str)}`
    ]

    function inverter(str) {

        let reverseStr = ""

        for (let i = str.length - 1; i >= 0; i--) {
            reverseStr += str[i]
        }

        return reverseStr
    }

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

    if (typeof str === "string") {
        return relatorio
    } else {
        console.log("oh carai")
        return typeof str
    }
}

console.log(fazerRelatorio("salve"))