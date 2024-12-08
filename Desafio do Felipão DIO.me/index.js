const nomeHeroi = [
    {nome:"Cernunnos", pontos: 950},
    {nome:"Raposa", pontos: 2000},
    {nome:"Freya", pontos: 4985},
    {nome:"AsmoDeus", pontos: 6983},
    {nome:"Thoth", pontos: 7851},
    {nome:"Kali", pontos: 8459},
    {nome:"Gaia", pontos: 9172},
    {nome:"Nyx", pontos: 12783}
]

const pontosCategorias = [
    <=1000:"Ferro"
    <=2000:"Bronze"
    <=5000:"Prata"
    <=7000:"Ouro"
    <=8000:"Platina"
    <=9000:"Ascendente"
    <=10000:"Imortal"
    <=10000:"Radiante"
]

function categoria(pontos){
    for(let i=0; i<pontosCategorias.length; i++){
        if(pontos <= pontosCategorias[i]){
            return pontosCategorias[i];
        }
    }
}

nomeHeroi.forEach(heroi => {
    console.log(`Nome do herói: ${heroi.nome}, Categoria: ${categoria(heroi.pontos)}, Nível: ${nivel(heroi.pontos)}`);
});

//Função para verificar a categoria do herói
function nivel(pontos){
    if(pontos <=1000){
        return"Ferro":
    }else if(pontos <=2000){
        return"Bronze";
    }else if(pontos <=5000){
        return"Prata";
    } else if(pontos <=7000){
        return"Ouro";
    } else if(pontos <=8000){
        return"Platina";
    } else if(pontos <=9000){
        return"Ascendente";
    } else if(pontos <=10000){
        return"Imortal";
    } else{
        return"Radiante";
}

//Função para verificar se um herói possui um nome
    function nomeValido(nome){
        return nome.length >= 3 && nome.length <= 20;
    }

    if(!nomeValido(heroi.nome)){
        console.error("Nome do herói inválido.");
        return;
    }
    //Restante do código...

    console.log("Confirmado (nomeHeroi + nivel)");
}
