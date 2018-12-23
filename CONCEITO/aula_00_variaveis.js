/*
Escreva uma expressão que utiliza pelo menos 3 operadores aritméticos diferentes. 

A expressão deve ser igual a 42.

Dica: +, -, *, /, e % são possíveis operadores aritméticos
*/

console.log(40 + 5 - 3);

/*
Para converter Celsius para Fahrenheit, você pode utilizar a seguinte fórmula:

F=C\times1.8+32 F=C×1.8+32

Instruções:
Utilize esta equação e as variáveis fahrenheit e celsius para exibir o valor em Fahrenheit equivalente a 12°C.

OBS.: "12°C" se lê "12 graus Celsius".
*/

var celsius = 12;
var fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

/*
Instruções:
Crie uma string com o nome de sua comida favorita. A primeira letra da string deve ser maiúscula.
*/

var Lasanha = "Lasanha";
console.log(Lasanha);

/*
Intruções:
Conserte a expressão do lado correto para que o resultado seja true.
*/

var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);

/*
Instruções:
Construa uma única string que se assemelha à seguinte piada.

Why couldn't the shoes go out and play?
They were all "tied" up!
Sua piada deve ter o formato de pergunta e resposta. A primeira linha deve ser uma pergunta e a segunda, uma resposta.

Dica: você precisará utilizar caracteres especiais para produzir a seguinte saída.
*/

var joke = "Why couldn't the shoes go out and play? \nThey were all 'tied' up!"
console.log(joke);

/*
Instruções:
Construa uma string utilizando concatenação, por meio da combinação das linhas deste famoso poema haiku de Yosa Buson.

Blowing from the west
Fallen leaves gather
In the east.
Cada string deve ser exibida em sua própria linha. Aqui está um link para nossa aula Fazendo o "escape" de strings, como referência.

Dica: você precisará utilizar caracteres especiais para produzir a seguinte saída.
*/

var haiku = "Blowing from the west" +"\nFallen leaves gather" + "\nIn the east."
console.log(haiku);

/*
Instruções:
Crie uma variável chamada fullName e atribua seu nome completo a ela, como uma string.
*/

var fullName = "Othon Rafael Ferreira Godoy";
console.log(fullName);

/*
Instruções:
Crie uma variável chamada bill e atribua a ela o resultado de 10.25 + 3.99 + 7.15 (não faça a conta você mesmo, deixe o JavaScript fazer isso!). Em seguida, crie uma variável chamada tip e atribua a ela o resultado da multiplicação de bill por uma taxa tip de 15%. Finalmente, some bill e tip e armazene o resultado em uma variável de nome total.

Exiba o valor de total no console do JavaScript.

Dica: 15% na forma decimal é escrito como 0.15_._

DICA: para exibir o valor de total com o símbolo de dólar ($), utilize concatenação de strings. Para arredondar para duas casas decimais, utilize o método toFixed(). Para utilizar toFixed(), passe o número de casas decimais que você deseja ter. Por exemplo, se total for igual a 3.9860, então total.toFixed(2) retornará 3.99.
*/

var bill = 10.25 + 3.99 + 7.15;
var tip = bill*0.15;
var total = bill+tip;
console.log("$"+total.toFixed(2));

/*
Instruções:
Mad Libs é um jogo de palavras onde os jogadores se divertem substituindo palavras por espaços em branco em uma história. Para este exercício, utilize as variáveis de adjetivos para preencher os espaços em branco e completar a mensagem a seguir.

The Intro to JavaScript course is __. James and Julia are so __. I cannot wait to work through the rest of this __ content!

var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
Atribua a string resultante a uma variável chamada madLib.
*/

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

var madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!"

console.log(madLib);

/*
Instruções:
Aqui vão duas mensagens incríveis:

"Hi, my name is Julia. I love cats. In my spare time, I like to play video games."
"Hi, my name is James. I love baseball. In my spare time, I like to read."
Declare e atribua valores a três variáveis para cada parte da frase que modifica (firstName, interest e hobby).

Utilize suas variáveis e concatenação de strings para criar sua própria mensagem incrível e a armazene em uma variável awesomeMessage. Por fim, exiba sua mensagem incrível no console do JavaScript.
*/

var firstName = "Othon";
var interest = "coffee";
var hobby = "study programming";

var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";

console.log(awesomeMessage);