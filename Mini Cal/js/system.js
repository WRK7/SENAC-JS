let input_nome = document.getElementById("nome");
let msg = document.getElementById("msg");


if (input_nome && msg) {
    input_nome.addEventListener('keyup', (event) => {
        let nome = event.target.value.trim();
        msg.textContent = nome ? `${nome}!` : '';
        console.log(event.target.value); 
    });
}



// =======================================SOMAR=========================================


let formulario = document.getElementById("formulario");

document.getElementById("somar").addEventListener('click', function(event) {
    event.preventDefault();
    
    num1 = parseFloat(formulario.num1.value);
    num2 = parseFloat(formulario.num2.value);

    console.log("O primeiro número é: " + num1);
    console.log("O segundo número é: " + num2);

    let soma = num1 + num2

    console.log("Soma: "+soma);
    let conteudo = ''
    let div = document.getElementById("resultado");
    conteudo += '<p>'+"O resultado do cálculo é: "+soma+'</p>'; 
    div.innerHTML = conteudo;
})



// =======================================SUBTRAIR=========================================


document.getElementById("subtrair").addEventListener('click', function(event) {
    event.preventDefault();
    
    num1 = parseFloat(formulario.num1.value);
    num2 = parseFloat(formulario.num2.value);

    console.log("O primeiro número é: " + num1);
    console.log("O segundo número é: " + num2);

    let subtracao = num1 - num2

    console.log("Subtração: "+subtracao);
    let conteudo = ''
    let div = document.getElementById("resultado");
    conteudo += '<p>'+"O resultado do cálculo é: "+subtracao+'</p>'; 
    div.innerHTML = conteudo;

})



// =======================================DIVIDIR=========================================


document.getElementById("dividir").addEventListener('click', function(event) {
    event.preventDefault();
    
    num1 = parseFloat(formulario.num1.value);
    num2 = parseFloat(formulario.num2.value);

    console.log("O primeiro número é: " + num1);
    console.log("O segundo número é: " + num2);

    let divisao = num1 / num2

    console.log("Divisão: "+divisao);
    let conteudo = ''
    let div = document.getElementById("resultado");
    conteudo += '<p>'+"O resultado do cálculo é: "+divisao+'</p>'; 
    div.innerHTML = conteudo;

})


// =======================================MULTIPLICAR=========================================


document.getElementById("multiplicar").addEventListener('click', function(event) {
    event.preventDefault();
    
    num1 = parseFloat(formulario.num1.value);
    num2 = parseFloat(formulario.num2.value);

    console.log("O primeiro número é: " + num1);
    console.log("O segundo número é: " + num2);

    let multiplicacao = num1 * num2

    console.log("Multiplicação: "+multiplicacao);
    let conteudo = ''
    let div = document.getElementById("resultado");
    conteudo += '<p>'+"O resultado do cálculo é: "+multiplicacao+'</p>'; 
    div.innerHTML = conteudo;

})