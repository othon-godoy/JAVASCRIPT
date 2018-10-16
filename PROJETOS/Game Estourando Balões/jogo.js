var timerId = null;

function iniciaJogo(){
    var url = window.location.search;
    var nivel_jogo = url.replace('?',"");

    var tempo_segundos = 0;

    var qtd_baloes = 80;
    var qtd_baloes_estourados = 0;    

    switch(nivel_jogo){
        case '1':
            tempo_segundos = 120;
            break;
        case '2':
            tempo_segundos = 60;
            break;
        case '3':
            tempo_segundos = 30;
            break;
        default:
            tempo_segundos = 120;
            break;
    }  
    
    document.getElementById('cronometro').innerHTML = tempo_segundos;    

    document.getElementById("baloes_inteiros").innerHTML = qtd_baloes;

    document.getElementById("baloes_estourados").innerHTML = qtd_baloes_estourados;

    criaBaloes(qtd_baloes);

    contagemTempo(tempo_segundos);
}

function criaBaloes(qtd_baloes){
    for(var i = 0; i < qtd_baloes; i++){
        var balao = document.createElement("img");
        balao.src="img/balao_azul_pequeno.png";
        balao.style.margin = '12px';
        balao.id = "balao"+i;
        balao.onclick = function(){
            estourar(this);
        }

        document.getElementById("cenario").appendChild(balao);
    }
}

function estourar(balao){
    var id_balao = balao.id;

    document.getElementById(id_balao).setAttribute("onclick", "");

    document.getElementById(id_balao).src="img/balao_azul_pequeno_estourado.png";
    
    pontuacao();
}

function pontuacao(){
    var baloes_inteiros = document.getElementById("baloes_inteiros").innerHTML;
    var baloes_estourados = document.getElementById("baloes_estourados").innerHTML;

    baloes_estourados = parseInt(baloes_estourados);
    baloes_inteiros = parseInt(baloes_inteiros);

    baloes_inteiros--;
    baloes_estourados++;

    document.getElementById("baloes_inteiros").innerHTML = baloes_inteiros;
    document.getElementById("baloes_estourados").innerHTML = baloes_estourados;

    situacaoJogo(baloes_inteiros);
}

function situacaoJogo(baloes_inteiros){
    if(baloes_inteiros == 0){
        alert("Parabéns, você conseguiu estourar todos os balões a tempo!");
        pararJogo();
        restartGame();
    }
}

function pararJogo(){
    clearTimeout(timerId);        
}

function contagemTempo(tempo_segundos){
    document.getElementById('cronometro').innerHTML = tempo_segundos--;

    if(tempo_segundos < 0){
        pararJogo();
        gameOver();
        restartGame();
        return false;
    }

    timerId = setTimeout("contagemTempo("+tempo_segundos+")", 1000);
}

function gameOver(){
    alert("Game Over, você não conseguiu estourar todos os balões a tempo!");    
}

function restartGame(){
    var op = confirm("Deseja tentar outra vez?");
    if(op){
        window.location.reload();
    }else{
        window.location.href = "index.html";
    }
}