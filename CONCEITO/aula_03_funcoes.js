//Utilizando Funcoes em JavaScript
/*
Declare uma função chamada laugh(), que retorne "hahahahahahahahahaha!". Exiba o valor retornado da função laugh() no console.
*/
function laugh(){
    return "hahahahahahahahahaha!";
}

console.log(laugh());

/*
Escreva uma função chamada laugh() que possua um parâmetro num, que representa o número de `"ha"s a ser retornado.
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
Escreva uma expressão anônima de função que armazena uma função em uma variável de nome "laugh" e retorna como saída o número de "ha"s que você passa como um argumento.
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
Escreva uma expressão de função nomeada que armazena a função em uma variável de nome cry e retorna como saída "boohoo!". Não se esqueça de chamar a função utilizando o nome da variável, não o nome da função.
*/
var cry = function addCry(){
    return "boohoo!";
}

console.log(cry());

/*
Chame a função emotions() para que ela imprima a saída que você vê abaixo, mas, em vez de passar a função laugh() como um argumento, passa uma expressão de função inline.
*/
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(x){
    var lgh = "";
    for(var i = 0; i < x; i++){
        lgh += "ha";
    }
    
    return lgh + "!";
});