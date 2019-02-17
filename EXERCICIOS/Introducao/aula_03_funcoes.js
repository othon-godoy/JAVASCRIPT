/*
Instruções:
Declare uma função chamada laugh(), que retorne "hahahahahahahahahaha!". Exiba o valor retornado da função laugh() no console.
*/

// your code goes here
function laugh(){
    return "hahahahahahahahahaha!";
}

console.log(laugh());

/*
Direções:
Escreva uma função chamada laugh() que possua um parâmetro num, que representa o número de `"ha"s a ser retornado.

DICA: você provavelmente precisa de um loop para resolver isso!

Aqui está um exemplo da saída e como chamar a função que você escreverá:

console.log(laugh(3));
Prints: "hahaha!"
*/

function laugh(num){
    var laugh = "";
    for(x = 0; x < num; x++){
        laugh += "ha";
    }
    
    laugh += "!";

    return laugh;    
}

console.log(laugh(3));

/*
Instruções:
Para este quiz, você provavelmente criará uma função chamada buildTriangle(), que irá aceitar uma entrada (o triângulo em sua maior largura) e construir um triângulo. Veja a saída de exemplo abaixo:

buildTriangle(10);
Returns:

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * * 
Lhe damos uma função makeLine() para que você possa começar. A função pega um comprimento de linha, e constrói uma linha de asteríscos e retorna a linha com um caractere de nova linha.

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}
Você precisará chamar esta função makeLine() em buildTriangle().

Este será o programa mais complicado que você já escreveu até agora, então, pare algum tempo para pensar sobre o problema antes de mergulhar no código. De quais ferramentas do JavaScript você precisará? Profissionais planejam bem seus códigos antes de escrever qualquer coisa. Pense nas etapas pelas quais seu código precisará passar e as escreva em ordem. Então, revise sua lista e converta cada etapa em código propriamente dito. Boa sorte!
*/

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.


// test your code by uncommenting the following line
//console.log(buildTriangle(10));

/*
Instruções:
Escreva uma expressão anônima de função que armazena uma função em uma variável de nome "laugh" e retorna como saída o número de "ha"s que você passa como um argumento.

laugh(3);
Returns: hahaha!
*/

var laugh = function(x){
    var lgh = "";
    for(var i = 0; i < x; i++){
        lgh += "ha";
    }
    
    return lgh + "!";
}

console.log(laugh(10));

/*
Direções:
Escreva uma expressão de função nomeada que armazena a função em uma variável de nome cry e retorna como saída "boohoo!". Não se esqueça de chamar a função utilizando o nome da variável, não o nome da função:

cry();
Returns: boohoo!
*/

// your code goes here
var cry = function addCry(){
    return "boohoo!";
}

console.log(cry());

/*
Instruções:
Chame a função emotions() para que ela imprima a saída que você vê abaixo, mas, em vez de passar a função laugh() como um argumento, passa uma expressão de função inline.

emotions("happy", laugh(2)); // você pode utilizar a sua função laugh dos quizzes anteriores
Prints: "I am happy, haha!"
*/

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy", function laugh(x){
    var lgh = "";
    for(var i = 0; i < x; i++){
        lgh += "ha";
    }
    
    return lgh + "!";
});