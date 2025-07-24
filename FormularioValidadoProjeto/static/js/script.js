console.log("Verificação de JavaScript")

const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');


function setError(index){
    spans[index].style.display = 'block';
}
function removeError(index){
    spans[index].style.display = 'none';
}




// Validação de nome
function nameValidate(){

    if (inputs[0].value.length <3) {
        setError(0);
    }
    else {
        removeError(0);
    }

}



// Validação de cep
function cepValidate(){

    if (inputs[1].value.length <8 | inputs[1].value.length >8){
        setError(1);
    }
    else {
        removeError(1);
    }
}



// validação de e-mail para aceitar apenas dominios yahoo
function emailValidate(){
    const yahooRegex = /^[a-zA-Z0-9._\-%+]+@(yahoo\.com|yahoo\.com\.br)$/;
    if (!yahooRegex.test(inputs[2].value)) {
        setError(2);
    }
    else {
        removeError(2);
    }
}



// Validação de senha
function passwordValidate1(){

    if (inputs[3].value.length < 8){
        setError(3);
    }
    else{
        removeError(3);
    }
}


function passwordValidate2(){

    if (inputs[3].value != inputs[4].value){
        setError(4);
    }
    else{
        removeError(4);
    }
}