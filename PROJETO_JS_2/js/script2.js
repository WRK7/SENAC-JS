let lista = ['Maça', 'Banana', 'Pera', 'Uva', 'Morango', 'Limão', 'Mão', 'Mamão', 'Carrinho', 'Carrinho de mão'];



// console.log(lista.length);



// // let nome = prompt("digite seu nome");



// // console.log("Quantidade de caracteres: "+ nome.length);



// if(nome.length > 25){

//     console.log("NOME grande")
// }



console.log(lista[0])


let conteudo = '';
let div = document.getElementById("textos");
div.style.backgroundColor = 'wheat';


for( let k = 0; k < lista.length; k++) {
    // console.log('lista[k]');
    conteudo += '<h1>'+lista[k]+"</h1> <br>";
}


div.innerHTML = conteudo;