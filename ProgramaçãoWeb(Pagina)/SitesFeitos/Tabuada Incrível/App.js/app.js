var valor1;
var valor2;
var total;
var acertos = 0;
var erros = 0;
const campo1 = document.querySelector('#valor1');
const campo2 = document.querySelector('#valor2');
const campoAcertos = document.querySelector('#pAcertos');
const campoErros = document.querySelector('#pErros');
const campoResposta = document.querySelector('#txtResposta');
campoResposta.addEventListener('keyup', (event)=>{
    event.preventDefault();
        if(event.key == 'Enter'){
            console.log("Valor: " + campoResposta.value);
            verifica = isNaN(campoResposta.value);
                 if(campoResposta.value == ""){
                alert('Digite um número')
                return;
                }
            if(verifica == false){
             conferir();
            }else{
                campoResposta.value = "";
                alert('A resposta deve ser um número inteiro');
            }
        
        }

        


})

function start(){
    valor1 = Math.ceil(Math.random()*10);
    campo1.innerHTML = valor1;
    valor2 = Math.floor(Math.random()*10);
    campo2.innerHTML = valor2;
}

function conferir(){
    total = valor1 * valor2;
    if(campoResposta.value == total){
        acertos++;
        campoAcertos.innerHTML = "Acertos: " + acertos + " Erros: " + erros;
    }
    else
    {
        erros++;
        campoAcertos.innerHTML = "Acertos: " + acertos + " Erros: " + erros;
    }
    campoResposta.value = "";
    campoResposta.focus();
    start();  
}
start();