console.log("eae");


async function getDados(){

    let dados_ibge = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
    let cidades = document.querySelector(".cidades");
    let response = await dados_ibge.json();
    // response = response.reverse()



let conteudo = ''
for (let k = 0; k < response.length; k++){
    conteudo += '<p> ID: '+ response[k].id + ' Cidade: ' + response[k].nome + '</p> <br>'
}

cidades.innerHTML = conteudo;

}


getDados()