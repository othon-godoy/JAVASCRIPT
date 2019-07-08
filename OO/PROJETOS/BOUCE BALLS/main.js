// O script abaixo obtém uma referência ao elemento <canvas> e, em seguida, chama o método getContext() para nos fornecer um contexto no qual podemos começar a desenhar. 

//A variável resultante (ctx) é o objeto que representa diretamente a área de desenho da tela e nos permite desenhar formas 2D nela.

//Em seguida, definimos as variáveis ​​chamadas width e height, largura e altura, do elemento canvas (representado pelas propriedades canvas.width e canvas.height) para igualar à largura e altura da viewport do navegador (a área na qual a página aparece - isso pode ser obtido através do window.innerWidth e window.innerHeight).

var canvas = document.querySelector('canvas');

var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;

var height = canvas.height = window.innerHeight;

// Essa função usa dois números como argumentos e retorna um número aleatório no intervalo entre os dois.

function random(min,max) {

  var num = Math.floor(Math.random()*(max-min)) + min;

  return num;
}

//Como o programa contará com muitas bolas saltando ao redor da tela e todas essas bolas se comportarão da mesma maneira, faz sentido representá-las com um objeto.

//Aqui incluímos alguns parâmetros que definem as propriedades que cada bola precisa para funcionar em nosso programa:

//  x e y coordenadas - as coordenadas horizontais e verticais onde a bola vai começar na tela. Isso pode variar entre 0 (canto superior esquerdo) à largura e altura da janela de visualização do navegador (canto inferior direito).

//  velocidade horizontal e vertical (velX e velY) - cada bola recebe uma velocidade horizontal e vertical; em termos reais, esses valores serão adicionados regularmente as coordenadas x e y  quando começarmos a animar as bolas, para movê-las.

//  color - cada bola recebe uma cor.

//  size - cada bola recebe um tamanho - este será o seu raio, em pixels.

function Ball(x, y, velX, velY, color, size) {

    this.x = x
    this.y = y
    this.velX = velX
    this.velY = velY
    this.color = color
    this.size = size
}

//Para criar os métodos, primeiramente se faz necessário adicionar o método draw() ao Ball() prototype

//Usando esta função, podemos dizer a nossa bola para desenhar-se na tela, chamando uma série de membros do contexto de tela 2D que definimos anteriormente (ctx). O contexto é como o papel, e agora queremos comandar nossa caneta para desenhar algo nela:

//Primeiro, com o  beginPath(), podemos afirmar que queremos desenhar uma forma no papel.

//Em seguida, usamos o fillStyle para definir a cor que queremos que a forma tenha - nós a definimos como a propriedade color da nossa bola.

//Em seguida, usamos o método arc() para traçar uma forma de arco no papel. Seus parâmetros são:
//  A posição x e y do centro do arco - nós a definimos como as propriedades x e y da nossa bola.
//  O raio do nosso arco - estamos especificando a propriedade size da nossa bola .
//  Os dois últimos parâmetros especificam o número inicial e final de graus ao redor do círculo no qual o arco é desenhado. Aqui nós especificamos 0 graus, e 2 * PI, que é o equivalente a 360 graus em radianos (irritantemente, é necessário especificar isso em radianos). Isso nos dá um círculo completo. Se tivesse sido especificado apenas 1 * PI, seria um semicírculo (180 graus).
//  Por último, usamos o método fill(), que basicamente diz "terminar de desenhar o caminho que começamos com o beginPath() e preencher a área que ocupa com a cor que especificamos anteriormente, fillStyle.

Ball.prototype.draw = function() {

    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
}

//Chamando um construtor e criando uma nova instância de objeto

var testBall = new Ball(50, 100, 4, 4, 'blue', 10)

//Ao digitar os seguintes trechos de código no console javascript, um objeto (bola) será desenhado na tela.

testBall.x
testBall.size
testBall.color
testBall.draw()

//Entretanto, para começar a mover a bola, precisamos de uma função de atualização de algum tipo.

//As primeiras quatro partes da função abaixo verificam se a bola atingiu a borda da tela. Se tiver, inverteremos a polaridade da velocidade relevante para fazer a bola viajar na direção oposta. Assim, por exemplo, se a bola estava viajando para cima (positiva velY), então a velocidade vertical é alterada para que ela comece a se mover para baixo (negativa velY)

//Nos quatro casos estamos:
//  Verificando se a coordenada x é maior que a largura da tela (a bola está saindo da borda direita).
//  Verificando se a coordenada x é menor que 0 (a bola está saindo da borda esquerda).
//  Verificando se a coordenada y é maior que a altura da tela (a bola está saindo da borda superior).
//  Verificando se a coordenada y é menor que 0 (a bola está saindo da borda inferior).

//Em cada caso, estamos incluindo o size da bola no cálculo porque as coordenadas x e y estão no centro da bola, mas queremos a borda da bola para saltar fora do perímetro - nós não queremos que a bola vá até a metade fora da tela antes de começar a se recuperar.

//As duas últimas linhas adicionam o velX valor à coordenada x e o velY valor à coordenada y - a bola é movida cada vez que este método é chamado.

Ball.prototype.update = function() {

    if((this.x + this.size) >= width) {

        this.velX = -(this.velX)
    }

    if((this.x - this.size) <= 0) {

        this.velX = -(this.velX)
    }

    if((this.y + this.size) >= height) {

        this.velY = -(this.velY)
    }

    if((this.y - this.size) <= 0) {

        this.velY = -(this.velY)
    }

    this.x += this.velX
    this.y += this.velY
}

//Antes de começar a animar as bolas é necessário criar um lugar para armazená-las e depois preenchê-las.

