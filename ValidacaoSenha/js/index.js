const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

function passwordValidate(){
    if (inputs[0].value != inputs[1].value && inputs[0].value.length <8 || inputs[1].value.length <8 ) {
        setError(1);
    }
    else{
        removeError(1)
        console.log('Validado com sucesso');
    }
        function setError(index){
        spans[index].style.display = 'block';
    }
    function removeError(index){
        spans[index].style.display = 'none';
    }
}