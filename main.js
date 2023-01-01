const progressbar = document.querySelector(".progress");
const container = document.querySelector(".container");
//data e hora de inicio da contagem
const entradaDataPromocao = new Date("2022/07/18 17:32:00");
//data e hora do fim da contagem
const dataPromocao = new Date("2024/01/01 00:00:01");
//diferença em milisegundos
const total = dataPromocao - entradaDataPromocao;


var percentualDecrescente = 0;
var percentualCrescente = 0;
var dias;
var horas;
var minutos;
var segundos;

//DOM para pegar as posições onde serão atualizadas as contagens
const posicoes = document.querySelectorAll(".contagem-regressiva");

//função que atualização os valores da contagem quando chamada
var updateCountdown = () =>{

    var dataAtual = new Date();
    var diferenca = dataPromocao - dataAtual;
    dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);
    horas = Math.floor(diferenca / 1000 / 60 / 60)%24;
    minutos = Math.floor(diferenca / 1000 / 60)%60;
    segundos = Math.floor(diferenca / 1000)%60
    for(let i = 0; i < posicoes.length;i++){
        switch(i){
            case 0:
                posicoes[i].textContent = dias;
                break
            case 1:
                posicoes[i].textContent = horas;
                break
            case 2:
                posicoes[i].textContent = minutos;
                break
            case 3:
                posicoes[i].textContent = segundos;
                break;
        }
    }
    
        console.log({dias, horas, minutos, segundos});
        percentualDecrescente = parseInt(diferenca*100/total);
     
        percentualCrescente = total - percentualDecrescente;
      
        progressbar.style.width = `${100-percentualDecrescente}%`;
}
//Usando a função setInterval, mas foi a forma que funcinou no momento. Em uma outra versão será melhor escrito isso
var i = setInterval(()=>{
        if(segundos != 0 || minutos !=0 || horas != 0 || dias !=0){updateCountdown()}else{
            container.setAttribute('hidden','hidden');
            document.querySelector('#inicio').innerHTML="Winter is Coming..."
        }},1000);    
