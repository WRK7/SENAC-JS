let input_nome = document.getElementById("nome");
let msg = document.getElementById("msg");

// Atualiza a mensagem de boas-vindas enquanto o usuário digita
if (input_nome && msg) {
    input_nome.addEventListener('keyup', (event) => {
        let nome = event.target.value.trim();
        msg.textContent = nome ? `${nome}!` : '';
        console.log(event.target.value); // Mantido para depuração
    });
}

let formulario = document.getElementById("formulario");

document.getElementById("resultado").addEventListener('click', function(event) {
    event.preventDefault();
    
    num1 = parseFloat(formulario.num1.value);
    num2 = parseFloat(formulario.num2.value);

    console.log(num1);
    console.log(num2);

    let soma = num1 + num2

    console.log("Soma: "+soma);

})