// dicionario = {

//     "chave" : "valor",
//     "nome" : "Kazzan",
//     "idade" : 18,
//     "email" : "kazzan@gmail.com"
// }

// let texto = document.getElementById("textos");
// texto.innerHTML = dicionario.email;


let pessoa = {
    "nome" : "Wesley",
    "fone" : "40028922",
    "cidade" : "Rosa Linda"
}

// console.log(dicionario.email)
// console.log(pessoa.nome)
// console.log(pessoa.fone)
// console.log(pessoa.cidade)

let textos = document.getElementById("textos");



let lista_pessoas = [
    
{
    "nome" : "Wesley",
    "fone" : "40028922",
    "cidade" : "Rosa Linda"
},
{
    "nome" : "José",
    "fone" : "666",
    "cidade" : "Moreninha de bandido"
},
{
    "nome" : "Victor",
    "fone" : "235176243",
    "cidade" : "Ajushu"
},
{
    "nome" : "Davi",
    "fone" : "75843922",
    "cidade" : "Uracan"
},
{
    "nome" : "Isabelly",
    "fone" : "54545454",
    "cidade" : "Amongas"
},
{
    "nome" : "Raphi",
    "fone" : "54587464",
    "cidade" : "Japão"
},
{
    "nome" : "Priscilla",
    "fone" : "7898144",
    "cidade" : "Amoras"
}
    ];

let conteudo = '';
for(var k = 0; k < lista_pessoas.length; k++) {
    conteudo += '<p>Nome: ' + lista_pessoas[k].nome + ' Fone: '+ lista_pessoas[k].fone;
    conteudo += ' Cidade: ' + lista_pessoas[k].cidade + ' </p>';
}


textos.innerHTML = conteudo

// console.log(lista_pessoas[0].nome + lista_pessoas[0].fone + lista_pessoas[0].cidade)
