// console.log("Teste de script")

// document.write(/[abc]/.test('abc'))


// document.write(/^\d{2}\/\d{2}\/\d{4}$/.test('22/22/2222'));


// let dia = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;


// document.write(dia.test('30'))



// let mes = /^(0[1-9]|1[0-2])$/;

// document.write(mes.test('11'))



// let ano = /^\d{4}$/;


// document.write(ano.test(4000))



// var data = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

// document.write(data.test("09/09/2006"))




// var cpf = /^([0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2})$/;


// document.write(cpf.test("091.988.201-33"));

    function setError(index){
        spans[index].style.display = 'block';
    }

    function removeError(index){
        spans[index].style.display = 'none';
    }



const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const email = /^[a-zA-Z0-9._]+@(amordoce\.com\.br)$/;

function emailValidate(){
    if (!email.test(inputs[0].value)) {
        setError(0);
    }
    else {
        removeError(0);
        
    }

}



