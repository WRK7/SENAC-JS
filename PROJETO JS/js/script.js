alert("Olá mundo");
alert("Bem-Vindo ao Projeto JS");

console.log("Mensagem no console"); //essa função é similar ao print do Python

var btn_clique = document.querySelector("#btn_click");
var btn_mais = document.querySelector("#btn_plus");
var btn_menos = document.querySelector("#btn_less");
var btn_cor = document.querySelector("#btn_color");



var contador = parseInt(document.querySelector("#texto").textContent);

console.log(contador);
console.log(typeof(contador));


btn_mais.addEventListener('click', function(){

    contador++;
    console.log(contador)
    document.querySelector("#texto").textContent = contador;
});

btn_menos.addEventListener('click', function(){

    contador--;
    console.log(contador)
    document.querySelector("#texto").textContent = contador;
});






var header = document.querySelector(".cabecalho"); 

header.addEventListener('mouseover', function(){
    header.style.backgroundColor = "yellow";
    header.style.color = "purple";
})

header.addEventListener('mouseout', function(){
    header.style.backgroundColor = "purple";
    header.style.color = "yellow";
})



function mudacor(){

        // alert("MUDAR COR");
        var div = document.querySelector(".div_texto"); 

        div.style.backgroundColor = "yellow";
}


function postar(){
    console.log("CLICOUUUUUUUU");
}


btn_cor.addEventListener('click',mudacor);
btn_clique.addEventListener('click', postar);