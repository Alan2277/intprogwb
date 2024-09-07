function informarAlert() {
    alert('Teste JS')
}

function minhaFuncao(arg1, arg2) {
    var soma = arg1 + arg2;

    alert(`O argumento 01 = ${arg1} somado com o argumento 02 = ${arg2} eh igual a ${soma} `);

    var flag = true;

    if (flag)
        alert('Verdadeiro')
    else
        alert('Falso')
}

function raizQuadrada(arg) {
    var raiz = Math.sqrt(arg);

    alert(`A Raiz Quadrada de ${arg} é ${raiz}`);

}

function escrever(infor) {

    document.write(infor)

}

function escreverPrompt() {

    var pegar_informacao = prompt("Informe algum texto:")

    document.getElementById("minhaDiv").innerHTML = pegar_informacao;
}

function cont_numeros() {

    var numero = parseInt(prompt("Informe um número:"));

    var contador = '';

    for (var i = 1; i <= numero; i++) {
        contador += i + "<br>";
    }

    document.getElementById("numeros").innerHTML = contador;

}
