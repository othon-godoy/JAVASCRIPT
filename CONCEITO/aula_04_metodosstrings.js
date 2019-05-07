//Para o JavaScript, métodos e propriedades também estão disponíveis para valores primitivos, porque o JavaScript trata valores primitivos como objetos

//Length -> retorna o tamanho de uma string
var txt = "Othon Godoy";
var n = txt.length;
console.log("O tamanho da string é: " + n + "\n");

//indexOf() -> encontra uma string em uma string
//retorna o índice da primeira ocorrência de um texto especificado em uma string
var txt = "Please, locate where 'locate' occurs";
var pos = txt.indexOf("locate");
console.log("A posição de ocorrência é: " + pos);

//lastIndexOf() -> encontra a última posição de ocorrência de um texto especificado em uma string
var txt = "Please, locate where 'locate' occurs";
var pos = txt.lastIndexOf("locate");
console.log("A última posição de ocorrência é: " + pos);

//Tanto indexOf quanto lastIndexOf aceitam um segundo parâmetro como a posição inicial da pesquisa
var txt = "Please, locate where 'locate' occurs";
var pos = txt.indexOf("locate",15);
console.log("A posição de ocorrência partir do 15 é: " + pos);

//No caso do lastIndexOf o método funciona de trás para frente
var txt = "Please, locate where 'locate' occurs";
var pos = txt.lastIndexOf("locate",15);
console.log("A posição de ocorrência partir do 15 é: " + pos);

//search() -> Mesma ideia do indexOf(), a diferença é que o search() não aceita um segundo parâmetro e o indexOf() não aceita valores de pesquisa mais robustos como expressões regulares

//slice() -> extrai parte de uma string
//retorna a parte extraida em uma nova string
//recebe dois parâmetros, pos inicial e final
var txt = "Apple, Banana, Kiwi";
var res = txt.slice(7, 13);
console.log("String extraída: " + res);

//substring() -> semelhante ao slice, porém não é possível passar índices negativos
var txt = "Apple, Banana, Kiwi";
var res = txt.substring(7, 13);
console.log("String extraída: " + res);

//substr() -> o segundo parâmetro especifica o comprimento da parte extraida
var txt = "Apple, Banana, Kiwi";
var res = txt.substr(7, 13);
console.log("String extraída: " + res);

//replace() -> substitui um valor especificado em uma string
//faz distinção entre maiúsculas e minúsculas
//para não fazer essa distinção, basta usar uma expressão regular com um sinalizador /i sinalizador
var txt = "Please visit Microsoft!";
var subs = txt.replace("MICROSOFT","W3Schools");
console.log("Replace NÃO funcionará: " + subs);
var subs = txt.replace(/MICROSOFT/i,"W3Schools");
console.log("Replace funcionará: " + subs);

//toUpperCase() -> converte string para letras maiúsculas
var txt = "hello world";
var uTxt = txt.toUpperCase();
console.log("Texto maiúsculo: " + uTxt);

//toLowerCase() -> converte string para letras minúscula
var txt = "HELLO WORLD";
var lTxt = txt.toLowerCase();
console.log("Texto minúsculo: " + lTxt);

//trim() -> remove espaços em branco de ambos os lados de uma string