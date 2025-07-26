function armazenar() {
    let nota = document.querySelector("#nota").value;
    document.querySelector("#nota").value = "";
    if (isNaN(nota)) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida");

    } else if (nota == "" || nota == " ") {
        alert("Por favor, insira uma nota");

    } else if (nota < 0 || nota > 10) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida")
    }
    else {
        contador++;
        let fraseNota = document.createElement("p");
        fraseNota.innerHTML = "Nota " + contador + " é: " + nota
        let area = document.querySelector("#area");
        area.append(fraseNota)
        adicionarMedia(Number(nota));
    }

}

function calcularMedias(){
    let soma = 0;
    for( let i = 0; i < mediaValor.length; i++){
        soma += mediaValor[i]

    }
    let resultados = soma / mediaValor.length

    document.querySelector("#resultado").innerHTML = "A sua média é: " + resultados.toFixed(2);
}

function adicionarMedia(number) {
    mediaValor.push(number);

}

let contador = 0;
let mediaValor = []

let btnEnviar = document.querySelector("#adicionar")
let btncalcular = document.querySelector("#media")

btnEnviar.addEventListener("click", () => { armazenar() })
btncalcular.addEventListener("click", () => { calcularMedias() })

