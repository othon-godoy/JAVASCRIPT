var altura = 0;
var largura = 0;

function define_palco(){
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura);    
}

define_palco();

function posicao_random(){
    //foi feita a multiplicação pois o JavaScript gera valores aleatórios entre 0 e 1
    var posicaoX = Math.floor(Math.random() * largura) -90;
    var posicaoY = Math.floor(Math.random() * altura) -90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosquito.png';
    mosquito.className = tam_random() + lado_random();
    mosquito.style.left = posicaoX + "px";
    mosquito.style.top = posicaoY + "px";
    mosquito.style.position = 'absolute';

    document.body.appendChild(mosquito);  
    
    console.log(lado_random());
}

function tam_random(){
    var classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0:
            return 'mosquito1';            

        case 1:
            return 'mosquito2';           

        case 2:
            return 'mosquito3';            
    }
}

function lado_random(){
    var classe = Math.floor(Math.random() * 2);
    
    switch(classe){
        case 0:
            //necessário espaçamento antes do nome da classe pois ela será concatenada com a classe que define o tamanho do mosquito
            return ' ladoA';             

        case 1:
            return ' ladoB';              
    }
}