//Todos os programas que animam as coisas geralmente envolvem um loop de animação, que serve para atualizar as informações no programa e renderizar a visualização resultante em cada quadro da animação; esta é a base para a maioria dos jogos e outros programas. O while loop abaixo cria uma nova instância da nossa Ball() usando valores aleatórios gerados com a nossa função random(), e então com o método push() os adiciona ao final da nossa matriz de bolas, mas apenas enquanto o número de bolas na matriz é menor que 25. Então, quando temos 25 bolas na tela, nenhuma bola a mais aparece. Você pode tentar variar o número balls.length < 25 para obter mais ou menos bolas na tela. Dependendo do poder de processamento do computador/navegador, especificar vários milhares de bolas pode retardar bastante a animação.

var balls = []

while(balls.length < 25) {

    var size = random(10,20)

    var ball = new Ball(

        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')', size
    )

    balls.push(ball)
}

//A função loop() a seguir faz o seguinte:
//  Define a cor de preenchimento da tela como preto semitransparente e, em seguida, desenha um retângulo da cor em toda a largura e altura da tela, usando fillRect()(os quatro parâmetros fornecem uma coordenada de início e uma largura e altura para o retângulo desenhado). Isso serve para encobrir o desenho do quadro anterior antes que o próximo seja desenhado. Se isso não for feito, será visto apenas longas cobras se movimentando ao redor da tela, em vez de mover as bolas.
//  A cor do preenchimento é definida como semitransparente rgba(0,0,0,0.25), para permitir que os poucos quadros anteriores brilhem levemente, produzindo as pequenas trilhas atrás das bolas à medida que elas se movem. Se esse valor for alterado para 1, não será mais possível vê-los.
//  Faz um loop através de todas as bolas na matriz balls e executa para cada bola o método draw() e update() para desenhar cada uma na tela, em seguida, faz as atualizações necessárias para a posição e velocidade no tempo para o próximo quadro.
//  Executa a função novamente usando o requestAnimationFrame() - quando esse método é executado constantemente e passa o mesmo nome de função, ele executará essa função um número definido de vezes por segundo para criar uma animação suave. Isso geralmente é feito recursivamente - o que significa que a função está chamando a si mesma toda vez que é executada, portanto, ela será executada repetidas vezes.

//O trecho de código abaixo foi comentado pois depois de criado foi criada outra função que detecta colisões, de modo que até o momento da criação da função loop(), a função collisionDetect ainda não existia, ocasionando um erro
/*
function loop() {

    ctx.fillStyle = 'rgba(0,0,0,0.25)'
    ctx.fillRect(0, 0, width, height)

    for(var i = 0; i < balls.length; i++) {

        balls[i].draw()
        balls[i].update()
        //balls[i].collisionDetect()
    }

    requestAnimationFrame(loop)
}
*/

//Por último, mas não menos importante, a seguinte linha chama a função uma vez para iniciar a animação.

//O trecho de código abaixo foi comentado pois depois de criado foi criada outra função que detecta colisões, de modo que até o momento da criação da função loop(), a função collisionDetect ainda não existia, ocasionando um erro
/*
loop()
*/

//Antes de finalizar o projeto também é interessante detectar as colisões, para que as bolas saibam que acertaram outra bola e mudem de cor.

//Para cada bola, precisamos checar todas as outras bolas para ver se ela colidiu com a bola atual. Para fazer isso, abrimos outro for loop para percorrer todas as bolas da matriz balls[].

//Imediatamente dentro de nosso loop for, usamos uma instrução if para verificar se a bola atual em loop é a mesma bola que a que estamos verificando no momento. Não queremos verificar se uma bola colidiu consigo mesma. Para fazer isso, verificamos se a bola atual (ou seja, a bola cujo método collisionDetect está sendo invocado) é a mesma que a bola do loop (ou seja, a bola que está sendo referida pela iteração atual do loop for no método collisionDetect). 

//Em seguida, usamos ! para negar a verificação, para que o código dentro da instrução if seja executado apenas se eles não forem iguais.

//Em seguida, usamos um algoritmo comum para verificar a colisão de dois círculos. Estamos basicamente verificando se alguma das áreas do círculo se sobrepõe. 

//Se uma colisão é detectada, o código dentro da instrução if interna é executado. Neste caso, estamos apenas definindo a propriedade color de ambos os círculos para uma nova cor aleatória. Poderíamos ter feito algo muito mais complexo, como fazer com que as bolas saltassem umas das outras de forma realista, mas isso teria sido muito mais complexo de implementar. Para tais simulações físicas, os desenvolvedores tendem a usar jogos ou bibliotecas físicas como PhysicsJS , matter.js , Phaser , etc.

Ball.prototype.collisionDetect = function() {

    for(var j = 0; j < balls.length; j++) {

        if(!(this === balls[j])) {

            var dx = this.x - balls[j].x
            
            var dy = this.y - balls[j].y

            var distance = Math.sqrt(dx * dx + dy * dy)

            if(distance < this.size + balls[j].size) {

                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')'
            }
        }
    }
}

//Também é preciso chamar esse método em cada quadro da animação. Para isso basta adicionar o seguinte trecho de código abaixo na ultima linha do for dentro da função loop(), logo abaixo de balls[i].update()

//balls[i].collisionDetect()

//Criando novamente a função loop com a função collisionDetect()

function loop() {

    ctx.fillStyle = 'rgba(0,0,0,0.25)'
    ctx.fillRect(0, 0, width, height)

    for(var i = 0; i < balls.length; i++) {

        balls[i].draw()
        balls[i].update()
        balls[i].collisionDetect()
    }

    requestAnimationFrame(loop)
}

//Chamando a função para iniciar a animação

loop()