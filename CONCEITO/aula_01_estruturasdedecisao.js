//Utilizando Estruturas de Decisão em JavaScript

/*
Operador ternário
*/
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

/*
Escreva uma declaração if...else que:

imprima "even" se o número for par
imprima "odd" se o número for ímpar
*/

var number = 2;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

/*
Grupos musicais possuem nomes especiais com base no número de pessoas que fazem parte do grupo.

Por exemplo, um "quarteto" é um grupo musical com quatro músicos. Barbershop quartets foi um popular tipo de quarteto no início dos anos 1900 e apresentava quatro cantores, sendo um líder, um tenor, um barítono e um baixo.

Instruções:
Escreva uma série de declarações condicionais que:

imprima "not a group" se o número de músicos for menor ou igual a 0
imprima "solo" se o número de músicos for igual a 1
imprima "duet" se o número de músicos for igual a 2
imprima "trio" se o número de músicos for igual a 3
imprima "quartet" se o número de músicos for igual a 4
imprima "this is a large group" se o número de músicos for maior do que 4
*/
var musicians = 1;

if(musicians <= 0) {
    console.log("not a group");
} else if(musicians === 1) {
    console.log("solo");
} else if(musicians === 2) {
    console.log("duet");
} else if(musicians === 3) {
    console.log("trio");
} else if(musicians === 4) {
    console.log("quartet");
} else {
    console.log("this is a large group");
}

/*
Neste quiz, você vai ajudar a resolver um mistério e assassinato fictício que aconteceu aqui na Udacity! Um mistério e assassinato é um jogo tipicamente visto em festas onde uma das pessoas da festa, de forma secreta e sem saber, está se fazendo de assassino, e as outras pessoas da festa devem determinar qual delas é o criminoso. É um clássico caso de história de detetive.

Como esta pode ser a primeira vez que você está jogando mistério e assassinato, nós simplificamos as coisas para ficar um pouco mais fácil. Aqui está o que sabemos! Neste mistério e assassinato, há:

quatro cômodos: salão de baile (ballroom), galeria (gallery), sala de bilhar (billiards room) e sala de jantar (dining room),
quatro armas: veneno (poison), um troféu (trophy), uma vara de bilhar (pool stick) e uma faca (knife),
e quatro suspeitos: Sr. Parkes, Senhora Van Cleve, Sra. Sparr e Sr. Kalehoff.
Também sabemos que cada arma corresponde a um cômodo específico, então...

poison pertence ao ballroom,
trophy pertence à gallery,
pool stick pertence à billiards room,
e knife pertence à dining room.
E sabemos que cada suspeito estava localizado em um cômodo específico na hora do assassinato.

Mr. Parkes estava na dining room.
Ms. Van Cleve estava na gallery.
Mrs. Sparr estava na billiards room.
Mr. Kalehoff estava no ballroom.
Para ajudar a resolver este mistério, escreva uma combinação de declarações condicionais que:

defina o valor de weapon (arma) baseado no room (cômodo) e
defina o valor de solved para true se o valor do room corresponder ao cômodo do suspect (suspeito)
No fim, imprima a seguinte mensagem no console, se o mistério for resolvido:

__________ did it in the __________ with the __________!
Preenche os espaços em branco com o nome do suspeito, o cômodo e a arma. Por exemplo,

Mr. Parkes did it in the dining room with the knife!
*/
var room = "dining room";
var suspect = "Mr. Parkes";
var weapon = ""; 

var solved = false;

if (room === "dining room" && suspect === "Mr. Parkes") {
    solved = true; 
    weapon = "knife";
    
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    solved = true; 
    weapon = "trophy";
    
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    solved = true; 
    weapon = "pool stick";
    
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    solved = true; 
    weapon = "poison";
    
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

/*
Usando o fluxograma abaixo, escreva o código para representar a verificação de seu saldo em um caixa eletrônico. Os diamantes amarelos representam declarações condicionais, e os retângulos azuis com cantos arredondados representam o que deve ser impresso no console.


Fluxograma para verificar seu saldo em um caixa eletrônico (clique na imagem para ampliar o fluxograma).

Use as seguintes variáveis em sua solução:

balance - o saldo da conta
isActive - se a conta está ativa
checkBalance - se você quer verificar o saldo
*/
var balance = -500;
var checkBalance = true;
var isActive = true;

if(!checkBalance){
    console.log("Thank you. Have a nice day!");
}else{
    if(isActive && balance > 0){
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }else{
        if(!isActive){
            console.log("Your account is no longer active.");
        }else{
            if(balance === 0){
                console.log("Your account is empty.");
            }else{
                console.log("Your balance is negative. Please contact bank.");
            }
        }
    }
}

/*
O sorvete é uma sobremesas das mais versáteis no planeta, porque ele pode ser feito das mais diferentes maneiras. Usando operadores lógicos, escreva um série de expressões lógicas complexas que sejam impressas somente se as seguintes condições forem verdadeiras:

se flavor é definido como vanilla ou chocolate e
se vessel é definido como cone ou bowl e
se toppings é definido como sprinkles ou peanuts
Se as condições acima são true, então imprima:

I'd like two scoops of __________ ice cream in a __________ with __________.
Preencha os espaços em branco com o sabor do sorvete, o recipiente e a cobertura. Por exemplo,

I'd like two scoops of vanilla ice cream in a cone with peanuts.
*/
var flavor = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";

if((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){
    console.log("I'd like two scoops of " + flavor +  " ice cream in a " + vessel + " with " + toppings + ".");
}

/*
Se você é como eu, encontrar o tamanho certo de uma camiseta,às vezes, pode ser um desafio. Qual é meu tamanho? Qual é a diferença entre S (pequeno), M (médio) e L (grande)? Eu normalmente uso L, mas, e se eu precisar de um XL (extra grande)?

Felizmente, nossos amigos na Teespring têm nos ajudado, pois eles criaram uma tabela de tamanho de forma que torna as coisas muito mais fáceis.

Tabela de tamanho de camiseta

Instruções:
Usando a tabela de tamanhos acima, crie uma série de expressões lógicas que imprime o tamanho de uma camiseta com base nas medidas de shirtWidth, shirtLength e shirtSleeve. Valores válidos incluem S, M, L, XL, 2XL, e 3XL.

Por exemplo, se...

var shirtWidth = 23; // size L (large)
var shirtLength = 30; // size L (large)
var shirtSleeve = 8.71; // size L (large)
então imprima L no console.

Dica: você vai precisar comparar um série de valores quando verificar shirtWidth, shirtLength e shirtSleeve. Por exemplo, se a largura da camiseta é pelo menos 20", mas não mais que 22", então a camiseta deve ser média (M) — contanto que haja uma correspondência com os outros valores para tamanho e manga da camiseta.

Se shirtWidth, shirtLength e shirtSleeve não se enquadram dentro de um alcance aceitável de valores para um específico tamanho, então imprima N/A no console. Por exemplo, se...

var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
então imprima N/A no console, porque as medidas não combinam todas com um tamanho específico.

DICA: certifique-se de testar seu código com diferentes valores. Por exemplo: 

Se shirtWidth é igual a 19, shirtLength é igual a 28 e shirtSleeve é igual a 8.21, então S deve ser impresso no console.
Se shirtWidth é igual a 26, shirtLength é igual a 33 e shirtSleeve é igual a 9.63, então 2XL deve ser impresso no console.
Se shirtWidth é igual a 18, shirtLength é igual a 29 e shirtSleeve é igual a 8.47, então N/A deve ser impresso no console.
*/
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

if((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength === 28) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)){
    console.log("S");
}else if((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength === 29) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)){
    console.log("M");
}else if((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength === 30) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)){
    console.log("L");
}else if((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength === 31) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)){
    console.log("XL");
}else if((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength === 33) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)){
    console.log("2XL");
}else if((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)){
    console.log("3XL");
}else{
    console.log("N/A");
}

/*
Em 2015, o Departamento de Estatísticas de Trabalho dos EUA conduziu uma pesquisa para revelar como a média salarial é diretamente relacionada ao número de anos gasto dentro da escola. Em seus resultados, eles descobriram que pessoas:

no high school diploma (sem diploma de nível médio) ganharam uma média de US$ 25.636/ano,
a high school diploma (com nível médio completo) ganharam uma média de US$ 35.256/ano,
an Associate's degree (com diploma de curso técnico) ganharam uma média de US$ 41.496/ano,
a Bachelor's degree (com superior completo) ganharam uma média de US$ 59.124/ano,
a Master's degree (com mestrado completo) ganharam uma média de US$ 69.732/ano,
a Professional degree (com diploma profissional) ganharam uma média de US$ 89.960/ano,
e a Doctoral degree (com doutorado completo) ganharam uma média de US$ 84.396/ano.
OBSERVAÇÃO: Está se perguntando qual seria a média salarial para uma pessoa com um Nanodegree da Udacity? Esta é uma pergunta difícil de responder, mas isso não significa que não temos tentado quantificar o valor de nossos Nanodegrees. Clique aqui para ler mais a respeito dos Nanodegrees com o escritor residente da Udacity, Chris Watkins.

Instruções:
Escreva uma declaração switch para definir a média salarial de uma pessoa com base em seu nível de escolaridade.

Depois, imprima o seguinte no console:

In 2015, a person with __________ earned an average of __________/year.
Preencha os espaços em branco com o tipo de educação e a média salarial esperada. Certifique-se de usar a gramática correta em sua declaração impressa. Para ajudar, consulte as descobertas mostradas acima.

In 2015, a person with a Bachelor's degree earned an average of $59,124/year.
DICA: imprima a média salarial com vírgulas (por ex.: 59,124), use o método toLocaleString() e passe o local como "en-US". Por exemplo, salary.toLocaleString("en-US").

DICA: certique-se de testar seu código com diferentes valores. Por exemplo:

Se educação for igual a "an Associate's degree", então In 2015, a person with an Associate's degree earned an average of $41,496/year. deve ser impresso no console.
*/
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

switch(education){
    case "no high school diploma":
        salary = 25636;
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") +  "/year.");
        break;
    case "a high school diploma":
        salary = 35256;
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") +  "/year.");
        
        break;
    case "an Associate's degree":
        salary = 41496;
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") +  "/year.");
        
        break;
    case "a Bachelor's degree":
        salary = 59124;
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") +  "/year.");
        
        break;
    case "a Master's degree":
        salary = 69732;
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") +  "/year.");
        
        break;
    case "a Professional degree":
        salary = 89960;
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") +  "/year.");
        
        break;
    case "a Doctoral degree":
        salary = 84396;
        console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") +  "/year.");
        
        break;
}